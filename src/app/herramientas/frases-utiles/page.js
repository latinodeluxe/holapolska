export default function FrasesUtiles() {
  const categorias = [
    {
      titulo: 'Saludos basicos',
      frases: [
        { polaco: 'Dzien dobry', pronunciacion: 'dyen DOB-ri', espanol: 'Buenos dias / Buenas tardes' },
        { polaco: 'Czesc', pronunciacion: 'cheshch', espanol: 'Hola (informal)' },
        { polaco: 'Dobry wieczor', pronunciacion: 'DOB-ri VYE-chur', espanol: 'Buenas noches' },
        { polaco: 'Do widzenia', pronunciacion: 'do vi-DZE-nya', espanol: 'Hasta luego' },
        { polaco: 'Dziekuje', pronunciacion: 'dyen-KU-ye', espanol: 'Gracias' },
        { polaco: 'Prosze', pronunciacion: 'PRO-she', espanol: 'Por favor / De nada' },
        { polaco: 'Przepraszam', pronunciacion: 'pshe-PRA-sham', espanol: 'Perdon / Disculpe' },
      ]
    },
    {
      titulo: 'En el trabajo y oficinas',
      frases: [
        { polaco: 'Nie rozumiem', pronunciacion: 'nye ro-ZU-myem', espanol: 'No entiendo' },
        { polaco: 'Czy mowi pan po angielsku', pronunciacion: 'chi MO-vi pan po an-GYEL-sku', espanol: 'Habla usted ingles' },
        { polaco: 'Prosze mowic wolniej', pronunciacion: 'PRO-she MO-vich VOL-nyey', espanol: 'Por favor hable mas despacio' },
        { polaco: 'Gdzie jest toaleta', pronunciacion: 'GDZHE yest to-a-LE-ta', espanol: 'Donde esta el bano' },
        { polaco: 'Ile to kosztuje', pronunciacion: 'EE-le to kosh-TU-ye', espanol: 'Cuanto cuesta' },
        { polaco: 'Prosze o rachunek', pronunciacion: 'PRO-she o ra-HU-nek', espanol: 'La cuenta por favor' },
      ]
    },
    {
      titulo: 'Emergencias',
      frases: [
        { polaco: 'Potrzebuje pomocy', pronunciacion: 'po-tshe-BU-ye PO-mo-tsi', espanol: 'Necesito ayuda' },
        { polaco: 'Prosze wezwac pogotowie', pronunciacion: 'PRO-she VEZ-vach po-go-TOV-ye', espanol: 'Llame a la ambulancia' },
        { polaco: 'Zgubilem sie', pronunciacion: 'zgu-BI-wem she', espanol: 'Me perdi' },
        { polaco: 'Jestem chory', pronunciacion: 'YES-tem HO-ri', espanol: 'Estoy enfermo' },
        { polaco: 'Boli mnie', pronunciacion: 'BO-li mnye', espanol: 'Me duele' },
      ]
    },
    {
      titulo: 'Transporte',
      frases: [
        { polaco: 'Gdzie jest przystanek', pronunciacion: 'GDZHE yest pshi-STA-nek', espanol: 'Donde esta la parada' },
        { polaco: 'Jak dojsc do', pronunciacion: 'yak DOYSHCH do', espanol: 'Como llego a' },
        { polaco: 'W lewo', pronunciacion: 'v LE-vo', espanol: 'A la izquierda' },
        { polaco: 'W prawo', pronunciacion: 'v PRA-vo', espanol: 'A la derecha' },
        { polaco: 'Na wprost', pronunciacion: 'na vprost', espanol: 'Recto / Derecho' },
      ]
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/herramientas" className="text-sm text-gray-500">Volver a Herramientas</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-sm text-red-500 font-medium">Herramientas</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Frases utiles en polaco para el dia a dia</h1>
        <p className="text-gray-500 mb-10">No necesitas hablar polaco perfecto. Con estas frases basicas te vas a defender en las situaciones mas comunes.</p>
        <div className="space-y-10">
          {categorias.map((cat) => (
            <div key={cat.titulo}>
              <h2 className="text-xl font-bold text-gray-900 mb-4">{cat.titulo}</h2>
              <div className="grid gap-3">
                {cat.frases.map((f) => (
                  <div key={f.polaco} className="bg-white rounded-xl p-5 shadow-sm flex flex-col md:flex-row md:items-center gap-2">
                    <div className="flex-1">
                      <p className="font-bold text-gray-900">{f.polaco}</p>
                      <p className="text-red-500 text-sm">{f.pronunciacion}</p>
                    </div>
                    <div className="md:text-right">
                      <p className="text-gray-600">{f.espanol}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="mt-10 bg-red-50 rounded-2xl p-6">
          <p className="text-gray-700">💡 Quieres aprender polaco de verdad? El modulo de idioma de HolaPolska tiene 100 lecciones completas y gratuitas.</p>
          <a href="/idioma" className="inline-block mt-3 bg-red-500 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-red-600">Empezar a aprender polaco</a>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/herramientas" className="text-red-500 font-medium hover:underline">← Volver a Herramientas</a>
        </div>
      </div>
    </main>
  )
}
