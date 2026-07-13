export const metadata = {
  title: 'Costumbres polacas — Lo que sorprende a los latinos | HolaPolska',
  description: 'Las costumbres y normas culturales de Polonia explicadas para hispanohablantes.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function Costumbres() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Cultura" volverHref="/cultura" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/cultura" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Cultura</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Lo que sorprende a los latinos cuando llegan a Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">Venir de una cultura latina a Polonia es un choque interesante. Una vez que entiendes el código, todo tiene mucho mas sentido.</p>
        </div>
        <div className="space-y-8">
          {[
            { título: 'La puntualidad es real', texto: 'En Polonia cuando dicen las 3pm es las 3pm. Llegar tarde sin avisar se considera una falta de respeto, especialmente en contextos laborales. Si vas a llegar tarde, avisa con tiempo.' },
            { título: 'La privacidad se respeta mucho', texto: 'Los polacos no suelen preguntar sobre tu salario, tu vida amorosa o tu situación familiar al poco de conocerte. No lo tomes como distancia — es que valoran la privacidad propia y ajena. Con el tiempo y la confianza, se abren muchisimo.' },
            { título: 'El saludo no siempre incluye abrazo', texto: 'El contacto fisico al saludar es menos común que en Latinoamerica. Entre personas que se conocen poco, un aperton de manos es lo normal. Los abrazos y besos se reservan para amigos cercanos y familia.' },
            { título: 'La queja como arte', texto: 'Los polacos tienen fama de quejarse del clima, la politica, los precios. No lo tomes personal — es parte de su humor y su forma de conectar. Muchas veces quejarse juntos es una forma de crear vinculo.' },
            { título: 'El silencio no es incomodidad', texto: 'En muchas culturas latinas el silencio en una conversacion se siente raro y hay que llenarlo. En Polonia el silencio es perfectamente natural. No sientas la necesidad de hablar todo el tiempo.' },
          ].map((item) => (
            <div key={item.título} className="bg-white rounded-2xl p-6 border border-navy/8">
              <h2 className="font-display text-lg font-bold text-navy mb-3">{item.título}</h2>
              <p className="text-navy/65 leading-relaxed text-sm">{item.texto}</p>
            </div>
          ))}
          <div className="bg-mango-light rounded-2xl p-6 space-y-3">
            {['Los polacos son muy hospitalarios una vez que te conocen. Ser invitado a casa de alguien es una senal de confianza real.', 'Si te invitan a cenar, lleva algo: una botella de vino, chocolates o flores son muy bien recibidos.', 'Al entrar a una casa polaca, quitate los zapatos a menos que te digan lo contrario.'].map((tip, i) => (
              <p key={i} className="text-sm text-yellow-800">💡 {tip}</p>
            ))}
          </div>
        </div>
        <DisclaimerLegal modulo="Este contenido sobre cultura polaca" />
      </div>
      <Footer />
    </div>
  )
}
