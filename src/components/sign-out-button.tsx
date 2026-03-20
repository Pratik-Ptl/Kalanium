"use client";

import { createClient } from "@/lib/supabase/client";
import { useRouter } from "next/navigation";

export default function SignOutButton() {
  const router = useRouter();

  async function handleSignOut() {
    const supabase = createClient();
    await supabase.auth.signOut();
    router.push("/");
  }

  return (
    <button
      onClick={handleSignOut}
      className="text-ash text-[0.82rem] tracking-[0.08em] uppercase bg-transparent border border-clay/20 px-6 py-2.5 rounded-[2px] cursor-pointer transition-all hover:bg-clay/10 hover:border-clay"
    >
      Sign Out
    </button>
  );
}
