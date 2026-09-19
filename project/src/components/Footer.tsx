import { Boxes, Mail } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-ink-800 py-10 px-6">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2.5">
          <div className="w-7 h-7 rounded-lg bg-ink-800 border border-ink-700 flex items-center justify-center">
            <Boxes className="w-4 h-4 text-accent" strokeWidth={2} />
          </div>
          <span className="text-sm font-medium text-ink-200">COEOS</span>
        </div>

        <div className="flex items-center gap-6">
          <a
            href="mailto:contact@coeos.io"
            className="inline-flex items-center gap-1.5 text-sm text-ink-400 hover:text-ink-200 transition-colors"
          >
            <Mail className="w-3.5 h-3.5" />
            contact@coeos.io
          </a>
        </div>

        <p className="text-xs text-ink-500">
          © {new Date().getFullYear()} COEOS. Tous droits réservés.
        </p>
      </div>
    </footer>
  );
}
