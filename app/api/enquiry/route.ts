import { NextResponse } from "next/server";

// Receives the enquiry form. Right now it validates and logs.
// To actually deliver mail, plug in Resend / SendGrid / Nodemailer below.
export async function POST(request: Request) {
  try {
    const body = await request.json();

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();

    if (!name || !email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: "Name and a valid email are required." },
        { status: 400 }
      );
    }

    // ── Delivery goes here ────────────────────────────────────────────
    // Example with Resend (npm i resend, set RESEND_API_KEY in .env.local):
    //
    // import { Resend } from "resend";
    // const resend = new Resend(process.env.RESEND_API_KEY);
    // await resend.emails.send({
    //   from: "site@yourdomain.com",
    //   to: "trade@yourdomain.com",
    //   subject: `Enquiry — ${body.product} — ${name}`,
    //   text: Object.entries(body).map(([k, v]) => `${k}: ${v}`).join("\n"),
    // });
    // ──────────────────────────────────────────────────────────────────

    console.log("New enquiry:", body);

    return NextResponse.json({ ok: true });
  } catch {
    return NextResponse.json({ error: "Could not read the enquiry." }, { status: 400 });
  }
}
