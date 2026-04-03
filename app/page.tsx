import { Navigation } from '@/components/navigation';
import { Hero } from '@/components/hero';
import { About } from '@/components/about';
import { Amenities } from '@/components/amenities';
import { Gallery } from '@/components/gallery';
import { Location } from '@/components/location';
import { Contact } from '@/components/contact';
import { Footer } from '@/components/footer';
import { WhatsAppFloat } from '@/components/whatsapp-float';

export default function Home() {
  return (
    <main className="bg-charcoal">
      <Navigation />
      <Hero />
      <About />
      <Amenities />
      <Gallery />
      <Location />
      <Contact />
      <Footer />
      <WhatsAppFloat />
    </main>
  );
}
