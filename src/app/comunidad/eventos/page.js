export default function Eventos() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/comunidad" className="text-sm text-gray-500">Volver a Comunidad</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-sm text-red-500 font-medium">Comunidad</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Eventos y fiestas latinas en Polonia</h1>
        <p className="text-gray-500 mb-10">Aqui encontraras eventos multiculturales, fiestas latinas y encuentros de la comunidad hispanohablante en las principales ciudades de Polonia.</p>
        <div className="bg-white rounded-2xl p-8 shadow-sm mb-6 text-center">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="text-xl font-bold text-gray-900 mb-2">Proximamente</h2>
          <p className="text-gray-500">Estamos construyendo el directorio de eventos. Si organizas eventos latinos en Polonia, contactanos para aparecer aqui.</p>
        </div>
        <div className="bg-red-50 rounded-2xl p-6">
          <p className="text-gray-700 font-medium mb-2">Mientras tanto, donde buscar eventos:</p>
          <ul className="space-y-2 text-gray-600 text-sm">
            <li>• Grupos de Facebook de latinos en Varsovia, Cracovia, Gdansk, Wroclaw</li>
            <li>• Instagram: busca #latinosenpolonia #hispanoenpolonia</li>
            <li>• Eventbrite Polonia — filtra por eventos latinos o multiculturales</li>
          </ul>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/comunidad" className="text-red-500 font-medium hover:underline">← Volver a Comunidad</a>
        </div>
      </div>
    </main>
  )
}
