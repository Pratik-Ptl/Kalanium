import Link from "next/link";
import MobileNav from "./mobile-nav";

export default function Nav() {
  return (
    <nav>
      <div
        className="font-heading text-[1.8rem] font-semibold text-bark tracking-[0.02em]"
      >
        Kalan<span className="text-clay">ium</span>
      </div>
      <ul className="nav-links flex gap-10 list-none">
        {[
          ["#about", "About"],
          ["#services", "Services"],
          ["#talent", "Join"],
          ["#portfolio", "Work"],
          ["#contact", "Contact"],
        ].map(([href, label]) => (
          <li key={href}>
            <a
              href={href}
              className="text-[0.85rem] font-normal tracking-[0.08em] uppercase text-ash no-underline transition-colors hover:text-clay"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
      <a
        href="#talent"
        className="hidden sm:inline-block bg-bark text-cream px-6 py-2.5 rounded-[2px] text-[0.8rem] font-medium tracking-[0.1em] uppercase no-underline transition-colors hover:bg-clay"
      >
        Join the Collective
      </a>
      <MobileNav />
    </nav>
  );
}
