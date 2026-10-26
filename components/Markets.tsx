import SectionHeading from "./SectionHeading";
import Reveal from "./Reveal";
import { markets } from "@/lib/site";

export default function Markets() {
  return (
    <section id="markets" className="bg-ivory py-24 lg:py-32">
      <div className="mx-auto max-w-shell px-6 lg:px-8">
        <SectionHeading
          kicker="Markets"
          title="Where we ship"
          body="Requirements differ by destination, and so does the paperwork. These are lanes we already run."
        />

        <div className="mt-16 grid gap-x-12 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
          {markets.map((m, i) => (
            <Reveal key={m.region} delay={(i % 3) * 120}>
              <div className="group border-t border-espresso/25 pt-6 transition-colors duration-500 hover:border-gold">
                <h3 className="font-display text-[1.6rem] font-light leading-snug text-espresso transition-colors duration-300 group-hover:text-gold">
                  {m.region}
                </h3>
                <p className="mt-3 text-[0.95rem] font-light leading-relaxed text-stone">
                  {m.body}
                </p>
                <p className="mt-4 text-[0.82rem] font-light text-gold transition-transform duration-500 group-hover:translate-x-1.5">
                  {m.ports}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
