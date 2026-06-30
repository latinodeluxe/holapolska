export default function CursoPolacoA1() {
  const lecciones = [
    { num: 1, titulo: 'Hola y hasta luego', duracion: '5 min' },
    { num: 2, titulo: 'Como te llamas', duracion: '5 min' },
    { num: 3, titulo: 'De donde eres', duracion: '5 min' },
    { num: 4, titulo: 'Cuantos anos tienes', duracion: '5 min' },
    { num: 5, titulo: 'Pronombres personales', duracion: '7 min' },
    { num: 6, titulo: 'El verbo ser', duracion: '7 min' },
    { num: 7, titulo: 'Numeros del 1 al 10', duracion: '5 min' },
    { num: 8, titulo: 'Si No Gracias Por favor', duracion: '5 min' },
    { num: 9, titulo: 'Frases de cortesia', duracion: '5 min' },
    { num: 10, titulo: 'Repaso y practica', duracion: '10 min' },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/idioma/dashboard">
          <span className="font-bold text-gray-900">Polska</span>
          <span className="font-bold text-red-500">Nol</span>
        </a>
        <a href="/idioma/dashboard" className="text-sm text-gray-500 hover:text-gray-900">Volver al inicio</a>
      </nav>

      <div className="max-w-4xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Modulo 1</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-1">Saludos y presentaciones</h1>
          <p className="text-gray-500 mt-2">10 lecciones · Aprende a saludar y presentarte en polaco</p>
        </div>

        <div className="bg-white rounded-2xl p-6 shadow-sm mb-8">
          <div className="flex justify-between text-sm text-gray-500 mb-2">
            <span>Tu progreso</span>
            <span>0 de 10 lecciones</span>
          </div>
          <div className="w-full bg-gray-100 rounded-full h-3">
            <div className="bg-red-500 h-3 rounded-full w-0"></div>
          </div>
        </div>

        <div className="grid gap-3">
          {lecciones.map((leccion) => (
            <a href={"/idioma/curso/" + leccion.num} key={leccion.num} className="bg-white rounded-xl p-5 shadow-sm flex items-center justify-between hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4">
                <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 font-bold text-sm">{leccion.num}</div>
                <div>
                  <h3 className="font-semibold text-gray-900">{leccion.titulo}</h3>
                  <p className="text-sm text-gray-400">{leccion.duracion}</p>
                </div>
              </div>
              <span className="text-gray-400">▶</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}