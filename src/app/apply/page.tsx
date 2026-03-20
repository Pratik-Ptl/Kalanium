import Nav from "@/components/nav";
import Footer from "@/components/footer";
import TalentApplicationForm from "@/components/talent-application-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Apply as Talent — Kalanium",
  description: "Join the Kalanium collective. Apply as a creative or technical talent.",
};

export default function ApplyPage() {
  return (
    <>
      <Nav />
      <section className="bg-bark py-28 px-16 pt-36">
        <div className="section-tag !text-gold before:!bg-gold">Join the Collective</div>
        <h2 className="section-title !text-sand [&_em]:!text-gold mb-4">
          Apply to <em>Kalanium.</em>
        </h2>
        <p className="text-base font-light leading-[1.8] text-sand/60 max-w-[500px] mb-14">
          Tell us about yourself and your craft. We&apos;re building our founding collective of exceptional talent.
        </p>
      </section>
      <section className="bg-white py-16 px-16">
        <TalentApplicationForm />
      </section>
      <Footer />
    </>
  );
}
