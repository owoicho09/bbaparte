'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { ZoomIn } from 'lucide-react';

const galleryItems = [
  { src: '/gallery-1.jpg', label: 'Living Room', aspect: 'aspect-square' },
  { src: '/b&b1.JPG', label: 'Master Bedroom', aspect: 'aspect-[3/4]' },
  { src: '/gallery-3.jpg', label: 'Kitchen', aspect: 'aspect-[4/3]' },
  { src: '/gallery-4.jpg', label: 'Bathroom', aspect: 'aspect-square' },
  { src: '/gallery-5.jpg', label: 'Workspace', aspect: 'aspect-[4/3]' },
  { src: '/b&b2.JPG', label: 'Exterior', aspect: 'aspect-[3/4]' },
];

export function Gallery() {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="gallery"
      ref={ref}
      className="py-24 bg-charcoal px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-display text-4xl sm:text-5xl text-ivory mb-4">
            Inside B&B Apartments
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {galleryItems.map((item, index) => (
            <div
              key={item.label}
              className={`group relative overflow-hidden rounded-sm ${item.aspect} transition-all duration-500 ${
                isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{
                transitionDelay: isInView ? `${index * 80}ms` : '0ms',
              }}
            >
              <Image
                src={item.src}
                alt={item.label}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-charcoal/80 via-charcoal/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <div className="w-full p-6 flex items-center justify-between">
                  <div>
                    <p className="text-gold font-display text-lg font-semibold">
                      {item.label}
                    </p>
                  </div>
                  <ZoomIn className="text-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
