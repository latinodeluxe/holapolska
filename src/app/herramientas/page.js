export default function Herramientas() {
  const temas = [
    { titulo: 'Conversor PLN', desc: 'Convierte entre zlotys y las principales monedas latinas', icono: '💱', href: '/herramientas/conversor-pln', disponible: true },
    { titulo: 'Frases utiles en polaco', desc: 'Las frases mas practicas para el dia a dia', icono: '💬', href: '/herramientas/frases-utiles', disponible: true },
    { titulo: 'Numeros de emergencia', desc: 'Los numeros que debes tener guardados si o si', icono: '🚨', href: '/herramientas/numeros-emergencia', disponible: true },
    { titulo: 'Traductor de documentos', desc: 'Guia para traducir documentos oficiales en Polonia', icono: '📄', href: '#', disponible: false },
    { titulo: 'Buscador de oficinas', desc: 'Encuentra el Urzad, banco o centro de salud mas cercano', icono: '📍', href: '#', disponible: false },
    { titulo: 'Plantillas y modelos', desc: 'Cartas, solicitudes y documentos listos para usar', icono: '📝', href: '#', disponible: false },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Herramientas</h1>
        <p className="text-gray-500 text-lg mb-12">Recursos practicos para tu dia a dia en Polonia: conversores, frases, numeros utiles y mas.</p>
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
