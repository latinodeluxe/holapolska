export const metadata = {
  title: 'Transporte público en Polonia — Guía en español | HolaPolska',
  description: 'Cómo funciona el transporte público en Polonia: buses, tranvías, metro, billetes y la app Jakdojade.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function Transporte() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Vivir en Polonia" volverHref="/vivir-en-polonia" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/vivir-en-polonia" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Vivir en Polonia</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Transporte público en Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">Polonia tiene un transporte público muy bien organizado en las ciudades grandes. Una vez que entiendes el sistema de billetes, moverte es fácil y barato.</p>
        </div>
        <div className="space-y-4">
          {[
            { titulo: 'Cómo funciona el sistema', desc: 'Cada ciudad tiene su propio operador: ZTM en Varsovia, MPK en Cracovia, ZTM Gdańsk. El principio es el mismo en todas: compras un billete por tiempo (no por trayecto) y puedes hacer todos los transbordos que quieras. En Varsovia, el billete de 90 minutos cuesta 7 PLN y el de 20 minutos 3,40 PLN.' },
            { titulo: 'El abono mensual', desc: 'Si vives y trabajas en Polonia, el abono mensual es lo más rentable. En Varsovia, el abono de 30 días en zona 1 cuesta 110 PLN, y el de zona 1+2 cuesta 180 PLN, con viajes ilimitados en todos los medios. Se carga en la Warszawska Karta Miejska.' },
            { titulo: 'Metro, tranvía y autobús', desc: 'Varsovia tiene dos líneas de metro. Cracovia y Varsovia tienen redes de tranvía muy completas. Para trayectos interurbanos (entre ciudades), los trenes de PKP Intercity son la opción principal.' },
            { titulo: 'Cómo comprar billetes', desc: 'En máquinas expendedoras de las paradas, en kioscos (Ruch, Empik), con tarjeta bancaria en algunos vehículos, o por la app Jakdojade. Valida siempre el billete al subir — los revisores (kontrolerzy) son frecuentes y la multa por viajar sin billete válido es considerable.' },
          ].map((item) => (
            <div key={item.titulo} className="bg-white rounded-2xl p-6 border border-navy/8">
              <h2 className="font-display text-base font-bold text-navy mb-2">{item.titulo}</h2>
              <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
          <div className="bg-teal-light rounded-2xl p-6 space-y-3">
            {['Descarga Jakdojade — tiene horarios en tiempo real, te dice qué línea tomar y en algunas ciudades te permite comprar el billete desde el móvil.', 'El abono mensual se amortiza en pocos días si usas el transporte a diario para ir al trabajo.', 'Los estudiantes y menores de 26 años con carnet tienen descuentos de hasta el 50% en billetes.'].map((tip, i) => (
              <p key={i} className="text-sm text-teal-900">💡 {tip}</p>
            ))}
          </div>
          <DisclaimerLegal modulo="Esta guía sobre transporte público" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
