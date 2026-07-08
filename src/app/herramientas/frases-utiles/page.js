export const metadata = {
  title: 'Frases utiles en polaco para el dia a dia | HolaPolska',
  description: 'Las frases mas practicas en polaco para hispanohablantes. Saludos, emergencias, transporte y mas.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

const categorias = [
  {
    titulo: 'Saludos basicos',
    color: 'magenta',
    frases: [
      { polaco: 'Dzień dobry', pronunciacion: 'dyen DOB-ri', espanol: 'Buenos dias / Buenas tardes' },
      { polaco: 'Cześć', pronunciacion: 'cheshch', espanol: 'Hola (informal)' },
      { polaco: 'Dobry wieczór', pronunciacion: 'DOB-ri VYE-chur', espanol: 'Buenas noches' },
      { polaco: 'Do widzenia', pronunciacion: 'do vi-DZE-nya', espanol: 'Hasta luego' },
      { polaco: 'Dziękuję', pronunciacion: 'dyen-KU-ye', espanol: 'Gracias' },
      { polaco: 'Proszę', pronunciacion: 'PRO-she', espanol: 'Por favor / De nada' },
      { polaco: 'Przepraszam', pronunciacion: 'pshe-PRA-sham', espanol: 'Perdon / Disculpe' },
    ]
  },
  {
    titulo: 'En el trabajo y oficinas',
    color: 'teal',
    frases: [
      { polaco: 'Nie rozumiem', pronunciacion: 'nye ro-ZU-myem', espanol: 'No entiendo' },
      { polaco: 'Czy mowi pan po angielsku?', pronunciacion: 'chi MO-vi pan po an-GYEL-sku', espanol: 'Habla usted ingles?' },
      { polaco: 'Prosze mowic wolniej', pronunciacion: 'PRO-she MO-vich VOL-nyey', espanol: 'Por favor hable mas despacio' },
      { polaco: 'Gdzie jest toaleta?', pronunciacion: 'GDZHE yest to-a-LE-ta', espanol: 'Donde esta el bano?' },
      { polaco: 'Ile to kosztuje?', pronunciacion: 'EE-le to kosh-TU-ye', espanol: 'Cuanto cuesta?' },
    ]
  },
  {
    titulo: 'Emergencias',
    color: 'mango',
    frases: [
      { polaco: 'Potrzebuję pomocy', pronunciacion: 'po-tshe-BU-ye PO-mo-tsi', espanol: 'Necesito ayuda' },
      { polaco: 'Proszę wezwać pogotowie', pronunciacion: 'PRO-she VEZ-vach po-go-TOV-ye', espanol: 'Llame a la ambulancia' },
      { polaco: 'Zgubiłem się', pronunciacion: 'zgu-BI-wem she', espanol: 'Me perdi' },
      { polaco: 'Jestem chory', pronunciacion: 'YES-tem HO-ri', espanol: 'Estoy enfermo' },
      { polaco: 'Boli mnie', pronunciacion: 'BO-li mnye', espanol: 'Me duele' },
    ]
  },
  {
    titulo: 'Transporte',
    color: 'navy',
    frases: [
      { polaco: 'Gdzie jest przystanek?', pronunciacion: 'GDZHE yest pshi-STA-nek', espanol: 'Donde esta la parada?' },
      { polaco: 'Jak dojść do...?', pronunciacion: 'yak DOYSHCH do', espanol: 'Como llego a...?' },
      { polaco: 'W lewo', pronunciacion: 'v LE-vo', espanol: 'A la izquierda' },
      { polaco: 'W prawo', pronunciacion: 'v PRA-vo', espanol: 'A la derecha' },
      { polaco: 'Na wprost', pronunciacion: 'na vprost', espanol: 'Recto / Derecho' },
    ]
  },
]

const colorClasses = {
  magenta: { header: 'bg-magenta', dot: 'bg-magenta' },
  teal: { header: 'bg-teal', dot: 'bg-teal' },
  mango: { header: 'bg-mango', dot: 'bg-mango' },
  navy: { header: 'bg-navy', dot: 'bg-navy' },
}

export default function FrasesUtiles() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Herramientas" volverHref="/herramientas" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/herramientas" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Herramientas</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-3">Frases utiles en polaco</h1>
          <p className="text-navy/50 text-base">No necesitas hablar polaco perfecto. Con estas frases te defiendes en las situaciones mas comunes.</p>
        </div>

        <div className="space-y-6">
          {categorias.map((cat) => {
            const c = colorClasses[cat.color]
            return (
              <div key={cat.titulo} className="bg-white rounded-2xl border border-navy/8 overflow-hidden">
                <div className={`${c.header} px-5 py-3`}>
                  <h2 className="text-white font-bold text-sm">{cat.titulo}</h2>
                </div>
                <div className="divide-y divide-navy/5">
                  {cat.frases.map((f) => (
                    <div key={f.polaco} className="px-5 py-4 flex items-center gap-4">
                      <div className="flex-1">
                        <p className="font-bold text-navy text-sm">{f.polaco}</p>
                        <p className={`text-xs mt-0.5 font-medium ${cat.color === 'magenta' ? 'text-magenta' : cat.color === 'teal' ? 'text-teal' : cat.color === 'mango' ? 'text-yellow-700' : 'text-navy/50'}`}>{f.pronunciacion}</p>
                      </div>
                      <p className="text-sm text-navy/60 text-right">{f.espanol}</p>
                    </div>
                  ))}
                </div>
              </div>
            )
          })}
        </div>

        <div className="mt-6 bg-magenta-light rounded-2xl p-5 flex items-center justify-between gap-4">
          <p className="text-sm text-pink-900">Quieres aprender polaco de verdad? Tenemos 100 lecciones gratis.</p>
          <a href="/idioma" className="bg-magenta text-white text-xs font-bold px-4 py-2 rounded-full whitespace-nowrap hover:bg-magenta/90 transition-colors">Ver el curso</a>
        </div>
        <DisclaimerLegal modulo="Este contenido sobre frases utiles" />
      </div>
      <Footer />
    </div>
  )
}
