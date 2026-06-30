export default function Modulo8() {
  const lecciones = [
    { num: 71, titulo: 'El trabajo y la oficina' },
    { num: 72, titulo: 'Profesiones avanzadas' },
    { num: 73, titulo: 'Buscar trabajo' },
    { num: 74, titulo: 'La entrevista de trabajo' },
    { num: 75, titulo: 'En la oficina' },
    { num: 76, titulo: 'Documentos y papeles' },
    { num: 77, titulo: 'Comunicacion en el trabajo' },
    { num: 78, titulo: 'Horarios y turnos' },
    { num: 79, titulo: 'El salario y beneficios' },
    { num: 80, titulo: 'Repaso del Modulo 8' },
  ]
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/idioma/dashboard"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/idioma/dashboard" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Modulo 8</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-1">Trabajo y oficina</h1>
          <p className="text-gray-500 mt-2">10 lecciones · Lecciones 71 a 80</p>
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
