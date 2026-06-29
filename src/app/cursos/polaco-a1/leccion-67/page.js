'use client'
import { useState } from 'react'
export default function Leccion67() {
  const [tab, setTab] = useState('vocabulario')
  const [tarjetaActual, setTarjetaActual] = useState(0)
  const [voltear, setVoltear] = useState(false)
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const vocabulario = [
    { polaco: 'Prosze wezwac pogotowie', pronunciacion: 'PRO-she VEZ-vach po-go-TOV-ye', traduccion: 'Llame a la ambulancia', ejemplo: 'Prosze wezwac pogotowie, to nagly przypadek.' },
    { polaco: 'pogotowie', pronunciacion: 'po-go-TOV-ye', traduccion: 'ambulancia emergencias', ejemplo: 'Numer pogotowia to 112.' },
    { polaco: 'szpital', pronunciacion: 'SHPI-tal', traduccion: 'hospital', ejemplo: 'Pacjent jest w szpitalu.' },
    { polaco: 'nagly przypadek', pronunciacion: 'NA-gli pshi-PA-dek', traduccion: 'emergencia urgencia', ejemplo: 'To jest nagly przypadek medyczny.' },
    { polaco: 'wypadek', pronunciacion: 'VI-pa-dek', traduccion: 'accidente', ejemplo: 'Byl wypadek na ulicy.' },
    { polaco: 'ratownik', pronunciacion: 'ra-TOV-nik', traduccion: 'socorrista paramédico', ejemplo: 'Ratownik udzielil pierwszej pomocy.' },
    { polaco: 'pierwsza pomoc', pronunciacion: 'PYERV-sha PO-mots', traduccion: 'primeros auxilios', ejemplo: 'Znam podstawy pierwszej pomocy.' },
    { polaco: 'Potrzebuje pomocy', pronunciacion: 'po-tshe-BU-ye PO-mo-tsi', traduccion: 'Necesito ayuda', ejemplo: 'Potrzebuje pomocy, prosze!' },
  ]
  const ejercicios = [
    { pregunta: 'Como se dice hospital en polaco?', opciones: ['pogotowie', 'szpital', 'ratownik', 'wypadek'], correcta: 'szpital' },
    { pregunta: 'Que significa pogotowie?', opciones: ['hospital', 'accidente', 'ambulancia emergencias', 'primeros auxilios'], correcta: 'ambulancia emergencias' },
    { pregunta: 'Como se dice accidente en polaco?', opciones: ['nagly przypadek', 'wypadek', 'pogotowie', 'szpital'], correcta: 'wypadek' },
    { pregunta: 'Que significa pierwsza pomoc?', opciones: ['ayuda', 'emergencia', 'primeros auxilios', 'paramédico'], correcta: 'primeros auxilios' },
  ]
  const seleccionarRespuesta = (idx, opcion) => setRespuestas({ ...respuestas, [idx]: opcion })
  const calcularPuntaje = () => ejercicios.filter((ej, idx) => respuestas[idx] === ej.correcta).length
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/cursos/polaco-a1/modulo-7"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/cursos/polaco-a1/modulo-7" className="text-sm text-gray-500">Volver al modulo</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Leccion 67 · Modulo 7</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">Emergencias medicas</h1>
          <p className="text-gray-500 mt-2">Aprende frases de emergencia en polaco</p>
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
                  <a href="/cursos/polaco-a1/leccion-68" className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold">Siguiente leccion</a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
