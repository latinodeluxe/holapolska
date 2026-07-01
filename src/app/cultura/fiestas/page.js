export default function Fiestas() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/cultura" className="text-sm text-gray-500">Volver a Cultura</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-sm text-red-500 font-medium">Cultura</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-8">Fiestas y festividades en Polonia: el calendario que necesitas conocer</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Polonia tiene un calendario festivo muy marcado por la tradicion catolica y por fechas historicas propias. Conocerlo te ayuda a planificar, entender por que todo esta cerrado algunos dias, y sobre todo a participar de momentos culturales que los polacos valoran muchisimo.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Las fiestas mas importantes</h2>
          <div className="space-y-6 mb-8">
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-1">Boze Narodzenie — Navidad (24-26 diciembre)</h3>
              <p className="text-gray-600 text-sm">La fiesta mas importante del ano. La Nochebuena (Wigilia) es el momento central: cena familiar con 12 platos tradicionales, primer plato al aparecer la primera estrella, e intercambio de regalos esa misma noche. El 25 y 26 son festivos nacionales.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-1">Wielkanoc — Semana Santa y Pascua</h3>
              <p className="text-gray-600 text-sm">Otra festividad clave. El Lunes de Pascua (Smigus-Dyngus) tiene una tradicion unica: la gente se moja con agua en la calle. Es festivo nacional y las tiendas cierran el domingo y lunes de Pascua.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-1">Wszystkich Swietych — Dia de Todos los Santos (1 noviembre)</h3>
              <p className="text-gray-600 text-sm">Muy diferente al Dia de Muertos latinoamericano pero igualmente significativo. Las familias visitan los cementerios, encienden velas y llevan flores. Los cementerios polacos en esta fecha son visualmente impresionantes.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-1">Swieto Niepodleglosci — Dia de la Independencia (11 noviembre)</h3>
              <p className="text-gray-600 text-sm">Fiesta nacional muy importante. Conmemora la recuperacion de la independencia polaca en 1918. Hay desfiles y actos oficiales, especialmente en Varsovia.</p>
            </div>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-1">Nowy Rok — Ano Nuevo (1 enero)</h3>
              <p className="text-gray-600 text-sm">Festivo nacional. Las ciudades grandes tienen fuegos artificiales y fiestas en espacios publicos. El 31 de diciembre hay eventos en toda Polonia.</p>
            </div>
          </div>
          <div className="bg-red-50 rounded-2xl p-6 space-y-3">
            <p className="text-gray-700">💡 En festivos nacionales la mayoria de tiendas, bancos y oficinas cierran. Planifica con anticipacion tus compras o tramites.</p>
            <p className="text-gray-700">💡 Los supermercados tienen restricciones de apertura los domingos en Polonia: solo algunos pueden abrir y con horario reducido.</p>
            <p className="text-gray-700">💡 Participar en las tradiciones locales, aunque sea de forma curiosa, es una de las mejores formas de conectar con los polacos.</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/cultura" className="text-red-500 font-medium hover:underline">← Volver a Cultura</a>
        </div>
      </div>
    </main>
  )
}
