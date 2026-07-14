export const metadata = {
  title: 'Escuelas y educación en Polonia — Guía en español | HolaPolska',
  description: 'Cómo funciona el sistema educativo polaco para familias con hijos. Inscripción, idioma y apoyo escolar.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function Escuelas() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Vivir en Polonia" volverHref="/vivir-en-polonia" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/vivir-en-polonia" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Vivir en Polonia</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Escuelas y educación en Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">Todos los niños extranjeros de entre 7 y 18 años tienen acceso a la educación pública en Polonia en las mismas condiciones que los niños polacos.</p>
        </div>
        <div className="space-y-4">
          {[
            { paso: '1', titulo: 'Cómo está organizado el sistema', desc: 'La educación es obligatoria desde los 6 años (zerówka o año cero). La escuela primaria dura 8 años dividida en dos etapas: clases 1-3 y clases 4-8. Después viene el liceo (4 años) o el técnico (5 años).' },
            { paso: '2', titulo: 'Cómo inscribir a tu hijo', desc: 'Para la escuela primaria, el sistema es territorial: a cada dirección le corresponde una escuela que está obligada a admitir a tu hijo. Localiza tu escuela asignada en el portal del municipio. Para jardín de infantes (przedszkole), hay lista de espera — las inscripciones abren en marzo.' },
            { paso: '3', titulo: 'El idioma y el apoyo', desc: 'Los alumnos extranjeros que no hablan polaco tienen derecho a clases adicionales de polaco (mínimo 2 horas semanales) y clases de refuerzo en otras materias (hasta 5 horas semanales). La calidad de este apoyo varía según el colegio y la ciudad.' },
            { paso: '4', titulo: 'Documentos necesarios', desc: 'Pasaporte del niño, tu documentación de residencia (contrato de alquiler o meldunek), y en algunos casos el expediente académico del país de origen — no siempre lo piden, pero ayuda para determinar en qué curso entra.' },
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
            {['Si tu hijo no habla polaco, habla con el director del colegio antes de que empiece — muchos centros tienen experiencia con alumnos extranjeros.', 'En ciudades grandes como Varsovia, Cracovia o Gdańsk hay colegios con mayor experiencia multicultural.', 'El sistema público es gratuito — no necesitas pagar matrícula ni mensualidad.'].map((tip, i) => (
              <p key={i} className="text-sm text-teal-900">💡 {tip}</p>
            ))}
          </div>
          <DisclaimerLegal modulo="Esta guía sobre escuelas y educación" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
