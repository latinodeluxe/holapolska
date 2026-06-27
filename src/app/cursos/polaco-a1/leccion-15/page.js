'use client'
import { useState } from 'react'
export default function Leccion15() {
  const [tab, setTab] = useState('vocabulario')
  const [tarjetaActual, setTarjetaActual] = useState(0)
  const [voltear, setVoltear] = useState(false)
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const vocabulario = [
    { polaco: 'czerwony', pronunciacion: 'cher-VO-ni', traduccion: 'rojo', ejemplo: 'Mam czerwony samochod.' },
    { polaco: 'niebieski', pronunciacion: 'nye-BYES-ki', traduccion: 'azul', ejemplo: 'Niebo jest niebieskie.' },
    { polaco: 'zielony', pronunciacion: 'zhe-LO-ni', traduccion: 'verde', ejemplo: 'Trawa jest zielona.' },
    { polaco: 'zolty', pronunciacion: 'ZHOW-ti', traduccion: 'amarillo', ejemplo: 'Banana jest zolty.' },
    { polaco: 'bialy', pronunciacion: 'BYA-wi', traduccion: 'blanco', ejemplo: 'Snieg jest bialy.' },
    { polaco: 'czarny', pronunciacion: 'CHAR-ni', traduccion: 'negro', ejemplo: 'Mam czarny kot.' },
    { polaco: 'rozowy', pronunciacion: 'ro-ZO-vi', traduccion: 'rosado', ejemplo: 'Ona lubi rozowy kolor.' },
    { polaco: 'brazowy', pronunciacion: 'bra-ZO-vi', traduccion: 'marron', ejemplo: 'Mam brazowe oczy.' },
  ]
  const ejercicios = [
    { pregunta: 'Como se dice rojo en polaco?', opciones: ['niebieski', 'zielony', 'czerwony', 'zolty'], correcta: 'czerwony' },
    { pregunta: 'Que significa bialy?', opciones: ['negro', 'blanco', 'azul', 'verde'], correcta: 'blanco' },
    { pregunta: 'Como se dice amarillo en polaco?', opciones: ['zolty', 'rozowy', 'brazowy', 'czarny'], correcta: 'zolty' },
    { pregunta: 'Que significa czarny?', opciones: ['blanco', 'marron', 'rosado', 'negro'], correcta: 'negro' },
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
          <span className="text-sm text-red-500 font-medium">Leccion 15 · Modulo 2</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">Los colores</h1>
          <p className="text-gray-500 mt-2">Aprende los colores en polaco</p>
        </div>
        <div className="flex gap-2 mb-8 bg-white rounded-xl p-1 shadow-sm">
          {['vocabulario','flashcards','ejercicios'].map((t) => (
            <button key={t} onClick={() => setTab(t)} className={"flex-1 py-2 rounded-lg text-sm font-medium transition-colors " + (tab === t ? 'bg-red-500 text-white' : 'text-gray-500')}>
              {t === 'vocabulario' ? 'Vocabulario' : t === 'flashcards' ? 'Flashcards' : 'Ejercicios'}
            </button>
          ))}
        </div>
        {tab === 'vocabulario' && (
          <div className="grid grid-cols-2 gap-4">
            {vocabulario.map((item, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm text-center">
                <h3 className="text-xl font-bold text-gray-900">{item.polaco}</h3>
                <p className="text-red-500 text-sm mt-1">{item.pronunciacion}</p>
                <p className="text-gray-600 font-medium mt-1">{item.traduccion}</p>
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
                <div className="text-6xl mb-4">{calcularPuntaje() >= 3 ? '🏆' : '💪'}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{calcularPuntaje()} de {ejercicios.length} correctas</h2>
                <div className="flex gap-4 justify-center mt-8">
                  <button onClick={() => { setRespuestas({}); setMostrarResultado(false) }} className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600">Intentar de nuevo</button>
                  <a href="/cursos/polaco-a1/leccion-16" className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold">Siguiente leccion</a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
