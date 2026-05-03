import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Features from '@/components/Features';
import Courses from '@/components/Courses';
import Pricing from '@/components/Pricing';
import Waitlist from '@/components/Waitlist';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <Features />
      <Courses />
      <Pricing />
      <Waitlist />
      <Contact />
      <Footer />
    </main>
  );
}
