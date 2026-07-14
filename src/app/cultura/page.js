export const metadata = {
  title: 'Cultura polaca — Guia para hispanohablantes | HolaPolska',
  description: 'Costumbres, fiestas y normas sociales de Polonia explicadas en espanol para integrarte sin errores.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const temas = [
  { título: 'Costumbres polacas', desc: 'Lo que sorprende a los latinos al llegar a Polonia', icono: '🎭', href: '/cultura/costumbres', disponible: true },
  { título: 'Fiestas y festividades', desc: 'Navidad, Pascua, Todos los Santos y mas celebraciones', icono: '🎉', href: '/cultura/fiestas', disponible: true },
  { título: 'Normas sociales', desc: 'Que hacer y que evitar para integrarte sin errores', icono: '🤝', href: '/cultura/normas-sociales', disponible: true },
  { título: 'Sistema educativo', desc: 'Cómo funciona la escuela en Polonia', icono: '🎒', href: '/cultura/sistema-educativo', disponible: true },
  { título: 'Música polaca', desc: 'Chopin, hip-hop, disco polo y lo que suena hoy en Polonia', icono: '🎵', href: '/cultura/musica', disponible: true },
  { título: 'Gastronomía polaca', desc: 'Platos típicos, ingredientes y dónde comer bien', icono: '🥟', href: '/cultura/gastronomia', disponible: true },
]

export default function Cultura() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Inicio" volverHref="/" />
      <div className="max-w-6xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-10">
          <div className="text-xs font-bold text-navy/40 tracking-widest uppercase mb-2">Modulo</div>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mb-3">Cultura</h1>
          <p className="text-navy/50 text-base max-w-xl">Costumbres, fiestas y normas sociales de Polonia para que la integración sea mas fácil y genuina.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {temas.map((tema) => (
            tema.disponible ? (
              <a key={tema.título} href={tema.href} className="bg-white rounded-2xl p-5 border border-navy/8 flex items-start gap-4 hover:border-navy/20 hover:shadow-sm transition-all group">
                <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center text-xl flex-shrink-0">{tema.icono}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-navy text-sm mb-1 group-hover:text-magenta transition-colors">{tema.título}</h3>
                  <p className="text-xs text-navy/45 leading-relaxed">{tema.desc}</p>
                </div>
              </a>
            ) : (
              <div key={tema.título} className="bg-white/60 rounded-2xl p-5 border border-navy/5 flex items-start gap-4 opacity-50">
                <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center text-xl flex-shrink-0">{tema.icono}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-navy text-sm mb-1">{tema.título}</h3>
                  <p className="text-xs text-navy/45 leading-relaxed">{tema.desc}</p>
                  <span className="inline-block mt-2 text-xs bg-navy/5 text-navy/40 px-2 py-0.5 rounded-full">Proximamente</span>
                </div>
              </div>
            )
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
