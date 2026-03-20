import FadeUp from "./fade-up";

export default function About() {
  return (
    <section id="about" className="bg-cream py-28 px-16">
      <div className="about-grid grid grid-cols-2 gap-24 items-center max-w-[1200px] mx-auto">
        <FadeUp>
          <div className="section-tag">About Kalanium</div>
          <h2 className="section-title">
            Built on the belief that <em>talent is the rarest element.</em>
          </h2>
          <p className="text-base font-light leading-[1.9] text-ash mb-5">
            Kalanium was born from a simple observation — the world is full of extraordinary people doing remarkable things, but finding the right talent for the right project remains surprisingly hard.
          </p>
          <p className="text-base font-light leading-[1.9] text-ash mb-5">
            We built a platform where <strong className="text-bark font-medium">creators, makers, builders and thinkers</strong> connect with the work that truly fits them. Not just a marketplace — a collective with purpose.
          </p>
          <p className="text-base font-light leading-[1.9] text-ash">
            The name itself says it all. <strong className="text-bark font-medium">Kala</strong> — the Gujarati word for art and skill — fused with <strong className="text-bark font-medium">-ium</strong>, the suffix of elements. Because human skill is elemental. It powers everything.
          </p>
        </FadeUp>
        <FadeUp>
          <div className="grid grid-cols-2 gap-8">
            {[
              ["6+", "Creative disciplines"],
              ["∞", "Possibilities per project"],
              ["1", "Platform for all talent"],
              ["0", "Barriers to great work"],
            ].map(([num, label]) => (
              <div key={label} className="p-7 bg-white border border-clay/15 rounded">
                <div className="font-heading text-5xl font-light text-clay leading-none">{num}</div>
                <div className="text-[0.8rem] font-normal text-ash mt-1.5 tracking-[0.05em]">{label}</div>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
