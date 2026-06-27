export default function Home() {
  return (
    <main className="min-h-screen bg-white">

      {/* NAVBAR */}
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <div className="flex items-center gap-2">
          <span className="text-2xl font-bold text-gray-900">Polska</span>
          <span className="text-2xl font-bold text-red-500">Nol</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/login" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">
            Iniciar sesión
          </a>
          <a href="/registro" className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors">
            Empezar gratis
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section className="flex flex-col items-center justify-center text-center px-6 py-24 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-medium px-4 py-2 rounded-full mb-8">
          🇵🇱 Aprende polaco gratis
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Aprende polaco de forma
          <span className="text-red-500"> natural y efectiva</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mb-10">
          La plataforma gratuita para hispanohablantes que quieren aprender polaco. 
          Lecciones cortas, ejercicios interactivos y progreso real.
        </p>
        <div className="flex flex-col sm:flex-row gap-4">
          <a href="/registro" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">
            Comenzar ahora — es gratis
          </a>
          <a href="/cursos" className="border border-gray-200 hover:border-gray-300 text-gray-700 font-semibold px-8 py-4 rounded-full text-lg transition-colors">
            Ver el curso A1
          </a>
        </div>
      </section>

      {/* CARACTERÍSTICAS */}
      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">
            Todo lo que necesitas para aprender
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">📚</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100 lecciones</h3>
              <p className="text-gray-500">Desde cero hasta conversaciones reales. Curso completo nivel A1 con 10 módulos.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🎯</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Ejercicios interactivos</h3>
              <p className="text-gray-500">Flashcards, completar espacios, ordenar palabras y mucho más para aprender jugando.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🏆</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Gamificación</h3>
              <p className="text-gray-500">Gana XP, mantén tu racha diaria, sube de nivel y compite en el ranking global.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">🗣️</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Pronunciación</h3>
              <p className="text-gray-500">Cada palabra tiene pronunciación escrita en español. Sin símbolos raros.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">📊</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">Tu progreso</h3>
              <p className="text-gray-500">Estadísticas detalladas de tu avance, tiempo estudiado y palabras aprendidas.</p>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-sm">
              <div className="text-4xl mb-4">💰</div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">100% gratuito</h3>
              <p className="text-gray-500">Sin pagos, sin anuncios, sin trampas. Creado por la comunidad para la comunidad.</p>
            </div>

          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-10 px-6 text-center text-gray-400 text-sm">
        <p>PolskaNol — Aprende polaco gratis 🇵🇱</p>
        <p className="mt-2">Hecho con ❤️ para la comunidad hispanohablante</p>
      </footer>

    </main>
  )
}