export const metadata = {
  title: 'Fiestas y festividades en Polonia | HolaPolska',
  description: 'El calendario festivo polaco explicado en espanol. Navidad, Pascua, Todos los Santos y mas.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

const fiestas = [
  { nombre: 'Boże Narodzenie — Navidad (24-26 dic)', desc: 'La fiesta mas importante del ano. La Nochebuena (Wigilia) es el momento central: cena familiar con 12 platos tradicionales e intercambio de regalos esa misma noche.', icono: '🎄' },
  { nombre: 'Wielkanoc — Semana Santa y Pascua', desc: 'El Lunes de Pascua (Smigus-Dyngus) tiene una tradicion unica: la gente se moja con agua en la calle. Es festivo nacional y las tiendas cierran el domingo y lunes.', icono: '🐣' },
  { nombre: 'Wszystkich Swietych — Todos los Santos (1 nov)', desc: 'Las familias visitan los cementerios, encienden velas y llevan flores. Los cementerios polacos en esta fecha son visualmente impresionantes.', icono: '🕯️' },
  { nombre: 'Swieto Niepodleglosci — Independencia (11 nov)', desc: 'Fiesta nacional muy importante. Conmemora la recuperacion de la independencia polaca en 1918. Hay desfiles y actos oficiales especialmente en Varsovia.', icono: '🇵🇱' },
  { nombre: 'Nowy Rok — Año Nuevo (1 enero)', desc: 'Festivo nacional. Las ciudades grandes tienen fuegos artificiales y fiestas en espacios publicos.', icono: '🎆' },
]

export default function Fiestas() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Cultura" volverHref="/cultura" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/cultura" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Cultura</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Fiestas y festividades en Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">Conocer el calendario festivo polaco te ayuda a planificar y participar de momentos culturales que los polacos valoran muchisimo.</p>
        </div>
        <div className="space-y-4">
          {fiestas.map((f) => (
            <div key={f.nombre} className="bg-white rounded-2xl p-6 border border-navy/8 flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">{f.icono}</div>
              <div>
                <h2 className="font-display text-base font-bold text-navy mb-2">{f.nombre}</h2>
                <p className="text-navy/65 leading-relaxed text-sm">{f.desc}</p>
              </div>
            </div>
          ))}
          <div className="bg-navy rounded-2xl p-6 space-y-3">
            {['En festivos nacionales la mayoria de tiendas, bancos y oficinas cierran. Planifica con anticipacion.', 'Los supermercados tienen restricciones de apertura los domingos en Polonia.', 'Participar en las tradiciones locales es una de las mejores formas de conectar con los polacos.'].map((tip, i) => (
              <p key={i} className="text-sm text-white/70">💡 {tip}</p>
            ))}
          </div>
        </div>
        <DisclaimerLegal modulo="Este contenido sobre fiestas en Polonia" />
      </div>
      <Footer />
    </div>
  )
}
