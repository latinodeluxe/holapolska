export default function Home() {
  const modulos = [
    { titulo: 'Aprender Polaco', desc: 'Curso completo A1 con 100 lecciones, ejercicios y gamificacion', icono: '🇵🇱', href: '/idioma', activo: true },
    { titulo: 'Vivir en Polonia', desc: 'Alquiler, banco, SIM, transporte, salud, PESEL, trabajo e impuestos', icono: '🏠', href: '/vivir-en-polonia', activo: false },
    { titulo: 'Legalidad', desc: 'Residencia, visas, derechos laborales, contratos y tramites', icono: '⚖️', href: '/legalidad', activo: false },
    { titulo: 'Cultura', desc: 'Costumbres, educacion, relaciones sociales y normas culturales', icono: '🎭', href: '/cultura', activo: false },
    { titulo: 'Herramientas', desc: 'Calculadoras, conversor PLN, traductor y plantillas', icono: '🛠️', href: '/herramientas', activo: false },
    { titulo: 'Comunidad', desc: 'Eventos, noticias, foro y directorio de empresas latinas', icono: '🤝', href: '/comunidad', activo: false },
    { titulo: 'Recursos', desc: 'Descargas, guias en PDF, checklists y videos', icono: '📚', href: '/recursos', activo: false },
  ]

  return (
    <main className="min-h-screen bg-white">
      <nav className="flex items-center justify-between px-8 py-5 border-b border-gray-100">
        <div className="flex items-center gap-1">
          <span className="text-2xl font-bold text-red-500">Hola</span>
          <span className="text-2xl font-bold text-gray-900">Polska</span>
        </div>
        <div className="flex items-center gap-4">
          <a href="/idioma/login" className="text-gray-600 hover:text-gray-900 text-sm font-medium transition-colors">Iniciar sesion</a>
          <a href="/idioma/registro" className="bg-red-500 hover:bg-red-600 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-colors">Empezar gratis</a>
        </div>
      </nav>

      <section className="flex flex-col items-center justify-center text-center px-6 py-20 max-w-4xl mx-auto">
        <div className="inline-flex items-center gap-2 bg-red-50 text-red-600 text-sm font-medium px-4 py-2 rounded-full mb-8">
          Plataforma de integracion para hispanohablantes
        </div>
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight mb-6">
          Tu vida en Polonia
          <span className="text-red-500"> empieza aqui</span>
        </h1>
        <p className="text-xl text-gray-500 max-w-2xl mb-10">
          Idioma, tramites, cultura y comunidad en un solo lugar. Creado por y para hispanohablantes en Polonia.
        </p>
        <a href="/idioma" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors">
          Empezar a aprender polaco
        </a>
      </section>

      <section className="bg-gray-50 py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16">Todo lo que necesitas en un solo lugar</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {modulos.map((m) => (
              <a key={m.titulo} href={m.href} className={"bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow flex items-start gap-4 " + (m.activo ? "ring-2 ring-red-500" : "")}>
                <div className="text-4xl">{m.icono}</div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-xl font-bold text-gray-900">{m.titulo}</h3>
                    {m.activo ? (
                      <span className="text-xs bg-red-50 text-red-500 px-2 py-0.5 rounded-full font-medium">Disponible</span>
                    ) : (
                      <span className="text-xs bg-gray-100 text-gray-500 px-2 py-0.5 rounded-full font-medium">Proximamente</span>
                    )}
                  </div>
                  <p className="text-gray-500 text-sm">{m.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      <footer className="py-10 px-6 text-center text-gray-400 text-sm">
        <div className="flex items-center justify-center gap-1 mb-4">
          <span className="font-bold text-red-500">Hola</span>
          <span className="font-bold text-gray-600">Polska</span>
        </div>
        <div className="flex items-center justify-center gap-4 mb-4 flex-wrap">
          <a href="/compliance/legal" className="hover:text-gray-600">Aviso Legal</a>
          <a href="/compliance/privacy" className="hover:text-gray-600">Privacidad</a>
          <a href="/compliance/cookies" className="hover:text-gray-600">Cookies</a>
          <a href="/compliance/accessibility" className="hover:text-gray-600">Accesibilidad</a>
          <a href="/compliance/copyright" className="hover:text-gray-600">Copyright</a>
        </div>
        <p>Hecho con amor para la comunidad hispanohablante en Polonia</p>
      </footer>
    </main>
  )
}
