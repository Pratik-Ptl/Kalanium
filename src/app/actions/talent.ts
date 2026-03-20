"use server";

import { createClient } from "@/lib/supabase/server";

export async function submitTalentApplication(
  _prevState: { success: boolean; error: string },
  formData: FormData
) {
  const first_name = formData.get("first_name") as string;
  const last_name = formData.get("last_name") as string;
  const email = formData.get("email") as string;
  const role = formData.get("role") as string;
  const portfolio_url = formData.get("portfolio_url") as string;
  const experience_years = formData.get("experience_years") as string;
  const bio = formData.get("bio") as string;

  if (!first_name || !last_name || !email || !role || !bio) {
    return { success: false, error: "Please fill in all required fields." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const supabase = await createClient();

  // Check if user is authenticated and attach user_id if so
  const { data: { user } } = await supabase.auth.getUser();

  const { error } = await supabase.from("talent_applications").insert({
    first_name,
    last_name,
    email,
    role,
    portfolio_url: portfolio_url || null,
    experience_years: experience_years || null,
    bio,
    user_id: user?.id || null,
  });

  if (error) {
    return { success: false, error: "Something went wrong. Please try again." };
  }

  return { success: true, error: "" };
}
