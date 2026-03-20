"use server";

import { createClient } from "@/lib/supabase/server";

export async function submitContactForm(
  _prevState: { success: boolean; error: string },
  formData: FormData
) {
  const first_name = formData.get("first_name") as string;
  const last_name = formData.get("last_name") as string;
  const email = formData.get("email") as string;
  const inquiry_type = formData.get("inquiry_type") as string;
  const message = formData.get("message") as string;

  if (!first_name || !last_name || !email || !inquiry_type || !message) {
    return { success: false, error: "All fields are required." };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { success: false, error: "Please enter a valid email address." };
  }

  const supabase = await createClient();
  const { error } = await supabase.from("contact_submissions").insert({
    first_name,
    last_name,
    email,
    inquiry_type,
    message,
  });

  if (error) {
    return { success: false, error: "Something went wrong. Please try again." };
  }

  return { success: true, error: "" };
}
