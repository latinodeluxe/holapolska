export default function Guias() {
  const guias = [
    { titulo: 'Guia de llegada a Polonia', desc: 'Los primeros pasos al llegar: SIM, banco, PESEL y registro de residencia', icono: '✈️', disponible: false },
    { titulo: 'Guia de tramites esenciales', desc: 'PESEL, Karta Pobytu, ZUS y NFZ explicados paso a paso', icono: '📋', disponible: false },
    { titulo: 'Guia de derechos laborales', desc: 'Todo sobre contratos, salario minimo, vacaciones y como denunciar abusos', icono: '⚖️', disponible: false },
    { titulo: 'Guia de salud en Polonia', desc: 'Como usar el NFZ, encontrar medico y que hacer en emergencias', icono: '🏥', disponible: false },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/recursos" className="text-sm text-gray-500">Volver a Recursos</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-sm text-red-500 font-medium">Recursos</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Guias en PDF</h1>
        <p className="text-gray-500 mb-10">Documentos descargables para tener a mano cuando mas los necesitas. Sin internet, sin buscar: todo en un PDF.</p>
        <div className="grid gap-4 mb-8">
          {guias.map((g) => (
            <div key={g.titulo} className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4 opacity-60">
              <div className="text-3xl">{g.icono}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-gray-900 mb-1">{g.titulo}</h3>
                <p className="text-sm text-gray-500">{g.desc}</p>
              </div>
              <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full whitespace-nowrap">Proximamente</span>
            </div>
          ))}
        </div>
        <div className="bg-red-50 rounded-2xl p-6">
          <p className="text-gray-700">💡 Mientras preparamos las guias, toda la informacion esta disponible en los modulos de Vivir en Polonia y Legalidad.</p>
          <div className="flex gap-3 mt-4 flex-wrap">
            <a href="/vivir-en-polonia" className="bg-red-500 text-white px-4 py-2 rounded-full text-sm font-medium hover:bg-red-600">Vivir en Polonia</a>
            <a href="/legalidad" className="border border-red-500 text-red-500 px-4 py-2 rounded-full text-sm font-medium hover:bg-red-50">Legalidad</a>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/recursos" className="text-red-500 font-medium hover:underline">← Volver a Recursos</a>
        </div>
      </div>
    </main>
  )
}
