import { Droplet, Building2, Atom } from 'lucide-react';

const domains = [
  {
    icon: Droplet,
    title: 'Énergie & réservoirs',
    description:
      'Simulation des réservoirs pétroliers : pression, écoulement, comportement du fluide en subsurface.',
  },
  {
    icon: Building2,
    title: 'Génie civil',
    description:
      'Calcul de structures sous charge : ponts, ouvrages, fondations, contraintes mécaniques.',
  },
  {
    icon: Atom,
    title: 'Autres domaines',
    description:
      "Une technologie conçue pour tout problème de simulation multi-physique, au-delà d'un seul secteur.",
  },
];

export default function Domains() {
  return (
    <section id="domaines" className="relative py-32 px-6 bg-ink-900/50">
      <div className="mx-auto max-w-5xl">
        <div className="mb-16">
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-100">
            Domaines d'application
          </h2>
          <p className="mt-3 text-ink-400 max-w-lg">
            Un seul moteur. Plusieurs industries.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {domains.map((domain, i) => {
            const Icon = domain.icon;
            return (
              <div
                key={i}
                className="rounded-2xl border border-ink-800 bg-ink-850 p-7 hover:border-ink-700 hover:bg-ink-800 transition-all duration-300"
              >
                <div className="w-11 h-11 rounded-xl bg-ink-800 border border-ink-700 flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-ink-200" strokeWidth={1.5} />
                </div>
                <h3 className="text-base font-medium text-ink-100 mb-2.5">
                  {domain.title}
                </h3>
                <p className="text-sm text-ink-400 leading-relaxed">
                  {domain.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
