import { useEffect, useState } from 'react';
import { Boxes, ArrowRight } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-ink-950/80 backdrop-blur-md border-b border-ink-800'
          : 'bg-transparent border-b border-transparent'
      }`}
    >
      <nav className="mx-auto max-w-6xl px-6 h-16 flex items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5 group">
          <div className="w-8 h-8 rounded-lg bg-ink-800 border border-ink-700 flex items-center justify-center transition-colors group-hover:border-accent/50">
            <Boxes className="w-4.5 h-4.5 text-accent" strokeWidth={2} />
          </div>
          <span className="text-lg font-semibold tracking-tight text-ink-100">
            COEOS
          </span>
        </a>

        <div className="flex items-center gap-8">
          <a
            href="#technologie"
            className="text-sm text-ink-300 hover:text-ink-100 transition-colors hidden sm:inline-block"
          >
            Technologie
          </a>
          <a
            href="#domaines"
            className="text-sm text-ink-300 hover:text-ink-100 transition-colors hidden sm:inline-block"
          >
            Domaines
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-ink-100 px-4 py-2 rounded-lg border border-ink-700 hover:border-accent/50 hover:bg-ink-800/50 transition-all"
          >
            Nous contacter
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>
      </nav>
    </header>
  );
}
