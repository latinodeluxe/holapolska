export const metadata = {
  title: 'Impuestos PIT en Polonia — Guía en español | HolaPolska',
  description: 'Cómo declarar la renta en Polonia. Tramos del PIT, Twój e-PIT y consejos para extranjeros.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function Impuestos() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Vivir en Polonia" volverHref="/vivir-en-polonia" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/vivir-en-polonia" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Vivir en Polonia</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Impuestos PIT en Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">Si trabajas en Polonia, tarde o temprano tienes que lidiar con el PIT (Podatek dochodowy od osób fizycznych). No es tan complicado como parece.</p>
        </div>
        <div className="space-y-4">
          {[
            { titulo: '¿Tienes que declarar?', desc: 'Si llevas más de 183 días al año en Polonia, eres residente fiscal polaco y tienes obligación de declarar todos tus ingresos. Si llevas menos tiempo, solo tributan los ingresos generados en territorio polaco.' },
            { titulo: 'Si trabajas con contrato formal', desc: 'Tu empleador hace las retenciones mes a mes y en enero-febrero del año siguiente te entrega el PIT-11 (resumen de retenciones). Con ese documento, haces tu declaración anual antes del 30 de abril usando Twój e-PIT en podatki.gov.pl — desde 2025 los extranjeros pueden usar la app e-Urząd Skarbowy.' },
            { titulo: 'Si tienes ingresos de otro país', desc: 'Polonia tiene convenios de doble imposición con la mayoría de países latinoamericanos, lo que evita que pagues impuestos dos veces. En ese caso, consulta a un asesor fiscal (doradca podatkowy).' },
          ].map((item) => (
            <div key={item.titulo} className="bg-white rounded-2xl p-6 border border-navy/8">
              <h2 className="font-display text-base font-bold text-navy mb-2">{item.titulo}</h2>
              <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
          <div className="bg-navy rounded-2xl p-6">
            <h2 className="font-display text-base font-bold text-white mb-4">Tramos del impuesto 2026</h2>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between">
                <span className="text-sm text-white/70">Hasta 120.000 PLN/año</span>
                <span className="text-xl font-extrabold text-mango">12%</span>
              </div>
              <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between">
                <span className="text-sm text-white/70">Por encima de 120.000 PLN/año</span>
                <span className="text-xl font-extrabold text-magenta">32%</span>
              </div>
              <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between">
                <span className="text-sm text-white/70">Cantidad exenta (kwota wolna)</span>
                <span className="text-xl font-extrabold text-teal">30.000 PLN</span>
              </div>
            </div>
          </div>
          <div className="bg-mango-light rounded-2xl p-6 space-y-3">
            {['Guarda siempre tu PIT-11 — si cambias de trabajo durante el año, tendrás uno de cada empleador.', 'Si ganas menos de 30.000 PLN al año, no pagas impuesto sobre la renta.', 'El plazo para declarar es hasta el 30 de abril de cada año.'].map((tip, i) => (
              <p key={i} className="text-sm text-yellow-800">💡 {tip}</p>
            ))}
          </div>
          <DisclaimerLegal modulo="Esta guía sobre impuestos" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
