'use client'
import { useState } from 'react'
export default function Leccion79() {
  const [tab, setTab] = useState('vocabulario')
  const [tarjetaActual, setTarjetaActual] = useState(0)
  const [voltear, setVoltear] = useState(false)
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const vocabulario = [
    { polaco: 'firma', pronunciacion: 'FIR-ma', traduccion: 'empresa compania', ejemplo: 'Pracuje w duzej firmie informatycznej.' },
    { polaco: 'dzial', pronunciacion: 'dzhaw', traduccion: 'departamento area', ejemplo: 'Pracuje w dziale marketingu.' },
    { polaco: 'manager', pronunciacion: 'MA-na-djer', traduccion: 'gerente manager', ejemplo: 'Jestem managerem zespolu.' },
    { polaco: 'zespol', pronunciacion: 'ZES-puw', traduccion: 'equipo', ejemplo: 'Moj zespol liczy 10 osob.' },
    { polaco: 'klient', pronunciacion: 'KLI-yent', traduccion: 'cliente', ejemplo: 'Spotykam sie z klientem o trzeciej.' },
    { polaco: 'kontrakt', pronunciacion: 'KON-trakt', traduccion: 'contrato acuerdo', ejemplo: 'Podpisalismy nowy kontrakt.' },
    { polaco: 'budzet', pronunciacion: 'BUD-zhet', traduccion: 'presupuesto', ejemplo: 'Budzet projektu wynosi 50 tysiecy.' },
    { polaco: 'cel', pronunciacion: 'tsel', traduccion: 'objetivo meta', ejemplo: 'Nasz cel to zwiekszenie sprzedazy.' },
  ]
  const ejercicios = [
    { pregunta: 'Como se dice empresa en polaco?', opciones: ['dzial', 'firma', 'zespol', 'klient'], correcta: 'firma' },
    { pregunta: 'Que significa zespol?', opciones: ['cliente', 'manager', 'equipo', 'departamento'], correcta: 'equipo' },
    { pregunta: 'Como se dice presupuesto en polaco?', opciones: ['cel', 'kontrakt', 'budzet', 'manager'], correcta: 'budzet' },
    { pregunta: 'Que significa cel?', opciones: ['contrato', 'presupuesto', 'objetivo meta', 'empresa'], correcta: 'objetivo meta' },
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
          <span className="text-sm text-red-500 font-medium">Leccion 79 · Modulo 8</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">La empresa y el equipo</h1>
          <p className="text-gray-500 mt-2">Aprende vocabulario empresarial en polaco</p>
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
                  <a href="/cursos/polaco-a1/leccion-80" className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold">Siguiente leccion</a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
