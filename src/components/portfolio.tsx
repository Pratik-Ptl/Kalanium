import FadeUp from "./fade-up";

const cards = [
  { cat: "Brand Identity", bg: "port-bg-1" },
  { cat: "Motion Design", bg: "port-bg-2" },
  { cat: "Development", bg: "port-bg-3" },
  { cat: "Photography", bg: "port-bg-4" },
  { cat: "Storytelling", bg: "port-bg-5" },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="bg-cream py-28 px-16">
      <FadeUp>
        <div className="section-tag">Our Work</div>
      </FadeUp>
      <FadeUp>
        <h2 className="section-title">
          Craft in <em>motion.</em>
        </h2>
      </FadeUp>

      <FadeUp>
        <div className="portfolio-grid grid grid-cols-[2fr_1fr_1fr] grid-rows-[auto_auto] gap-4 max-w-[1200px] mt-12">
          {cards.map((card, i) => (
            <div
              key={card.cat}
              className={`bg-bark rounded overflow-hidden relative flex items-end p-6 transition-transform hover:-translate-y-1 ${
                i === 0 ? "row-span-2 min-h-[460px]" : "min-h-[220px]"
              }`}
            >
              <div className={`port-bg ${card.bg}`} />
              <div className="relative z-[1]">
                <div className="text-[0.7rem] tracking-[0.15em] uppercase text-gold mb-1">{card.cat}</div>
                <div className="font-heading text-[1.3rem] font-normal text-sand">Coming Soon</div>
              </div>
              {i === 0 && (
                <div className="absolute top-4 right-4 text-[0.65rem] tracking-[0.15em] uppercase text-sand/40 z-[1]">
                  Portfolio launching
                </div>
              )}
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
