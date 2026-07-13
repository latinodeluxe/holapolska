export const metadata = {
  title: 'Herramientas para vivir en Polonia | HolaPolska',
  description: 'Conversor de PLN, frases utiles en polaco, números de emergencia y mas herramientas practicas para el dia a dia en Polonia.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const temas = [
  { título: 'Conversor PLN', desc: 'Convierte entre zlotys y las principales monedas latinas', icono: '💱', href: '/herramientas/conversor-pln', disponible: true },
  { título: 'Frases utiles en polaco', desc: 'Las frases mas practicas para el dia a dia', icono: '💬', href: '/herramientas/frases-utiles', disponible: true },
  { título: 'Números de emergencia', desc: 'Los números que debes tener guardados', icono: '🚨', href: '/herramientas/números-emergencia', disponible: true },
  { título: 'Traductor de documentos', desc: 'Guia para traducir documentos oficiales', icono: '📄', href: '#', disponible: false },
  { título: 'Buscador de oficinas', desc: 'Encuentra el Urzad o banco mas cercano', icono: '📍', href: '#', disponible: false },
  { título: 'Plantillas y modelos', desc: 'Cartas, solicitudes y documentos listos para usar', icono: '📝', href: '#', disponible: false },
]

export default function Herramientas() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Inicio" volverHref="/" />
      <div className="max-w-6xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-10">
          <div className="text-xs font-bold text-mango tracking-widest uppercase mb-2">Modulo</div>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mb-3">Herramientas</h1>
          <p className="text-navy/50 text-base max-w-xl">Recursos practicos para tu dia a dia en Polonia: conversores, frases, números utiles y mas.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {temas.map((tema) => (
            tema.disponible ? (
              <a key={tema.título} href={tema.href} className="bg-white rounded-2xl p-5 border border-navy/8 flex items-start gap-4 hover:border-mango/40 hover:shadow-sm transition-all group">
                <div className="w-11 h-11 rounded-xl bg-mango-light flex items-center justify-center text-xl flex-shrink-0">{tema.icono}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-navy text-sm mb-1 group-hover:text-mango transition-colors">{tema.título}</h3>
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
