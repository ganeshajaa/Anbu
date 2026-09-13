"use client";

import { useEffect, useState } from "react";
import { company, nav } from "@/lib/site";


export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={
        "fixed inset-x-0 top-0 z-50 " +
        (solid
          ? "bg-onyx/95 backdrop-blur-sm border-b border-champagne/20"
          : "bg-transparent border-b border-transparent")
      }
    >
      <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 py-1.5 sm:px-6 md:px-8 lg:py-2 xl:px-10">

  {/* Logo + Company Name */}
  <a
    href="#top"
    className="flex min-w-0 items-center gap-3 text-ivory no-underline"
  >
    <img
      src="/logo/logo.jpeg"
      alt={`${company.name} logo`}
      className="h-22 w-32 shrink-0 sm:h-16 sm:w-16 lg:h-[72px] lg:w-[140px]"
    />

    
  </a>

  {/* Navigation */}
  <nav className="hidden items-center gap-6 md:flex lg:gap-9">
    {nav.map((n) => (
      <a
        key={n.href}
        href={n.href}
        className="text-lg font-light text-ivory/75 no-underline transition-colors hover:text-champagne"
      >
        {n.label}
      </a>
    ))}
  </nav>

  {/* Right side */}
  <div className="flex shrink-0 items-center gap-3 sm:gap-4">
    <a
      href="#enquiry"
      className="hidden border border-champagne/60 px-4 py-2 text-sm font-light text-champagne no-underline transition-colors hover:bg-champagne hover:text-onyx sm:inline-block lg:px-5"
    >
      Request a quote
    </a>

    <button
      type="button"
      aria-label={open ? "Close menu" : "Open menu"}
      aria-expanded={open}
      onClick={() => setOpen(!open)}
      className="flex h-9 w-9 flex-col items-center justify-center gap-[5px] md:hidden"
    >
      <span className="block h-px w-6 bg-ivory" />
      <span className="block h-px w-6 bg-ivory" />
    </button>
  </div>

</div>

      {open && (
        <div className="border-t border-champagne/20 bg-onyx px-6 pb-6 pt-2 md:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setOpen(false)}
              className="block border-b border-ivory/10 py-3 font-display text-xl text-ivory no-underline"
            >
              {n.label}
            </a>
          ))}
          <a
            href="#enquiry"
            onClick={() => setOpen(false)}
            className="mt-5 inline-block border border-champagne/60 px-5 py-2 text-sm text-champagne no-underline"
          >
            Request a quote
          </a>
        </div>
      )}
    </header>
  );
}
