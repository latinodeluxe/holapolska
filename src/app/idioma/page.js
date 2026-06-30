export default function Idioma() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <div className="flex items-center gap-4">
          <a href="/idioma/login" className="text-sm text-gray-500 hover:text-gray-900">Iniciar sesion</a>
          <a href="/idioma/registro" className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-5 py-2 rounded-full">Empezar gratis</a>
        </div>
      </nav>

      <section className="max-w-3xl mx-auto px-6 py-20 text-center">
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-medium px-4 py-2 rounded-full mb-8">
          Aprende polaco gratis
        </div>
        <h1 className="text-5xl font-bold text-gray-900 leading-tight mb-6">
          Aprende polaco de forma <span className="text-red-500">natural y efectiva</span>
        </h1>
        <p className="text-xl text-gray-500 mb-10">
          100 lecciones, ejercicios interactivos y progreso real. Curso completo nivel A1, totalmente gratis.
        </p>
        <div className="flex gap-4 justify-center flex-wrap">
          <a href="/idioma/registro" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full text-lg">
            Comenzar ahora
          </a>
          <a href="/idioma/cursos/polaco-a1" className="border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-full text-lg">
            Ver el curso A1
          </a>
        </div>
      </section>
    </main>
  )
}
