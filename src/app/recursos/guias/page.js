export const metadata = {
  title: 'Guias en PDF para vivir en Polonia | HolaPolska',
  description: 'Guias descargables para hispanohablantes en Polonia. PESEL, Karta Pobytu, trabajo y mas.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const guias = [
  { titulo: 'Guia de llegada a Polonia', desc: 'Los primeros pasos al llegar: SIM, banco, PESEL y registro de residencia', icono: '✈️' },
  { titulo: 'Guia de tramites esenciales', desc: 'PESEL, Karta Pobytu, ZUS y NFZ explicados paso a paso', icono: '📋' },
  { titulo: 'Guia de derechos laborales', desc: 'Todo sobre contratos, salario minimo, vacaciones y como denunciar abusos', icono: '⚖️' },
  { titulo: 'Guia de salud en Polonia', desc: 'Como usar el NFZ, encontrar medico y que hacer en emergencias', icono: '🏥' },
]

export default function Guias() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Recursos" volverHref="/recursos" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/recursos" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Recursos</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-3">Guias en PDF</h1>
          <p className="text-navy/50 text-base">Documentos descargables para tener a mano cuando mas los necesitas. Sin internet, sin buscar.</p>
        </div>

        <div className="grid gap-4 mb-6">
          {guias.map((g) => (
            <div key={g.titulo} className="bg-white/60 rounded-2xl border border-navy/5 p-5 flex items-start gap-4 opacity-60">
              <div className="w-12 h-12 rounded-xl bg-teal-light flex items-center justify-center text-xl flex-shrink-0">{g.icono}</div>
              <div className="flex-1">
                <h3 className="font-semibold text-navy text-sm mb-1">{g.titulo}</h3>
                <p className="text-xs text-navy/50 leading-relaxed">{g.desc}</p>
                <span className="inline-block mt-2 text-xs bg-navy/5 text-navy/40 px-2 py-0.5 rounded-full">Proximamente</span>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-teal-light rounded-2xl p-6">
          <p className="text-sm text-teal-900 mb-4">💡 Mientras preparamos las guias, toda la informacion esta disponible en los modulos.</p>
          <div className="flex gap-3 flex-wrap">
            <a href="/vivir-en-polonia" className="bg-teal text-white px-4 py-2 rounded-full text-sm font-semibold hover:bg-teal/90 transition-colors">Vivir en Polonia</a>
            <a href="/legalidad" className="border border-teal text-teal px-4 py-2 rounded-full text-sm font-semibold hover:bg-teal/10 transition-colors">Legalidad</a>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
