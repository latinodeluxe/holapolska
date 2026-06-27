'use client'
import { useState } from 'react'

export default function Leccion2() {
  const [tab, setTab] = useState('vocabulario')
  const [tarjetaActual, setTarjetaActual] = useState(0)
  const [voltear, setVoltear] = useState(false)
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)

  const vocabulario = [
    { polaco: 'Jak sie nazywasz?', pronunciacion: 'yak she na-ZI-vash', traduccion: 'Como te llamas?', ejemplo: 'Jak sie nazywasz? Nazywam sie Ana.' },
    { polaco: 'Nazywam sie', pronunciacion: 'na-ZI-vam she', traduccion: 'Me llamo', ejemplo: 'Nazywam sie Carlos.' },
    { polaco: 'Mam na imie', pronunciacion: 'mam na EE-mye', traduccion: 'Mi nombre es', ejemplo: 'Mam na imie Maria.' },
    { polaco: 'Milo mi', pronunciacion: 'MEE-wo mee', traduccion: 'Mucho gusto', ejemplo: 'Milo mi cie poznac.' },
    { polaco: 'Jak masz na imie?', pronunciacion: 'yak mash na EE-mye', traduccion: 'Cual es tu nombre?', ejemplo: 'Jak masz na imie? Mam na imie Pedro.' },
    { polaco: 'Bardzo milo', pronunciacion: 'BAR-dzo MEE-wo', traduccion: 'Mucho placer', ejemplo: 'Bardzo milo mi cie poznac.' },
  ]

  const ejercicios = [
    { pregunta: 'Como se dice "Me llamo" en polaco?', opciones: ['Milo mi', 'Nazywam sie', 'Jak sie nazywasz', 'Mam na imie'], correcta: 'Nazywam sie' },
    { pregunta: 'Que significa "Milo mi"?', opciones: ['Como te llamas', 'Me llamo', 'Mucho gusto', 'Hasta luego'], correcta: 'Mucho gusto' },
    { pregunta: 'Como preguntas el nombre en polaco?', opciones: ['Nazywam sie', 'Milo mi', 'Jak sie nazywasz?', 'Bardzo milo'], correcta: 'Jak sie nazywasz?' },
    { pregunta: 'Que significa "Bardzo milo"?', opciones: ['Mucho placer', 'Me llamo', 'Como te llamas', 'Mi nombre es'], correcta: 'Mucho placer' },
  ]

  const seleccionarRespuesta = (idx, opcion) => setRespuestas({ ...respuestas, [idx]: opcion })
  const calcularPuntaje = () => ejercicios.filter((ej, idx) => respuestas[idx] === ej.correcta).length

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/cursos/polaco-a1"><span className="font-bold text-gray-900">Polska</span><span className="font-bold text-red-500">Nol</span></a>
        <a href="/cursos/polaco-a1" className="text-sm text-gray-500 hover:text-gray-900">Volver al modulo</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Leccion 2 · Modulo 1</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">Como te llamas</h1>
          <p className="text-gray-500 mt-2">Aprende a presentarte en polaco</p>
        </div>
        <div className="flex gap-2 mb-8 bg-white rounded-xl p-1 shadow-sm">
          {['vocabulario','flashcards','ejercicios'].map((t) => (
            <button key={t} onClick={() => setTab(t)} className={"flex-1 py-2 rounded-lg text-sm font-medium capitalize transition-colors " + (tab === t ? 'bg-red-500 text-white' : 'text-gray-500 hover:text-gray-900')}>
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
            <div onClick={() => setVoltear(!voltear)} className="bg-white rounded-2xl shadow-sm p-12 cursor-pointer min-h-64 flex items-center justify-center mb-6 hover:shadow-md transition-shadow">
              {!voltear ? (
                <div><p className="text-4xl font-bold text-gray-900 mb-4">{vocabulario[tarjetaActual].polaco}</p><p className="text-gray-400 text-sm">Click para ver la traduccion</p></div>
              ) : (
                <div><p className="text-2xl font-bold text-red-500 mb-2">{vocabulario[tarjetaActual].pronunciacion}</p><p className="text-3xl font-bold text-gray-900 mb-4">{vocabulario[tarjetaActual].traduccion}</p><p className="text-gray-500 text-sm">{vocabulario[tarjetaActual].ejemplo}</p></div>
              )}
            </div>
            <div className="flex gap-4 justify-center">
              <button onClick={() => { setTarjetaActual(Math.max(0, tarjetaActual - 1)); setVoltear(false) }} className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600">Anterior</button>
              <button onClick={() => { setTarjetaActual(Math.min(vocabulario.length - 1, tarjetaActual + 1)); setVoltear(false) }} className="px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600">Siguiente</button>
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
                        <button key={op} onClick={() => seleccionarRespuesta(idx, op)} className={"p-3 rounded-xl border text-sm font-medium transition-colors " + (respuestas[idx] === op ? 'bg-red-500 text-white border-red-500' : 'border-gray-200 text-gray-700 hover:border-red-300')}>
                          {op}
                        </button>
                      ))}
                    </div>
                  </div>
                ))}
                <button onClick={() => setMostrarResultado(true)} className="w-full bg-red-500 text-white font-semibold py-4 rounded-xl hover:bg-red-600">Ver resultados</button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="text-6xl mb-4">{calcularPuntaje() >= 3 ? '🏆' : '💪'}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{calcularPuntaje()} de {ejercicios.length} correctas</h2>
                <p className="text-gray-500 mb-8">{calcularPuntaje() >= 3 ? 'Excelente!' : 'Sigue practicando!'}</p>
                <div className="grid gap-4 mb-8">
                  {ejercicios.map((ej, idx) => (
                    <div key={idx} className={"p-4 rounded-xl text-left " + (respuestas[idx] === ej.correcta ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200')}>
                      <p className="text-sm font-medium text-gray-700 mb-1">{ej.pregunta}</p>
                      <p className="text-sm text-gray-500">Tu respuesta: <span className={respuestas[idx] === ej.correcta ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>{respuestas[idx]}</span></p>
                      {respuestas[idx] !== ej.correcta && <p className="text-sm text-green-600 font-medium">Correcta: {ej.correcta}</p>}
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 justify-center">
                  <button onClick={() => { setRespuestas({}); setMostrarResultado(false) }} className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600">Intentar de nuevo</button>
                  <a href="/cursos/polaco-a1/leccion-3" className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold">Siguiente leccion</a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
