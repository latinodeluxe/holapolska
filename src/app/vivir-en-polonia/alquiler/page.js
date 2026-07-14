export const metadata = {
  title: 'Alquiler de apartamento en Polonia — Guía en español | HolaPolska',
  description: 'Cómo buscar piso en Polonia siendo extranjero. Portales, precios, contratos y consejos prácticos.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function Alquiler() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Vivir en Polonia" volverHref="/vivir-en-polonia" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/vivir-en-polonia" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Vivir en Polonia</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Cómo buscar piso y qué revisar antes de firmar</h1>
          <p className="text-navy/50 text-base leading-relaxed">Encontrar piso en Polonia siendo extranjero es perfectamente posible — no hay restricciones especiales. Lo que sí necesitas es saber dónde buscar y qué no firmar sin leer.</p>
        </div>
        <div className="space-y-4">
          {[
            { titulo: 'Dónde buscar', desc: 'Los portales más usados son OtoDOM (otodom.pl), Gratka (gratka.pl) y OLX (olx.pl). También hay grupos de Facebook específicos para latinos en Polonia donde la gente comparte pisos directamente — búscalos por ciudad. Plataformas como Flatio ofrecen apartamentos amueblados pensados para recién llegados.' },
            { titulo: 'Lo que vas a necesitar', desc: 'Pasaporte vigente, a veces tu Karta Pobytu si ya la tienes, y en muchos casos comprobante de ingresos o contrato de trabajo. Debes registrar tu residencia dentro de los 30 días posteriores a la mudanza — ese registro es el famoso meldunek, y te lo van a pedir para casi todo.' },
            { titulo: 'Cuánto cuestan los pisos', desc: 'En Varsovia, un apartamento de una habitación en zona céntrica puede costar entre 2.500 y 4.000 PLN al mes. En ciudades como Łódź, Katowice o Lublin los precios son entre 30% y 50% más bajos. Los depósitos de seguridad equivalen normalmente a entre uno y tres meses de alquiler.' },
            { titulo: 'Qué revisar antes de firmar', desc: 'Siempre firma contrato escrito. Revisa que especifique quién paga los gastos de comunidad (czynsz), cuánto es el depósito y en qué condiciones te lo devuelven, el plazo de preaviso para salir (normalmente 1-3 meses), y las reglas del edificio sobre visitas, mascotas y ruido.' },
          ].map((item) => (
            <div key={item.titulo} className="bg-white rounded-2xl p-6 border border-navy/8">
              <h2 className="font-display text-base font-bold text-navy mb-2">{item.titulo}</h2>
              <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
          <div className="bg-mango-light rounded-2xl p-6 space-y-3">
            {['Nunca pagues un depósito sin ver el piso en persona o sin verificar que el arrendador es realmente el propietario.', 'Pide ver el título de propiedad (księga wieczysta) si tienes dudas sobre quién es el dueño.', 'El registro meldunek es gratuito y obligatorio — no te lo saltes.'].map((tip, i) => (
              <p key={i} className="text-sm text-yellow-800">💡 {tip}</p>
            ))}
          </div>
          <DisclaimerLegal modulo="Esta guía sobre alquiler de apartamentos" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
