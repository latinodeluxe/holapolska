export default function Modulo10() {
  const lecciones = [
    { num: 91, titulo: 'Repaso saludos y presentaciones' },
    { num: 92, titulo: 'Repaso familia y profesiones' },
    { num: 93, titulo: 'Repaso casa y hogar' },
    { num: 94, titulo: 'Repaso comida y restaurante' },
    { num: 95, titulo: 'Repaso tiempo y calendario' },
    { num: 96, titulo: 'Repaso transporte y ciudad' },
    { num: 97, titulo: 'Repaso salud y cuerpo' },
    { num: 98, titulo: 'Repaso trabajo y oficina' },
    { num: 99, titulo: 'Repaso conversaciones reales' },
    { num: 100, titulo: 'Examen final A1' },
  ]
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/idioma/dashboard"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/idioma/dashboard" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Modulo 10</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-1">Repaso y evaluacion final</h1>
          <p className="text-gray-500 mt-2">10 lecciones · Lecciones 91 a 100</p>
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
