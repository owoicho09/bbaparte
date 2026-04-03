'use client';

import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export function Hero() {
  return (
    <section
      id="home"
      className="relative h-screen w-full overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/hero (2).JPG"
          alt="B&B Apartments Luxury Interior"
          fill
          className="object-cover"
          priority
        />
        {/* Dark Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-charcoal via-charcoal/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative h-full flex flex-col items-center justify-center text-center px-4">
        <div className="max-w-3xl mx-auto animate-fade-in">
          <h1 className="font-display text-5xl sm:text-6xl lg:text-7xl text-ivory mb-6 leading-tight">
            Luxury Living in the Heart of Abuja
          </h1>

          <p className="text-ivory/80 text-lg sm:text-xl mb-12 max-w-2xl mx-auto font-light">
            Premium shortlet apartments in Primelux Estate — steps from the African Medical Centre of Excellence
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <a
              href="https://wa.me/2348026292017?text=Hello%20B%26B%20Apartments%2C%20I%27d%20like%20to%20inquire%20about%20a%20booking."
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gold hover:bg-gold/90 text-charcoal px-8 py-3 rounded-sm font-semibold flex items-center gap-2 transition-all duration-300 hover:gap-3"
            >
              Book Your Stay <ArrowRight size={20} />
            </a>
            <a
              href="#gallery"
              className="border-2 border-ivory text-ivory hover:bg-ivory/10 px-8 py-3 rounded-sm font-semibold transition-all duration-300"
            >
              View Gallery
            </a>
          </div>
        </div>

        {/* Floating Divider */}
        <div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-float">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-gold to-transparent" />
        </div>
      </div>
    </section>
  );
}
