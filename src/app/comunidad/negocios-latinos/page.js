export const metadata = {
  title: 'Negocios latinos en Polonia | HolaPolska',
  description: 'Directorio de negocios y servicios de la comunidad hispanohablante en Polonia.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

const WA_LINK = 'https://wa.me/48733205803?text=Hola%20HolaPolska%2C%20me%20interesa%20aparecer%20en%20el%20directorio%20de%20negocios%20latinos.'

const negocios = [
  { nombre: 'Restaurantes y comida latina', desc: 'Busca en Google Maps "restaurante latino [tu ciudad]" o "comida mexicana/colombiana/peruana [ciudad]"', icono: '🍽️' },
  { nombre: 'Tiendas de productos latinos', desc: 'En Varsovia, Cracovia y Gdansk hay tiendas con productos importados de Latinoamerica.', icono: '🛒' },
  { nombre: 'Peluquerias y estetica', desc: 'Cada vez hay mas profesionales latinos ofreciendo servicios de belleza. Busca en grupos de Facebook de tu ciudad.', icono: '✂️' },
  { nombre: 'Servicios profesionales', desc: 'Traductores, asesores legales y contables que hablan espanol. Consulta en grupos de comunidad.', icono: '💼' },
]

export default function NegociosLatinos() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Comunidad" volverHref="/comunidad" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/comunidad" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Comunidad</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-3">Negocios latinos en Polonia</h1>
          <p className="text-navy/50 text-base">Directorio de negocios y servicios de la comunidad hispanohablante. Pronto podras registrar tu negocio aqui.</p>
        </div>

        <div className="grid gap-4 mb-6">
          {negocios.map((n) => (
            <div key={n.nombre} className="bg-white rounded-2xl border border-navy/8 p-5 flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-magenta-light flex items-center justify-center text-xl flex-shrink-0">{n.icono}</div>
              <div>
                <h3 className="font-semibold text-navy mb-1 text-sm">{n.nombre}</h3>
                <p className="text-xs text-navy/50 leading-relaxed">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-base font-semibold text-white mb-1">Tienes un negocio latino en Polonia?</div>
            <div className="text-sm text-white/40">Aparecer aqui es gratis durante el lanzamiento.</div>
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer"
            className="bg-mango text-navy text-sm font-bold px-5 py-2.5 rounded-full whitespace-nowrap hover:bg-mango/90 transition-colors">
            Contactanos
          </a>
        </div>
        <DisclaimerLegal modulo="Este directorio de negocios" />
      </div>
      <Footer />
    </div>
  )
}
