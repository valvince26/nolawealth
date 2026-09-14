import { NextRequest, NextResponse } from "next/server";
import { calculateNeeds, validateInputs } from "@/lib/calculator/engine";
import { ReviewRequestPayload } from "@/lib/calculator/types";

// Eligible advisory states (Primary NOLA region)
const ELIGIBLE_STATES = ["LA", "MS", "TX", "AL", "FL", "GA", "OTHER"];

export async function POST(req: NextRequest) {
  try {
    const contentType = req.headers.get("content-type") || "";
    if (!contentType.includes("application/json")) {
      return NextResponse.json(
        { success: false, error: "Content-Type must be application/json" },
        { status: 400 }
      );
    }

    const body: ReviewRequestPayload = await req.json();

    // 1. Validate Required Contact Fields
    if (!body.fullName || typeof body.fullName !== "string" || !body.fullName.trim()) {
      return NextResponse.json(
        { success: false, error: "Full legal name is required." },
        { status: 400 }
      );
    }

    if (!body.stateResidence || !ELIGIBLE_STATES.includes(body.stateResidence)) {
      return NextResponse.json(
        { success: false, error: "Please select a valid state of residence." },
        { status: 400 }
      );
    }

    if (!body.contactMethod || (body.contactMethod !== "phone" && body.contactMethod !== "email")) {
      return NextResponse.json(
        { success: false, error: "Please select a preferred contact method (phone or email)." },
        { status: 400 }
      );
    }

    if (body.contactMethod === "phone") {
      const cleanPhone = (body.phoneNumber || "").replace(/\D/g, "");
      if (!cleanPhone || cleanPhone.length < 10) {
        return NextResponse.json(
          { success: false, error: "A valid 10-digit phone number is required." },
          { status: 400 }
        );
      }
    } else {
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!body.emailAddress || !emailRegex.test(body.emailAddress.trim())) {
        return NextResponse.json(
          { success: false, error: "A valid email address is required." },
          { status: 400 }
        );
      }
    }

    // 2. Process Financial Sharing Consent
    let serverCalculatedResult = null;
    let sanitizedInputs = null;

    if (body.includeFinancialDetails && body.inputs) {
      const validation = validateInputs(body.inputs);
      if (!validation.isValid) {
        return NextResponse.json(
          { success: false, error: "Provided financial inputs are invalid." },
          { status: 400 }
        );
      }
      // Server-side recalculation (Never trust client-supplied calculation results)
      serverCalculatedResult = calculateNeeds(body.inputs);
      sanitizedInputs = body.inputs;
    }

    // 3. Construct Lead Submission Record
    const leadRecord = {
      submittedAt: new Date().toISOString(),
      offerId: "life_needs_calculator_v1",
      methodologyVersion: "needs_v1",
      fullName: body.fullName.trim(),
      stateResidence: body.stateResidence,
      contactMethod: body.contactMethod,
      phoneNumber: body.contactMethod === "phone" ? body.phoneNumber?.trim() : undefined,
      emailAddress: body.contactMethod === "email" ? body.emailAddress?.trim() : undefined,
      financialDetailsShared: Boolean(body.includeFinancialDetails),
      inputs: sanitizedInputs,
      result: serverCalculatedResult,
      attribution: {
        utmSource: body.utmSource || null,
        utmCampaign: body.utmCampaign || null,
        utmContent: body.utmContent || null,
      },
    };

    // Log durable lead record server-side (In production, this routes to NOLA CRM / lead service)
    console.log("[NOLA Lead Ingestion] Review request accepted:", JSON.stringify({
      offerId: leadRecord.offerId,
      fullName: leadRecord.fullName,
      state: leadRecord.stateResidence,
      method: leadRecord.contactMethod,
      sharedFinancials: leadRecord.financialDetailsShared,
      estimatedCoverage: leadRecord.result?.estimatedAdditionalCoverage,
    }));

    return NextResponse.json(
      {
        success: true,
        message: "Review request accepted by advisory service.",
        redirectUrl: "/life-insurance-calculator/thank-you",
      },
      { status: 200 }
    );
  } catch (err: unknown) {
    const errorMsg = err instanceof Error ? err.message : "Internal server error";
    console.error("[NOLA Lead Ingestion Error]:", errorMsg);
    return NextResponse.json(
      { success: false, error: "Unable to process request. Please try again." },
      { status: 500 }
    );
  }
}
