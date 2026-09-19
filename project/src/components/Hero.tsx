export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Subtle background grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            'linear-gradient(to right, #ffffff 1px, transparent 1px), linear-gradient(to bottom, #ffffff 1px, transparent 1px)',
          backgroundSize: '64px 64px',
        }}
      />
      {/* Radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-4xl px-6 text-center">
        <div className="animate-fade-in inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ink-700 bg-ink-900/50 mb-8">
          <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
          <span className="text-xs font-medium text-ink-300 tracking-wide">
            Disponible prochainement
          </span>
        </div>

        <h1 className="animate-fade-in-up text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight leading-[1.1] text-ink-100 text-balance">
          La simulation numérique,
          <br />
          <span className="text-ink-400">rendue vivante.</span>
        </h1>

        <p className="animate-fade-in-up mt-6 text-lg text-ink-400 max-w-xl mx-auto leading-relaxed">
          COEOS simule le comportement de systèmes complexes par éléments finis.
          Un jumeau numérique qui apprend et se corrige en continu.
        </p>

        <div className="animate-fade-in-up mt-10 flex items-center justify-center gap-4">
          <a
            href="#technologie"
            className="text-sm text-ink-300 hover:text-ink-100 transition-colors"
          >
            En savoir plus
          </a>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-ink-950 to-transparent pointer-events-none" />
    </section>
  );
}
