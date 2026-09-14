import SectionHeading from "./SectionHeading";
import { products } from "@/lib/site";

export default function Products() {
  return (
    <section id="products" className="bg-ivory py-24 lg:py-12">
      <div className="mx-auto max-w-shell px-6 lg:px-8">
        <SectionHeading
          kicker="The range"
          title="Six lines, graded and packed to order"
          body="Every product below is machine-cleaned, graded and packed against your contract. Tell us the specification you buy to and we quote against it — or ask for our standard spec sheet to start from."
        />

        <div className="mt-16 grid gap-px border border-sand bg-sand sm:grid-cols-2 lg:grid-cols-3">
          {products.map((p) => (
            <article key={p.name} className="bg-ivory p-8">
              <span
                aria-hidden
                className="mb-6 block h-[3px] w-10"
                style={{ backgroundColor: p.hue }}
              />
              <h3 className="font-display text-[1.7rem] font-light leading-tight text-espresso">
                {p.name}
              </h3>
              <p className="mt-1 font-display text-[0.95rem] italic text-stone">
                {p.latin}
              </p>

              <dl className="mt-7">
                {p.specs.map(([k, v], i) => (
                  <div
                    key={k}
                    className={
                      "flex items-baseline justify-between gap-4 py-2.5 text-[0.85rem] font-light " +
                      (i > 0 ? "border-t border-sand" : "")
                    }
                  >
                    <dt className="text-stone">{k}</dt>
                    <dd className="tabular text-right text-espresso">{v}</dd>
                  </div>
                ))}
              </dl>
            </article>
          ))}

          <article className="flex flex-col justify-center bg-espresso p-8">
            <h3 className="font-display text-[1.7rem] font-light leading-tight text-ivory">
              Something not listed?
            </h3>
            <p className="mt-3 text-[0.92rem] font-light leading-relaxed text-ivory/60">
              We source star anise, nutmeg, mace, cinnamon and clove on
              confirmed order against a written specification.
            </p>
            <a
              href="#enquiry"
              className="mt-6 self-start border-b border-champagne pb-1 text-sm font-light text-champagne no-underline transition-colors hover:border-ivory hover:text-ivory"
            >
              Ask about a product
            </a>
          </article>
        </div>
      </div>
    </section>
  );
}
