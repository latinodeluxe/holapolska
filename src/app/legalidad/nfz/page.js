export const metadata = {
  title: 'NFZ — Seguro médico público en Polonia | HolaPolska',
  description: 'Cómo acceder al seguro de salud público en Polonia. Registro, derechos y qué hacer si no estás cubierto.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function NFZ() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Legalidad" volverHref="/legalidad" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/legalidad" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Legalidad</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">NFZ — Tu seguro médico en Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">El NFZ (Narodowy Fundusz Zdrowia) es el sistema de seguro de salud público polaco. Si trabajas legalmente en Polonia, tienes derecho a usarlo — y también tus dependientes.</p>
        </div>
        <div className="space-y-4">
          {[
            { paso: '1', titulo: '¿Quién está cubierto?', desc: 'Todos los trabajadores con contrato formal (umowa o pracę) están asegurados automáticamente — el empleador te registra en el ZUS y parte de tu cotización va al NFZ. Con umowa zlecenie también estás cubierto si se pagan las cotizaciones. Puedes registrar a tu cónyuge e hijos como beneficiarios sin costo adicional.' },
            { paso: '2', titulo: '¿Cómo verificar que estás asegurado?', desc: 'Crea una cuenta en el portal pacjent.gov.pl (IKP — Internetowe Konto Pacjenta). Ahí puedes ver si tienes cobertura activa, tu historial médico, recetas electrónicas y próximas citas. También puedes verificar tu estado llamando a la línea del NFZ: 800 190 590.' },
            { paso: '3', titulo: '¿Qué cubre el NFZ?', desc: 'Consultas con médico de familia (lekarz POZ), derivaciones a especialistas, hospitalización, emergencias (SOR), medicamentos subvencionados con receta, embarazo y parto, rehabilitación y salud mental. Las listas de espera para especialistas pueden ser largas — de semanas a meses.' },
            { paso: '4', titulo: '¿Qué NO cubre?', desc: 'Dentista (salvo emergencias y menores de 18), lentes de contacto, cirugías estéticas y algunos medicamentos especializados. Para servicios dentales y atención más rápida, muchos optan por seguros privados complementarios (Medicover, LuxMed, Enel-Med).' },
          ].map((item) => (
            <div key={item.paso} className="bg-white rounded-2xl p-6 border border-navy/8 flex items-start gap-4">
              <div className="w-10 h-10 rounded-xl bg-teal flex items-center justify-center text-white font-extrabold text-sm flex-shrink-0">{item.paso}</div>
              <div>
                <h2 className="font-display text-base font-bold text-navy mb-2">{item.titulo}</h2>
                <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
          <div className="bg-magenta-light rounded-2xl p-6">
            <p className="text-sm text-pink-900 font-semibold mb-2">⚠️ Importante</p>
            <p className="text-sm text-pink-900">Si tu empleador no te registró en el ZUS/NFZ, no tienes seguro médico aunque trabajes. Pregúntale directamente y verifica en pacjent.gov.pl. Si no te registra, es una violación de la ley que puedes denunciar ante la Inspección de Trabajo.</p>
          </div>
          <DisclaimerLegal modulo="Esta guía sobre el NFZ" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
