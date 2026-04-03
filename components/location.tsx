'use client';

import { MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Location() {
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
      id="location"
      ref={ref}
      className="py-24 bg-charcoal px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Content */}
          <div
            className={`transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'
            }`}
          >
            <div className="flex items-center gap-2 mb-4">
              <MapPin className="text-gold" size={20} />
              <span className="text-gold text-sm uppercase tracking-widest font-semibold">
                Prime Location
              </span>
            </div>

            <h2 className="font-display text-4xl sm:text-5xl text-ivory mb-8 leading-tight">
              Prime Location, Perfect Access
            </h2>

            <div className="space-y-6">
              <div className="border-l-2 border-gold/30 pl-6">
                <p className="text-ivory/80 text-lg font-light">
                  <span className="font-semibold text-ivory">Plot A5, Primelux Estate</span>
                  <br />
                  Abuja, Federal Capital Territory
                </p>
              </div>

              <div className="border-l-2 border-gold/30 pl-6">
                <p className="text-ivory/60 text-sm mb-1">Distance to AMCE</p>
                <p className="text-ivory font-semibold text-lg">
                  2 minutes away
                </p>
              </div>

              <div className="border-l-2 border-gold/30 pl-6">
                <p className="text-ivory/60 text-sm mb-1">Close to</p>
                <p className="text-ivory font-light">
                  Abuja Airport Expressway & Major Business Districts
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div
            className={`relative h-96 lg:h-full min-h-96 rounded-sm overflow-hidden transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
            }`}
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.6378743916543!2d7.479!3d9.07!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104b7c5c1c1c1c1d%3A0x1c1c1c1c1c1c1c1c!2sPrimelux%20Estate%2C%20Abuja!5e0!3m2!1sen!2sng!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen={true}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute inset-0 bg-gold/5" />
          </div>
        </div>
      </div>
    </section>
  );
}
