export const metadata = {
  title: 'Sistema educativo polaco — Guía en español | HolaPolska',
  description: 'Cómo funciona la escuela en Polonia. Estructura, inscripción y lo que necesitas saber como padre extranjero.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function SistemaEducativo() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Cultura" volverHref="/cultura" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/cultura" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Cultura</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">El sistema educativo en Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">Entender cómo funciona la escuela polaca te ayuda a tomar mejores decisiones si tienes hijos o si simplemente quieres entender la cultura del país.</p>
        </div>
        <div className="space-y-4">
          {[
            { paso: '1', titulo: 'Estructura general', desc: 'La educación obligatoria va de los 6 a los 18 años. Empieza con la zerówka (año cero, preparatoria), seguida de 8 años de szkoła podstawowa (primaria). Después viene el liceum (liceo, 4 años) o technikum (técnico, 5 años). También existe la szkoła branżowa (formación profesional, 3 años).' },
            { paso: '2', titulo: 'Calendario escolar', desc: 'El año escolar va de septiembre a junio. Hay vacaciones de invierno (2 semanas entre enero y febrero, varían por región), vacaciones de primavera (Semana Santa, 1 semana) y vacaciones de verano (julio y agosto completos). Los festivos nacionales también son días libres.' },
            { paso: '3', titulo: 'Educación gratuita y pública', desc: 'La educación pública es completamente gratuita — no hay matrícula ni mensualidad. Los libros de texto para primaria son proporcionados por el colegio. Los padres suelen contribuir a un fondo de clase (składka) para excursiones y materiales extra, pero es voluntario.' },
            { paso: '4', titulo: 'Lo que sorprende a los latinos', desc: 'Los niños polacos empiezan la escuela a las 8:00 y terminan entre las 13:00 y 15:00 según la edad. No hay uniforme escolar obligatorio en la mayoría de colegios públicos. Las notas van del 1 (muy malo) al 6 (excelente). La relación profesor-alumno tiende a ser más formal que en Latinoamérica.' },
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
            {['Los alumnos extranjeros tienen derecho a clases adicionales de polaco — mínimo 2 horas semanales, financiadas por el estado.', 'Las inscripciones para jardín de infantes (przedszkole) abren en marzo — no lo dejes para septiembre.', 'En ciudades grandes como Varsovia, Cracovia y Gdańsk hay colegios con más experiencia atendiendo familias extranjeras.'].map((tip, i) => (
              <p key={i} className="text-sm text-teal-900">💡 {tip}</p>
            ))}
          </div>
          <DisclaimerLegal modulo="Este contenido sobre el sistema educativo" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
