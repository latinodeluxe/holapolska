export default function NegociosLatinos() {
  const negocios = [
    { nombre: 'Restaurantes y comida latina', desc: 'Busca en Google Maps "restaurante latino [tu ciudad]" o "comida mexicana/colombiana/peruana [ciudad]"', icono: '🍽️' },
    { nombre: 'Tiendas de productos latinos', desc: 'En Varsovia, Cracovia y Gdansk hay tiendas con productos importados de Latinoamerica. Busca "tienda latina" en Google Maps.', icono: '🛒' },
    { nombre: 'Peluquerias y estetica', desc: 'Cada vez hay mas profesionales latinos ofreciendo servicios de belleza. Busca en grupos de Facebook de tu ciudad.', icono: '✂️' },
    { nombre: 'Servicios profesionales', desc: 'Traductores, asesores legales y contables que hablan espanol. Consulta en grupos de comunidad.', icono: '💼' },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/comunidad" className="text-sm text-gray-500">Volver a Comunidad</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-sm text-red-500 font-medium">Comunidad</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Negocios latinos en Polonia</h1>
        <p className="text-gray-500 mb-10">Directorio de negocios y servicios de la comunidad hispanohablante en Polonia. Pronto podras registrar tu negocio aqui.</p>
        <div className="grid gap-4 mb-10">
          {negocios.map((n) => (
            <div key={n.nombre} className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
              <div className="text-3xl">{n.icono}</div>
              <div>
                <h3 className="font-semibold text-gray-900 mb-1">{n.nombre}</h3>
                <p className="text-sm text-gray-500">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-red-50 rounded-2xl p-6">
          <p className="text-gray-700 font-medium mb-2">Tienes un negocio latino en Polonia?</p>
          <p className="text-gray-600 text-sm">Pronto podras registrarte en este directorio de forma gratuita. Estamos construyendo el formulario de alta.</p>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/comunidad" className="text-red-500 font-medium hover:underline">← Volver a Comunidad</a>
        </div>
      </div>
    </main>
  )
}
