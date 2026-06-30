export default function VivirEnPolonia() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Vivir en Polonia</h1>
        <p className="text-gray-500 text-lg mb-12">Guias practicas para instalarte: alquiler, banco, SIM, transporte, salud, PESEL, trabajo, impuestos y escuelas.</p>
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Proximamente</h2>
          <p className="text-gray-500">Estamos preparando contenido detallado para ayudarte a establecerte en Polonia.</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Tienes una pregunta especifica</h2>
          <p className="text-gray-500">Escribenos y la incluiremos en las proximas guias.</p>
        </div>
      </div>
    </main>
  )
}
