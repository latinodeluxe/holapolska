export const metadata = {
  title: 'ZUS en Polonia — Sistema de seguridad social | HolaPolska',
  description: 'Que es el ZUS, como funciona y que cubre el sistema de seguridad social polaco.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function Zus() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Legalidad" volverHref="/legalidad" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/legalidad" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Legalidad</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">ZUS — El sistema de seguridad social polaco</h1>
          <p className="text-navy/50 text-base leading-relaxed">El ZUS (Zaklad Ubezpieczen Spolecznych) es el equivalente a la seguridad social en Polonia. Si trabajas legalmente, tu empleador te registra automaticamente y hace las contribuciones.</p>
        </div>
        <div className="space-y-4">
          {[
            { título: 'Que cubre el ZUS', desc: 'Seguro de jubilacion (emerytura), seguro de invalidez, seguro de enfermedad (baja medica pagada), seguro de accidentes de trabajo y seguro de desempleo. Las contribuciones se descuentan automaticamente de tu salario bruto.' },
            { título: 'Como verificar que estas dado de alta', desc: 'Entra a zus.pl con tu PESEL y crea una cuenta en el Portal PUE ZUS. Ahi puedes ver tu historial de contribuciones, datos de tu empleador y documentos.' },
            { título: 'Baja por enfermedad (L4)', desc: 'Si te enfermas, el médico puede emitir una baja electronica (e-ZLA). Los primeros 33 días del ano los paga el empleador, a partir del dia 34 los paga el ZUS directamente. El importe es el 80% de tu salario base.' },
            { título: 'Si trabajas por cuenta propia', desc: 'Como autonomo (dzialalnosc gospodarcza) debes pagar el ZUS tu mismo. Hay contribuciones reducidas durante los primeros 2 anos. El importe mensual varia según la base elegida.' },
          ].map((item) => (
            <div key={item.título} className="bg-white rounded-2xl p-6 border border-navy/8">
              <h2 className="font-display text-base font-bold text-navy mb-2">{item.título}</h2>
              <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
          <div className="bg-teal-light rounded-2xl p-6 space-y-3">
            {['Guarda todos los documentos de tu relacion laboral — pueden ser utiles si hay disputas con el ZUS.', 'Si cambias de trabajo, verifica que el nuevo empleador te registre en el ZUS desde el primer dia.', 'Puedes solicitar un extracto de tu historial de contribuciones en cualquier oficina del ZUS.'].map((tip, i) => (
              <p key={i} className="text-sm text-teal-900">💡 {tip}</p>
            ))}
          </div>
        </div>
        <DisclaimerLegal modulo="Esta guia sobre el ZUS" />
      </div>
      <Footer />
    </div>
  )
}
