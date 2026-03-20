import Nav from "@/components/nav";
import Footer from "@/components/footer";
import SignInForm from "@/components/auth/sign-in-form";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Sign In — Kalanium",
};

export default function SignInPage() {
  return (
    <>
      <Nav />
      <section className="bg-white py-28 px-16 pt-36 min-h-[80vh] flex flex-col justify-center">
        <div className="max-w-[400px] mx-auto w-full">
          <div className="section-tag">Welcome Back</div>
          <h2 className="section-title mb-8">
            Sign <em>in.</em>
          </h2>
          <SignInForm />
        </div>
      </section>
      <Footer />
    </>
  );
}
