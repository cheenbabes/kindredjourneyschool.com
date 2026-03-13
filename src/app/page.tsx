import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background image */}
        <Image
          src="/images/reading-circle.jpg"
          alt="Teacher reading to children in a warm classroom"
          fill
          className="object-cover"
          priority
        />
        {/* Warm gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest/70 via-forest/50 to-forest/80" />

        {/* Content */}
        <div className="relative z-10 text-center px-6 max-w-3xl animate-fade-in-up">
          <h1 className="font-heading text-5xl md:text-7xl text-cream font-light tracking-tight mb-6">
            Kindred Journey
            <span className="block text-terracotta-light">School</span>
          </h1>
          <p className="text-xl md:text-2xl text-cream/90 font-light mb-10 leading-relaxed">
            Nurturing the individual and cultivating community
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/about"
              className="px-8 py-3.5 bg-cream text-forest rounded-full font-medium hover:bg-white transition-colors text-base"
            >
              Discover Our Approach
            </Link>
            <Link
              href="/contact"
              className="px-8 py-3.5 border-2 border-cream/40 text-cream rounded-full font-medium hover:bg-cream/10 transition-colors text-base"
            >
              Get in Touch
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(247,245,240,0.6)" strokeWidth="2">
            <path d="M7 13l5 5 5-5M7 7l5 5 5-5" />
          </svg>
        </div>
      </section>

      {/* Intro Section */}
      <section className="relative py-24 px-6 grain-overlay">
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-forest mb-6">
            The Best of Both Worlds
          </h2>
          <p className="text-lg text-forest/70 leading-relaxed max-w-2xl mx-auto">
            A perfect fit for families who value the personalized, flexible nature of
            homeschooling and the connections formed within a consistent peer group.
          </p>
        </div>
      </section>

      {/* Three Pillars */}
      <section className="py-20 px-6 bg-linen">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Pillar 1 */}
            <div className="bg-warm-white rounded-2xl p-8 card-hover">
              <div className="w-14 h-14 bg-sage/20 rounded-xl flex items-center justify-center mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-sage">
                  <path d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-forest mb-3">
                Individual Learning Plans
              </h3>
              <p className="text-forest/65 leading-relaxed text-sm">
                Tailored instruction in reading, writing, and math that meets each
                student where they are — honoring their pace, interests, and strengths.
              </p>
            </div>

            {/* Pillar 2 */}
            <div className="bg-warm-white rounded-2xl p-8 card-hover">
              <div className="w-14 h-14 bg-terracotta/15 rounded-xl flex items-center justify-center mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-terracotta">
                  <path d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-forest mb-3">
                Community Classes
              </h3>
              <p className="text-forest/65 leading-relaxed text-sm">
                Afternoon enrichment led by parents, local experts, and community
                members — from art and gardening to music and science.
              </p>
            </div>

            {/* Pillar 3 */}
            <div className="bg-warm-white rounded-2xl p-8 card-hover">
              <div className="w-14 h-14 bg-forest/10 rounded-xl flex items-center justify-center mb-5">
                <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-forest-light">
                  <path d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 00-2.455 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h3 className="font-heading text-xl text-forest mb-3">
                Spring Projects
              </h3>
              <p className="text-forest/65 leading-relaxed text-sm">
                Collaborative projects — plays, presentations, market days — shaped by
                students&apos; ideas and celebrating their growth throughout the year.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Photo break */}
      <section className="relative h-72 md:h-96 overflow-hidden">
        <Image
          src="/images/kids-puddle.jpg"
          alt="Children playing in puddles with colorful rain boots"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-forest/30 to-transparent" />
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-forest text-cream text-center">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-heading text-3xl md:text-4xl mb-4">
            Ready to Begin the Journey?
          </h2>
          <p className="text-cream/70 text-lg mb-8 leading-relaxed">
            We&apos;d love to hear from you. Whether you have questions about our
            program or want to learn more about enrollment, reach out anytime.
          </p>
          <Link
            href="/contact"
            className="inline-block px-10 py-4 bg-terracotta text-cream rounded-full font-medium text-lg hover:bg-terracotta/90 transition-colors"
          >
            Get in Touch
          </Link>
        </div>
      </section>
    </>
  );
}
