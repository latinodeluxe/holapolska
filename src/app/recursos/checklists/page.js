export const metadata = {
  title: 'Checklists para vivir en Polonia | HolaPolska',
  description: 'Listas de verificación para los momentos clave de tu vida en Polonia. Llegada, trabajo, Karta Pobytu y mas.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const listas = [
  {
    título: 'Al llegar a Polonia',
    icono: '✈️',
    color: 'magenta',
    items: [
      'Comprar tarjeta SIM local (Orange, Play, T-Mobile o Plus)',
      'Registrar tu dirección en el Urzad Miasta (meldunek)',
      'Solicitar el número PESEL',
      'Abrir cuenta bancaria',
      'Conseguir seguro médico',
      'Guardar los números de emergencia (112, 999, 997)',
    ]
  },
  {
    título: 'Para trabajar legalmente',
    icono: '💼',
    color: 'teal',
    items: [
      'Verificar que tu empleador tiene permiso para contratarte',
      'Firmar contrato de trabajo antes de empezar',
      'Pedir copia del contrato en un idioma que entiendas',
      'Confirmar que el empleador te ha registrado en el ZUS',
      'Verificar en zus.pl que tu cotizacion esta activa',
      'Guardar copia del contrato y de tu permiso de trabajo',
    ]
  },
  {
    título: 'Para tramitar la Karta Pobytu',
    icono: '📄',
    color: 'mango',
    items: [
      'Verificar que aun tienes días de estancia legal validos',
      'Descargar el formulario del Urzad Wojewodzki de tu region',
      'Reunir: pasaporte, seguro médico, comprobante de domicilio, contrato',
      'Hacer copias de todos los documentos',
      'Pedir cita en el Urzad Wojewodzki',
      'Guardar el recibo o sello de presentacion de solicitud',
    ]
  },
  {
    título: 'Documentos siempre a mano',
    icono: '📁',
    color: 'navy',
    items: [
      'Pasaporte vigente',
      'Karta Pobytu (si ya la tienes)',
      'Contrato de trabajo',
      'Número PESEL apuntado en lugar seguro',
      'Número de cuenta bancaria',
      'Número de tu SIM polaca',
      'Número de emergencias: 112',
      'Número de tu consulado o embajada',
    ]
  },
]

const headerColors = {
  magenta: 'bg-magenta',
  teal: 'bg-teal',
  mango: 'bg-mango',
  navy: 'bg-navy',
}

const dotColors = {
  magenta: 'text-magenta',
  teal: 'text-teal',
  mango: 'text-mango',
  navy: 'text-navy/40',
}

export default function Checklists() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Recursos" volverHref="/recursos" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/recursos" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Recursos</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-3">Checklists para vivir en Polonia</h1>
          <p className="text-navy/50 text-base">Listas de verificación para los momentos clave. Guardalas, imprimelas o compartilas.</p>
        </div>

        <div className="space-y-6">
          {listas.map((lista) => (
            <div key={lista.título} className="bg-white rounded-2xl border border-navy/8 overflow-hidden">
              <div className={`${headerColors[lista.color]} px-6 py-4 flex items-center gap-3`}>
                <span className="text-xl">{lista.icono}</span>
                <h2 className="text-white font-bold">{lista.título}</h2>
              </div>
              <ul className="p-6 space-y-3">
                {lista.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className={`${dotColors[lista.color]} mt-0.5 text-lg leading-none`}>☐</span>
                    <span className="text-navy/65 text-sm leading-relaxed">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </div>
  )
}
