export default function Modulo9() {
  const lecciones = [
    { num: 81, titulo: 'Conversacion en la tienda' },
    { num: 82, titulo: 'Conversacion con amigos' },
    { num: 83, titulo: 'Conversacion en el banco' },
    { num: 84, titulo: 'Conversacion en correos' },
    { num: 85, titulo: 'Conversacion en una fiesta' },
    { num: 86, titulo: 'Hablar por telefono' },
    { num: 87, titulo: 'Pedir ayuda' },
    { num: 88, titulo: 'Dar y recibir opiniones' },
    { num: 89, titulo: 'Situaciones cotidianas' },
    { num: 90, titulo: 'Repaso del Modulo 9' },
  ]
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/dashboard"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/dashboard" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Modulo 9</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-1">Conversaciones reales</h1>
          <p className="text-gray-500 mt-2">10 lecciones · Lecciones 81 a 90</p>
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
