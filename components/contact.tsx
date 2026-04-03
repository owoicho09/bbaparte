'use client';

import { MessageCircle, Phone, Mail, MapPin } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

export function Contact() {
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
      id="contact"
      ref={ref}
      className="py-24 bg-charcoal px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Background glow effect */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gold rounded-full blur-3xl" />
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        <div
          className={`text-center mb-16 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <h2 className="font-display text-4xl sm:text-5xl text-ivory mb-4">
            Ready to Experience B&B Apartments?
          </h2>
          <p className="text-ivory/70 text-lg font-light">
            Reach out directly to skip the booking fees. Our team responds within minutes.
          </p>
        </div>

        {/* WhatsApp CTA */}
        <div
          className={`flex flex-col items-center gap-8 mb-16 transition-all duration-1000 ${
            isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          <a
            href="https://wa.me/2348026292017?text=Hello%20B%26B%20Apartments%2C%20I%27d%20like%20to%20inquire%20about%20a%20booking."
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-green-600 hover:bg-green-700 text-white px-10 py-4 rounded-sm font-semibold flex items-center gap-3 transition-all duration-300 hover:shadow-lg hover:shadow-green-600/30"
          >
            <MessageCircle size={24} />
            Chat with Us on WhatsApp
          </a>
        </div>

        {/* Contact Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email */}
          <div
            className={`text-center transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isInView ? '200ms' : '0ms' }}
          >
            <Mail className="w-8 h-8 text-gold mx-auto mb-3" />
            <p className="text-ivory/60 text-sm mb-2">Email</p>
            <a
              href="mailto:info@bbaptshop.com"
              className="text-ivory font-semibold hover:text-gold transition-colors"
            >
              info@bbaptshop.com
            </a>
          </div>

          {/* Phone */}
          <div
            className={`text-center transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isInView ? '300ms' : '0ms' }}
          >
            <Phone className="w-8 h-8 text-gold mx-auto mb-3" />
            <p className="text-ivory/60 text-sm mb-2">Phone</p>
            <a
              href="tel:+2348026292017"
              className="text-ivory font-semibold hover:text-gold transition-colors"
            >
              +234 802 629 2017
            </a>
          </div>

          {/* Address */}
          <div
            className={`text-center transition-all duration-1000 ${
              isInView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: isInView ? '400ms' : '0ms' }}
          >
            <MapPin className="w-8 h-8 text-gold mx-auto mb-3" />
            <p className="text-ivory/60 text-sm mb-2">Address</p>
            <p className="text-ivory font-light text-sm">
              Plot A5, Primelux Estate
              <br />
              Abuja, Nigeria
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
