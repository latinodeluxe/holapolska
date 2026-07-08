export const metadata = {
  title: 'Normas sociales en Polonia — Que hacer y evitar | HolaPolska',
  description: 'Las normas de convivencia y cultura social en Polonia para integrarte sin errores.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function NormasSociales() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Cultura" volverHref="/cultura" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/cultura" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Cultura</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Normas sociales en Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">Integrarse no requiere convertirte en polaco, pero si ayuda entender algunas normas no escritas que la gente da por sentadas.</p>
        </div>
        <div className="space-y-6">
          <div className="bg-white rounded-2xl p-6 border border-navy/8">
            <h2 className="font-display text-lg font-bold text-navy mb-4">Lo que se valora</h2>
            <ul className="space-y-3">
              {[
                ['Ser directo y honesto', 'Los polacos prefieren la sinceridad a las respuestas vagas. Si algo no te gusta o no puedes, dilo claramente.'],
                ['Respetar los turnos y las filas', 'Colarse en una fila es visto como una falta grave de respeto.'],
                ['Hablar en voz baja en espacios publicos', 'En transporte, restaurantes o tiendas, hablar muy alto llama la atencion negativamente.'],
                ['Saludar al entrar a tiendas pequenas', 'Un Dzien dobry al entrar a una tienda o consultorio es lo correcto y muy valorado.'],
              ].map(([titulo, desc]) => (
                <li key={titulo} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-teal-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-teal"></div>
                  </div>
                  <div><span className="text-sm font-semibold text-navy">{titulo} — </span><span className="text-sm text-navy/65">{desc}</span></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl p-6 border border-navy/8">
            <h2 className="font-display text-lg font-bold text-navy mb-4">Lo que conviene evitar</h2>
            <ul className="space-y-3">
              {[
                ['Hacer ruido despues de las 22h', 'En edificios de apartamentos hay normas de silencio nocturno. Musica alta o fiestas puede generar conflictos reales con los vecinos.'],
                ['Hablar de politica o religion con desconocidos', 'Son temas sensibles, especialmente en contextos mixtos.'],
                ['Comparar constantemente con tu pais de origen', 'Decir todo el tiempo que en tu pais las cosas son mejores puede generar distancia.'],
                ['No saludar', 'Puede interpretarse como mala educacion. Un Dziekuje va muy lejos.'],
              ].map(([titulo, desc]) => (
                <li key={titulo} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-magenta-light flex items-center justify-center flex-shrink-0 mt-0.5">
                    <div className="w-2 h-2 rounded-full bg-magenta"></div>
                  </div>
                  <div><span className="text-sm font-semibold text-navy">{titulo} — </span><span className="text-sm text-navy/65">{desc}</span></div>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-mango-light rounded-2xl p-6 space-y-3">
            {['Aprender unas pocas palabras en polaco genera una reaccion muy positiva. No necesitas hablar bien, solo intentarlo ya suma mucho.', 'Los polacos pueden parecer serios al principio pero son muy calidos con quienes se ganan su confianza.'].map((tip, i) => (
              <p key={i} className="text-sm text-yellow-800">💡 {tip}</p>
            ))}
          </div>
        </div>
        <DisclaimerLegal modulo="Este contenido sobre normas sociales" />
      </div>
      <Footer />
    </div>
  )
}
