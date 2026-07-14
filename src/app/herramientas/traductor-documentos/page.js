export const metadata = {
  title: 'Cómo traducir documentos oficiales en Polonia | HolaPolska',
  description: 'Guía para traducir documentos oficiales en Polonia. Traductor jurado, costos y qué documentos necesitan traducción.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function TraductorDocumentos() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Herramientas" volverHref="/herramientas" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/herramientas" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Herramientas</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Cómo traducir documentos oficiales</h1>
          <p className="text-navy/50 text-base leading-relaxed">Muchos trámites en Polonia requieren documentos traducidos oficialmente al polaco. No cualquier traducción sirve — para documentos legales necesitas un traductor jurado (tłumacz przysięgły).</p>
        </div>
        <div className="space-y-4">
          {[
            { titulo: '¿Qué es un traductor jurado?', desc: 'Un tłumacz przysięgły es un traductor certificado por el Ministerio de Justicia polaco. Sus traducciones tienen validez legal — llevan sello oficial y número de registro. No es lo mismo que un traductor normal o Google Translate: para documentos oficiales, solo vale la traducción jurada.' },
            { titulo: '¿Qué documentos necesitan traducción jurada?', desc: 'Actas de nacimiento, matrimonio o defunción, títulos universitarios y diplomas, certificados de antecedentes penales, poderes notariales, contratos importantes, y cualquier documento que presentes ante una autoridad polaca (Urząd, tribunal, NFZ).' },
            { titulo: '¿Cuánto cuesta?', desc: 'El precio estándar es de aproximadamente 60-70 PLN por página de traducción estándar (1.125 caracteres con espacios). Las traducciones urgentes pueden costar más. Una página de un acta de nacimiento cuesta normalmente entre 70 y 100 PLN. Pide presupuesto antes de encargar.' },
            { titulo: '¿Cómo encontrar un traductor jurado de español?', desc: 'La lista oficial de traductores jurados está en el portal del Ministerio de Justicia: arch-bip.ms.gov.pl. Busca por idioma "hiszpański". También puedes pedir recomendaciones en tu consulado o en grupos de Facebook de la comunidad latina.' },
          ].map((item) => (
            <div key={item.titulo} className="bg-white rounded-2xl p-6 border border-navy/8">
              <h2 className="font-display text-base font-bold text-navy mb-2">{item.titulo}</h2>
              <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
          <div className="bg-mango-light rounded-2xl p-6 space-y-3">
            {['No necesitas traducir documentos que ya están en polaco o que la institución acepta en inglés — pregunta primero.', 'Las traducciones juradas no caducan, pero algunos trámites exigen que el documento original tenga menos de 3 o 6 meses de antigüedad.', 'Muchos traductores jurados aceptan documentos por email y entregan la traducción por correo o en persona.'].map((tip, i) => (
              <p key={i} className="text-sm text-yellow-800">💡 {tip}</p>
            ))}
          </div>
          <DisclaimerLegal modulo="Esta guía sobre traducción de documentos" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
