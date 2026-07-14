export const metadata = {
  title: 'Vivir en Polonia — Guia completa para hispanohablantes | HolaPolska',
  description: 'Todo lo que necesitas saber para vivir en Polonia: PESEL, cuenta bancaria, SIM, alquiler, salud y mas. En espanol y gratis.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const temas = [
  { título: 'PESEL', desc: 'El número de identificacion que necesitas para todo en Polonia', icono: '🪪', href: '/vivir-en-polonia/pesel', disponible: true },
  { título: 'Cuenta bancaria', desc: 'Como abrir una cuenta siendo extranjero', icono: '🏦', href: '/vivir-en-polonia/banco', disponible: true },
  { título: 'Tarjeta SIM', desc: 'Operadores, precios y recomendaciones', icono: '📱', href: '/vivir-en-polonia/sim', disponible: true },
  { título: 'Alquiler de apartamento', desc: 'Cómo buscar piso y qué revisar antes de firmar', icono: '🏠', href: '/vivir-en-polonia/alquiler', disponible: true },
  { título: 'Transporte público', desc: 'Buses, tranvías y metro en las principales ciudades', icono: '🚌', href: '/vivir-en-polonia/transporte', disponible: true },
  { título: 'Sistema de salud NFZ', desc: 'Cómo acceder a la sanidad pública en Polonia', icono: '🏥', href: '/vivir-en-polonia/salud', disponible: true },
  { título: 'Búsqueda de empleo', desc: 'Portales, contratos y derechos laborales básicos', icono: '💼', href: '/vivir-en-polonia/empleo', disponible: true },
  { título: 'Impuestos PIT', desc: 'Cómo declarar la renta en Polonia', icono: '📋', href: '/vivir-en-polonia/impuestos', disponible: true },
  { título: 'Escuelas y educacion', desc: 'Sistema educativo polaco para familias con hijos', icono: '🎒', href: '/vivir-en-polonia/escuelas', disponible: true },
]

export default function VivirEnPolonia() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Inicio" volverHref="/" />
      <div className="max-w-6xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-10">
          <div className="text-xs font-bold text-mango tracking-widest uppercase mb-2">Modulo</div>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mb-3">Vivir en Polonia</h1>
          <p className="text-navy/50 text-base max-w-xl">Todo lo que necesitas para instalarte y vivir bien en Polonia. Guias practicas, paso a paso y en espanol.</p>
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
