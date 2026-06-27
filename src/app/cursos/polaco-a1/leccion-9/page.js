'use client'
import { useState } from 'react'
export default function Leccion9() {
  const [tab, setTab] = useState('vocabulario')
  const [tarjetaActual, setTarjetaActual] = useState(0)
  const [voltear, setVoltear] = useState(false)
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const vocabulario = [
    { polaco: 'Jak sie masz?', pronunciacion: 'yak she mash', traduccion: 'Como estas?', ejemplo: 'Czesc! Jak sie masz?' },
    { polaco: 'Dobrze', pronunciacion: 'DOB-zhe', traduccion: 'Bien', ejemplo: 'Dobrze, dziekuje. A ty?' },
    { polaco: 'Niezbyt dobrze', pronunciacion: 'NYEZ-bit DOB-zhe', traduccion: 'No muy bien', ejemplo: 'Niezbyt dobrze, jestem chory.' },
    { polaco: 'Swietnie', pronunciacion: 'SHVYET-nye', traduccion: 'Excelente', ejemplo: 'Swietnie! Dziekuje za pytanie.' },
    { polaco: 'Co slychac?', pronunciacion: 'tso SWI-hach', traduccion: 'Que hay de nuevo?', ejemplo: 'Co slychac? Wszystko w porzadku.' },
    { polaco: 'Wszystko w porzadku', pronunciacion: 'VSHIST-ko v po-ZHOND-ku', traduccion: 'Todo bien', ejemplo: 'Wszystko w porzadku, dziekuje.' },
    { polaco: 'Do zobaczenia', pronunciacion: 'do zo-ba-CHE-nya', traduccion: 'Hasta pronto', ejemplo: 'Do zobaczenia jutro!' },
    { polaco: 'Na razie', pronunciacion: 'na RA-zye', traduccion: 'Hasta luego informal', ejemplo: 'Na razie! Baw sie dobrze.' },
  ]
  const ejercicios = [
    { pregunta: 'Como se pregunta "Como estas?" en polaco?', opciones: ['Co slychac?', 'Jak sie masz?', 'Ile masz lat?', 'Skad jestes?'], correcta: 'Jak sie masz?' },
    { pregunta: 'Que significa "Dobrze"?', opciones: ['Mal', 'Bien', 'Excelente', 'Regular'], correcta: 'Bien' },
    { pregunta: 'Como se dice "Hasta pronto" en polaco?', opciones: ['Na razie', 'Do widzenia', 'Do zobaczenia', 'Czesc'], correcta: 'Do zobaczenia' },
    { pregunta: 'Que significa "Swietnie"?', opciones: ['Bien', 'Mal', 'Regular', 'Excelente'], correcta: 'Excelente' },
    { pregunta: 'Que significa "Wszystko w porzadku"?', opciones: ['No muy bien', 'Todo bien', 'Hasta luego', 'Como estas'], correcta: 'Todo bien' },
  ]
  const seleccionarRespuesta = (idx, opcion) => setRespuestas({ ...respuestas, [idx]: opcion })
  const calcularPuntaje = () => ejercicios.filter((ej, idx) => respuestas[idx] === ej.correcta).length
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/cursos/polaco-a1"><span className="font-bold text-gray-900">Polska</span><span className="font-bold text-red-500">Nol</span></a>
        <a href="/cursos/polaco-a1" className="text-sm text-gray-500">Volver al modulo</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Leccion 9 · Modulo 1</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">Frases de cortesia</h1>
          <p className="text-gray-500 mt-2">Aprende frases esenciales para conversaciones cotidianas</p>
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
              {!voltear ? (
                <div><p className="text-4xl font-bold text-gray-900 mb-4">{vocabulario[tarjetaActual].polaco}</p><p className="text-gray-400 text-sm">Click para ver traduccion</p></div>
              ) : (
                <div><p className="text-2xl font-bold text-red-500 mb-2">{vocabulario[tarjetaActual].pronunciacion}</p><p className="text-3xl font-bold text-gray-900 mb-4">{vocabulario[tarjetaActual].traduccion}</p></div>
              )}
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
                        <button key={op} onClick={() => seleccionarRespuesta(idx, op)} className={"p-3 rounded-xl border text-sm font-medium transition-colors " + (respuestas[idx] === op ? 'bg-red-500 text-white border-red-500' : 'border-gray-200 text-gray-700')}>
                          {op}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <button onClick={() => setMostrarResultado(true)} className="w-full bg-red-500 text-white font-semibold py-4 rounded-xl">Ver resultados</button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="text-6xl mb-4">{calcularPuntaje() >= 4 ? '🏆' : '💪'}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{calcularPuntaje()} de {ejercicios.length} correctas</h2>
                <div className="flex gap-4 justify-center mt-8">
                  <button onClick={() => { setRespuestas({}); setMostrarResultado(false) }} className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600">Intentar de nuevo</button>
                  <a href="/cursos/polaco-a1/leccion-10" className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold">Siguiente leccion</a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
