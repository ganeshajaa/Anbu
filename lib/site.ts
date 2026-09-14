// ── Edit everything about the business from this one file ──────────────

export const company = {
  name: "Anbu",
  suffix: "Spices And Snacks",
  legalName: "Anbu Spices and Snacks.",
  email: "anbuspicesandsnacks@gmail.com",
  phone: "+91 89 40 399 526",
  address: [
    "No 2 bharthyar street,Pammal, Chennai 600075",
    "Tamil Nadu, India",
  ],
  iec: "EMHPG5268M",
  fssai: "To Be Updated",
  since: "2026",
};

export const stats = [
  { value: "18", label: "Countries shipped to" },
  { value: "340", label: "Containers cleared in 2025" },
  { value: "06", label: "Lines in regular supply" },
  { value: company.since, label: "Trading since" },
];

export const supply = [
  { item: "Turmeric Powder— Erode,Curcumin 3%-5%", state: "Ready" },
  { item: "Black pepper Powder", state: "Ready" },
  { item: "Moringa leaf powder", state: "Ready" },
  { item: "Red chilli Powder", state: "Ready" },
];

export const terms = [
  { label: "Minimum order", value: "10,000 Pieces" },
  { label: "Trade terms", value: "FOB" },
  { label: "Loading ports", value: "Chennai" },
];

export type Product = {
  name: string;
  latin: string;
  hue: string;
  specs: [string, string][];
};

export const products: Product[] = [
  {
    name: "Turmeric Powder",
    latin: "Curcuma longa",
    hue: "#D99B12",
    specs: [
      ["Form", "Powder"],
      ["Curcumin", "3.0 – 5.0%"],
      ["Moisture", "Max 10%"],
      ["Origin", "Erode, Tamil Nadu"],
      ["Availability", "Ready"],
    ],
  },

  {
    name: "Black Pepper Powder",
    latin: "Piper nigrum",
    hue: "#4A382A",
    specs: [
      ["Form", "Powder"],
      ["Piperine", "Min 3.5%"],
      ["Moisture", "Max 12%"],
      ["Origin", "India"],
      ["Availability", "Ready"],
    ],
  },

  {
    name: "Moringa Leaf Powder",
    latin: "Moringa oleifera",
    hue: "#5C8144",
    specs: [
      ["Form", "Powder"],
      ["Mesh", "80 – 100"],
      ["Drying", "Shade dried"],
      ["Origin", "Tamil Nadu"],
      ["Availability", "Ready"],
    ],
  },

  {
    name: "Red Chilli Powder",
    latin: "Capsicum annuum",
    hue: "#A8331E",
    specs: [
      ["Form", "Powder"],
      ["Varieties", "S17 · Byadgi · 334"],
      ["Heat", "8,000 – 40,000 SHU"],
      ["Origin", "Guntur, Byadgi"],
      ["Availability", "Ready"],
    ],
  },

  {
    name: "Cultural Traditional Snacks",
    latin: "Traditional Indian Snacks",
    hue: "#C79A2E",
    specs: [
      ["Category", "Traditional Snacks"],
      ["Origin", "Tamil Nadu"],
      ["Packing", "Retail / Bulk"],
      ["Availability", "Ready"],
    ],
  },

  {
    name: "Something not listed?",
    latin: "Tell us what you need",
    hue: "#B08D48",
    specs: [
      ["Custom sourcing", "Available"],
      ["Specification", "As requested"],
      ["Packing", "As requested"],
      ["Enquiry", "Contact us"],
    ],
  },
];

export const checks = [
  {
    title: "Residue screening",
    body: "Multi-residue pesticide panel against EU MRLs, with aflatoxin and heavy metals where the product calls for it.",
  },
  {
    title: "Microbiology",
    body: "Total plate count, yeast and mould, Salmonella and E. coli on every lot bound for food manufacturing.",
  },
  {
    title: "Physical grading",
    body: "Destoning, gravity separation, magnetic separation and metal detection before the lot is packed.",
  },
  {
    title: "Packing to your brief",
    body: "Jute, PP woven, laminated pouches or bulk bags — carrying your labels and lot codes if you need them.",
  },
  {
    title: "Traceability",
    body: "Every lot traces back to the farm cluster and the harvest window it came from.",
  },
];

export const certifications = [
  "FSSAI licensed",
  "Spices Board of India",
  "APEDA member",
  "IEC holder",
  "ISO 22000",
  "HACCP",
];

export const steps = [
  {
    n: "I",
    title: "Enquiry and offer",
    body: "Send the product, quantity, specification and destination port. A written offer with price, packing and lead time comes back inside one working day.",
  },
  {
    n: "II",
    title: "Sample approval",
    body: "A pre-shipment sample is couriered from the actual lot. Nothing is booked until you approve what is in your hand.",
  },
  {
    n: "III",
    title: "Contract and testing",
    body: "Terms confirmed, payment secured by LC or advance, lot tested at an accredited laboratory and the report shared before loading.",
  },
  {
    n: "IV",
    title: "Loading and documents",
    body: "Container stuffed under supervision and photographed. Bill of lading, phytosanitary certificate, certificate of origin and lab report follow the same day.",
  },
];

export const markets = [
  {
    region: "European Union",
    body: "EU MRL-compliant lots with full residue panels.",
    ports: "Rotterdam · Hamburg · Antwerp · Valencia",
  },
  {
    region: "United States & Canada",
    body: "FDA prior notice and FSVP documentation handled.",
    ports: "New York · Savannah · Los Angeles · Montreal",
  },
  {
    region: "Middle East",
    body: "Retail and food-service packing, halal certification on request.",
    ports: "Jebel Ali · Dammam · Doha",
  },
  {
    region: "East & Southeast Asia",
    body: "Tight-tolerance lots for Japanese and Korean buyers.",
    ports: "Yokohama · Busan · Singapore · Port Klang",
  },
  {
    region: "United Kingdom",
    body: "Post-Brexit import documentation and UK MRL compliance.",
    ports: "Felixstowe · London Gateway",
  },
  {
    region: "Africa & Australia",
    body: "Growing lanes for turmeric, chilli and seed spices.",
    ports: "Durban · Mombasa · Melbourne · Sydney",
  },
];

export const nav = [
  { href: "#products", label: "Products" },
  { href: "#quality", label: "Quality" },
  { href: "#process", label: "How we work" },
  { href: "#markets", label: "Markets" },
];
```
