export default function SectionHeading({
  kicker,
  title,
  body,
  tone = "light",
}: {
  kicker: string;
  title: React.ReactNode;
  body?: string;
  tone?: "light" | "dark";
}) {
  const dark = tone === "dark";
  return (
    <div className="max-w-[62ch]">
      <p
        className={
          "font-display text-lg font-light italic " +
          (dark ? "text-champagne" : "text-gold")
        }
      >
        {kicker}
      </p>
      <div className="rule-gold my-5 max-w-[160px]" />
      <h2
        className={
          "font-display text-[clamp(2rem,4.6vw,3.2rem)] font-light leading-[1.12] " +
          (dark ? "text-ivory" : "text-espresso")
        }
      >
        {title}
      </h2>
      {body && (
        <p
          className={
            "mt-5 text-[1.02rem] font-light leading-relaxed " +
            (dark ? "text-ivory/60" : "text-stone")
          }
        >
          {body}
        </p>
      )}
    </div>
  );
}
