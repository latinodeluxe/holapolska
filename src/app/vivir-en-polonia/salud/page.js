export const metadata = {
  title: 'Sistema de salud NFZ en Polonia — Guía en español | HolaPolska',
  description: 'Cómo acceder a la sanidad pública en Polonia. NFZ, médico de familia, urgencias y seguros privados.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function Salud() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Vivir en Polonia" volverHref="/vivir-en-polonia" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/vivir-en-polonia" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Vivir en Polonia</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Sistema de salud NFZ en Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">La sanidad pública funciona a través del NFZ (Narodowy Fundusz Zdrowia). Si cotizas al sistema, tienes acceso a médicos, especialistas, hospitales y medicamentos subvencionados.</p>
        </div>
        <div className="space-y-4">
          {[
            { titulo: '¿Quién tiene acceso al NFZ?', desc: 'Los extranjeros que están asegurados en Polonia tienen el mismo acceso que los ciudadanos polacos. Si trabajas con contrato formal (umowa o pracę), tu empleador te registra automáticamente. Si no tienes contrato, puedes inscribirte voluntariamente pagando una cotización mensual directamente al NFZ o a través del ZUS.' },
            { titulo: 'Cómo usar el sistema', desc: 'El primer paso es elegir un médico de familia (lekarz rodzinny o lekarz POZ). Este médico es tu puerta de entrada: te atiende para consultas generales y te da derivaciones (skierowanie) para especialistas. Sin skierowanie, en muchos casos no puedes acceder al especialista por el sistema público.' },
            { titulo: 'Urgencias', desc: 'Las urgencias (SOR — Szpitalny Oddział Ratunkowy) no requieren skierowanie ni cita previa. Para emergencias: 112 (generales) o 999 (ambulancia). También puedes registrar a tu cónyuge e hijos en el NFZ si trabajas con contrato formal.' },
            { titulo: '¿Y si no tengo NFZ todavía?', desc: 'Muchos latinos optan por seguros privados al principio. Medicover, LuxMed o Enel-Med tienen planes desde 100-200 PLN al mes. Son más caros pero dan acceso inmediato a médicos sin lista de espera — útil mientras regularizas tu situación laboral.' },
          ].map((item) => (
            <div key={item.titulo} className="bg-white rounded-2xl p-6 border border-navy/8">
              <h2 className="font-display text-base font-bold text-navy mb-2">{item.titulo}</h2>
              <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
          <div className="bg-navy rounded-2xl p-6 space-y-3">
            {['Elige tu médico de familia lo antes posible — es tu puerta de entrada a todo el sistema público.', 'La tarjeta EKUZ (European Health Insurance Card) te cubre para emergencias si vienes de un país de la UE.', 'Si tu empleador no te ha registrado en el NFZ después del primer mes, pregúntale directamente — es su obligación legal.'].map((tip, i) => (
              <p key={i} className="text-sm text-white/70">💡 {tip}</p>
            ))}
          </div>
          <DisclaimerLegal modulo="Esta guía sobre el sistema de salud" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
