# Spice Export — Next.js site

Premium single-page site for a spice import/export house.
Next.js 14 (App Router) · TypeScript · Tailwind CSS.

## Run it

```bash
npm install
npm run dev
```

Open http://localhost:3000

## Make it yours

Almost everything you need to change lives in **`lib/site.ts`**:

- `company` — name, email, phone, address, IEC and FSSAI numbers
- `stats` — the four numbers under the hero
- `supply` / `terms` — the current supply position panel
- `products` — each spice, its botanical name, accent colour and spec table
- `checks`, `certifications` — the quality section
- `steps` — the four-stage process
- `markets` — regions and ports

Colours and fonts: `tailwind.config.ts` (palette) and `app/layout.tsx` (typefaces).

## Palette

| Token     | Hex       | Used for                    |
|-----------|-----------|-----------------------------|
| onyx      | `#14100C` | hero, process, footer       |
| espresso  | `#241C15` | body text, dark panels      |
| ivory     | `#F8F4EC` | page background             |
| sand      | `#EBE2D4` | hairlines, tinted sections  |
| champagne | `#C8A96A` | accent on dark              |
| gold      | `#B08D48` | accent on light             |
| stone     | `#8A8074` | secondary text              |

Type: Cormorant Garamond (display, light weights) + Jost (interface).

## The enquiry form

`components/Enquiry.tsx` posts to `app/api/enquiry/route.ts`, which validates
and logs. To receive mail, uncomment the Resend block in that route and set
`RESEND_API_KEY` in `.env.local`. SendGrid, Postmark or Nodemailer drop into
the same spot.

## Deploy

Push to GitHub and import into Vercel — no configuration needed.
