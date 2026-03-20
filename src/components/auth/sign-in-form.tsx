"use client";

import { useState } from "react";
import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function SignInForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    setError("");

    const supabase = createClient();
    const { error } = await supabase.auth.signInWithPassword({ email, password });

    if (error) {
      setError(error.message);
      setLoading(false);
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-5 max-w-[400px]">
      <div className="form-group flex flex-col gap-1.5">
        <label>Email</label>
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="your@email.com" required />
      </div>
      <div className="form-group flex flex-col gap-1.5">
        <label>Password</label>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Your password" required />
      </div>
      <button
        type="submit"
        disabled={loading}
        className="bg-clay text-white px-10 py-4 border-none rounded-[2px] font-body text-[0.85rem] font-medium tracking-[0.1em] uppercase cursor-pointer transition-colors hover:bg-terracotta disabled:opacity-50"
      >
        {loading ? "Signing in..." : "Sign In"}
      </button>
      {error && <p className="text-terracotta text-sm">{error}</p>}
      <p className="text-sm text-ash">
        Don&apos;t have an account?{" "}
        <a href="/auth/sign-up" className="text-clay no-underline hover:underline">Sign up</a>
      </p>
    </form>
  );
}
