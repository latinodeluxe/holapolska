export default function Recursos() {
  const temas = [
    { titulo: 'Guias en PDF', desc: 'Documentos descargables para tener a mano los tramites mas importantes', icono: '📄', href: '/recursos/guias', disponible: true },
    { titulo: 'Checklists', desc: 'Listas de verificacion para no olvidar nada en cada proceso', icono: '✅', href: '/recursos/checklists', disponible: true },
    { titulo: 'Videos explicativos', desc: 'Tutoriales en video sobre tramites y vida en Polonia', icono: '🎬', href: '#', disponible: false },
    { titulo: 'Plantillas de documentos', desc: 'Modelos de cartas, solicitudes y contratos en espanol y polaco', icono: '📝', href: '#', disponible: false },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Recursos</h1>
        <p className="text-gray-500 text-lg mb-12">Guias, checklists, videos y plantillas para apoyarte en cada etapa de tu vida en Polonia.</p>
        <div className="grid gap-4">
          {temas.map((tema) => (
            tema.disponible ? (
              <a key={tema.titulo} href={tema.href} className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4 hover:shadow-md transition-shadow">
                <div className="text-3xl">{tema.icono}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{tema.titulo}</h3>
                  <p className="text-sm text-gray-500">{tema.desc}</p>
                </div>
                <span className="text-gray-400">▶</span>
              </a>
            ) : (
              <div key={tema.titulo} className="bg-white rounded-xl p-6 shadow-sm flex items-center gap-4 opacity-50">
                <div className="text-3xl">{tema.icono}</div>
                <div className="flex-1">
                  <h3 className="font-semibold text-gray-900">{tema.titulo}</h3>
                  <p className="text-sm text-gray-500">{tema.desc}</p>
                </div>
                <span className="text-xs bg-gray-100 text-gray-500 px-2 py-1 rounded-full">Proximamente</span>
              </div>
            )
          ))}
        </div>
      </div>
    </main>
  )
}
