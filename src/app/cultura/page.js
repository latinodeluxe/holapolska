export default function Cultura() {
  const temas = [
    { titulo: 'Costumbres polacas', desc: 'Lo que sorprende a los latinos al llegar a Polonia', icono: '🎭', href: '/cultura/costumbres', disponible: true },
    { titulo: 'Fiestas y festividades', desc: 'Navidad, Pascua, Todos los Santos y mas celebraciones polacas', icono: '🎉', href: '/cultura/fiestas', disponible: true },
    { titulo: 'Normas sociales', desc: 'Que hacer y que evitar para integrarte sin errores', icono: '🤝', href: '/cultura/normas-sociales', disponible: true },
    { titulo: 'Sistema educativo', desc: 'Como funciona la escuela en Polonia si tienes hijos', icono: '🎒', href: '#', disponible: false },
    { titulo: 'Gastronomia polaca', desc: 'Platos tipicos, ingredientes y donde comer bien', icono: '🥟', href: '#', disponible: false },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cultura</h1>
        <p className="text-gray-500 text-lg mb-12">Costumbres, fiestas, normas sociales y todo lo que necesitas saber para integrarte en Polonia.</p>
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
