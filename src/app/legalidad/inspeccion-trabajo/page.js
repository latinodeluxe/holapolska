export const metadata = {
  title: 'Inspección de Trabajo en Polonia — Guía en español | HolaPolska',
  description: 'Cómo denunciar abusos laborales en Polonia. Qué es la PIP, cómo funciona y cuándo acudir.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function InspeccionTrabajo() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Legalidad" volverHref="/legalidad" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/legalidad" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Legalidad</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Inspección de Trabajo (PIP)</h1>
          <p className="text-navy/50 text-base leading-relaxed">La Państwowa Inspekcja Pracy (PIP) es la autoridad polaca que protege los derechos de los trabajadores. Funciona para todos — polacos y extranjeros por igual.</p>
        </div>
        <div className="space-y-4">
          {[
            { titulo: '¿Cuándo acudir a la PIP?', desc: 'Cuando tu empleador no te da contrato escrito, te paga menos del salario mínimo, no te paga las horas extra, no te registra en el ZUS, te obliga a trabajar en condiciones inseguras, te despide sin preaviso o sin justificación, o te discrimina por ser extranjero.' },
            { titulo: '¿Cómo denunciar?', desc: 'Puedes presentar una denuncia en persona en la oficina de la PIP más cercana, por correo postal, por email o a través del formulario online en pip.gov.pl. La denuncia puede ser anónima — la PIP no revela tu identidad al empleador durante la inspección.' },
            { titulo: '¿Qué pasa después de denunciar?', desc: 'La PIP realiza una inspección al empleador, generalmente sin previo aviso. Si encuentra irregularidades, emite una orden de corrección con plazo obligatorio. En casos graves puede imponer multas de hasta 30.000 PLN al empleador o iniciar procedimientos penales.' },
            { titulo: 'Asesoría gratuita', desc: 'La PIP ofrece asesoría legal gratuita para trabajadores — puedes consultar tu situación antes de decidir si denuncias. También tiene una línea de información: 801 002 006 (en polaco, pero puedes pedir asistencia en inglés en las oficinas grandes).' },
          ].map((item) => (
            <div key={item.titulo} className="bg-white rounded-2xl p-6 border border-navy/8">
              <h2 className="font-display text-base font-bold text-navy mb-2">{item.titulo}</h2>
              <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
          <div className="bg-teal-light rounded-2xl p-6 space-y-3">
            {['Guarda copias de todo: contrato, nóminas, mensajes con tu empleador y registros de horas trabajadas.', 'La denuncia ante la PIP es gratuita y puede ser anónima.', 'Denunciar no afecta tu estatus migratorio — la PIP protege a todos los trabajadores, con o sin permiso de residencia.'].map((tip, i) => (
              <p key={i} className="text-sm text-teal-900">💡 {tip}</p>
            ))}
          </div>
          <DisclaimerLegal modulo="Esta guía sobre la Inspección de Trabajo" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
