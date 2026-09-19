import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import Technology from '@/components/Technology';
import Domains from '@/components/Domains';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-ink-950">
      <Navbar />
      <main>
        <Hero />
        <Technology />
        <Domains />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
