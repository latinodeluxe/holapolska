export const metadata = {
  title: 'Impuestos para extranjeros en Polonia — Guía | HolaPolska',
  description: 'Cómo declarar impuestos siendo extranjero en Polonia. PIT, residencia fiscal y convenios de doble imposición.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function Impuestos() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Legalidad" volverHref="/legalidad" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/legalidad" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Legalidad</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Impuestos para extranjeros en Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">Si trabajas en Polonia más de 183 días al año, eres residente fiscal polaco y debes declarar todos tus ingresos mundiales. Si es menos tiempo, solo tributas por lo que ganas en Polonia.</p>
        </div>
        <div className="space-y-4">
          <div className="bg-navy rounded-2xl p-6">
            <h2 className="font-display text-base font-bold text-white mb-4">Tramos del PIT 2026</h2>
            <div className="grid grid-cols-1 gap-3">
              <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between">
                <span className="text-sm text-white/70">Cantidad exenta (kwota wolna)</span>
                <span className="text-xl font-extrabold text-teal">30.000 PLN</span>
              </div>
              <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between">
                <span className="text-sm text-white/70">Hasta 120.000 PLN/año</span>
                <span className="text-xl font-extrabold text-mango">12%</span>
              </div>
              <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between">
                <span className="text-sm text-white/70">Por encima de 120.000 PLN/año</span>
                <span className="text-xl font-extrabold text-magenta">32%</span>
              </div>
            </div>
          </div>
          {[
            { titulo: 'Tu obligación como extranjero', desc: 'Si trabajas con contrato formal, tu empleador retiene los impuestos mes a mes. En enero-febrero te entrega el PIT-11, que es el resumen de tus retenciones. Con ese documento, haces la declaración anual antes del 30 de abril en Twój e-PIT (podatki.gov.pl).' },
            { titulo: 'Doble imposición', desc: 'Si recibes ingresos de tu país de origen además de los de Polonia, verifica si hay un convenio de doble imposición entre ambos países. La mayoría de países latinoamericanos tienen uno firmado con Polonia. Esto evita que pagues impuestos dos veces por el mismo ingreso.' },
            { titulo: 'Ulga dla młodych (Exención para jóvenes)', desc: 'Si tienes menos de 26 años y ganas menos de 85.528 PLN al año, estás exento del PIT. Es automático — no necesitas solicitarlo. Aplica para contratos umowa o pracę y umowa zlecenie.' },
          ].map((item) => (
            <div key={item.titulo} className="bg-white rounded-2xl p-6 border border-navy/8">
              <h2 className="font-display text-base font-bold text-navy mb-2">{item.titulo}</h2>
              <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
          <div className="bg-mango-light rounded-2xl p-6 space-y-3">
            {['Guarda todos tus PIT-11 — si cambias de trabajo, tendrás uno por cada empleador.', 'Si no declaras a tiempo (30 de abril), hay multas. No lo dejes para el último día.', 'Considera un asesor fiscal (doradca podatkowy) si tu situación es compleja — el costo es bajo y te evita errores.'].map((tip, i) => (
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
