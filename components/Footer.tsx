import { company, nav, products } from "@/lib/site";

export default function Footer() {
  return (
    <footer className="bg-onyx pb-8 pt-20 text-ivory/60">
      <div className="mx-auto max-w-shell px-6 lg:px-8">
        <div className="grid gap-12 border-b border-ivory/12 pb-12 lg:grid-cols-[1.5fr_1fr_1fr]">
          <div>
            <p className="font-display text-3xl font-light text-ivory">
              {company.name}
              <span className="ml-2 align-middle text-[11px] tracking-wide2 text-champagne">
                {company.suffix}
              </span>
            </p>
            <div className="rule-gold my-6 max-w-[180px]" />
            <p className="text-[0.92rem] font-light leading-relaxed">
              {company.address.map((line) => (
                <span key={line} className="block">
                  {line}
                </span>
              ))}
            </p>
            <p className="mt-4 text-[0.92rem] font-light">
              <a href={"mailto:" + company.email} className="no-underline hover:text-champagne">
                {company.email}
              </a>
              <span className="block">{company.phone}</span>
            </p>
          </div>

          <div>
            <h3 className="font-display text-xl font-light text-ivory">Products</h3>
            <ul className="mt-5 space-y-2.5 text-[0.9rem] font-light">
              {products.slice(0, 5).map((p) => (
                <li key={p.name}>
                  <a href="#products" className="no-underline hover:text-champagne">
                    {p.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="font-display text-xl font-light text-ivory">Company</h3>
            <ul className="mt-5 space-y-2.5 text-[0.9rem] font-light">
              {nav.map((n) => (
                <li key={n.href}>
                  <a href={n.href} className="no-underline hover:text-champagne">
                    {n.label}
                  </a>
                </li>
              ))}
              <li>
                <a href="#enquiry" className="no-underline hover:text-champagne">
                  Request a quote
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-wrap justify-between gap-3 pt-6 text-[0.78rem] font-light text-ivory/40">
          <span>
            © {new Date().getFullYear()} {company.legalName} · IEC {company.iec} · FSSAI {company.fssai}
          </span>
          <span>Chennai, India</span>
        </div>
      </div>
    </footer>
  );
}
