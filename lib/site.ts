// ── Edit everything about the business from this one file ──────────────

export const company = {
  name: "Sahyadri",
  suffix: "Spice Exports",
  legalName: "Sahyadri Spice Exports Pvt. Ltd.",
  email: "trade@sahyadrispice.com",
  phone: "+91 44 0000 0000",
  address: ["Unit 4, Spice Trade Complex", "Anna Salai, Chennai 600002", "Tamil Nadu, India"],
  iec: "0000000000",
  fssai: "00000000000000",
  since: "2011",
};

export const stats = [
  { value: "18", label: "Countries shipped to" },
  { value: "340", label: "Containers cleared in 2025" },
  { value: "09", label: "Lines in regular supply" },
  { value: company.since, label: "Trading since" },
];

export const supply = [
  { item: "Turmeric — Erode, double polished", state: "Ready" },
  { item: "Black pepper — 550 g/l", state: "Ready" },
  { item: "Green cardamom — 8 mm bold", state: "Limited" },
  { item: "Dried red chilli — Guntur S17", state: "Ready" },
];

export const terms = [
  { label: "Minimum order", value: "1 × 20′ FCL" },
  { label: "Trade terms", value: "FOB · CIF · CFR" },
  { label: "Loading ports", value: "Chennai · Cochin" },
];

export type Product = {
  name: string;
  latin: string;
  hue: string;
  specs: [string, string][];
};

export const products: Product[] = [
  {
    name: "Turmeric",
    latin: "Curcuma longa",
    hue: "#D99B12",
    specs: [
      ["Form", "Fingers / powder"],
      ["Curcumin", "3.0 – 5.0%"],
      ["Moisture", "Max 10%"],
      ["Origin", "Erode, Salem"],
    ],
  },
  {
    name: "Black pepper",
    latin: "Piper nigrum",
    hue: "#4A382A",
    specs: [
      ["Grade", "500 / 550 g/l"],
      ["Piperine", "Min 3.5%"],
      ["Moisture", "Max 12%"],
      ["Origin", "Idukki, Wayanad"],
    ],
  },
  {
    name: "Green cardamom",
    latin: "Elettaria cardamomum",
    hue: "#7A9450",
    specs: [
      ["Size", "7 – 8 mm bold"],
      ["Volatile oil", "Min 3.5%"],
      ["Moisture", "Max 11%"],
      ["Origin", "Idukki, Kumily"],
    ],
  },
  {
    name: "Dried red chilli",
    latin: "Capsicum annuum",
    hue: "#A8331E",
    specs: [
      ["Varieties", "S17 · Byadgi · 334"],
      ["Heat", "8,000 – 40,000 SHU"],
      ["Form", "Whole / stemless / powder"],
      ["Origin", "Guntur, Byadgi"],
    ],
  },
  {
    name: "Cumin seed",
    latin: "Cuminum cyminum",
    hue: "#B08A54",
    specs: [
      ["Purity", "99% / 99.5% cleaned"],
      ["Volatile oil", "Min 2.5%"],
      ["Moisture", "Max 8%"],
      ["Origin", "Unjha, Gujarat"],
    ],
  },
  {
    name: "Coriander seed",
    latin: "Coriandrum sativum",
    hue: "#9AA765",
    specs: [
      ["Type", "Eagle / Scooter / Split"],
      ["Purity", "99%"],
      ["Moisture", "Max 9%"],
      ["Origin", "Ramganj, Kota"],
    ],
  },
  {
    name: "Fenugreek seed",
    latin: "Trigonella foenum-graecum",
    hue: "#C79A2E",
    specs: [
      ["Purity", "99%"],
      ["Admixture", "Max 1%"],
      ["Moisture", "Max 9%"],
      ["Origin", "Rajasthan"],
    ],
  },
  {
    name: "Moringa leaf powder",
    latin: "Moringa oleifera",
    hue: "#5C8144",
    specs: [
      ["Mesh", "80 – 100"],
      ["Drying", "Shade dried"],
      ["Moisture", "Max 7%"],
      ["Origin", "Tamil Nadu"],
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
  { region: "European Union", body: "EU MRL-compliant lots with full residue panels.", ports: "Rotterdam · Hamburg · Antwerp · Valencia" },
  { region: "United States & Canada", body: "FDA prior notice and FSVP documentation handled.", ports: "New York · Savannah · Los Angeles · Montreal" },
  { region: "Middle East", body: "Retail and food-service packing, halal certification on request.", ports: "Jebel Ali · Dammam · Doha" },
  { region: "East & Southeast Asia", body: "Tight-tolerance lots for Japanese and Korean buyers.", ports: "Yokohama · Busan · Singapore · Port Klang" },
  { region: "United Kingdom", body: "Post-Brexit import documentation and UK MRL compliance.", ports: "Felixstowe · London Gateway" },
  { region: "Africa & Australia", body: "Growing lanes for turmeric, chilli and seed spices.", ports: "Durban · Mombasa · Melbourne · Sydney" },
];

export const nav = [
  { href: "#products", label: "Products" },
  { href: "#quality", label: "Quality" },
  { href: "#process", label: "How we work" },
  { href: "#markets", label: "Markets" },
];
