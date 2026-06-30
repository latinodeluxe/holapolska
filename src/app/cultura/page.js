export default function Cultura() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-4xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Cultura</h1>
        <p className="text-gray-500 text-lg mb-12">Costumbres, educacion, relaciones sociales, fiestas y normas culturales: que hacer y que evitar en Polonia.</p>
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Proximamente</h2>
          <p className="text-gray-500">Contenido sobre la vida cultural polaca para ayudarte a integrarte mejor.</p>
        </div>
        <div className="bg-white rounded-2xl p-8 shadow-sm">
          <h2 className="text-xl font-bold text-gray-900 mb-2">Comparte tu experiencia</h2>
          <p className="text-gray-500">Pronto podras aportar tus propias vivencias culturales a la comunidad.</p>
        </div>
      </div>
    </main>
  )
}
