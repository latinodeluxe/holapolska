'use client'
import { useState } from 'react'
export default function Leccion76() {
  const [tab, setTab] = useState('vocabulario')
  const [tarjetaActual, setTarjetaActual] = useState(0)
  const [voltear, setVoltear] = useState(false)
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const vocabulario = [
    { polaco: 'Dzien dobry, w czym moge pomoc?', pronunciacion: 'dyen DOB-ri, v chim MO-ge PO-mots', traduccion: 'Buenos dias en que puedo ayudarle?', ejemplo: 'Dzien dobry, w czym moge pomoc?' },
    { polaco: 'Prosze o przeslanie maila', pronunciacion: 'PRO-she o pshe-SWA-nye MAY-la', traduccion: 'Por favor enviame un email', ejemplo: 'Prosze o przeslanie dokumentow mailem.' },
    { polaco: 'Zadzwonie do pana pozniej', pronunciacion: 'zad-ZVO-nye do PA-na POZH-nyey', traduccion: 'Le llamare mas tarde', ejemplo: 'Zadzwonie do pana jutro rano.' },
    { polaco: 'Czy moge porozmawiac z...?', pronunciacion: 'chi MO-ge po-roz-MA-vyach z', traduccion: 'Puedo hablar con...?', ejemplo: 'Czy moge porozmawiac z panem Kowalskim?' },
    { polaco: 'Musze to sprawdzic', pronunciacion: 'MU-she to SPRAV-dzich', traduccion: 'Tengo que verificarlo', ejemplo: 'Musze to sprawdzic i wrocic do pana.' },
    { polaco: 'Czy jest pan dostepny?', pronunciacion: 'chi yest pan dos-TEP-ni', traduccion: 'Esta usted disponible?', ejemplo: 'Czy jest pan dostepny w czwartek?' },
    { polaco: 'Dziekuje za wspolprace', pronunciacion: 'dyen-KU-ye za vspuw-PRA-tse', traduccion: 'Gracias por la colaboracion', ejemplo: 'Dziekuje za wspolprace, bylo przyjemnie.' },
    { polaco: 'Do zobaczenia na spotkaniu', pronunciacion: 'do zo-ba-CHE-nya na spot-KA-nyu', traduccion: 'Hasta vernos en la reunion', ejemplo: 'Do zobaczenia na spotkaniu w poniedzialek.' },
  ]
  const ejercicios = [
    { pregunta: 'Como se dice puedo hablar con en polaco?', opciones: ['Musze to sprawdzic', 'Czy moge porozmawiac z...?', 'Zadzwonie pozniej', 'Dziekuje za wspolprace'], correcta: 'Czy moge porozmawiac z...?' },
    { pregunta: 'Que significa Musze to sprawdzic?', opciones: ['Tengo que verificarlo', 'Le llamare mas tarde', 'Esta disponible', 'Gracias por colaborar'], correcta: 'Tengo que verificarlo' },
    { pregunta: 'Como se dice gracias por la colaboracion en polaco?', opciones: ['Dzien dobry', 'Do zobaczenia', 'Dziekuje za wspolprace', 'Prosze o przeslanie'], correcta: 'Dziekuje za wspolprace' },
    { pregunta: 'Que significa Zadzwonie do pana pozniej?', opciones: ['Puede llamarme', 'Le llamare mas tarde', 'Esta disponible', 'Buenos dias'], correcta: 'Le llamare mas tarde' },
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
          <span className="text-sm text-red-500 font-medium">Leccion 76 · Modulo 8</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">Comunicacion profesional</h1>
          <p className="text-gray-500 mt-2">Aprende frases profesionales en polaco</p>
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
                  <a href="/cursos/polaco-a1/leccion-77" className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold">Siguiente leccion</a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
