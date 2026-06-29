export default function Modulo3() {
  const lecciones = [
    { num: 21, titulo: 'La casa y las habitaciones' },
    { num: 22, titulo: 'Muebles del hogar' },
    { num: 23, titulo: 'Partes de la casa' },
    { num: 24, titulo: 'Electrodomesticos' },
    { num: 25, titulo: 'Preposiciones de lugar' },
    { num: 26, titulo: 'Verbos del hogar' },
    { num: 27, titulo: 'Adjetivos del hogar' },
    { num: 28, titulo: 'Donde vives' },
    { num: 29, titulo: 'Frases en casa' },
    { num: 30, titulo: 'Repaso del Modulo 3' },
  ]
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/dashboard"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/dashboard" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Modulo 3</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-1">Casa y hogar</h1>
          <p className="text-gray-500 mt-2">10 lecciones · Lecciones 21 a 30</p>
        </div>
        <div className="grid gap-3">
          {lecciones.map((leccion) => (
            <a href={"/cursos/polaco-a1/leccion-" + leccion.num} key={leccion.num} className="bg-white rounded-xl p-5 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 font-bold text-sm">{leccion.num}</div>
                <h3 className="font-semibold text-gray-900">{leccion.titulo}</h3>
              </div>
              <span className="text-gray-400">▶</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}
