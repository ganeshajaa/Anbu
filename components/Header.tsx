"use client";

import { useEffect, useState } from "react";
import ScrollProgress from "./ScrollProgress";
import { company, nav } from "@/lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);
  const [solid, setSolid] = useState(false);
  const [active, setActive] = useState<string | null>(null);

  useEffect(() => {
    const onScroll = () => setSolid(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // close the mobile menu automatically when the screen grows to tablet/desktop
  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  // highlight the nav link of the section that is in the middle of the screen
  useEffect(() => {
    const sections = nav
      .map((n) => document.getElementById(n.href.slice(1)))
      .filter((el): el is HTMLElement => !!el);
    if (!sections.length) return;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          const href = "#" + e.target.id;
          if (e.isIntersecting) setActive(href);
          else setActive((cur) => (cur === href ? null : cur));
        });
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );

    sections.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  return (
    <>
      <ScrollProgress />
      <header
        className={
          "fixed inset-x-0 top-0 z-50 transition-colors duration-300 " +
          (solid || open
            ? "border-b border-champagne/20 bg-onyx/95 backdrop-blur-sm"
            : "border-b border-transparent bg-transparent")
        }
      >
        <div className="mx-auto flex w-full max-w-[1400px] items-center justify-between px-5 py-1.5 sm:px-6 md:px-8 lg:py-2 xl:px-10">
          {/* Logo */}
          <a
            href="#top"
            className="flex min-w-0 items-center gap-3 text-ivory no-underline"
          >
            <img
              src="/logo/logo.jpeg"
              alt={`${company.name} logo`}
              className="h-14 w-auto shrink-0 object-contain lg:h-[72px] lg:w-[140px]"
            />
          </a>

          {/* Navigation */}
          <nav className="hidden items-center gap-6 md:flex lg:gap-9">
            {nav.map((n) => {
              const isActive = active === n.href;
              return (
                <a
                  key={n.href}
                  href={n.href}
                  aria-current={isActive ? "true" : undefined}
                  className={
                    "link-underline text-base font-light no-underline transition-colors hover:text-champagne lg:text-lg " +
                    (isActive ? "is-active text-champagne" : "text-ivory/75")
                  }
                >
                  {n.label}
                </a>
              );
            })}
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
              className="flex h-11 w-11 flex-col items-center justify-center gap-[5px] md:hidden"
            >
              <span
                className={
                  "block h-px w-6 bg-ivory transition-transform duration-300 " +
                  (open ? "translate-y-[3px] rotate-45" : "")
                }
              />
              <span
                className={
                  "block h-px w-6 bg-ivory transition-transform duration-300 " +
                  (open ? "-translate-y-[3px] -rotate-45" : "")
                }
              />
            </button>
          </div>
        </div>

        {open && (
          <div className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-champagne/20 bg-onyx px-6 pb-6 pt-2 md:hidden">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setOpen(false)}
                className="block border-b border-ivory/10 py-3.5 font-display text-xl text-ivory no-underline"
              >
                {n.label}
              </a>
            ))}
            <a
              href="#enquiry"
              onClick={() => setOpen(false)}
              className="mt-5 block border border-champagne/60 px-5 py-3 text-center text-sm text-champagne no-underline"
            >
              Request a quote
            </a>
          </div>
        )}
      </header>
    </>
  );
}
