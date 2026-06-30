export default function Modulo7() {
  const lecciones = [
    { num: 61, titulo: 'El cuerpo humano' },
    { num: 62, titulo: 'Sintomas y enfermedades' },
    { num: 63, titulo: 'En el medico' },
    { num: 64, titulo: 'En la farmacia' },
    { num: 65, titulo: 'Medicamentos' },
    { num: 66, titulo: 'Habitos saludables' },
    { num: 67, titulo: 'Deporte y ejercicio' },
    { num: 68, titulo: 'Emergencias medicas' },
    { num: 69, titulo: 'Bienestar y salud mental' },
    { num: 70, titulo: 'Repaso del Modulo 7' },
  ]
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/idioma/dashboard"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/idioma/dashboard" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Modulo 7</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-1">Salud y cuerpo</h1>
          <p className="text-gray-500 mt-2">10 lecciones · Lecciones 61 a 70</p>
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
