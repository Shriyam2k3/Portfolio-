import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, message, honeypot } = body;

    // Honeypot spam protection: if bot filled hidden field, reject silently
    if (honeypot) {
      return NextResponse.json({ success: true, message: "Message processed" });
    }

    // Input Validation
    if (!name || typeof name !== "string" || name.trim().length < 2) {
      return NextResponse.json(
        { error: "Please enter a valid full name (at least 2 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim())) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 10) {
      return NextResponse.json(
        { error: "Message must be at least 10 characters long." },
        { status: 400 }
      );
    }

    // Process delivery: Log to server console
    console.log("=== NEW CONTACT FORM MESSAGE ===");
    console.log(`From: ${name.trim()} <${email.trim()}>`);
    console.log(`Timestamp: ${new Date().toISOString()}`);
    console.log(`Content:\n${message.trim()}`);
    console.log("================================");

    // If an external webhook or SMTP service is configured via environment variables, trigger it
    const webhookUrl = process.env.CONTACT_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name: name.trim(),
            email: email.trim(),
            message: message.trim(),
            timestamp: new Date().toISOString(),
          }),
        });
      } catch (err) {
        console.error("Webhook dispatch failed:", err);
      }
    }

    return NextResponse.json(
      {
        success: true,
        message: "Thank you! Your message has been received. I will get back to you shortly.",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Contact API Error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred. Please try again or reach out directly via email." },
      { status: 500 }
    );
  }
}

