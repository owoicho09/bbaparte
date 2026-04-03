'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export function About() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.2 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="py-24 bg-charcoal px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div
            className={`relative h-96 lg:h-full min-h-96 rounded-sm overflow-hidden transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <Image
              src="/about.jpg"
              alt="B&B Apartments Bedroom"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gold/10" />
          </div>

          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <div className="text-gold text-sm uppercase tracking-widest mb-4 font-semibold">
              About B&B
            </div>

            <h2 className="font-display text-4xl sm:text-5xl text-ivory mb-6 leading-tight">
              Where Comfort Meets Excellence
            </h2>

            <p className="text-ivory/70 text-lg mb-8 leading-relaxed font-light">
              B&B Apartments offers a refined retreat in one of Abuja&apos;s most prestigious addresses — Primelux Estate. Strategically located beside the African Medical Centre of Excellence (AMCE), our fully furnished apartments serve visiting professionals, medical consultants, families, and business travelers who expect nothing less than the best.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6">
              <div className="border-l-2 border-gold pl-4">
                <div className="text-gold text-2xl font-bold font-display mb-1">
                  100%
                </div>
                <p className="text-ivory/60 text-sm">Power Uptime</p>
              </div>
              <div className="border-l-2 border-gold pl-4">
                <div className="text-gold text-2xl font-bold font-display mb-1">
                  24/7
                </div>
                <p className="text-ivory/60 text-sm">Security</p>
              </div>
              <div className="border-l-2 border-gold pl-4">
                <div className="text-gold text-2xl font-bold font-display mb-1">
                  5★
                </div>
                <p className="text-ivory/60 text-sm">Rated Stays</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
