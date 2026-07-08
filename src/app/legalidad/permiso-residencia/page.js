export const metadata = {
  title: 'Karta Pobytu — Permiso de residencia en Polonia | HolaPolska',
  description: 'Guia completa para tramitar el permiso de residencia en Polonia. Documentos, plazos y consejos.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function PermisoResidencia() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Legalidad" volverHref="/legalidad" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/legalidad" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Legalidad</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Karta Pobytu — Permiso de residencia en Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">La Karta Pobytu es el permiso de residencia que te permite vivir y trabajar legalmente en Polonia mas alla de los 90 dias de estancia permitidos por visado o exencion.</p>
        </div>
        <div className="space-y-4">
          {[
            { paso: '1', titulo: 'Tipos de permiso', desc: 'Temporal (czasowy) — de 1 a 3 anos, renovable. Permanente (staly) — despues de 5 anos de residencia continua. De larga duracion UE — proteccion adicional para residentes de larga duracion.' },
            { paso: '2', titulo: 'Cuando solicitarlo', desc: 'Antes de que expire tu estancia legal actual. Presentar la solicitud dentro del periodo de estancia valido es crucial — una vez presentada, puedes quedarte mientras se resuelve aunque tarde meses.' },
            { paso: '3', titulo: 'Documentos basicos', desc: 'Pasaporte vigente (con copias de todas las paginas), fotos de tamano especificado, formulario de solicitud rellenado, prueba del motivo (contrato de trabajo, matricula universitaria, etc.), seguro medico, comprobante de domicilio y prueba de medios economicos suficientes.' },
            { paso: '4', titulo: 'Donde presentarlo', desc: 'En el Urzad Wojewodzki (oficina regional) de la region donde vives. Necesitaras pedir cita con bastante anticipacion — en Varsovia y Cracovia la espera puede ser de semanas.' },
            { paso: '5', titulo: 'Plazos de resolucion', desc: 'Legalmente deben resolver en 1 mes, prorrogable a 2 meses en casos complejos. En la practica puede tardar entre 3 y 12 meses. Durante ese tiempo tienes derecho a seguir residiendo y trabajando.' },
          ].map((item) => (
            <div key={item.paso} className="bg-white rounded-2xl p-6 border border-navy/8 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0">{item.paso}</div>
              <div>
                <h2 className="font-display text-base font-bold text-navy mb-2">{item.titulo}</h2>
                <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
          <div className="bg-navy rounded-2xl p-6 space-y-3">
            {['Guarda el recibo de presentacion de la solicitud — es tu prueba de estancia legal mientras esperas.', 'Renueva con al menos 45 dias de anticipacion al vencimiento de tu permiso actual.', 'El contenido informativo de HolaPolska no es asesoria legal. Para casos complejos, consulta con un abogado.'].map((tip, i) => (
              <p key={i} className="text-sm text-white/70">💡 {tip}</p>
            ))}
          </div>
        </div>
        <DisclaimerLegal modulo="Esta guia sobre permisos de residencia" />
      </div>
      <Footer />
    </div>
  )
}
