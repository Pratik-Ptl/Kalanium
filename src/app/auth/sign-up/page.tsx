import Nav from "@/components/nav";
import Footer from "@/components/footer";
import SignUpForm from "@/components/auth/sign-up-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign Up — Kalanium",
};

export default function SignUpPage() {
  return (
    <>
      <Nav />
      <section className="bg-white py-28 px-16 pt-36 min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-[400px] mx-auto w-full">
          <div className="section-tag">Create Account</div>
          <h2 className="section-title mb-8">
            Join <em>Kalanium.</em>
          </h2>
          <SignUpForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
