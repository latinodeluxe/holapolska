export const metadata = {
  title: 'Legalidad en Polonia — Guia para hispanohablantes | HolaPolska',
  description: 'Permisos de residencia, visas, contratos de trabajo y derechos laborales en Polonia. Todo explicado en espanol.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const temas = [
  { titulo: 'Permiso de residencia (Karta Pobytu)', desc: 'Tipos, requisitos y proceso paso a paso', icono: '📄', href: '/legalidad/permiso-residencia', disponible: true },
  { titulo: 'Contrato de trabajo', desc: 'Tipos de contrato, derechos y obligaciones', icono: '📝', href: '/legalidad/contrato-trabajo', disponible: true },
  { titulo: 'ZUS — Seguridad social', desc: 'Como funciona el sistema de cotizaciones en Polonia', icono: '🛡️', href: '/legalidad/zus', disponible: true },
  { titulo: 'Tipos de visa', desc: 'Visas de trabajo, estudio y residencia', icono: '🛂', href: '#', disponible: false },
  { titulo: 'NFZ — Seguro medico', desc: 'Como acceder al seguro de salud publico', icono: '🏥', href: '#', disponible: false },
  { titulo: 'Impuestos y PIT', desc: 'Como declarar impuestos siendo extranjero', icono: '💰', href: '#', disponible: false },
  { titulo: 'Inspeccion de trabajo', desc: 'Donde denunciar abusos laborales', icono: '⚖️', href: '#', disponible: false },
  { titulo: 'Multas y sanciones', desc: 'Que hacer si recibes una multa en Polonia', icono: '🚨', href: '#', disponible: false },
]

export default function Legalidad() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Inicio" volverHref="/" />
      <div className="max-w-6xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-10">
          <div className="text-xs font-bold text-teal tracking-widest uppercase mb-2">Modulo</div>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mb-3">Legalidad</h1>
          <p className="text-navy/50 text-base max-w-xl">Permisos, visas, contratos y derechos explicados en espanol para que puedas moverte con seguridad en Polonia.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {temas.map((tema) => (
            tema.disponible ? (
              <a key={tema.titulo} href={tema.href} className="bg-white rounded-2xl p-5 border border-navy/8 flex items-start gap-4 hover:border-teal/40 hover:shadow-sm transition-all group">
                <div className="w-11 h-11 rounded-xl bg-teal-light flex items-center justify-center text-xl flex-shrink-0">{tema.icono}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-navy text-sm mb-1 group-hover:text-teal transition-colors">{tema.titulo}</h3>
                  <p className="text-xs text-navy/45 leading-relaxed">{tema.desc}</p>
                </div>
              </a>
            ) : (
              <div key={tema.titulo} className="bg-white/60 rounded-2xl p-5 border border-navy/5 flex items-start gap-4 opacity-50">
                <div className="w-11 h-11 rounded-xl bg-navy/5 flex items-center justify-center text-xl flex-shrink-0">{tema.icono}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-navy text-sm mb-1">{tema.titulo}</h3>
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
