import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-forest text-cream/80">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="flex flex-col md:flex-row items-center md:items-start justify-between gap-8">
          {/* Logo and name */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <Image
              src="/images/logo.png"
              alt="Kindred Journey School"
              width={48}
              height={48}
              className="brightness-110"
            />
            <p className="font-heading text-xl text-cream">
              Kindred Journey School
            </p>
            <p className="text-sm text-cream/60 max-w-xs text-center md:text-left">
              Nurturing the individual and cultivating community
            </p>
          </div>

          {/* Quick links */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <p className="text-sm font-semibold text-cream/50 uppercase tracking-wider mb-1">
              Explore
            </p>
            <Link href="/about" className="text-sm hover:text-cream transition-colors">
              About Us
            </Link>
            <Link href="/schedule" className="text-sm hover:text-cream transition-colors">
              Schedule
            </Link>
            <Link href="/tuition" className="text-sm hover:text-cream transition-colors">
              Tuition
            </Link>
          </div>

          {/* Contact CTA */}
          <div className="flex flex-col items-center md:items-start gap-3">
            <p className="text-sm font-semibold text-cream/50 uppercase tracking-wider mb-1">
              Get in Touch
            </p>
            <Link
              href="/contact"
              className="inline-block px-6 py-2.5 bg-terracotta text-cream rounded-full text-sm font-medium hover:bg-terracotta/90 transition-colors"
            >
              Contact Us
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-cream/10 text-center">
          <p className="text-xs text-cream/40">
            &copy; {new Date().getFullYear()} Kindred Journey School. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
