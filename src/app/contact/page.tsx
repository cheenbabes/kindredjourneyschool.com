import ContactForm from "@/components/ContactForm";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact",
};

export default function Contact() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-16 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-6xl text-forest mb-4">
            Get in Touch
          </h1>
          <p className="text-lg text-forest/60 max-w-xl mx-auto">
            Have questions about Kindred Journey School? We&apos;d love to hear from you.
          </p>
        </div>
      </section>

      {/* Form section */}
      <section className="pb-24 px-6">
        <div className="max-w-xl mx-auto">
          <div className="bg-linen rounded-2xl p-8 md:p-10 shadow-sm">
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  );
}
