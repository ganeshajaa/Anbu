import SectionHeading from "./SectionHeading";
import { checks, certifications } from "@/lib/site";

export default function Quality() {
  return (
    <section id="quality" className="bg-sand/40 py-24 lg:py-32">
      <div className="mx-auto max-w-shell px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.95fr_1.05fr]">
          <div>
            <SectionHeading
              kicker="Quality and testing"
              title="The part buyers actually get burned on"
              body="Rejections rarely come down to price. They come down to a residue nobody screened for, a moisture reading that shifted in transit, or paperwork that did not match the container."
            />
            <p className="mt-6 max-w-[50ch] text-[1.02rem] font-light leading-relaxed text-stone">
              We test before loading, not after a complaint. Each lot is sampled
              and sent to an NABL-accredited laboratory, and the report travels
              with the shipment. If a result falls outside your specification,
              you hear about it before the container moves.
            </p>

            <div className="mt-10 flex flex-wrap gap-2">
              {certifications.map((c) => (
                <span
                  key={c}
                  className="border border-sand bg-ivory px-4 py-2 text-[0.8rem] font-light text-stone"
                >
                  {c}
                </span>
              ))}
            </div>
          </div>

          <dl className="lg:pt-4">
            {checks.map((c, i) => (
              <div
                key={c.title}
                className={
                  "grid gap-2 py-7 sm:grid-cols-[1fr_1.5fr] sm:gap-8 " +
                  (i > 0 ? "border-t border-sand" : "")
                }
              >
                <dt className="font-display text-[1.35rem] font-light leading-snug text-espresso">
                  {c.title}
                </dt>
                <dd className="text-[0.95rem] font-light leading-relaxed text-stone">
                  {c.body}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}
