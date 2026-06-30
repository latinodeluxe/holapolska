export default function Modulo4() {
  const lecciones = [
    { num: 31, titulo: 'Comida en el restaurante' },
    { num: 32, titulo: 'Frutas y verduras' },
    { num: 33, titulo: 'Bebidas' },
    { num: 34, titulo: 'Pedir comida' },
    { num: 35, titulo: 'La cuenta por favor' },
    { num: 36, titulo: 'En el supermercado' },
    { num: 37, titulo: 'Cantidades y precios' },
    { num: 38, titulo: 'Cocinar en casa' },
    { num: 39, titulo: 'Preferencias de comida' },
    { num: 40, titulo: 'Repaso del Modulo 4' },
  ]
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/idioma/dashboard"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/idioma/dashboard" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Modulo 4</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-1">Comida y restaurante</h1>
          <p className="text-gray-500 mt-2">10 lecciones · Lecciones 31 a 40</p>
        </div>
        <div className="grid gap-3">
          {lecciones.map((leccion) => (
            <a href={"/idioma/curso/" + leccion.num} key={leccion.num} className="bg-white rounded-xl p-5 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
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
