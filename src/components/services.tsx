import FadeUp from "./fade-up";

const services = [
  {
    name: "Creators & Influencers",
    desc: "Social media creators and influencers who know how to build audiences and make content that actually resonates.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 14.5v-9l6 4.5-6 4.5z" /></svg>
    ),
  },
  {
    name: "Photo & Video",
    desc: "Photographers and videographers who capture stories through a lens — from brand campaigns to documentary work.",
    icon: (
      <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3" /><path d="M20.188 10.934l-1.12-.208a8.003 8.003 0 0 0-.23-.556l.648-.88a.75.75 0 0 0-.08-.978l-1.716-1.716a.75.75 0 0 0-.978-.08l-.88.648a8.003 8.003 0 0 0-.556-.23l-.208-1.12A.75.75 0 0 0 14.325 5h-2.65a.75.75 0 0 0-.743.646l-.208 1.12a8.003 8.003 0 0 0-.556.23l-.88-.648a.75.75 0 0 0-.978.08L6.594 8.144a.75.75 0 0 0-.08.978l.648.88a8.003 8.003 0 0 0-.23.556l-1.12.208A.75.75 0 0 0 5.25 11.5v2.65c0 .37.27.687.636.744l1.12.208c.072.19.15.374.23.556l-.648.88a.75.75 0 0 0 .08.978l1.716 1.716c.266.266.67.308.978.08l.88-.648c.182.08.366.158.556.23l.208 1.12c.057.366.374.636.744.636h2.65c.37 0 .687-.27.744-.636l.208-1.12c.19-.072.374-.15.556-.23l.88.648a.75.75 0 0 0 .978-.08l1.716-1.716a.75.75 0 0 0 .08-.978l-.648-.88c.08-.182.158-.366.23-.556l1.12-.208A.75.75 0 0 0 19.5 13.825v-2.65a.75.75 0 0 0-.636-.744l-.676.003z" /></svg>
    ),
  },
  {
    name: "Editors & Motion",
    desc: "Video editors and motion designers who bring raw footage and ideas to life through pacing, sound and animation.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M4 6h16M4 12h16M4 18h7" /><path d="M15 15l6 6m-3-6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" /></svg>
    ),
  },
  {
    name: "Graphic Design",
    desc: "Visual thinkers who craft brands, identities, and experiences that people remember long after they've looked away.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" /></svg>
    ),
  },
  {
    name: "Development",
    desc: "Front-end, back-end and full-stack developers who build the products and platforms that power modern businesses.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M16 18l6-6-6-6M8 6l-6 6 6 6" /></svg>
    ),
  },
  {
    name: "Storytelling & Writing",
    desc: "Writers, copywriters and storytellers who give voice to brands, campaigns and ideas that need to be heard.",
    icon: (
      <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><polyline points="14 2 14 8 20 8" /><line x1="16" y1="13" x2="8" y2="13" /><line x1="16" y1="17" x2="8" y2="17" /><polyline points="10 9 9 9 8 9" /></svg>
    ),
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-white py-28 px-16">
      <FadeUp className="max-w-[600px] mb-16">
        <div className="section-tag">What We Offer</div>
        <h2 className="section-title">
          Every skill. <em>One platform.</em>
        </h2>
        <p className="text-base font-light leading-[1.8] text-ash">
          We connect businesses and individuals with the exact talent they need — across every creative and technical discipline imaginable.
        </p>
      </FadeUp>
      <FadeUp>
        <div className="services-grid grid grid-cols-3 gap-px bg-clay/15 border border-clay/15 max-w-[1200px]">
          {services.map((s) => (
            <div key={s.name} className="bg-white p-10 transition-colors hover:bg-cream cursor-default">
              <div className="w-10 h-10 mb-6 flex items-center justify-center [&_svg]:w-7 [&_svg]:h-7 [&_svg]:stroke-clay [&_svg]:fill-none [&_svg]:stroke-[1.5]">
                {s.icon}
              </div>
              <div className="font-heading text-[1.4rem] font-normal text-bark mb-3">{s.name}</div>
              <div className="text-[0.88rem] font-light leading-[1.7] text-ash">{s.desc}</div>
            </div>
          ))}
        </div>
      </FadeUp>
    </section>
  );
}
