export const metadata = {
  title: 'Tarjeta SIM en Polonia — Operadores y precios | HolaPolska',
  description: 'Los mejores operadores de telefonia en Polonia para hispanohablantes. Orange, Play, T-Mobile.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

const operadores = [
  { nombre: 'Orange', desc: 'Buena cobertura en todo el pais. Planes desde 30 PLN/mes con datos ilimitados. Atención al cliente en ingles disponible.', recomendado: true },
  { nombre: 'Play', desc: 'El operador mas grande de Polonia. Precios competitivos y excelente cobertura en ciudades grandes. App intuitiva.', recomendado: true },
  { nombre: 'T-Mobile', desc: 'Buena opción si ya usas T-Mobile en tu pais de origen. Planes familiares interesantes.', recomendado: false },
  { nombre: 'Plus', desc: 'Buena cobertura rural. Menos opciones para prepago pero planes de contrato competitivos.', recomendado: false },
]

export default function Sim() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Vivir en Polonia" volverHref="/vivir-en-polonia" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/vivir-en-polonia" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Vivir en Polonia</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Como conseguir una tarjeta SIM en Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">Polonia tiene cuatro operadores principales con buena cobertura. Puedes comprar una SIM prepago el mismo dia que llegas sin necesitar documentos especiales.</p>
        </div>
        <div className="space-y-4">
          {operadores.map((op) => (
            <div key={op.nombre} className="bg-white rounded-2xl p-6 border border-navy/8 flex items-start gap-4">
              <div className={`w-11 h-11 rounded-xl flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0 ${op.recomendado ? 'bg-mango' : 'bg-navy/20'}`}>
                {op.nombre[0]}
              </div>
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-2">
                  <h2 className="font-display text-base font-bold text-navy">{op.nombre}</h2>
                  {op.recomendado && <span className="text-xs bg-mango-light text-yellow-800 px-2 py-0.5 rounded-full font-semibold">Recomendado</span>}
                </div>
                <p className="text-navy/65 leading-relaxed text-sm">{op.desc}</p>
              </div>
            </div>
          ))}
          <div className="bg-teal-light rounded-2xl p-6 space-y-3">
            {['Puedes comprar SIM prepago en cualquier kiosco, supermercado o tienda del operador sin documentos.', 'Para contrato necesitaras pasaporte y en algunos casos el PESEL.', 'Los planes de 30-40 PLN/mes suelen incluir datos ilimitados y llamadas dentro de Polonia.'].map((tip, i) => (
              <p key={i} className="text-sm text-teal-900">💡 {tip}</p>
            ))}
          </div>
        </div>
        <DisclaimerLegal modulo="Esta guia sobre tarjetas SIM" />
      </div>
      <Footer />
    </div>
  )
}
