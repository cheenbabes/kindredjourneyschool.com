import Image from "next/image";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
};

export default function About() {
  return (
    <>
      {/* Hero */}
      <section className="pt-32 pb-20 px-6 bg-cream">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="font-heading text-4xl md:text-6xl text-forest mb-6">
            About Us
          </h1>
          <p className="text-lg md:text-xl text-forest/65 max-w-2xl mx-auto leading-relaxed">
            A perfect fit for families who value homeschooling and alternative education
          </p>
        </div>
      </section>

      {/* About intro */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="font-heading text-2xl md:text-3xl text-forest mb-6">
              The Best of Both Worlds
            </h2>
            <div className="space-y-4 text-forest/70 leading-relaxed">
              <p>
                Kindred Journey School is an ideal choice for families who value the
                personalized, flexible nature of homeschooling but cannot commit to it
                full time, and for those who want their children to benefit from the
                connections formed within a consistent peer group.
              </p>
              <p>
                We create individual learning plans tailored to each child&apos;s
                development, learning pace, and interests, just as you might in a
                homeschool setting.
              </p>
              <p>
                Our schedule includes home learning days and encourages family
                involvement in students&apos; education. Parents are invited to support
                learning at home and share their passions by leading community classes.
              </p>
              <p>
                With an emphasis on relationships, a nurturing environment, and a strong
                partnership between home and school, Kindred Journey offers the best of
                both worlds for families who want to stay involved in their child&apos;s
                education without having to do it on their own.
              </p>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -inset-4 bg-sage/10 rounded-3xl -rotate-2" />
            <Image
              src="/images/kids-hugging-v2.jpg"
              alt="Children embracing in a warm group hug"
              width={600}
              height={450}
              className="relative rounded-2xl w-full object-cover shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Academics */}
      <section className="py-20 px-6 bg-linen grain-overlay">
        <div className="relative z-10 max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="font-heading text-3xl md:text-4xl text-forest mb-4">
              Academics
            </h2>
            <p className="text-forest/60 max-w-xl mx-auto">
              Three pillars that shape our educational approach
            </p>
          </div>

          {/* Venn diagram — SVG for crisp rendering */}
          <div className="flex justify-center mb-16">
            <svg width="420" height="380" viewBox="0 0 420 380" className="w-full max-w-md">
              {/* Top circle — Individual Learning Plans */}
              <circle cx="210" cy="140" r="120" fill="#7B9E87" opacity="0.2" stroke="#7B9E87" strokeWidth="2" />
              {/* Bottom-left circle — Community Classes */}
              <circle cx="150" cy="240" r="120" fill="#C8956C" opacity="0.2" stroke="#C8956C" strokeWidth="2" />
              {/* Bottom-right circle — Spring Projects */}
              <circle cx="270" cy="240" r="120" fill="#2D4A3E" opacity="0.15" stroke="#2D4A3E" strokeWidth="2" />

              {/* Emojis */}
              <text x="210" y="75" textAnchor="middle" fontSize="28">📖</text>
              <text x="100" y="250" textAnchor="middle" fontSize="28">🤝</text>
              <text x="320" y="250" textAnchor="middle" fontSize="28">🌱</text>

              {/* Labels */}
              <text x="210" y="110" textAnchor="middle" className="fill-forest font-semibold" fontSize="14" fontFamily="var(--font-outfit)">Individual</text>
              <text x="210" y="128" textAnchor="middle" className="fill-forest font-semibold" fontSize="14" fontFamily="var(--font-outfit)">Learning Plans</text>

              <text x="100" y="290" textAnchor="middle" className="fill-forest font-semibold" fontSize="14" fontFamily="var(--font-outfit)">Community</text>
              <text x="100" y="308" textAnchor="middle" className="fill-forest font-semibold" fontSize="14" fontFamily="var(--font-outfit)">Classes</text>

              <text x="320" y="290" textAnchor="middle" className="fill-forest font-semibold" fontSize="14" fontFamily="var(--font-outfit)">Spring</text>
              <text x="320" y="308" textAnchor="middle" className="fill-forest font-semibold" fontSize="14" fontFamily="var(--font-outfit)">Projects</text>

              {/* Center sparkle */}
              <text x="210" y="215" textAnchor="middle" fontSize="22">✨</text>
            </svg>
          </div>

          {/* Alternating sections */}
          <div className="space-y-20">
            {/* Individual Learning Plans */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 bg-sage/15 text-sage rounded-full text-sm font-medium mb-4">
                  Pillar One
                </div>
                <h3 className="font-heading text-2xl text-forest mb-4">
                  Individual Learning Plans
                </h3>
                <p className="text-forest/70 leading-relaxed">
                  Each child is on their own unique learning journey. To honor this, we
                  create individual learning plans that reflect their developmental
                  stage, interests, and strengths. In foundational subjects — reading,
                  writing, and math — instruction is tailored to meet each student where
                  they are, ensuring they build skills at a pace and with tools that work
                  best for them.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-3 bg-terracotta/10 rounded-3xl rotate-1" />
                <Image
                  src="/images/number-cards-v3.jpg"
                  alt="Children laying out number cards on the floor"
                  width={500}
                  height={350}
                  className="relative rounded-2xl w-full object-cover shadow-md"
                />
              </div>
            </div>

            {/* Community Classes */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="order-2 md:order-1 relative">
                <div className="absolute -inset-3 bg-sage/10 rounded-3xl -rotate-1" />
                <Image
                  src="/images/taekwondo.jpg"
                  alt="Children in a taekwondo community class"
                  width={500}
                  height={350}
                  className="relative rounded-2xl w-full object-cover shadow-md"
                />
              </div>
              <div className="order-1 md:order-2">
                <div className="inline-block px-4 py-1.5 bg-terracotta/15 text-terracotta rounded-full text-sm font-medium mb-4">
                  Pillar Two
                </div>
                <h3 className="font-heading text-2xl text-forest mb-4">
                  Community Classes
                </h3>
                <p className="text-forest/70 leading-relaxed">
                  In the afternoons, students engage in enrichment classes led by
                  community members, parents, and local experts. These sessions offer
                  hands-on, interest-based learning in areas such as art, gardening,
                  music, science, crafts, and more. The classes reflect the unique
                  talents of our community and provide students with a broader,
                  real-world learning experience.
                </p>
              </div>
            </div>

            {/* Spring Projects */}
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-block px-4 py-1.5 bg-forest/10 text-forest-light rounded-full text-sm font-medium mb-4">
                  Pillar Three
                </div>
                <h3 className="font-heading text-2xl text-forest mb-4">
                  Spring Projects
                </h3>
                <p className="text-forest/70 leading-relaxed">
                  In the spring, students come together to create a special group
                  project that reflects what they&apos;ve learned and what they care
                  about. Whether it&apos;s a play, a presentation, a market day, or
                  another creative endeavor, this project is shaped by the students&apos;
                  ideas and incorporates various skills they&apos;ve developed throughout
                  the year. It&apos;s a meaningful way to celebrate their growth,
                  incorporate topics learned, and collaborate with others.
                </p>
              </div>
              <div className="relative">
                <div className="absolute -inset-3 bg-forest/5 rounded-3xl rotate-1" />
                <Image
                  src="/images/woodworking.jpg"
                  alt="Children building with wood outdoors"
                  width={500}
                  height={350}
                  className="relative rounded-2xl w-full object-cover shadow-md"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Educational Director */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-10 items-start">
            <div className="flex flex-col items-center md:items-start">
              <div className="relative mb-4">
                <div className="absolute -inset-2 bg-terracotta/15 rounded-full" />
                <Image
                  src="/images/audarya.jpg"
                  alt="Audarya Baibourine, Educational Director"
                  width={200}
                  height={200}
                  className="relative rounded-full w-48 h-48 object-cover shadow-md"
                />
              </div>
            </div>
            <div className="md:col-span-2">
              <h2 className="font-heading text-2xl md:text-3xl text-forest mb-2">
                Our Educational Director
              </h2>
              <p className="text-terracotta font-medium mb-6">Audarya Baibourine</p>
              <div className="space-y-4 text-forest/70 leading-relaxed">
                <p>
                  Audarya Baibourine has over 13 years of teaching experience and has
                  worked in both Montessori and Waldorf schools. She also founded and
                  directed a nature-based elementary school in North Carolina, teaching
                  there for five years.
                </p>
                <p>
                  Audarya holds a Master&apos;s degree in Education, with a focus on
                  evidence-based alternative teaching practices, and is currently
                  pursuing her Doctorate in Education.
                </p>
                <p>
                  Her educational philosophy centers on creating community-based learning
                  that honors each student as an individual while emphasizing the
                  importance of community in the learning process. As the lead teacher
                  and educational director at Kindred Journey School, Audarya personally
                  develops and oversees each student&apos;s individualized learning plan.
                  She also collaborates with other teachers to ensure the best possible
                  educational experience for every child.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
