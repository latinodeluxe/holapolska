'use client'
import { useState } from 'react'
export default function Leccion73() {
  const [tab, setTab] = useState('vocabulario')
  const [tarjetaActual, setTarjetaActual] = useState(0)
  const [voltear, setVoltear] = useState(false)
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const vocabulario = [
    { polaco: 'Dzien dobry, nazywam sie', pronunciacion: 'dyen DOB-ri, na-ZI-vam she', traduccion: 'Buenos dias me llamo', ejemplo: 'Dzien dobry, nazywam sie Ana Garcia.' },
    { polaco: 'Ubiegam sie o stanowisko', pronunciacion: 'u-BYE-gam she o sta-no-VIS-ko', traduccion: 'Me postulo para el puesto', ejemplo: 'Ubiegam sie o stanowisko managera.' },
    { polaco: 'Mam doswiadczenie w', pronunciacion: 'mam dosh-vyad-CHE-nye v', traduccion: 'Tengo experiencia en', ejemplo: 'Mam doswiadczenie w sprzedazy.' },
    { polaco: 'Moje mocne strony to', pronunciacion: 'MO-ye MOTS-ne STRO-ni to', traduccion: 'Mis puntos fuertes son', ejemplo: 'Moje mocne strony to komunikacja i praca zespolowa.' },
    { polaco: 'Dlaczego chce tu pracowac?', pronunciacion: 'dla-CHE-go htse tu pra-TSO-vach', traduccion: 'Por que quiero trabajar aqui?', ejemplo: 'Dlaczego chce tu pracowac? Bo firma jest innowacyjna.' },
    { polaco: 'Jakie sa warunki zatrudnienia?', pronunciacion: 'YA-kye sa va-RUN-ki za-trud-NYE-nya', traduccion: 'Cuales son las condiciones de empleo?', ejemplo: 'Jakie sa warunki zatrudnienia i benefity?' },
    { polaco: 'Kiedy moge zaczac?', pronunciacion: 'KYE-di MO-ge ZA-chach', traduccion: 'Cuando puedo empezar?', ejemplo: 'Kiedy moge zaczac prace?' },
    { polaco: 'Dziekuje za rozmowe', pronunciacion: 'dyen-KU-ye za roz-MO-ve', traduccion: 'Gracias por la entrevista', ejemplo: 'Dziekuje za rozmowe, to byla przyjemnosc.' },
  ]
  const ejercicios = [
    { pregunta: 'Como se dice me postulo para el puesto en polaco?', opciones: ['Mam doswiadczenie', 'Ubiegam sie o stanowisko', 'Kiedy moge zaczac', 'Dziekuje za rozmowe'], correcta: 'Ubiegam sie o stanowisko' },
    { pregunta: 'Que significa Moje mocne strony to?', opciones: ['Tengo experiencia en', 'Por que quiero trabajar', 'Mis puntos fuertes son', 'Cuando puedo empezar'], correcta: 'Mis puntos fuertes son' },
    { pregunta: 'Como se dice cuando puedo empezar en polaco?', opciones: ['Kiedy moge zaczac?', 'Dziekuje za rozmowe', 'Mam doswiadczenie', 'Jakie sa warunki'], correcta: 'Kiedy moge zaczac?' },
    { pregunta: 'Que significa Dziekuje za rozmowe?', opciones: ['Cuando puedo empezar', 'Buenos dias me llamo', 'Gracias por la entrevista', 'Tengo experiencia'], correcta: 'Gracias por la entrevista' },
  ]
  const seleccionarRespuesta = (idx, opcion) => setRespuestas({ ...respuestas, [idx]: opcion })
  const calcularPuntaje = () => ejercicios.filter((ej, idx) => respuestas[idx] === ej.correcta).length
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/cursos/polaco-a1/modulo-8"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/cursos/polaco-a1/modulo-8" className="text-sm text-gray-500">Volver al modulo</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Leccion 73 · Modulo 8</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">La entrevista de trabajo</h1>
          <p className="text-gray-500 mt-2">Aprende frases para una entrevista en polaco</p>
        </div>
        <div className="flex gap-2 mb-8 bg-white rounded-xl p-1 shadow-sm">
          {['vocabulario','flashcards','ejercicios'].map((t) => (
            <button key={t} onClick={() => setTab(t)} className={"flex-1 py-2 rounded-lg text-sm font-medium transition-colors " + (tab === t ? 'bg-red-500 text-white' : 'text-gray-500')}>
              {t === 'vocabulario' ? 'Vocabulario' : t === 'flashcards' ? 'Flashcards' : 'Ejercicios'}
            </button>
          ))}
        </div>
        {tab === 'vocabulario' && (
          <div className="grid gap-4">
            {vocabulario.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900">{item.polaco}</h3>
                <p className="text-red-500 font-medium mt-1">{item.pronunciacion}</p>
                <p className="text-gray-600 mt-1">{item.traduccion}</p>
                <div className="mt-4 bg-gray-50 rounded-xl p-4">
                  <p className="text-sm text-gray-500 mb-1">Ejemplo:</p>
                  <p className="text-gray-700 font-medium">{item.ejemplo}</p>
                </div>
              </div>
            ))}
          </div>
        )}
        {tab === 'flashcards' && (
          <div className="text-center">
            <p className="text-gray-500 mb-6">{tarjetaActual + 1} de {vocabulario.length}</p>
            <div onClick={() => setVoltear(!voltear)} className="bg-white rounded-2xl shadow-sm p-12 cursor-pointer min-h-64 flex items-center justify-center mb-6">
              {!voltear ? <div><p className="text-4xl font-bold text-gray-900 mb-4">{vocabulario[tarjetaActual].polaco}</p><p className="text-gray-400 text-sm">Click para ver traduccion</p></div>
              : <div><p className="text-2xl font-bold text-red-500 mb-2">{vocabulario[tarjetaActual].pronunciacion}</p><p className="text-3xl font-bold text-gray-900 mb-4">{vocabulario[tarjetaActual].traduccion}</p></div>}
            </div>
            <div className="flex gap-4 justify-center">
              <button onClick={() => { setTarjetaActual(Math.max(0, tarjetaActual - 1)); setVoltear(false) }} className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600">Anterior</button>
              <button onClick={() => { setTarjetaActual(Math.min(vocabulario.length - 1, tarjetaActual + 1)); setVoltear(false) }} className="px-6 py-3 bg-red-500 text-white rounded-xl">Siguiente</button>
            </div>
          </div>
        )}
        {tab === 'ejercicios' && (
          <div>
            {!mostrarResultado ? (
              <div className="grid gap-6">
                {ejercicios.map((ej, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm">
                    <p className="font-semibold text-gray-900 mb-4">{idx + 1}. {ej.pregunta}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {ej.opciones.map((op) => (
                        <button key={op} onClick={() => seleccionarRespuesta(idx, op)} className={"p-3 rounded-xl border text-sm font-medium transition-colors " + (respuestas[idx] === op ? 'bg-red-500 text-white border-red-500' : 'border-gray-200 text-gray-700')}>{op}</button>
                      ))}
                    </div>
                  </div>
                ))}
                <button onClick={() => setMostrarResultado(true)} className="w-full bg-red-500 text-white font-semibold py-4 rounded-xl">Ver resultados</button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="text-6xl mb-4">{calcularPuntaje() >= 3 ? '🏆' : '💪'}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{calcularPuntaje()} de {ejercicios.length} correctas</h2>
                <div className="flex gap-4 justify-center mt-8">
                  <button onClick={() => { setRespuestas({}); setMostrarResultado(false) }} className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600">Intentar de nuevo</button>
                  <a href="/cursos/polaco-a1/leccion-74" className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold">Siguiente leccion</a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
