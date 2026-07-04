export const metadata = {
  title: 'Cuenta bancaria en Polonia — Guia en espanol | HolaPolska',
  description: 'Como abrir una cuenta bancaria en Polonia siendo extranjero. Bancos, requisitos y consejos.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Banco() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Vivir en Polonia" volverHref="/vivir-en-polonia" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/vivir-en-polonia" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Vivir en Polonia</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Como abrir una cuenta bancaria en Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">Abrir una cuenta bancaria en Polonia es mas facil de lo que parece. La mayoria de bancos permiten abrir cuenta con solo el pasaporte, sin necesitar el PESEL todavia.</p>
        </div>
        <div className="space-y-4">
          {[
            { titulo: 'Bancos recomendados para extranjeros', desc: 'PKO BP, Santander Bank Polska, mBank e ING Bank Slaski son los mas accesibles para extranjeros. Todos tienen app en ingles y algunas sucursales con atencion en ingles.' },
            { titulo: 'Documentos que necesitas', desc: 'Pasaporte vigente es suficiente en la mayoria de casos. Algunos bancos piden ademas el PESEL o un comprobante de domicilio. Lleva siempre el pasaporte y una copia.' },
            { titulo: 'El proceso', desc: 'Ve a una sucursal, pide abrir una cuenta de ahorro (konto osobiste). Te pediran los documentos, firmaras el contrato y en el momento o en pocos dias tendras tu tarjeta de debito.' },
            { titulo: 'Cuentas online sin ir a sucursal', desc: 'Revolut y Wise son excelentes opciones si quieres empezar a operar antes de tener cuenta polaca. Se abren 100% online y son muy usadas por la comunidad latina en Polonia.' },
          ].map((item) => (
            <div key={item.titulo} className="bg-white rounded-2xl p-6 border border-navy/8">
              <h2 className="font-display text-base font-bold text-navy mb-2">{item.titulo}</h2>
              <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
          <div className="bg-mango-light rounded-2xl p-6 space-y-3">
            {['Abre la cuenta lo antes posible — la necesitaras para recibir tu salario.', 'Pregunta si hay cuenta sin comision de mantenimiento — muchos bancos la ofrecen si recibes nomina.', 'Activa las notificaciones de la app para controlar todos los movimientos.'].map((tip, i) => (
              <p key={i} className="text-sm text-yellow-800">💡 {tip}</p>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
