"use client";

import { useState } from "react";
import SectionHeading from "./SectionHeading";
import { company, products } from "@/lib/site";

const field =
  "w-full border border-espresso/15 bg-ivory px-4 py-3 text-[0.95rem] font-light text-espresso placeholder:text-stone/60 focus:border-champagne focus:outline-none";
const label = "mb-2 block text-[0.82rem] font-light text-stone";

export default function Enquiry() {
  const [status, setStatus] = useState<{ kind: "idle" | "error" | "sent"; msg: string }>({
    kind: "idle",
    msg: "",
  });
  const [sending, setSending] = useState(false);

  async function onSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());

    if (!String(data.name || "").trim() || !String(data.email || "").trim()) {
      setStatus({ kind: "error", msg: "Add your name and email so the quote can reach you." });
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
      if (!res.ok) throw new Error("bad response");
      setStatus({ kind: "sent", msg: "Enquiry received. You will hear back within one working day." });
      form.reset();
    } catch {
      setStatus({
        kind: "error",
        msg: "The enquiry did not send. Email " + company.email + " and it will be picked up the same day.",
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <section id="enquiry" className="bg-sand/40 py-24 lg:py-32">
      <div className="mx-auto max-w-shell px-6 lg:px-8">
        <div className="grid gap-16 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <SectionHeading
              kicker="Enquiries"
              title="Tell us what you need"
              body="The more specific you are about grade, quantity and destination, the faster the price comes back."
            />
            <div className="mt-10 space-y-2 text-[0.95rem] font-light text-stone">
              <p>
                <a href={"mailto:" + company.email} className="text-espresso no-underline hover:text-gold">
                  {company.email}
                </a>
              </p>
              <p>{company.phone}</p>
              <p className="pt-4 leading-relaxed">
                {company.address.map((line) => (
                  <span key={line} className="block">
                    {line}
                  </span>
                ))}
              </p>
            </div>
          </div>

          <form onSubmit={onSubmit} noValidate className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className={label} htmlFor="name">Your name</label>
              <input id="name" name="name" type="text" autoComplete="name" className={field} />
            </div>
            <div>
              <label className={label} htmlFor="companyName">Company</label>
              <input id="companyName" name="company" type="text" autoComplete="organization" className={field} />
            </div>
            <div>
              <label className={label} htmlFor="email">Email</label>
              <input id="email" name="email" type="email" autoComplete="email" className={field} />
            </div>
            <div>
              <label className={label} htmlFor="destination">Destination country and port</label>
              <input id="destination" name="destination" type="text" placeholder="Netherlands, Rotterdam" className={field} />
            </div>
            <div>
              <label className={label} htmlFor="product">Product</label>
              <select id="product" name="product" className={field} defaultValue={products[0].name}>
                {products.map((p) => (
                  <option key={p.name}>{p.name}</option>
                ))}
                <option>Several / not listed</option>
              </select>
            </div>
            <div>
              <label className={label} htmlFor="quantity">Quantity per shipment</label>
              <input id="quantity" name="quantity" type="text" placeholder="1 × 20′ FCL, monthly" className={field} />
            </div>
            <div className="sm:col-span-2">
              <label className={label} htmlFor="message">Specification and other details</label>
              <textarea
                id="message"
                name="message"
                rows={5}
                placeholder="Grade, packing, certification you need, target price if you have one."
                className={field + " resize-y"}
              />
            </div>

            {status.kind !== "idle" && (
              <p
                role="status"
                className={
                  "sm:col-span-2 border-l-2 bg-ivory px-4 py-3 text-[0.9rem] font-light " +
                  (status.kind === "sent"
                    ? "border-champagne text-espresso"
                    : "border-[#A8331E] text-espresso")
                }
              >
                {status.msg}
              </p>
            )}

            <div className="sm:col-span-2">
              <button
                type="submit"
                disabled={sending}
                className="bg-espresso px-9 py-3.5 text-sm font-light tracking-wide text-ivory transition-colors hover:bg-onyx disabled:opacity-60"
              >
                {sending ? "Sending…" : "Send enquiry"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
