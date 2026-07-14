export const metadata = {
  title: 'Multas y sanciones en Polonia — Guía en español | HolaPolska',
  description: 'Qué hacer si recibes una multa en Polonia. Tipos de multas, cómo pagar y cómo recurrir.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function Multas() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Legalidad" volverHref="/legalidad" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/legalidad" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Legalidad</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Multas y sanciones en Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">Polonia tiene un sistema de multas activo y los controles son frecuentes — especialmente en transporte público y tráfico. Es mejor conocer las reglas que sorprenderse con una multa.</p>
        </div>
        <div className="space-y-4">
          {[
            { titulo: 'Transporte público sin billete', desc: 'Los revisores (kontrolerzy) son frecuentes y la multa por viajar sin billete válido es de aproximadamente 280 PLN si la pagas en el acto o dentro de 7 días. Si te niegas a identificarte, pueden llamar a la policía. Siempre valida tu billete al subir — un billete no validado cuenta como no tener billete.' },
            { titulo: 'Multas de tráfico', desc: 'Las multas de tráfico se aplican en el acto (mandat karny) o por correo si te fotografió una cámara de velocidad. Las multas por exceso de velocidad van desde 300 PLN hasta 5.000 PLN según la gravedad. Conducir bajo los efectos del alcohol tiene consecuencias penales serias, incluyendo arresto.' },
            { titulo: 'Ruido nocturno', desc: 'El cisza nocna (silencio nocturno) va de las 22:00 a las 06:00 en la mayoría de edificios. Los vecinos pueden llamar a la policía municipal (Straż Miejska) si hay ruido excesivo. Las multas pueden llegar hasta 500 PLN.' },
            { titulo: 'Fumar en lugares prohibidos', desc: 'Fumar está prohibido en todos los espacios públicos cerrados, paradas de transporte y a menos de 10 metros de las entradas de edificios públicos. La multa es de 500 PLN.' },
          ].map((item) => (
            <div key={item.titulo} className="bg-white rounded-2xl p-6 border border-navy/8">
              <h2 className="font-display text-base font-bold text-navy mb-2">{item.titulo}</h2>
              <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
          <div className="bg-white rounded-2xl p-6 border border-navy/8">
            <h2 className="font-display text-base font-bold text-navy mb-3">¿Cómo pagar o recurrir una multa?</h2>
            <p className="text-navy/65 leading-relaxed text-sm mb-3">Si aceptas la multa, puedes pagarla en el acto (algunas aceptan tarjeta), por transferencia bancaria al número de cuenta indicado en el documento, o en una oficina de correos (Poczta Polska). Si no estás de acuerdo, tienes derecho a no aceptar el mandat — en ese caso el asunto va a un tribunal (sąd). Consulta a un abogado antes de decidir.</p>
          </div>
          <div className="bg-navy rounded-2xl p-6 space-y-3">
            {['Si no entiendes lo que dice el documento de la multa, no firmes nada — pide ayuda o un intérprete.', 'Firmar un mandat karny equivale a aceptarlo y renunciar a recursos posteriores.', 'No pagar una multa a tiempo puede resultar en procedimientos de cobro forzoso (egzekucja) y restricciones migratorias.'].map((tip, i) => (
              <p key={i} className="text-sm text-white/70">💡 {tip}</p>
            ))}
          </div>
          <DisclaimerLegal modulo="Esta guía sobre multas y sanciones" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
