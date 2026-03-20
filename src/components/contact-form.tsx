"use client";

import { useActionState } from "react";
import { submitContactForm } from "@/app/actions/contact";

const initialState = { success: false, error: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(submitContactForm, initialState);

  return (
    <form action={formAction} className="flex flex-col gap-5">
      <div className="grid grid-cols-2 gap-4">
        <div className="form-group flex flex-col gap-1.5">
          <label>First Name</label>
          <input type="text" name="first_name" placeholder="Your name" required />
        </div>
        <div className="form-group flex flex-col gap-1.5">
          <label>Last Name</label>
          <input type="text" name="last_name" placeholder="Your last name" required />
        </div>
      </div>
      <div className="form-group flex flex-col gap-1.5">
        <label>Email</label>
        <input type="email" name="email" placeholder="your@email.com" required />
      </div>
      <div className="form-group flex flex-col gap-1.5">
        <label>I am a...</label>
        <select name="inquiry_type" required>
          <option value="">Select one</option>
          <option value="client">Client looking for talent</option>
          <option value="creative">Creative looking to join</option>
          <option value="developer">Developer looking to join</option>
          <option value="curious">Just curious</option>
        </select>
      </div>
      <div className="form-group flex flex-col gap-1.5">
        <label>Message</label>
        <textarea name="message" placeholder="Tell us about your project or yourself..." required />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="bg-clay text-white px-10 py-4 border-none rounded-[2px] font-body text-[0.85rem] font-medium tracking-[0.1em] uppercase cursor-pointer transition-colors hover:bg-terracotta self-start disabled:opacity-50"
      >
        {pending ? "Sending..." : "Send Message"}
      </button>
      {state.success && (
        <p className="text-moss text-sm">Message sent successfully! We&apos;ll be in touch.</p>
      )}
      {state.error && (
        <p className="text-terracotta text-sm">{state.error}</p>
      )}
    </form>
  );
}
