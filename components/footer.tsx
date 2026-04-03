import { Instagram } from 'lucide-react';

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-charcoal/50 border-t border-gold/20 px-4 sm:px-6 lg:px-8 py-12">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="text-gold font-display text-2xl font-bold mb-2">
              B&B Apartments
            </div>
            <p className="text-ivory/60 text-sm font-light">
              Luxury Shortlet Apartments
              <br />
              Primelux Estate, Abuja
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-ivory font-semibold mb-4 uppercase text-sm tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-ivory/60 hover:text-gold transition-colors text-sm"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-ivory/60 hover:text-gold transition-colors text-sm"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#amenities"
                  className="text-ivory/60 hover:text-gold transition-colors text-sm"
                >
                  Amenities
                </a>
              </li>
              <li>
                <a
                  href="#gallery"
                  className="text-ivory/60 hover:text-gold transition-colors text-sm"
                >
                  Gallery
                </a>
              </li>
            </ul>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-ivory font-semibold mb-4 uppercase text-sm tracking-widest">
              Follow Us
            </h4>
            <div className="flex gap-4">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/60 hover:text-gold transition-colors"
                aria-label="Instagram"
              >
                <Instagram size={20} />
              </a>
              <a
                href="https://wa.me/2348026292017"
                target="_blank"
                rel="noopener noreferrer"
                className="text-ivory/60 hover:text-gold transition-colors"
                aria-label="WhatsApp"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M17.507 14.307l-.009.075c-2.981-1.797-5.385-5.402-5.386-5.404.25-.292-.057-.608-.408-.608-.048 0-.096.006-.144.018-.332.074-1.271.31-1.271 1.441 0 .925.604 2.945 2.132 5.279.342.527.954 1.674 2.191 2.713.887.81 1.646 1.204 2.077 1.344.411.127.925.129 1.371-.11.403-.215.756-.593.943-.982l.024-.051c.099-.199.187-.408.244-.619.057-.212.033-.423-.058-.607z" />
                  <path d="M12.011 2C6.507 2 2 6.507 2 12s4.507 10 10.011 10h.023C17.493 22 22 17.493 22 12s-4.507-10-10-10zm0 18c-4.41 0-8-3.589-8-8s3.59-8 8-8 8 3.589 8 8-3.59 8-8 8z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gold/20 pt-8">
          <p className="text-ivory/40 text-sm text-center font-light">
            © {currentYear} B&B Apartments. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
