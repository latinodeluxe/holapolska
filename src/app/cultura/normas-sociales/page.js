export const metadata = { title: "Normas sociales en Polonia — Que hacer y evitar | HolaPolska", description: "Las normas de convivencia y cultura social en Polonia para integrarte sin errores." }

export default function NormasSociales() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/cultura" className="text-sm text-gray-500">Volver a Cultura</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-sm text-red-500 font-medium">Cultura</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-8">Normas sociales en Polonia: que hacer y que evitar</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Integrarse en Polonia no requiere convertirte en polaco, pero si ayuda entender algunas normas no escritas que la gente da por sentadas. Estas son las mas importantes para evitar malentendidos y generar buena impresion desde el principio.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Lo que se valora</h2>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li><strong>Ser directo y honesto</strong> — los polacos prefieren la sinceridad a las respuestas vagas o educadas que no dicen nada. Si algo no te gusta o no puedes, dilo claramente.</li>
            <li><strong>Respetar los turnos y las filas</strong> — colarse en una fila es visto como una falta grave de respeto. Se muy puntual con esto.</li>
            <li><strong>Hablar en voz baja en espacios publicos</strong> — en transporte publico, restaurantes o tiendas, hablar muy alto llama la atencion negativamente.</li>
            <li><strong>Cuidar los espacios comunes</strong> — mantener limpio el portal, la escalera o los espacios compartidos es algo que la gente toma muy en serio.</li>
            <li><strong>Saludar al entrar a tiendas o espacios pequenos</strong> — un Dzien dobry al entrar a una tienda o consultorio es lo correcto y muy valorado.</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Lo que conviene evitar</h2>
          <ul className="space-y-3 text-gray-700 mb-8">
            <li><strong>Hacer ruido despues de las 22h</strong> — en edificios de apartamentos hay normas de silencio nocturno. Musica alta, fiestas o ruido despues de las 10pm puede generar conflictos reales con los vecinos.</li>
            <li><strong>Hablar de politica o religion si no conoces bien a la persona</strong> — son temas sensibles, especialmente en contextos mixtos.</li>
            <li><strong>Comparar constantemente con tu pais de origen</strong> — decir todo el tiempo que en tu pais las cosas son mejores o diferentes puede generar distancia. Muestra curiosidad genuina por Polonia.</li>
            <li><strong>No agradecer o no saludar</strong> — puede interpretarse como mala educacion. Un Dziekuje (gracias) va muy lejos.</li>
          </ul>
          <div className="bg-red-50 rounded-2xl p-6 space-y-3">
            <p className="text-gray-700">💡 Aprender unas pocas palabras en polaco genera una reaccion muy positiva. No necesitas hablar bien, solo intentarlo ya suma mucho.</p>
            <p className="text-gray-700">💡 Los polacos pueden parecer serios al principio pero son muy calidos con quienes se ganan su confianza.</p>
            <p className="text-gray-700">💡 El humor polaco es muy presente pero tiene sus codigos: aprecia el sarcasmo y la ironia, que son muy comunes.</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/cultura" className="text-red-500 font-medium hover:underline">← Volver a Cultura</a>
        </div>
      </div>
    </main>
  )
}
