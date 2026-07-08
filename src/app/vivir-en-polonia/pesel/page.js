export const metadata = {
  title: 'PESEL en Polonia — Guia completa en espanol | HolaPolska',
  description: 'Como obtener el numero PESEL en Polonia paso a paso. Guia completa para hispanohablantes.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function Pesel() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Vivir en Polonia" volverHref="/vivir-en-polonia" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/vivir-en-polonia" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Vivir en Polonia</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Que es el PESEL y como obtenerlo</h1>
          <p className="text-navy/50 text-base leading-relaxed">El PESEL es el numero de identificacion personal en Polonia. Lo necesitas para casi todo: abrir una cuenta bancaria, contratar telefono, acceder al sistema de salud y hacer tramites oficiales.</p>
        </div>
        <div className="space-y-4">
          {[
            { paso: '1', titulo: 'Donde solicitarlo', desc: 'En el Urzad Miasta (oficina municipal) de la ciudad donde vives. No puedes hacerlo online — debes ir en persona.' },
            { paso: '2', titulo: 'Que documentos necesitas', desc: 'Pasaporte vigente, documento que acredite tu residencia en Polonia (contrato de alquiler, declaracion del propietario o certificado de registro), y en algunos casos tu contrato de trabajo o carta de matriculacion si eres estudiante.' },
            { paso: '3', titulo: 'Como es el proceso', desc: 'Pides cita o vas directamente segun el municipio. Presentas los documentos, rellenas un formulario y te asignan el numero PESEL en el momento o en pocos dias.' },
            { paso: '4', titulo: 'Cuanto tarda', desc: 'Normalmente es inmediato o en 1-2 dias habiles. En ciudades grandes como Varsovia puede haber mas espera.' },
          ].map((item) => (
            <div key={item.paso} className="bg-white rounded-2xl p-6 border border-navy/8 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-mango flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0">{item.paso}</div>
              <div>
                <h2 className="font-display text-base font-bold text-navy mb-2">{item.titulo}</h2>
                <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
          <div className="bg-teal-light rounded-2xl p-6 space-y-3">
            {['El PESEL no caduca y es tuyo para siempre aunque cambies de ciudad.', 'Si tienes permiso de residencia temporal, igual puedes obtener el PESEL.', 'Guarda tu numero PESEL en un lugar seguro — lo necesitaras constantemente.'].map((tip, i) => (
              <p key={i} className="text-sm text-teal-900">💡 {tip}</p>
            ))}
          </div>
        </div>
        <DisclaimerLegal modulo="Esta guia sobre el PESEL" />
      </div>
      <Footer />
    </div>
  )
}
