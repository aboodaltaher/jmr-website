"use server";

import { Resend } from "resend";
import { z } from "zod";

const resend = new Resend(process.env.RESEND_API_KEY);
const CONTACT_EMAIL = process.env.CONTACT_EMAIL ?? "";
const FROM = "AGEC Website <onboarding@resend.dev>";

function timestamp() {
  return new Date().toLocaleString("en-AE", { timeZone: "Asia/Dubai" });
}

function row(label: string, value: string | undefined) {
  if (!value) return "";
  return `<tr><td style="padding:6px 12px 6px 0;color:#6B7280;vertical-align:top">${label}</td><td style="padding:6px 0">${value}</td></tr>`;
}

function wrap(heading: string, rows: string) {
  return `
    <div style="font-family:sans-serif;max-width:600px;margin:0 auto">
      <h2 style="color:#1A1A1A;border-bottom:2px solid #FF6B1A;padding-bottom:8px">${heading}</h2>
      <table style="width:100%;border-collapse:collapse;font-size:14px;color:#1A1A1A">${rows}</table>
      <p style="margin-top:24px;font-size:12px;color:#6B7280">Submitted ${timestamp()} via agec.ae contact form</p>
    </div>`;
}

// ── Contact Form ──

const contactSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().optional(),
  subject: z.string().min(1),
  message: z.string().min(1),
});

export async function submitContactForm(data: Record<string, unknown>) {
  const parsed = contactSchema.safeParse(data);
  if (!parsed.success) return { success: false, error: "Invalid form data" };
  const { name, email, phone, subject, message } = parsed.data;

  const html = wrap(
    "New Contact Form Submission",
    row("Name", name) +
      row("Email", email) +
      row("Phone", phone) +
      row("Subject", subject) +
      row("Message", message),
  );

  try {
    await resend.emails.send({
      from: FROM,
      to: CONTACT_EMAIL,
      subject: `New Contact Form Submission - ${name}`,
      replyTo: email,
      html,
    });
  } catch (err) {
    console.error("Failed to send contact email:", err);
  }

  return { success: true };
}

// ── Quote Request ──

const quoteSchema = z.object({
  name: z.string().min(1),
  email: z.string().email(),
  phone: z.string().min(1),
  company: z.string().optional(),
  projectType: z.string().min(1),
  services: z.array(z.string()).min(1),
  location: z.string().min(1),
  projectSize: z.string().optional(),
  timeline: z.string().min(1),
  budget: z.string().optional(),
  details: z.string().min(1),
});

export async function submitQuoteRequest(data: Record<string, unknown>) {
  const parsed = quoteSchema.safeParse(data);
  if (!parsed.success) return { success: false, error: "Invalid form data" };
  const d = parsed.data;

  const html = wrap(
    "Quote Request",
    row("Name", d.name) +
      row("Email", d.email) +
      row("Phone", d.phone) +
      row("Company", d.company) +
      row("Project Type", d.projectType) +
      row("Services", d.services.join(", ")) +
      row("Location", d.location) +
      row("Project Size", d.projectSize) +
      row("Timeline", d.timeline) +
      row("Budget", d.budget) +
      row("Details", d.details),
  );

  try {
    await resend.emails.send({
      from: FROM,
      to: CONTACT_EMAIL,
      subject: `Quote Request - ${d.name} - ${d.projectType}`,
      replyTo: d.email,
      html,
    });
  } catch (err) {
    console.error("Failed to send quote email:", err);
  }

  return { success: true };
}

// ── Service Booking ──

const bookSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email(),
  address: z.string().min(1),
  serviceType: z.string().min(1),
  equipmentType: z.string().min(1),
  description: z.string().min(1),
  preferredDate: z.string().optional(),
  preferredTime: z.string().optional(),
});

export async function submitBooking(data: Record<string, unknown>) {
  const parsed = bookSchema.safeParse(data);
  if (!parsed.success) return { success: false, error: "Invalid form data" };
  const d = parsed.data;

  const html = wrap(
    "Service Booking Request",
    row("Name", d.name) +
      row("Phone", d.phone) +
      row("Email", d.email) +
      row("Address", d.address) +
      row("Service Type", d.serviceType) +
      row("Equipment", d.equipmentType) +
      row("Description", d.description) +
      row("Preferred Date", d.preferredDate) +
      row("Preferred Time", d.preferredTime),
  );

  try {
    await resend.emails.send({
      from: FROM,
      to: CONTACT_EMAIL,
      subject: `Service Booking Request - ${d.name}`,
      replyTo: d.email,
      html,
    });
  } catch (err) {
    console.error("Failed to send booking email:", err);
  }

  return { success: true };
}
