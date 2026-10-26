"use client";

import type { ReactNode } from "react";

/**
 * A link to #enquiry that also tells the form which product was clicked,
 * so the Product drop-down is already filled in when the visitor arrives.
 */
export default function QuoteLink({
  product,
  className,
  children,
}: {
  product: string;
  className?: string;
  children: ReactNode;
}) {
  return (
    <a
      href="#enquiry"
      className={className}
      onClick={() =>
        window.dispatchEvent(new CustomEvent("anbu:select-product", { detail: product }))
      }
    >
      {children}
    </a>
  );
}
