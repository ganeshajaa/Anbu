import Image from "next/image";
import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { products } from "@/lib/site";

export default function Products() {
  return (
    <section id="products" className="bg-ivory py-16 sm:py-24 lg:py-12">
      <div className="mx-auto max-w-shell px-6 lg:px-8">
        <Reveal>
          <SectionHeading
            kicker="The range"
            title="Spices and snacks, packed to order"
            body="Every product below is machine-cleaned, graded and packed against your contract. Tell us the specification you buy to and we quote against it — or ask for our standard spec sheet to start from."
          />
        </Reveal>

        <div className="mt-16 grid gap-px border border-sand bg-sand sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p, i) => (
            <Reveal
              as="article"
              key={p.name}
              delay={(i % 3) * 120}
              className="group bg-ivory p-6 sm:p-8"
            >
              {/* ── product image ── */}
              <div className="group/img relative -mx-6 -mt-6 mb-6 aspect-[4/5] overflow-hidden bg-white sm:-mx-8 sm:-mt-8 sm:aspect-[3/4]">
                {p.image ? (
                  <Image
                    src={p.image}
                    alt={`${p.name} product packaging`}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover/img:scale-[1.06]"
                  />
                ) : (
                  /* no photo yet: tinted panel so the card keeps the same height */
                  <div
                    className="absolute inset-0 flex items-center justify-center"
                    style={{
                      background: `linear-gradient(160deg, ${p.hue}33 0%, ${p.hue}0d 100%)`,
                    }}
                  >
                    <span className="font-display text-lg font-light italic text-stone/70">
                      Photo coming soon
                    </span>
                  </div>
                )}

                {/* soft dark fade at the bottom so the button reads clearly */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-0 bg-gradient-to-t from-onyx/60 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover/img:opacity-100"
                />

                {/* one light streak sweeps across on hover */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-y-0 -left-1/2 w-1/3 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent group-hover/img:translate-x-[500%] group-hover/img:transition-transform group-hover/img:duration-[1100ms] group-hover/img:ease-out"
                />

                {/* thin gold frame fades in */}
                <div
                  aria-hidden
                  className="pointer-events-none absolute inset-3 border border-champagne/0 transition-colors duration-500 group-hover/img:border-champagne/70"
                />

                {/* number badge */}
                <span className="absolute left-4 top-4 bg-onyx/85 px-2.5 py-1 font-display text-[0.75rem] tracking-[0.2em] text-champagne">
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* quote button slides up from the bottom */}
                <a
                  href="#enquiry"
                  className="absolute inset-x-0 bottom-0 translate-y-full [@media(hover:none)]:hidden bg-onyx/90 px-6 py-4 text-center text-sm font-light tracking-wide text-champagne no-underline backdrop-blur-sm transition-transform duration-500 ease-out group-hover/img:translate-y-0 group-focus-within/img:translate-y-0 hover:text-ivory"
                >
                  Request a quote <span aria-hidden>→</span>
                </a>
              </div>

              <span
                aria-hidden
                className="mb-6 block h-[3px] w-10 transition-all duration-500 group-hover:w-20"
                style={{ backgroundColor: p.hue }}
              />
              <h3 className="font-display text-[1.7rem] font-light leading-tight text-espresso transition-colors duration-300 group-hover:text-gold">
                {p.name}
              </h3>
              <p className="mt-1 font-display text-[0.95rem] italic text-stone">
                {p.latin}
              </p>

              <dl className="mt-7">
                {p.specs.map(([k, v], j) => (
                  <div
                    key={k}
                    className={
                      "flex items-baseline justify-between gap-4 py-2.5 text-[0.85rem] font-light transition-colors duration-300 hover:bg-sand/40 " +
                      (j > 0 ? "border-t border-sand" : "")
                    }
                  >
                    <dt className="text-stone">{k}</dt>
                    <dd className="tabular text-right text-espresso">{v}</dd>
                  </div>
                ))}
              </dl>
            </Reveal>
          ))}

          <Reveal
            as="article"
            delay={(products.length % 3) * 120}
            className="flex flex-col justify-center bg-espresso p-6 sm:p-8"
          >
            <h3 className="font-display text-[1.7rem] font-light leading-tight text-ivory">
              Something not listed?
            </h3>
            <p className="mt-3 text-[0.92rem] font-light leading-relaxed text-ivory/60">
              We source star anise, nutmeg, mace, cinnamon and clove on
              confirmed order against a written specification.
            </p>
            <a
              href="#enquiry"
              className="group/cta mt-6 self-start border-b border-champagne pb-1 text-sm font-light text-champagne no-underline transition-colors hover:border-ivory hover:text-ivory"
            >
              Ask about a product
              <span
                aria-hidden
                className="ml-2 inline-block transition-transform duration-300 group-hover/cta:translate-x-1"
              >
                →
              </span>
            </a>
          </Reveal>
        </div>
      </div>
    </section>
  );
}