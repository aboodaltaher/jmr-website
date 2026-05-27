"use server";

export async function submitContactForm(data: Record<string, unknown>) {
  console.log("Contact form submission:", data);
  return { success: true };
}

export async function submitQuoteRequest(data: Record<string, unknown>) {
  console.log("Quote request submission:", data);
  return { success: true };
}

export async function submitBooking(data: Record<string, unknown>) {
  console.log("Booking submission:", data);
  return { success: true };
}
