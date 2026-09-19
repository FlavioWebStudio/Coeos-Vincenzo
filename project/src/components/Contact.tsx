import { useState } from 'react';
import { supabase } from '@/lib/supabase';
import { Send, Check, Loader2 } from 'lucide-react';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [form, setForm] = useState({ name: '', email: '', company: '', message: '' });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name || !form.email) return;
    setStatus('loading');
    try {
      const { error } = await supabase.from('contact_requests').insert({
        name: form.name,
        email: form.email,
        company: form.company || null,
        message: form.message || null,
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', company: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <section id="contact" className="relative py-32 px-6">
      <div className="mx-auto max-w-2xl">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-ink-700 bg-ink-900/50 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse-slow" />
            <span className="text-xs font-medium text-ink-300 tracking-wide">
              Disponible prochainement
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-ink-100">
            Demandez plus d'informations
          </h2>
          <p className="mt-3 text-ink-400">
            COEOS n'est pas encore disponible à l'installation. Laissez-nous vos coordonnées.
          </p>
        </div>

        {status === 'success' ? (
          <div className="rounded-2xl border border-ink-700 bg-ink-850 p-10 text-center">
            <div className="w-12 h-12 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center mx-auto mb-4">
              <Check className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-lg font-medium text-ink-100 mb-2">Message reçu</h3>
            <p className="text-sm text-ink-400">
              Nous reviendrons vers vous dès que possible.
            </p>
            <button
              onClick={() => setStatus('idle')}
              className="mt-6 text-sm text-accent hover:text-accent-light transition-colors"
            >
              Envoyer une autre demande
            </button>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl border border-ink-800 bg-ink-900 p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div>
                <label className="block text-sm text-ink-300 mb-1.5">Nom</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full rounded-lg bg-ink-850 border border-ink-700 px-4 py-2.5 text-sm text-ink-100 placeholder-ink-500 focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="Votre nom"
                />
              </div>
              <div>
                <label className="block text-sm text-ink-300 mb-1.5">Email</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full rounded-lg bg-ink-850 border border-ink-700 px-4 py-2.5 text-sm text-ink-100 placeholder-ink-500 focus:outline-none focus:border-accent/50 transition-colors"
                  placeholder="vous@entreprise.com"
                />
              </div>
            </div>
            <div>
              <label className="block text-sm text-ink-300 mb-1.5">
 Entreprise <span className="text-ink-500">(optionnel)</span>
              </label>
              <input
                type="text"
                value={form.company}
                onChange={(e) => setForm({ ...form, company: e.target.value })}
                className="w-full rounded-lg bg-ink-850 border border-ink-700 px-4 py-2.5 text-sm text-ink-100 placeholder-ink-500 focus:outline-none focus:border-accent/50 transition-colors"
                placeholder="Nom de votre entreprise"
              />
            </div>
            <div>
              <label className="block text-sm text-ink-300 mb-1.5">
                Message <span className="text-ink-500">(optionnel)</span>
              </label>
              <textarea
                rows={3}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                className="w-full rounded-lg bg-ink-850 border border-ink-700 px-4 py-2.5 text-sm text-ink-100 placeholder-ink-500 focus:outline-none focus:border-accent/50 transition-colors resize-none"
                placeholder="Votre demande"
              />
            </div>

            {status === 'error' && (
              <p className="text-sm text-red-400">
                Une erreur est survenue. Veuillez réessayer.
              </p>
            )}

            <button
              type="submit"
              disabled={status === 'loading'}
              className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-accent hover:bg-accent-dark text-white text-sm font-medium px-5 py-3 transition-colors disabled:opacity-50"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  Envoyer la demande
                  <Send className="w-3.5 h-3.5" />
                </>
              )}
            </button>
          </form>
        )}
      </div>
    </section>
  );
}
