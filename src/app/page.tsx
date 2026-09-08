import Header from "@/components/Header";
import Hero from "@/components/Hero";
import IntroValueProp from "@/components/IntroValueProp";
import ServicesSection from "@/components/ServicesSection";
import DeliveryFramework from "@/components/DeliveryFramework";
import InstitutionalAdvantage from "@/components/InstitutionalAdvantage";
import TailoredCapabilities from "@/components/TailoredCapabilities";
import AboutSummary from "@/components/AboutSummary";
import PrestigeCTA from "@/components/PrestigeCTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main className="w-full pt-20 flex-grow bg-surface">
        <div className="flex flex-col w-full">
          {/* Section 1: Hero Section */}
          <Hero />

          {/* Section 2: Partnership Philosophy & 3 Value Pillars */}
          <IntroValueProp />

          {/* Section 3: Capabilities Overview & 3 Main Service Cards */}
          <ServicesSection />

          {/* Section 4: Delivery Framework (4-Step Timeline) */}
          <DeliveryFramework />

          {/* Section 5: Institutional Advantage (Navy Luxury Grid) */}
          <InstitutionalAdvantage />

          {/* Section 6: Tailored Capabilities (3x2 Editorial Grid) */}
          <TailoredCapabilities />

          {/* Section 7: About NOLA Summary & Executive Quote */}
          <AboutSummary />

          {/* Section 8: Prestige CTA Banner */}
          <PrestigeCTA />
        </div>
      </main>
      <Footer />
    </>
  );
}
