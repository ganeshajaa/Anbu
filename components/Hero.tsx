import { stats, supply, terms } from "@/lib/site";

export default function Hero() {
  return (
    <section className="grain relative overflow-hidden bg-onyx pt-32 pb-20 text-ivory lg:pt-40 lg:pb-20">
      {/* one warm glow, low and off-centre — the single decorative move */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-40 top-1/3 h-[520px] w-[520px] rounded-full opacity-[0.18] blur-3xl"
        style={{ background: "radial-gradient(circle, #C8A96A 0%, transparent 70%)" }}
      />

      <div className="relative z-10 mx-auto max-w-shell px-6 lg:px-8">
        <div className="grid items-end gap-14 lg:grid-cols-[1.3fr_0.85fr]">
          <div>
            <p className="font-display text-lg font-light italic text-champagne">
              From South India's Finest, to the world.
            </p>
            <div className="rule-gold my-7 max-w-[220px]" />
            <h1 className="font-display text-[50px] font-light leading-[1.03] tracking-[-0.01em] text-ivory">
              “Building Reliable Partnerships
              <br />
               Across Global Markets”
              <br />
             
            </h1>
            <p className="mt-8 max-w-[46ch] text-[1.02rem] font-light leading-relaxed text-ivory/65">
              We buy direct from growers in Kerala, Karnataka and Tamil Nadu,
              clean and grade to your contract, test every lot in an accredited
              laboratory, and hand you the documents your customs broker expects.
            </p>

            <div className="mt-10 flex flex-wrap gap-4">
              <a
                href="#enquiry"
                className="bg-champagne px-8 py-3.5 text-sm font-normal tracking-wide text-onyx no-underline transition-colors hover:bg-ivory"
              >
                Request a quote
              </a>
              <a
                href="#products"
                className="border border-ivory/25 px-8 py-3.5 text-sm font-light tracking-wide text-ivory no-underline transition-colors hover:border-champagne hover:text-champagne"
              >
                See the product list
              </a>
            </div>
          </div>

          {/* supply position panel */}
          <aside className="border border-champagne/25 bg-espresso/40 p-7 backdrop-blur-sm">
            <p className="font-display text-xl font-light italic text-champagne">
              Current supply position
            </p>
            <div className="rule-gold mb-5 mt-4" />
            <dl className="space-y-3 text-[0.9rem] font-light">
              {supply.map((s) => (
                <div key={s.item} className="flex items-baseline justify-between gap-4">
                  <dt className="text-ivory/65">{s.item}</dt>
                  <dd
                    className={
                      "shrink-0 " +
                      (s.state === "Ready" ? "text-ivory" : "text-champagne")
                    }
                  >
                    {s.state}
                  </dd>
                </div>
              ))}
            </dl>
            <div className="my-5 h-px bg-ivory/12" />
            <dl className="space-y-3 text-[0.9rem] font-light">
              {terms.map((t) => (
                <div key={t.label} className="flex items-baseline justify-between gap-4">
                  <dt className="text-ivory/65">{t.label}</dt>
                  <dd className="tabular shrink-0 text-ivory">{t.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>

        {/* stats */}
        {/* <div className="mt-20 grid grid-cols-2 border-t border-ivory/15 lg:grid-cols-4">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={
                "px-2 py-8 lg:px-8 " +
                (i < stats.length - 1 ? "lg:border-r lg:border-ivory/10 " : "") +
                (i % 2 === 0 ? "border-r border-ivory/10 lg:border-r " : "")
              }
            >
              <p className="tabular font-display text-4xl font-light text-champagne lg:text-5xl">
                {s.value}
              </p>
              <p className="mt-2 text-[0.82rem] font-light text-ivory/55">{s.label}</p>
            </div>
          ))}
        </div> */}
      </div>
    </section>
  );
}
