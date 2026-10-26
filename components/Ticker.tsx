import { products } from "@/lib/site";

// Slow scrolling band under the hero. Built from your product names,
// so it updates itself when you edit lib/site.ts.
const items = [...products.map((p) => p.name), "Packed to order", "Shipped FOB Chennai"];

function Row({ hidden = false }: { hidden?: boolean }) {
  return (
    <ul aria-hidden={hidden || undefined} className="flex shrink-0 items-center">
      {items.map((item) => (
        <li key={item} className="flex items-center">
          <span className="whitespace-nowrap px-8 font-display text-lg font-light italic text-champagne/80 sm:text-xl">
            {item}
          </span>
          <span aria-hidden className="text-[8px] text-champagne/40">
            ◆
          </span>
        </li>
      ))}
    </ul>
  );
}

export default function Ticker() {
  return (
    <div className="group relative overflow-hidden border-y border-champagne/15 bg-onyx py-4">
      <div className="ticker-track flex w-max group-hover:[animation-play-state:paused]">
        <Row />
        <Row hidden />
      </div>
      {/* soft edges */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-onyx to-transparent sm:w-28"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-onyx to-transparent sm:w-28"
      />
    </div>
  );
}
