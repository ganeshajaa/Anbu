import SectionHeading from "./SectionHeading";
import { steps } from "@/lib/site";

export default function Process() {
  return (
    <section id="process" className="grain relative overflow-hidden bg-onyx py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-shell px-6 lg:px-8">
        <SectionHeading
          kicker="How we work"
          title="From enquiry to arrival"
          body="Four stages, and you know exactly where the consignment stands at each one."
          tone="dark"
        />

        <ol className="mt-16 grid gap-px border border-ivory/12 bg-ivory/12 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((s) => (
            <li key={s.n} className="bg-onyx p-8">
              <span className="font-display text-2xl font-light text-champagne">
                {s.n}
              </span>
              <div className="rule-gold my-5 max-w-[48px]" />
              <h3 className="font-display text-[1.45rem] font-light leading-snug text-ivory">
                {s.title}
              </h3>
              <p className="mt-3 text-[0.9rem] font-light leading-relaxed text-ivory/55">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
