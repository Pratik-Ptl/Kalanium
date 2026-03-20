"use client";

import { useState } from "react";

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="sm:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="flex flex-col gap-1.5 bg-transparent border-none cursor-pointer p-2"
        aria-label="Toggle menu"
      >
        <span className={`block w-6 h-[1.5px] bg-bark transition-transform ${open ? "translate-y-[5px] rotate-45" : ""}`} />
        <span className={`block w-6 h-[1.5px] bg-bark transition-opacity ${open ? "opacity-0" : ""}`} />
        <span className={`block w-6 h-[1.5px] bg-bark transition-transform ${open ? "-translate-y-[5px] -rotate-45" : ""}`} />
      </button>
      {open && (
        <div className="absolute top-full left-0 right-0 bg-[rgba(253,250,246,0.97)] backdrop-blur-xl border-b border-clay/15 p-8 flex flex-col gap-6">
          {[
            ["#about", "About"],
            ["#services", "Services"],
            ["#talent", "Join"],
            ["#portfolio", "Work"],
            ["#contact", "Contact"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.08em] uppercase text-ash no-underline hover:text-clay"
            >
              {label}
            </a>
          ))}
          <a
            href="#talent"
            onClick={() => setOpen(false)}
            className="bg-bark text-cream px-6 py-2.5 rounded-[2px] text-[0.8rem] font-medium tracking-[0.1em] uppercase no-underline text-center"
          >
            Join the Collective
          </a>
        </div>
      )}
    </div>
  );
}
