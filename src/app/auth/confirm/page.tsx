import Nav from "@/components/nav";
import Footer from "@/components/footer";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Check Your Email — Kalanium",
};

export default function ConfirmPage() {
  return (
    <>
      <Nav />
      <section className="bg-cream py-28 px-16 pt-36 min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-[500px] mx-auto text-center">
          <h2 className="font-heading text-[clamp(2.4rem,3.5vw,3.5rem)] font-light text-bark mb-6">
            Check your <em className="italic text-clay">email.</em>
          </h2>
          <p className="text-base font-light leading-[1.8] text-ash mb-8">
            We&apos;ve sent a confirmation link to your email address. Click the link to activate your account and access your dashboard.
          </p>
          <a href="/" className="text-clay text-sm tracking-[0.08em] uppercase no-underline hover:text-terracotta">
            Back to Home
          </a>
        </div>
      </section>
      <Footer />
    </>
  );
}
