import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Schedule",
};

export default function Schedule() {
  return (
    <>
      {/* Hero banner */}
      <section className="relative pt-28 pb-16 overflow-hidden">
        <Image
          src="/images/counting-sticks.jpg"
          alt="Nature-based math with counting sticks"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/80 to-forest/60" />
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6 py-12">
          <h1 className="font-heading text-4xl md:text-6xl text-cream mb-4">
            Schedule
          </h1>
          <p className="text-cream/75 text-lg">
            A rhythm that balances structure with flexibility
          </p>
        </div>
      </section>

      {/* Schedule content */}
      <section className="py-20 px-6">
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Morning Session */}
          <div className="bg-warm-white rounded-2xl p-8 shadow-sm border border-forest/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-sage/20 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
                  <path d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="font-heading text-2xl text-forest">Morning Session</h2>
            </div>
            <p className="text-forest/70 leading-relaxed mb-6">
              Circle time, math, and literacy small group/individual instruction, along
              with open-ended and emergent activities.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-cream rounded-xl p-4">
                <div className="w-2 h-2 bg-sage rounded-full mt-2 shrink-0" />
                <div>
                  <p className="font-medium text-forest text-sm">Morning Academics</p>
                  <p className="text-forest/60 text-sm">Monday – Thursday, 9:15 AM – 12:15 PM</p>
                </div>
              </div>
              <div className="flex items-start gap-3 bg-cream rounded-xl p-4">
                <div className="w-2 h-2 bg-terracotta rounded-full mt-2 shrink-0" />
                <div>
                  <p className="font-medium text-forest text-sm">Lunch &amp; Recess</p>
                  <p className="text-forest/60 text-sm">12:15 PM – 1:30 PM</p>
                  <p className="text-forest/50 text-xs mt-1">Pick-up at 1:20 PM on Thursdays</p>
                </div>
              </div>
            </div>
          </div>

          {/* Afternoon Session */}
          <div className="bg-warm-white rounded-2xl p-8 shadow-sm border border-forest/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-terracotta/15 rounded-xl flex items-center justify-center">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-terracotta">
                  <path d="M15.362 5.214A8.252 8.252 0 0112 21 8.25 8.25 0 016.038 7.048 8.287 8.287 0 009 9.6a8.983 8.983 0 013.361-6.867 8.21 8.21 0 003 2.48z" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M12 18a3.75 3.75 0 00.495-7.467 5.99 5.99 0 00-1.925 3.546 5.974 5.974 0 01-2.133-1.001A3.75 3.75 0 0012 18z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h2 className="font-heading text-2xl text-forest">Afternoon Session</h2>
            </div>
            <p className="text-forest/70 leading-relaxed mb-6">
              Free play followed by lessons led by local community members. Activities
              may include sewing, science, art, nature-based activities, yoga, movement,
              building, and more.
            </p>
            <div className="space-y-3">
              <div className="flex items-start gap-3 bg-cream rounded-xl p-4">
                <div className="w-2 h-2 bg-terracotta rounded-full mt-2 shrink-0" />
                <div>
                  <p className="font-medium text-forest text-sm">Community Classes</p>
                  <p className="text-forest/60 text-sm">Monday – Wednesday, 1:30 PM – 2:30 PM</p>
                  <p className="text-forest/50 text-xs mt-1">Pick-up at 2:30 PM Mon–Wed</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Homeschool note */}
      <section className="pb-12 px-6">
        <div className="max-w-5xl mx-auto">
          <div className="bg-sage/10 rounded-2xl p-8 text-center">
            <h3 className="font-heading text-xl text-forest mb-3">
              For Homeschool Families
            </h3>
            <p className="text-forest/70 leading-relaxed">
              Homeschooled children participating solely in afternoon sessions may
              participate in lunch at 12:15 or be dropped off between 1:00 and 1:15 for
              Community Classes.
            </p>
          </div>
        </div>
      </section>

      {/* Photo grid */}
      <section className="py-16 px-6 bg-linen">
        <div className="max-w-5xl mx-auto grid grid-cols-2 md:grid-cols-3 gap-4">
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/magnifying-glass-v2.jpg"
              alt="Child examining objects with a magnifying glass"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden">
            <Image
              src="/images/sewing-v2.jpg"
              alt="Child sewing with felt and yarn"
              fill
              className="object-cover"
            />
          </div>
          <div className="relative aspect-square rounded-2xl overflow-hidden col-span-2 md:col-span-1">
            <Image
              src="/images/kids-painting.jpg"
              alt="Children painting together with watercolors"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </section>
    </>
  );
}
