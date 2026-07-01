export default function Costumbres() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/cultura" className="text-sm text-gray-500">Volver a Cultura</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-sm text-red-500 font-medium">Cultura</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-8">Lo que sorprende a los latinos cuando llegan a Polonia</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Venir de una cultura latina a Polonia es un choque interesante. No es que la gente sea mala o fria, es que funcionan diferente. Una vez que entiendes el codigo, todo tiene mucho mas sentido y la integracion se vuelve mas facil y genuina.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">La puntualidad es real</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            En Polonia cuando dicen las 3pm es las 3pm. Llegar tarde sin avisar se considera una falta de respeto, especialmente en contextos laborales o formales. Si vas a llegar tarde, avisa con tiempo. En contextos sociales hay un poco mas de flexibilidad, pero no esperes la misma manga ancha que en algunos paises latinos.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">La privacidad se respeta mucho</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Los polacos no suelen preguntar sobre tu salario, tu vida amorosa o tu situacion familiar al poco de conocerte. No lo tomes como distancia o desinteres, es simplemente que valoran la privacidad propia y ajena. Con el tiempo y la confianza, se abren muchisimo.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">El saludo no siempre incluye abrazo</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            El contacto fisico al saludar es menos comun que en Latinoamerica. Entre personas que se conocen poco, un aperton de manos es lo normal. Los abrazos y besos en la mejilla se reservan para amigos cercanos y familia. No te extranes si al principio la gente parece un poco distante fisicamente.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">La queja como arte</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            Los polacos tienen fama de ser relativamente pesimistas o de quejarse del clima, la politica, los precios. No lo tomes personal ni como negatividad extrema: es parte de su humor y su forma de conectar. De hecho, muchas veces quejarse juntos es una forma de crear vinculo.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">El silencio no es incomodidad</h2>
          <p className="text-gray-700 leading-relaxed mb-6">
            En muchas culturas latinas el silencio en una conversacion se siente raro y hay que llenarlo. En Polonia el silencio es perfectamente natural y no significa que algo este mal. No sientas la necesidad de hablar todo el tiempo para llenar el espacio.
          </p>
          <div className="bg-red-50 rounded-2xl p-6 space-y-3">
            <p className="text-gray-700">💡 Los polacos son muy hospitalarios una vez que te conocen. Ser invitado a casa de alguien es una senal de confianza real.</p>
            <p className="text-gray-700">💡 Si te invitan a cenar, lleva algo: una botella de vino, chocolates o flores son muy bien recibidos.</p>
            <p className="text-gray-700">💡 Al entrar a una casa polaca, quitate los zapatos a menos que te digan lo contrario.</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/cultura" className="text-red-500 font-medium hover:underline">← Volver a Cultura</a>
        </div>
      </div>
    </main>
  )
}
