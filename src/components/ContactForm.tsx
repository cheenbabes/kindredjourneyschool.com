"use client";

import { useState } from "react";

export default function ContactForm() {
  const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">("idle");
  const [errorMsg, setErrorMsg] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setErrorMsg("");

    const formData = new FormData(e.currentTarget);
    const data = {
      firstName: formData.get("firstName") as string,
      lastName: formData.get("lastName") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const body = await res.json();
        throw new Error(body.error || "Failed to send message");
      }

      setStatus("sent");
    } catch (err) {
      setErrorMsg(err instanceof Error ? err.message : "Something went wrong");
      setStatus("error");
    }
  }

  if (status === "sent") {
    return (
      <div className="bg-sage/10 rounded-2xl p-10 text-center">
        <div className="w-16 h-16 bg-sage/20 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="text-sage">
            <path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </div>
        <h3 className="font-heading text-2xl text-forest mb-2">Message Sent!</h3>
        <p className="text-forest/65">
          Thanks for reaching out — we&apos;ll get back to you shortly.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5">
      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="firstName" className="block text-sm font-medium text-forest/70 mb-1.5">
            First name <span className="text-terracotta">*</span>
          </label>
          <input
            type="text"
            id="firstName"
            name="firstName"
            required
            className="w-full px-4 py-3 bg-warm-white border border-forest/10 rounded-xl text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors"
            placeholder="Your first name"
          />
        </div>
        <div>
          <label htmlFor="lastName" className="block text-sm font-medium text-forest/70 mb-1.5">
            Last name
          </label>
          <input
            type="text"
            id="lastName"
            name="lastName"
            className="w-full px-4 py-3 bg-warm-white border border-forest/10 rounded-xl text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors"
            placeholder="Your last name"
          />
        </div>
      </div>

      <div className="grid sm:grid-cols-2 gap-5">
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-forest/70 mb-1.5">
            Email <span className="text-terracotta">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            required
            className="w-full px-4 py-3 bg-warm-white border border-forest/10 rounded-xl text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors"
            placeholder="your@email.com"
          />
        </div>
        <div>
          <label htmlFor="phone" className="block text-sm font-medium text-forest/70 mb-1.5">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="w-full px-4 py-3 bg-warm-white border border-forest/10 rounded-xl text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors"
            placeholder="(555) 123-4567"
          />
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block text-sm font-medium text-forest/70 mb-1.5">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          className="w-full px-4 py-3 bg-warm-white border border-forest/10 rounded-xl text-forest placeholder:text-forest/30 focus:outline-none focus:ring-2 focus:ring-sage/30 focus:border-sage transition-colors resize-none"
          placeholder="Tell us about your family and what you're looking for..."
        />
      </div>

      {status === "error" && (
        <div className="bg-red-50 text-red-700 text-sm rounded-xl p-4">
          {errorMsg}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full px-8 py-3.5 bg-forest text-cream rounded-full font-medium hover:bg-forest-light transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
    </form>
  );
}
