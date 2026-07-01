export default function Comunidad() {
  const temas = [
    { titulo: 'Eventos y fiestas', desc: 'Eventos latinos, multiculturales y encuentros de la comunidad en Polonia', icono: '🎉', href: '/comunidad/eventos', disponible: true },
    { titulo: 'Negocios latinos', desc: 'Directorio de restaurantes, tiendas y servicios de la comunidad latina', icono: '🏪', href: '/comunidad/negocios-latinos', disponible: true },
    { titulo: 'Noticias', desc: 'Lo mas relevante para la comunidad hispanohablante en Polonia', icono: '📰', href: '#', disponible: false },
    { titulo: 'Foro', desc: 'Preguntas, respuestas y experiencias de la comunidad', icono: '💬', href: '#', disponible: false },
    { titulo: 'Voluntariado', desc: 'Oportunidades para contribuir y conectar con la comunidad local', icono: '🤝', href: '#', disponible: false },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Comunidad</h1>
        <p className="text-gray-500 text-lg mb-12">Eventos, negocios latinos, noticias y espacios para conectar con la comunidad hispanohablante en Polonia.</p>
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
