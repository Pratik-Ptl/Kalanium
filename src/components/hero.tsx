export default function Hero() {
  return (
    <section id="home" className="hero-grid min-h-screen grid grid-cols-2 pt-20 overflow-hidden">
      <div className="hero-left flex flex-col justify-center px-16 py-24">
        <div className="flex items-center gap-3 mb-6 text-[0.75rem] font-medium tracking-[0.2em] uppercase text-clay before:content-[''] before:block before:w-8 before:h-px before:bg-clay">
          The Element of Human Skill
        </div>
        <h1 className="font-heading text-[clamp(3.5rem,5vw,5.5rem)] font-light leading-[1.05] text-bark mb-7">
          Where every<br /><em className="italic text-clay">skill</em> finds<br />its purpose.
        </h1>
        <p className="text-base font-light leading-[1.8] text-ash max-w-[420px] mb-12">
          Kalanium connects exceptional creative and technical talent with the projects that deserve them. From storytellers to developers — every craft has a place here.
        </p>
        <div className="flex gap-4 items-center">
          <a
            href="#services"
            className="bg-clay text-white px-9 py-3.5 rounded-[2px] text-[0.85rem] font-medium tracking-[0.08em] uppercase no-underline transition-all hover:bg-terracotta hover:-translate-y-px"
          >
            Explore What We Do
          </a>
          <a
            href="#talent"
            className="text-bark text-[0.85rem] font-normal tracking-[0.05em] no-underline flex items-center gap-2 transition-all hover:gap-3"
          >
            Join as Talent →
          </a>
        </div>
      </div>
      <div className="hero-right bg-bark relative overflow-hidden flex items-center justify-center">
        <div className="hero-art" />
        <div className="animate-rotate w-[340px] h-[340px] border border-clay/30 rounded-full flex items-center justify-center relative z-[1] before:content-[''] before:absolute before:inset-5 before:border before:border-gold/20 before:rounded-full">
          <div className="animate-rotate-reverse w-[200px] h-[200px] bg-clay/10 rounded-full border border-clay/40 flex items-center justify-center">
            <span className="font-heading text-[5rem] font-light text-sand/80 italic">K</span>
          </div>
        </div>
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-[0.7rem] tracking-[0.15em] uppercase text-sand/50 flex flex-col items-center gap-2">
          <div className="animate-scroll-pulse w-px h-10 bg-clay/40" />
          Scroll
        </div>
      </div>
    </section>
  );
}
