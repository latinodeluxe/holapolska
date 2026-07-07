export const metadata = {
  title: 'Aprender polaco gratis — Cursos disponibles | HolaPolska',
  description: 'Elige tu curso de polaco: general A1 o especializado para el trabajo. 100% gratis.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const cursos = [
  {
    slug: 'polaco-a1',
    titulo: 'Polaco General A1',
    desc: 'Curso completo desde cero: saludos, familia, comida, trabajo, conversaciones reales. 100 lecciones.',
    stats: '100 lecciones · 729 palabras',
    icono: '🇵🇱',
    color: 'magenta',
  },
  {
    slug: 'polaco-trabajo',
    titulo: 'Polaco para el Trabajo',
    desc: 'Vocabulario especializado para plantas de produccion de alimentos: turnos, seguridad, comandos de linea.',
    stats: '50 lecciones · 350 palabras',
    icono: '🏭',
    color: 'teal',
  },
]

const colorClasses = {
  magenta: { bg: 'bg-magenta-light', icon: 'bg-magenta', text: 'text-magenta' },
  teal: { bg: 'bg-teal-light', icon: 'bg-teal', text: 'text-teal' },
}

export default function Idioma() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Inicio" volverHref="/" />
      <div className="max-w-4xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-10">
          <div className="text-xs font-bold text-magenta tracking-widest uppercase mb-2">Modulo principal</div>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mb-3">Elige tu curso de polaco</h1>
          <p className="text-navy/50 text-base max-w-xl">Puedes avanzar en varios cursos a la vez. Todo el vocabulario suma a tu XP y progreso general.</p>
        </div>

        <div className="grid grid-cols-1 gap-4 mb-10">
          {cursos.map((c) => {
            const col = colorClasses[c.color]
            return (
              <a key={c.slug} href={`/idioma/cursos/${c.slug}`}
                className="bg-white rounded-2xl border border-navy/8 p-6 flex items-center gap-5 hover:border-navy/20 hover:shadow-sm transition-all group">
                <div className={`${col.icon} w-16 h-16 rounded-2xl flex items-center justify-center text-3xl flex-shrink-0`}>{c.icono}</div>
                <div className="flex-1">
                  <h2 className={`font-display text-lg font-bold text-navy mb-1 group-hover:${col.text} transition-colors`}>{c.titulo}</h2>
                  <p className="text-sm text-navy/50 mb-2 leading-relaxed">{c.desc}</p>
                  <span className={`inline-block text-xs font-semibold ${col.text}`}>{c.stats}</span>
                </div>
                <div className="text-navy/20 text-2xl flex-shrink-0">→</div>
              </a>
            )
          })}
        </div>

        <div className="bg-navy rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-base font-semibold text-white mb-1">Ya tienes cuenta?</div>
            <div className="text-sm text-white/40">Ve a tu dashboard para ver tu progreso completo.</div>
          </div>
          <a href="/idioma/dashboard" className="bg-teal text-white text-sm font-bold px-6 py-3 rounded-full whitespace-nowrap hover:bg-teal/90 transition-colors">Ir al dashboard</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
