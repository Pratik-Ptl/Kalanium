"use client";

import { useActionState } from "react";
import { submitTalentApplication } from "@/app/actions/talent";

const roles = [
  "Social Media Creator", "Photographer", "Videographer", "Video Editor",
  "Motion Designer", "Graphic Designer", "Front-end Developer",
  "Back-end Developer", "Full Stack Developer", "Storyteller",
  "Copywriter", "Content Strategist",
];

const initialState = { success: false, error: "" };

export default function TalentApplicationForm() {
  const [state, formAction, pending] = useActionState(submitTalentApplication, initialState);

  if (state.success) {
    return (
      <div className="bg-clay/10 border border-clay/25 rounded p-12 max-w-[600px]">
        <h3 className="font-heading text-[2rem] font-light text-bark mb-4">Application received!</h3>
        <p className="text-[0.9rem] font-light leading-[1.8] text-ash">
          Thank you for applying to join the Kalanium collective. We&apos;ll review your application and be in touch soon.
        </p>
      </div>
    );
  }

  return (
    <form action={formAction} className="flex flex-col gap-5 max-w-[600px]">
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
        <label>Role</label>
        <select name="role" required>
          <option value="">Select your primary skill</option>
          {roles.map((role) => (
            <option key={role} value={role.toLowerCase().replace(/\s+/g, "-")}>{role}</option>
          ))}
        </select>
      </div>
      <div className="form-group flex flex-col gap-1.5">
        <label>Portfolio URL <span className="normal-case tracking-normal font-light">(optional)</span></label>
        <input type="url" name="portfolio_url" placeholder="https://yourportfolio.com" />
      </div>
      <div className="form-group flex flex-col gap-1.5">
        <label>Years of Experience</label>
        <select name="experience_years">
          <option value="">Select range</option>
          <option value="0-1">0–1 years</option>
          <option value="1-3">1–3 years</option>
          <option value="3-5">3–5 years</option>
          <option value="5+">5+ years</option>
        </select>
      </div>
      <div className="form-group flex flex-col gap-1.5">
        <label>About You</label>
        <textarea name="bio" placeholder="Tell us about your craft, experience, and what excites you..." required />
      </div>
      <button
        type="submit"
        disabled={pending}
        className="bg-gold text-bark px-10 py-4 border-none rounded-[2px] font-body text-[0.82rem] font-medium tracking-[0.1em] uppercase cursor-pointer transition-all hover:bg-clay hover:text-white self-start disabled:opacity-50"
      >
        {pending ? "Submitting..." : "Submit Application"}
      </button>
      {state.error && (
        <p className="text-terracotta text-sm">{state.error}</p>
      )}
    </form>
  );
}
