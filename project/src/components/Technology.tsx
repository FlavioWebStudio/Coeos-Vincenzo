import { Cpu, RefreshCw, Layers } from 'lucide-react';

const points = [
  {
    icon: Layers,
    title: 'Éléments finis',
    description:
      "COEOS décompose un système complexe en milliers d'éléments et calcule son comportement sous contrainte.",
  },
  {
    icon: Cpu,
    title: 'Jumeau numérique',
    description:
      "Une représentation numérique vivante qui compare ses prédictions à la réalité et s'ajuste en continu.",
  },
  {
    icon: RefreshCw,
    title: 'Auto-correction',
    description:
      'Le modèle affine ses résultats de lui-même, sans intervention manuelle, à chaque cycle de calcul.',
  },
];

export default function Technology() {
  return (
    <section id="technologie" className="relative py-32 px-6">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-100">
            Comment ça fonctionne
          </h2>
          <p className="mt-3 text-ink-400 max-w-lg">
            Trois principes simples. Aucun jargon.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-ink-800 rounded-2xl overflow-hidden border border-ink-800">
          {points.map((point, i) => {
            const Icon = point.icon;
            return (
              <div
                key={i}
                className="bg-ink-900 p-8 hover:bg-ink-850 transition-colors duration-300 group"
              >
                <div className="w-10 h-10 rounded-lg bg-ink-800 border border-ink-700 flex items-center justify-center mb-5 group-hover:border-accent/40 transition-colors">
                  <Icon className="w-5 h-5 text-accent" strokeWidth={1.75} />
                </div>
                <h3 className="text-base font-medium text-ink-100 mb-2">
                  {point.title}
                </h3>
                <p className="text-sm text-ink-400 leading-relaxed">
                  {point.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
