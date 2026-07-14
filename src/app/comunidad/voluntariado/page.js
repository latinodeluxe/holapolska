export const metadata = {
  title: 'Voluntariado en Polonia — Oportunidades para hispanohablantes | HolaPolska',
  description: 'Oportunidades de voluntariado en Polonia para hispanohablantes. ONGs, programas europeos y cómo empezar.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function Voluntariado() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Comunidad" volverHref="/comunidad" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/comunidad" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Comunidad</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Voluntariado en Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">El voluntariado es una de las mejores formas de integrarte, practicar polaco, conocer gente y contribuir a la comunidad. Hay opciones para todos los perfiles y niveles de idioma.</p>
        </div>
        <div className="space-y-4">
          {[
            { titulo: 'Cuerpo Europeo de Solidaridad (ESC)', desc: 'El programa más accesible para jóvenes de 18 a 30 años. La Unión Europea financia tu alojamiento, comida, transporte, seguro médico y una asignación mensual. Los proyectos duran entre 2 y 12 meses y cubren temas como educación, medio ambiente, cultura y trabajo con jóvenes. Busca proyectos en europa.eu/youth/solidarity.' },
            { titulo: 'ONGs locales', desc: 'Organizaciones como Fundacja Ocalenie (apoyo a refugiados), Habitat for Humanity Poland, WWF Polska o Wielka Orkiestra Świątecznej Pomocy (WOŚP) siempre buscan voluntarios. No necesitas hablar polaco perfecto — muchas tienen programas en inglés y valoran la diversidad cultural.' },
            { titulo: 'Voluntariado universitario', desc: 'Si eres estudiante, la mayoría de universidades polacas tienen oficinas de voluntariado que conectan con proyectos locales. ESN (Erasmus Student Network) organiza actividades de integración y voluntariado social regularmente.' },
            { titulo: 'Ayuda a la comunidad latina', desc: 'Puedes contribuir directamente a la comunidad hispana: ayudando en traducciones informales para recién llegados, organizando encuentros culturales, o colaborando con plataformas como HolaPolska. Si quieres colaborar con nosotros, escríbenos a biuro@holapolska.com.' },
          ].map((item) => (
            <div key={item.titulo} className="bg-white rounded-2xl p-6 border border-navy/8">
              <h2 className="font-display text-base font-bold text-navy mb-2">{item.titulo}</h2>
              <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
          <div className="bg-teal-light rounded-2xl p-6 space-y-3">
            {['El voluntariado cuenta como experiencia laboral en tu CV polaco — los empleadores lo valoran.', 'Es una de las mejores formas de practicar polaco en un ambiente sin presión.', 'WOŚP (enero) es el evento de voluntariado más grande de Polonia — participar es una experiencia única.'].map((tip, i) => (
              <p key={i} className="text-sm text-teal-900">💡 {tip}</p>
            ))}
          </div>
          <DisclaimerLegal modulo="Este contenido sobre voluntariado" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
