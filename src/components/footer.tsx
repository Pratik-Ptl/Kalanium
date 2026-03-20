export default function Footer() {
  return (
    <footer className="bg-bark py-12 px-16 flex items-center justify-between flex-wrap gap-4">
      <div>
        <div className="font-heading text-2xl font-semibold text-sand">
          Kalan<span className="text-clay">ium</span>
        </div>
        <div className="text-[0.78rem] font-light text-sand/40 tracking-[0.08em] mt-1">
          Where every skill finds its purpose.
        </div>
      </div>
      <div className="flex gap-8">
        {[
          ["#about", "About"],
          ["#services", "Services"],
          ["#talent", "Join"],
          ["#contact", "Contact"],
        ].map(([href, label]) => (
          <a
            key={href}
            href={href}
            className="text-[0.78rem] text-sand/50 no-underline tracking-[0.06em] transition-colors hover:text-gold"
          >
            {label}
          </a>
        ))}
      </div>
      <div className="text-[0.72rem] text-sand/30 tracking-[0.05em]">
        &copy; 2026 Kalanium. All rights reserved.
      </div>
    </footer>
  );
}
