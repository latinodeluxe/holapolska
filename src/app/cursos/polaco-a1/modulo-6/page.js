export default function Modulo6() {
  const lecciones = [
    { num: 51, titulo: 'Medios de transporte' },
    { num: 52, titulo: 'En el autobus' },
    { num: 53, titulo: 'En el metro' },
    { num: 54, titulo: 'Pedir direcciones' },
    { num: 55, titulo: 'Partes de la ciudad' },
    { num: 56, titulo: 'Comprar un billete' },
    { num: 57, titulo: 'En el aeropuerto' },
    { num: 58, titulo: 'En la estacion de tren' },
    { num: 59, titulo: 'Viajes y turismo' },
    { num: 60, titulo: 'Repaso del Modulo 6' },
  ]
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/dashboard"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/dashboard" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Modulo 6</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-1">Transporte y ciudad</h1>
          <p className="text-gray-500 mt-2">10 lecciones · Lecciones 51 a 60</p>
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
