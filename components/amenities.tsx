'use client';

import { Wifi, Zap, Lock, UtensilsCrossed, Snowflake, ParkingCircle } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const amenitiesData = [
  {
    icon: Wifi,
    title: 'High-Speed Wi-Fi',
    description: 'Stay connected with blazing-fast fiber internet',
  },
  {
    icon: Zap,
    title: '24/7 Power Supply',
    description: 'Uninterrupted electricity via solar + generator backup',
  },
  {
    icon: Lock,
    title: 'Premium Security',
    description: 'Gated estate with 24-hour on-site security personnel',
  },
  {
    icon: UtensilsCrossed,
    title: 'Fully Furnished Kitchen',
    description: 'Modern kitchen stocked with all essentials',
  },
  {
    icon: Snowflake,
    title: 'Climate Controlled',
    description: 'Individually controlled A/C in every room',
  },
  {
    icon: ParkingCircle,
    title: 'Private Parking',
    description: 'Secure parking within the estate premises',
  },
];

export function Amenities() {
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
      id="amenities"
      ref={ref}
      className="py-24 bg-charcoal px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl text-ivory mb-4">
            Every Detail, Considered
          </h2>
          <p className="text-ivory/60 text-lg max-w-2xl mx-auto">
            Luxury amenities designed for your comfort and convenience
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenitiesData.map((amenity, index) => {
            const Icon = amenity.icon;
            return (
              <div
                key={amenity.title}
                className={`group bg-charcoal border border-gold/20 hover:border-gold/50 p-8 rounded-sm transition-all duration-500 hover:shadow-lg hover:shadow-gold/10 ${
                  isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                }`}
                style={{
                  transitionDelay: isInView ? `${index * 100}ms` : '0ms',
                }}
              >
                <Icon className="w-10 h-10 text-gold mb-4 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-ivory font-display text-xl mb-3 font-semibold">
                  {amenity.title}
                </h3>
                <p className="text-ivory/60 font-light">
                  {amenity.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
