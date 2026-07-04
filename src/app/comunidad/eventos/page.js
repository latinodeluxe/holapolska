export const metadata = {
  title: 'Eventos latinos en Polonia | HolaPolska',
  description: 'Eventos multiculturales, fiestas latinas y encuentros de la comunidad hispanohablante en Polonia.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Eventos() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Comunidad" volverHref="/comunidad" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/comunidad" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Comunidad</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-3">Eventos y fiestas latinas en Polonia</h1>
          <p className="text-navy/50 text-base">Eventos multiculturales, fiestas latinas y encuentros de la comunidad hispanohablante en las principales ciudades de Polonia.</p>
        </div>

        <div className="bg-white rounded-2xl border border-navy/8 p-10 text-center mb-6">
          <div className="text-5xl mb-4">🎉</div>
          <h2 className="font-display text-xl font-bold text-navy mb-2">Proximamente</h2>
          <p className="text-navy/50 text-sm leading-relaxed max-w-sm mx-auto">Estamos construyendo el directorio de eventos. Si organizas eventos latinos en Polonia, contactanos para aparecer aqui.</p>
        </div>

        <div className="bg-magenta-light rounded-2xl p-6">
          <p className="text-sm font-semibold text-pink-900 mb-3">Mientras tanto, donde buscar eventos:</p>
          <ul className="space-y-2 text-sm text-pink-900">
            <li>• Grupos de Facebook de latinos en Varsovia, Cracovia, Gdansk, Wroclaw</li>
            <li>• Instagram: busca #latinosenpolonia #hispanoenpolonia</li>
            <li>• Eventbrite Polonia — filtra por eventos latinos o multiculturales</li>
          </ul>
        </div>
      </div>
      <Footer />
    </div>
  )
}
