import Link from "next/link";
import FadeUp from "./fade-up";

const roles = [
  "Social Media Creator", "Photographer", "Videographer", "Video Editor",
  "Motion Designer", "Graphic Designer", "Front-end Developer",
  "Back-end Developer", "Full Stack Developer", "Storyteller",
  "Copywriter", "Content Strategist",
];

export default function Talent() {
  return (
    <section id="talent" className="bg-bark py-28 px-16">
      <div className="section-tag !text-gold before:!bg-gold">Join the Collective</div>
      <h2 className="section-title !text-sand [&_em]:!text-gold">
        Your skill is <em>elemental.</em><br />Bring it here.
      </h2>
      <p className="text-base font-light leading-[1.8] text-sand/60 max-w-[500px] mb-14">
        Kalanium is built for people who are serious about their craft. If you&apos;re exceptional at what you do, there&apos;s a place for you in our collective.
      </p>

      <FadeUp>
        <div className="flex flex-wrap gap-3 mb-16">
          {roles.map((role) => (
            <span key={role} className="role-pill">{role}</span>
          ))}
        </div>
      </FadeUp>

      <FadeUp>
        <div className="bg-clay/10 border border-clay/25 rounded p-12 max-w-[600px]">
          <h3 className="font-heading text-[2rem] font-light text-sand mb-4">Ready to join?</h3>
          <p className="text-[0.9rem] font-light leading-[1.8] text-sand/60 mb-8">
            We&apos;re currently building our founding collective of talent. Apply early and be part of shaping what Kalanium becomes.
          </p>
          <Link
            href="/apply"
            className="inline-block bg-gold text-bark px-9 py-3.5 rounded-[2px] text-[0.82rem] font-medium tracking-[0.1em] uppercase no-underline transition-all hover:bg-clay hover:text-white"
          >
            Apply as Talent
          </Link>
        </div>
      </FadeUp>
    </section>
  );
}
