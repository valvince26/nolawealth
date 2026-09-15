import Header from "@/components/Header";
import Footer from "@/components/Footer";
import CTASection from "@/components/CTASection";
import Image from "next/image";
import { ShieldCheck, Award, Users, Compass } from "lucide-react";

export const metadata = {
  title: "About Us | NOLA Wealth Financial Advisory",
  description: "Learn about NOLA Wealth Financial Advisory's leadership council, fiduciary standards, and integrated enterprise model.",
};

export default function AboutPage() {
  const leadership = [
    {
      name: "Marcus Vance",
      role: "Managing Partner & Chief Strategic Officer",
      bio: "Former enterprise strategist with 18+ years building operational frameworks for middle-market growth firms.",
      image: "/img/unsplash-1560250097-0b93528c311a.jpg",
    },
    {
      name: "Helena St. Clair",
      role: "Partner & Head of Creative Direction",
      bio: "Pioneered brand architecture systems for national financial institutions and luxury commercial enterprises.",
      image: "/img/unsplash-1573496359142-b8d87734a5a2.jpg",
    },
    {
      name: "Julian Dupree",
      role: "Director of Digital Infrastructure & Analytics",
      bio: "Specializes in high-velocity tech workflows, CRM orchestration, and enterprise acquisition engines.",
      image: "/img/unsplash-1519085360753-af0119f7cbe7.jpg",
    },
  ];

  return (
    <>
      <Header />
      <main className="w-full pt-20 flex-grow bg-surface">
        {/* Banner */}
        <section className="bg-primary-container text-on-primary py-space-3xl relative overflow-hidden">
          <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
            <div className="max-w-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary-fixed block mb-2">
                Institutional Profile
              </span>
              <h1 className="font-display-lg text-display-lg-mobile lg:text-display-lg text-on-primary tracking-tight leading-tight">
                Architects of Enterprise Momentum.
              </h1>
              <p className="font-body-xl text-body-xl text-on-primary-container pt-3">
                We replace disjointed vendor networks with one synchronized, accountable council of operational, creative, and digital experts.
              </p>
            </div>
          </div>
        </section>

        {/* Narrative Section */}
        <section className="py-space-3xl bg-surface-container-lowest">
          <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter-desktop items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="font-label-sm text-label-sm uppercase tracking-[0.18em] text-secondary">
                  Our Founding Principle
                </span>
                <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface">
                  Eliminating Vendor Drag in Commercial Operations.
                </h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  Modern enterprises rarely suffer from a lack of ideas—they suffer from friction. When staffing, branding, marketing, and software engineering are split across four separate agencies, goals get lost in translation and delivery stalls.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  NOLA Wealth Financial Advisory was established in New Orleans to bring true fiduciary coherence to business expansion. We unify these capabilities under one master agreement, giving executive teams total clarity and immediate leverage.
                </p>
              </div>

              <div className="lg:col-span-6 grid grid-cols-2 gap-4">
                <div className="p-6 rounded-lg bg-surface-container-low border border-secondary/20 space-y-2">
                  <ShieldCheck className="w-8 h-8 text-secondary" />
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Fiduciary Governance</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Single MSA accountability with structured performance SLAs.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-surface-container-low border border-secondary/20 space-y-2">
                  <Compass className="w-8 h-8 text-secondary" />
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Strategic Clarity</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Direct executive alignment from phase one to market deployment.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-surface-container-low border border-secondary/20 space-y-2">
                  <Users className="w-8 h-8 text-secondary" />
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Embedded Talent</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Vetted operational teams integrated right into your daily tools.
                  </p>
                </div>

                <div className="p-6 rounded-lg bg-surface-container-low border border-secondary/20 space-y-2">
                  <Award className="w-8 h-8 text-secondary" />
                  <h3 className="font-headline-sm text-headline-sm text-on-surface">Market Authority</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">
                    Precision design and digital channels that signal scale.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-space-3xl bg-surface">
          <div className="max-w-[1320px] mx-auto px-margin-mobile lg:px-margin-desktop">
            <div className="text-center max-w-2xl mx-auto mb-space-2xl">
              <span className="font-label-sm text-label-sm uppercase tracking-[0.2em] text-secondary block mb-2">
                Executive Leadership
              </span>
              <h2 className="font-headline-xl text-headline-xl-mobile lg:text-headline-xl text-on-surface">
                The Advisory Council
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter-desktop">
              {leadership.map((member, idx) => (
                <div key={idx} className="p-5 rounded-xl bg-surface-container-lowest border border-secondary/20 shadow-md space-y-4">
                  <div className="relative w-full aspect-square rounded-lg overflow-hidden bg-surface-container-high">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                  </div>
                  <div>
                    <h3 className="font-headline-sm text-headline-sm text-on-surface">{member.name}</h3>
                    <p className="font-label-sm text-label-sm uppercase tracking-wider text-secondary mt-0.5">{member.role}</p>
                    <p className="font-body-md text-body-md text-on-surface-variant mt-2">{member.bio}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <CTASection />
      </main>
      <Footer />
    </>
  );
}
