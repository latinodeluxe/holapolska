export const metadata = {
  title: "HolaPolska — vivir en polonia",
  description: "Informacion y recursos para hispanohablantes en Polonia. Todo en espanol y gratis.",
}

export default function VivirEnPolonia() {
  const temas = [
    { titulo: 'PESEL', desc: 'Que es, para que sirve y como tramitarlo', icono: '🆔', href: '/vivir-en-polonia/pesel', disponible: true },
    { titulo: 'Cuenta bancaria', desc: 'Como abrir tu cuenta bancaria en Polonia', icono: '🏦', href: '/vivir-en-polonia/banco', disponible: true },
    { titulo: 'SIM y telefono', desc: 'Companias, planes y como conseguir tu numero', icono: '📱', href: '/vivir-en-polonia/sim', disponible: true },
    { titulo: 'Alquiler de apartamento', desc: 'Como buscar y firmar tu primer contrato de alquiler', icono: '🏠', href: '#', disponible: false },
    { titulo: 'Transporte', desc: 'Transporte publico, tarjetas y aplicaciones', icono: '🚊', href: '#', disponible: false },
    { titulo: 'Sistema de salud', desc: 'Como funciona el NFZ y la atencion medica', icono: '🏥', href: '#', disponible: false },
    { titulo: 'Buscar trabajo', desc: 'Como buscar empleo legalmente en Polonia', icono: '💼', href: '#', disponible: false },
    { titulo: 'Impuestos', desc: 'Como funciona el sistema fiscal polaco', icono: '📋', href: '#', disponible: false },
    { titulo: 'Escuelas', desc: 'Sistema educativo para tus hijos', icono: '🎒', href: '#', disponible: false },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Vivir en Polonia</h1>
        <p className="text-gray-500 text-lg mb-12">Guias practicas para instalarte: tramites, banco, telefono, vivienda, salud y mas.</p>
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
