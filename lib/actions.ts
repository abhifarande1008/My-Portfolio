"use server";

import { Resend } from "resend";
import { SITE } from "./site";
import type { ContactFormState } from "./types";

const resendApiKey = process.env.RESEND_API_KEY;
const contactToEmail = process.env.CONTACT_TO_EMAIL ?? SITE.emailWork;
const resendFromEmail = process.env.RESEND_FROM_EMAIL ?? "onboarding@resend.dev";
const NAME_MIN_LENGTH = 2;
const NAME_MAX_LENGTH = 80;
const MESSAGE_MIN_LENGTH = 10;
const MESSAGE_MAX_LENGTH = 5000;
const EMAIL_MAX_LENGTH = 254;

export async function submitContact(
  _prev: ContactFormState,
  formData: FormData,
): Promise<ContactFormState> {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();
  const message = String(formData.get("message") ?? "").trim();
  const company = String(formData.get("company") ?? "").trim();

  if (company) {
    return { ok: false, error: "Submission rejected." };
  }

  if (!name || !email || !message) {
    return { ok: false, error: "Please fill in name, email, and message." };
  }

  if (name.length < NAME_MIN_LENGTH || name.length > NAME_MAX_LENGTH) {
    return {
      ok: false,
      error: `Name must be between ${NAME_MIN_LENGTH} and ${NAME_MAX_LENGTH} characters.`,
    };
  }

  if (email.length > EMAIL_MAX_LENGTH) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (message.length < MESSAGE_MIN_LENGTH || message.length > MESSAGE_MAX_LENGTH) {
    return {
      ok: false,
      error: `Message must be between ${MESSAGE_MIN_LENGTH} and ${MESSAGE_MAX_LENGTH} characters.`,
    };
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { ok: false, error: "Please enter a valid email address." };
  }

  if (!resendApiKey) {
    return {
      ok: false,
      error: "Email service is not configured yet. Set RESEND_API_KEY to enable contact submissions.",
    };
  }

  const resend = new Resend(resendApiKey);

  try {
    const { error } = await resend.emails.send({
      from: resendFromEmail,
      to: [contactToEmail],
      replyTo: email,
      subject: `New contact form message from ${name}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        "",
        message,
      ].join("\n"),
      html: `
        <h2>New contact form message</h2>
        <p><strong>Name:</strong> ${escapeHtml(name)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, "<br />")}</p>
      `,
    });

    if (error) {
      return {
        ok: false,
        error: error.message || "Something went wrong while sending your message.",
      };
    }

    return { ok: true, error: "" };
  } catch {
    return {
      ok: false,
      error: "Something went wrong while sending your message.",
    };
  }
}

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}
