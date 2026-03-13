import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tuition",
};

export default function Tuition() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <Image
          src="/images/museum-trip.jpg"
          alt="Children on a museum field trip exploring science"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 to-forest/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-12">
          <h1 className="font-heading text-4xl md:text-6xl text-cream mb-4">
            Tuition
          </h1>
          <p className="text-cream/75 text-lg">
            Simple, transparent pricing
          </p>
        </div>
      </section>

      {/* Pricing cards */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Full-time card */}
            <div className="bg-warm-white rounded-2xl p-8 shadow-sm border border-forest/5 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-sage to-forest-light" />
              <p className="text-sm font-medium text-sage uppercase tracking-wider mb-2">
                Full-Time
              </p>
              <h2 className="font-heading text-2xl text-forest mb-4">
                Morning &amp; Afternoon
              </h2>
              <p className="text-forest/60 text-sm mb-8 leading-relaxed">
                Monday through Thursday — includes morning academics, lunch, recess, and
                afternoon community classes.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-baseline justify-between pb-3 border-b border-forest/8">
                  <span className="text-forest/70 text-sm">First-year students</span>
                  <span className="font-heading text-2xl text-forest">$725<span className="text-base text-forest/50">/mo</span></span>
                </div>
                <div className="flex items-baseline justify-between">
                  <span className="text-forest/70 text-sm">Returning students</span>
                  <span className="font-heading text-2xl text-forest">$685<span className="text-base text-forest/50">/mo</span></span>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-auto block text-center px-6 py-3 bg-forest text-cream rounded-full font-medium hover:bg-forest-light transition-colors text-sm"
              >
                Inquire About Enrollment
              </Link>
            </div>

            {/* Community Classes card */}
            <div className="bg-warm-white rounded-2xl p-8 shadow-sm border border-forest/5 relative overflow-hidden flex flex-col">
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-terracotta to-terracotta-light" />
              <p className="text-sm font-medium text-terracotta uppercase tracking-wider mb-2">
                Homeschool Families
              </p>
              <h2 className="font-heading text-2xl text-forest mb-4">
                Community Classes
              </h2>
              <p className="text-forest/60 text-sm mb-8 leading-relaxed">
                Afternoon sessions only — Monday through Wednesday, 1:00 PM to 2:30 PM.
                Perfect for homeschool families seeking enrichment and community.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-baseline justify-between">
                  <span className="text-forest/70 text-sm">Per afternoon session (M, T, or W)</span>
                  <span className="font-heading text-2xl text-forest">$120<span className="text-base text-forest/50">/mo</span></span>
                </div>
              </div>
              <Link
                href="/contact"
                className="mt-auto block text-center px-6 py-3 bg-terracotta text-cream rounded-full font-medium hover:bg-terracotta/90 transition-colors text-sm"
              >
                Learn More
              </Link>
            </div>
          </div>

          {/* Note - full width matching cards */}
          <div className="bg-cream-dark rounded-2xl p-6 text-center">
            <p className="text-forest/65 text-sm leading-relaxed">
              Tuition covers typical breaks (e.g., holiday and spring break) and
              potential school cancellations. It is a flat fee due on the first of each
              month.
            </p>
          </div>
        </div>
      </section>

      {/* Photo grid */}
      <section className="py-10 px-6 bg-linen">
        <div className="max-w-4xl mx-auto grid grid-cols-3 gap-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/rocket-launch.jpg"
              alt="Teacher and child launching a rocket outdoors"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/multiplication-spiral.jpg"
              alt="Watercolor multiplication spiral — student work"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/wood-building.jpg"
              alt="Child building with wood blocks outdoors"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
