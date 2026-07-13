export const metadata = {
  title: 'Contrato de trabajo en Polonia — Tipos y derechos | HolaPolska',
  description: 'Todo sobre contratos laborales en Polonia: umowa o prace, zlecenie, derechos y obligaciones.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function ContratoTrabajo() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Legalidad" volverHref="/legalidad" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/legalidad" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Legalidad</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Contratos de trabajo en Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">En Polonia existen varios tipos de contrato con derechos y obligaciones distintas. Conocerlos te ayuda a negociar mejor y proteger tus derechos.</p>
        </div>
        <div className="space-y-4">
          {[
            { título: 'Umowa o pracę — Contrato laboral', desc: 'El contrato mas protegido. Da derecho a vacaciones pagas (26 días/ano), baja por enfermedad, contribuciones al ZUS y protección ante despido. Es el que debes preferir siempre que sea posible.', color: 'bg-teal', tag: 'Mas recomendado' },
            { título: 'Umowa zlecenie — Contrato de mandato', desc: 'Contrato civil flexible. Incluye contribuciones basicas al ZUS pero menos protecciones que el laboral. Común en trabajos temporales, estudiantes y freelance.', color: 'bg-mango', tag: 'Frecuente' },
            { título: 'Umowa o dzielo — Contrato de obra', desc: 'Para trabajos puntuales con resultado específico (diseno, traduccion, etc.). Sin contribuciones al ZUS en muchos casos. Ofrece menos protección.', color: 'bg-navy', tag: 'Menor protección' },
          ].map((item) => (
            <div key={item.título} className="bg-white rounded-2xl p-6 border border-navy/8">
              <div className="flex items-center gap-3 mb-3">
                <div className={`${item.color} w-3 h-3 rounded-full flex-shrink-0`}></div>
                <h2 className="font-display text-base font-bold text-navy">{item.título}</h2>
                <span className="text-xs bg-navy/5 text-navy/50 px-2 py-0.5 rounded-full ml-auto">{item.tag}</span>
              </div>
              <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
          <div className="bg-white rounded-2xl p-6 border border-navy/8">
            <h2 className="font-display text-base font-bold text-navy mb-4">Tus derechos basicos</h2>
            <ul className="space-y-2">
              {['Salario mínimo garantizado (actualmente 4300 PLN bruto/mes)', '26 días de vacaciones anuales con umowa o prace', 'Baja por enfermedad pagada por el empleador y luego por el ZUS', 'Derecho a recibir el contrato por escrito antes de empezar', 'Periodo de preaviso según antiguedad (de 2 semanas a 3 meses)'].map((d, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-navy/65">
                  <span className="text-teal mt-0.5">✓</span>{d}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-magenta-light rounded-2xl p-6">
            <p className="text-sm text-pink-900 font-semibold mb-2">⚠️ Importante</p>
            <p className="text-sm text-pink-900">Nunca empieces a trabajar sin contrato firmado. Si tu empleador no te da contrato, puedes denunciarlo ante la Inspekcja Pracy (Inspeccion de Trabajo).</p>
          </div>
        </div>
        <DisclaimerLegal modulo="Esta guia sobre contratos de trabajo" />
      </div>
      <Footer />
    </div>
  )
}
