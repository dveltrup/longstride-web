import WaitlistForm from "./WaitlistForm";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white font-sans">
      {/* Nav */}
      <header className="sticky top-0 z-50 border-b border-zinc-100 bg-white/90 backdrop-blur">
        <div className="mx-auto max-w-5xl flex items-center justify-between px-6 py-4">
          <span className="text-xl font-bold tracking-tight text-zinc-900">Longstride</span>
          <a
            href="#waitlist"
            className="rounded-full bg-zinc-900 px-5 py-2 text-sm font-medium text-white transition hover:bg-zinc-700"
          >
            Jetzt vormerken
          </a>
        </div>
      </header>

      <main className="flex-1">
        {/* Hero */}
        <section className="mx-auto max-w-5xl px-6 py-24 text-center">
          <p className="mb-4 text-sm font-semibold uppercase tracking-widest text-emerald-600">
            Nahrungsergänzung für Aktive ab 50
          </p>
          <h1 className="mb-6 text-4xl font-extrabold leading-tight tracking-tight text-zinc-900 sm:text-6xl">
            Länger leben.
            <br />
            Besser bewegen.
          </h1>
          <p className="mx-auto mb-10 max-w-xl text-lg leading-relaxed text-zinc-500">
            Longstride liefert klinisch geprüfte Supplements, abgestimmt auf den
            Körper ab 50 — für Vitalität, Gelenkgesundheit und mentale Stärke.
          </p>
          <a
            href="#waitlist"
            className="inline-block rounded-full bg-emerald-600 px-8 py-3.5 text-base font-semibold text-white shadow transition hover:bg-emerald-500"
          >
            Kostenlos vormerken →
          </a>
          <p className="mt-4 text-sm text-zinc-400">Kein Spam. Nur relevante Updates.</p>
        </section>

        {/* Benefits */}
        <section className="border-y border-zinc-100 bg-zinc-50 py-20">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="mb-12 text-center text-2xl font-bold text-zinc-900">
              Warum Longstride?
            </h2>
            <div className="grid gap-8 sm:grid-cols-3">
              {[
                {
                  icon: "🏃",
                  title: "Beweglichkeit",
                  body: "Gelenk-Formula mit Kollagen, MSM und Vitamin D3 — klinisch validiert für die 50+ Gruppe.",
                },
                {
                  icon: "🧬",
                  title: "Altersgerechte Formeln",
                  body: "Kein Einheitsbrei. Unsere Dosen sind auf den veränderten Metabolismus ab 50 zugeschnitten.",
                },
                {
                  icon: "🔄",
                  title: "Abo ohne Risiko",
                  body: "Monatliche Lieferung, jederzeit pausierbar oder kündbar — ohne Mindestlaufzeit.",
                },
              ].map((item) => (
                <div key={item.title} className="rounded-2xl bg-white p-8 shadow-sm">
                  <div className="mb-4 text-3xl">{item.icon}</div>
                  <h3 className="mb-2 text-lg font-semibold text-zinc-900">{item.title}</h3>
                  <p className="text-sm leading-relaxed text-zinc-500">{item.body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Waitlist */}
        <section id="waitlist" className="mx-auto max-w-5xl px-6 py-24 text-center">
          <h2 className="mb-4 text-3xl font-bold text-zinc-900">Sei unter den Ersten</h2>
          <p className="mb-8 text-lg text-zinc-500">
            Wir starten bald. Trag dich jetzt ein und erhalte einen{" "}
            <strong>exklusiven Einführungsrabatt</strong>.
          </p>
          <WaitlistForm />
        </section>
      </main>

      <footer className="border-t border-zinc-100 py-8 text-center text-xs text-zinc-400">
        © {new Date().getFullYear()} Longstride. Alle Rechte vorbehalten.
      </footer>
    </div>
  );
}
