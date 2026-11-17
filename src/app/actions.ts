"use server";

import { Resend } from "resend";
import { z } from "zod";
import { business } from "@/data/business";

// Form notifications go to the CONTACT_EMAIL environment variable if it is set, otherwise to the
// public address in src/data/business.ts (the single source for the site email).
const CONTACT_EMAIL = process.env.CONTACT_EMAIL || business.email;
const FROM = "AGEC Website <onboarding@resend.dev>";

/**
 * Email one form submission to CONTACT_EMAIL. Returns true only when Resend accepted it.
 * The Resend SDK does not throw on API errors (for example "you can only send testing emails to
 * your own address"); it returns { error }, so the result must be checked or failures are silent.
 */
async function sendEmail(
  kind: string,
  mail: { subject: string; html: string; replyTo?: string },
): Promise<boolean> {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY);
    const { error } = await resend.emails.send({ from: FROM, to: CONTACT_EMAIL, ...mail });
    if (error) {
      console.error(`Resend rejected the ${kind} email (to ${CONTACT_EMAIL}):`, error);
      return false;
    }
    return true;
  } catch (err) {
    console.error(`Failed to send ${kind} email:`, err);
    return false;
  }
}

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

// ── Unified Request (quote / service booking) ──

const requestSchema = z.object({
  requestType: z.string().min(1),
  name: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email().optional().or(z.literal("")),
  location: z.string().optional(),
  details: z.string().optional(),
});

export async function submitRequest(data: Record<string, unknown>) {
  const parsed = requestSchema.safeParse(data);
  if (!parsed.success) return { success: false, error: "Invalid form data" };
  const d = parsed.data;

  const html = wrap(
    "Website Request",
    row("Request type", d.requestType) +
      row("Name", d.name) +
      row("Phone", d.phone) +
      row("Email", d.email) +
      row("Emirate / area", d.location) +
      row("Details", d.details),
  );

  const sent = await sendEmail("request", { subject: `Website Request (${d.requestType}) - ${d.name}`, replyTo: d.email || undefined, html });
  return sent ? { success: true } : { success: false, error: "send_failed" };
}

// ── Contact Form ──

const contactSchema = z.object({
  name: z.string().min(1),
  // Email and subject are optional; phone is the required contact method.
  email: z.string().email().optional().or(z.literal("")),
  phone: z.string().min(1),
  subject: z.string().optional(),
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

  const sent = await sendEmail("contact", { subject: `New Contact Form Submission - ${name}`, replyTo: email || undefined, html });
  return sent ? { success: true } : { success: false, error: "send_failed" };
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
  details: z.string().optional(),
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

  const sent = await sendEmail("quote", { subject: `Quote Request - ${d.name} - ${d.projectType}`, replyTo: d.email, html });
  return sent ? { success: true } : { success: false, error: "send_failed" };
}

// ── Service Booking ──

const bookSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  email: z.string().email().optional().or(z.literal("")),
  address: z.string().min(1),
  serviceType: z.string().min(1),
  equipmentType: z.string().optional(),
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

  const sent = await sendEmail("booking", { subject: `Service Booking Request - ${d.name}`, replyTo: d.email || undefined, html });
  return sent ? { success: true } : { success: false, error: "send_failed" };
}

// ── AMC Enquiry ──

const amcSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  propertyType: z.string().min(1),
  email: z.string().email().optional().or(z.literal("")),
  location: z.string().optional(),
  units: z.string().optional(),
  currentContractor: z.string().optional(),
  notes: z.string().optional(),
});

export async function submitAmcRequest(data: Record<string, unknown>) {
  const parsed = amcSchema.safeParse(data);
  if (!parsed.success) return { success: false, error: "Invalid form data" };
  const d = parsed.data;

  const html = wrap(
    "AMC Enquiry",
    row("Name", d.name) +
      row("Phone", d.phone) +
      row("Email", d.email) +
      row("Property Type", d.propertyType) +
      row("Area / Emirate", d.location) +
      row("Number of AC units", d.units) +
      row("Current contractor", d.currentContractor) +
      row("Notes", d.notes),
  );

  const sent = await sendEmail("AMC", { subject: `AMC Enquiry - ${d.name}`, replyTo: d.email || undefined, html });
  return sent ? { success: true } : { success: false, error: "send_failed" };
}

// ── Air Balancing / Technical Assessment ──

const balancingSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  buildingType: z.string().min(1),
  symptom: z.string().min(1),
  company: z.string().optional(),
  email: z.string().email().optional().or(z.literal("")),
  location: z.string().optional(),
  drawings: z.string().optional(),
  notes: z.string().optional(),
});

export async function submitBalancingRequest(data: Record<string, unknown>) {
  const parsed = balancingSchema.safeParse(data);
  if (!parsed.success) return { success: false, error: "Invalid form data" };
  const d = parsed.data;

  const html = wrap(
    "Technical Assessment Request (Air Balancing)",
    row("Name", d.name) +
      row("Company", d.company) +
      row("Phone", d.phone) +
      row("Email", d.email) +
      row("Building type", d.buildingType) +
      row("Location / Emirate", d.location) +
      row("Symptom", d.symptom) +
      row("Drawings available?", d.drawings) +
      row("Notes", d.notes),
  );

  const sent = await sendEmail("balancing", { subject: `Technical Assessment Request - ${d.name}`, replyTo: d.email || undefined, html });
  return sent ? { success: true } : { success: false, error: "send_failed" };
}

// ── Urgent AC Repair ──

const repairSchema = z.object({
  name: z.string().min(1),
  phone: z.string().min(1),
  area: z.string().min(1),
  issue: z.string().min(1),
});

export async function submitRepairRequest(data: Record<string, unknown>) {
  const parsed = repairSchema.safeParse(data);
  if (!parsed.success) return { success: false, error: "Invalid form data" };
  const d = parsed.data;

  const html = wrap(
    "Urgent AC Repair Request",
    row("Name", d.name) +
      row("Phone", d.phone) +
      row("Area", d.area) +
      row("Issue", d.issue),
  );

  const sent = await sendEmail("repair", { subject: `Urgent AC Repair - ${d.name}`, html });
  return sent ? { success: true } : { success: false, error: "send_failed" };
}
