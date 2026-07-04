export const metadata = {
  title: 'Numeros de emergencia en Polonia | HolaPolska',
  description: 'Los numeros de emergencia que debes tener guardados si vives en Polonia. Policia, ambulancia, bomberos y mas.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const numeros = [
  { numero: '112', titulo: 'Emergencias generales', desc: 'Numero unico de emergencias en toda la UE. Funciona para policia, bomberos y ambulancia. Disponible 24/7.', icono: '🆘', color: 'magenta' },
  { numero: '999', titulo: 'Ambulancia', desc: 'Servicio de ambulancia directo. Usalo si necesitas asistencia medica urgente.', icono: '🚑', color: 'magenta' },
  { numero: '998', titulo: 'Bomberos', desc: 'Cuerpo de bomberos polaco (Straż Pożarna). Para incendios, accidentes y rescates.', icono: '🚒', color: 'mango' },
  { numero: '997', titulo: 'Policia', desc: 'Policia nacional polaca (Policja). Para robos, violencia, accidentes y situaciones de seguridad.', icono: '🚔', color: 'navy' },
  { numero: '986', titulo: 'Policia municipal', desc: 'Straż Miejska. Para infracciones menores, problemas de convivencia y orden publico local.', icono: '👮', color: 'navy' },
  { numero: '985', titulo: 'Rescate de montana', desc: 'GOPR / TOPR. Si haces senderismo o actividades en montanas polacas, guarda este numero.', icono: '🏔️', color: 'teal' },
  { numero: '601 100 100', titulo: 'Cruz Roja Polonia', desc: 'Linea de ayuda humanitaria de la Cruz Roja polaca.', icono: '🏥', color: 'teal' },
]

const colorMap = {
  magenta: 'bg-magenta',
  mango: 'bg-mango',
  navy: 'bg-navy',
  teal: 'bg-teal',
}

export default function NumerosEmergencia() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Herramientas" volverHref="/herramientas" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/herramientas" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Herramientas</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-3">Numeros de emergencia en Polonia</h1>
          <p className="text-navy/50 text-base">Guardalos ahora antes de necesitarlos. En una emergencia no hay tiempo para buscar.</p>
        </div>

        <div className="grid gap-3 mb-6">
          {numeros.map((n) => (
            <div key={n.numero} className="bg-white rounded-2xl border border-navy/8 p-5 flex items-start gap-4">
              <div className={`${colorMap[n.color]} w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>{n.icono}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl font-extrabold text-navy tracking-tight">{n.numero}</span>
                  <span className="font-semibold text-navy/70 text-sm">{n.titulo}</span>
                </div>
                <p className="text-sm text-navy/50 leading-relaxed">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-navy rounded-2xl p-6 space-y-3">
          {[
            'El 112 funciona incluso sin cobertura de tu operador y sin tarjeta SIM activa.',
            'En emergencias puedes llamar en ingles o espanol: los operadores del 112 suelen tener nivel basico de ingles.',
            'Guarda tambien el numero de tu consulado o embajada para emergencias consulares.',
          ].map((tip, i) => (
            <p key={i} className="text-sm text-white/65">💡 {tip}</p>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
