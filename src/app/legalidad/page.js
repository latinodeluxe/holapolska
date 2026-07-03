export const metadata = {
  title: "HolaPolska — legalidad",
  description: "Informacion y recursos para hispanohablantes en Polonia. Todo en espanol y gratis.",
}

export default function Legalidad() {
  const temas = [
    { titulo: 'Permiso de residencia', desc: 'Tipos, requisitos y como tramitar tu Karta Pobytu', icono: '📄', href: '/legalidad/permiso-residencia', disponible: true },
    { titulo: 'Contrato de trabajo', desc: 'Tipos de contrato, derechos y que debes revisar antes de firmar', icono: '✍️', href: '/legalidad/contrato-trabajo', disponible: true },
    { titulo: 'ZUS y seguridad social', desc: 'Cotizaciones, cobertura y como funciona el sistema polaco', icono: '🛡️', href: '/legalidad/zus', disponible: true },
    { titulo: 'Visas', desc: 'Tipos de visa para trabajar y vivir en Polonia', icono: '🛂', href: '#', disponible: false },
    { titulo: 'NFZ y sistema de salud', desc: 'Como acceder al sistema publico de salud', icono: '🏥', href: '#', disponible: false },
    { titulo: 'Inspeccion de trabajo', desc: 'Denuncias, derechos y como protegerte', icono: '⚖️', href: '#', disponible: false },
    { titulo: 'Impuestos y declaracion', desc: 'PIT, NIP y como cumplir con Hacienda en Polonia', icono: '📋', href: '#', disponible: false },
    { titulo: 'Multas y sanciones', desc: 'Las mas comunes y como evitarlas o recurrirlas', icono: '🚨', href: '#', disponible: false },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Legalidad</h1>
        <p className="text-gray-500 text-lg mb-12">Todo lo que necesitas saber sobre permisos, contratos, derechos y obligaciones en Polonia.</p>
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
