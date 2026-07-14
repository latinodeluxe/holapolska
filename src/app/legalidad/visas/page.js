export const metadata = {
  title: 'Tipos de visa en Polonia — Guía en español | HolaPolska',
  description: 'Visas de trabajo, estudio y residencia en Polonia. Requisitos, plazos y diferencias entre cada tipo.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function Visas() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Legalidad" volverHref="/legalidad" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/legalidad" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Legalidad</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Tipos de visa para Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">El tipo de visa que necesitas depende de tu nacionalidad, el motivo de tu viaje y cuánto tiempo planeas quedarte. Aquí te explicamos las opciones más comunes para hispanohablantes.</p>
        </div>
        <div className="space-y-4">
          {[
            { titulo: 'Visa Schengen (tipo C)', desc: 'Permite estancias de hasta 90 días en un periodo de 180 días. Sirve para turismo, visitas familiares o viajes de negocios cortos. No permite trabajar. Se solicita en el consulado polaco de tu país de origen.', tag: 'Corta duración', color: 'bg-mango' },
            { titulo: 'Visa nacional (tipo D)', desc: 'Permite estancias superiores a 90 días. Es la visa que necesitas si vienes a trabajar, estudiar o reunirte con tu familia. Con esta visa puedes entrar a Polonia y luego solicitar la Karta Pobytu (permiso de residencia).', tag: 'Larga duración', color: 'bg-teal' },
            { titulo: 'Visa de trabajo', desc: 'Es una visa tipo D vinculada a un permiso de trabajo (zezwolenie na pracę) que tu empleador polaco debe tramitar antes. Sin el permiso de trabajo aprobado, no se concede la visa. El proceso completo puede tardar entre 1 y 3 meses.', tag: 'Requiere empleador', color: 'bg-magenta' },
            { titulo: 'Visa de estudios', desc: 'Para estudiantes aceptados en una universidad polaca. Requiere carta de admisión, comprobante de medios económicos, seguro médico y alojamiento confirmado. Permite trabajar hasta 20 horas semanales durante el periodo lectivo.', tag: 'Estudiantes', color: 'bg-navy' },
          ].map((item) => (
            <div key={item.titulo} className="bg-white rounded-2xl p-6 border border-navy/8">
              <div className="flex items-center gap-3 mb-3">
                <div className={`${item.color} w-3 h-3 rounded-full flex-shrink-0`}></div>
                <h2 className="font-display text-base font-bold text-navy">{item.titulo}</h2>
                <span className="text-xs bg-navy/5 text-navy/50 px-2 py-0.5 rounded-full ml-auto">{item.tag}</span>
              </div>
              <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
          <div className="bg-white rounded-2xl p-6 border border-navy/8">
            <h2 className="font-display text-base font-bold text-navy mb-3">¿Y si ya estoy en Polonia sin visa?</h2>
            <p className="text-navy/65 leading-relaxed text-sm">Ciudadanos de algunos países latinoamericanos (como Colombia, México, Argentina, Chile, Brasil) pueden entrar al espacio Schengen sin visa por hasta 90 días. Si quieres quedarte más tiempo, debes solicitar la Karta Pobytu antes de que se cumplan esos 90 días. Presentar la solicitud a tiempo te da derecho a permanecer legalmente mientras esperas la resolución.</p>
          </div>
          <div className="bg-navy rounded-2xl p-6 space-y-3">
            {['Nunca overstay — quedarte más de 90 días sin permiso puede resultar en deportación y prohibición de entrada.', 'Empieza el trámite de la Karta Pobytu lo antes posible, no esperes al último día.', 'Los plazos y requisitos pueden variar — consulta siempre el consulado polaco de tu país.'].map((tip, i) => (
              <p key={i} className="text-sm text-white/70">💡 {tip}</p>
            ))}
          </div>
          <DisclaimerLegal modulo="Esta guía sobre tipos de visa" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
