'use client'
import { useState } from 'react'
export default function Leccion60() {
  const [tab, setTab] = useState('repaso')
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const repaso = [
    { categoria: 'Transporte', frases: [
      { polaco: 'autobus / tramwaj / metro', pronunciacion: 'au-TO-bus / TRAM-vay / ME-tro', traduccion: 'autobus / tranvia / metro' },
      { polaco: 'pociag / samolot / taksowka', pronunciacion: 'PO-chong / sa-MO-lot / tak-SOV-ka', traduccion: 'tren / avion / taxi' },
      { polaco: 'bilet / przystanek / odjazd', pronunciacion: 'BI-let / pshi-STA-nek / OD-yazd', traduccion: 'ticket / parada / salida' },
    ]},
    { categoria: 'Direcciones', frases: [
      { polaco: 'w lewo / w prawo / na wprost', pronunciacion: 'v LE-vo / v PRA-vo / na vprost', traduccion: 'a la izquierda / a la derecha / recto' },
      { polaco: 'blisko / daleko', pronunciacion: 'BLIS-ko / da-LE-ko', traduccion: 'cerca / lejos' },
    ]},
    { categoria: 'Ciudad y viajes', frases: [
      { polaco: 'centrum / park / muzeum', pronunciacion: 'TSEN-trum / park / mu-ZE-um', traduccion: 'centro / parque / museo' },
      { polaco: 'hotel / lotnisko / dworzec', pronunciacion: 'ho-TEL / lot-NIS-ko / DVO-zhets', traduccion: 'hotel / aeropuerto / estacion' },
    ]},
  ]
  const examen = [
    { pregunta: 'Como se dice autobus en polaco?', opciones: ['tramwaj', 'autobus', 'metro', 'pociag'], correcta: 'autobus' },
    { pregunta: 'Que significa w lewo?', opciones: ['a la derecha', 'recto', 'a la izquierda', 'lejos'], correcta: 'a la izquierda' },
    { pregunta: 'Como se dice aeropuerto en polaco?', opciones: ['dworzec', 'hotel', 'lotnisko', 'centrum'], correcta: 'lotnisko' },
    { pregunta: 'Que significa bilet?', opciones: ['parada', 'boleto ticket', 'horario', 'llegada'], correcta: 'boleto ticket' },
    { pregunta: 'Como se dice cerca en polaco?', opciones: ['daleko', 'blisko', 'na wprost', 'obok'], correcta: 'blisko' },
    { pregunta: 'Que significa wakacje?', opciones: ['excursion', 'viaje', 'vacaciones', 'turista'], correcta: 'vacaciones' },
    { pregunta: 'Como se dice museo en polaco?', opciones: ['park', 'kosciol', 'muzeum', 'bank'], correcta: 'muzeum' },
    { pregunta: 'Que significa samolot?', opciones: ['tren', 'taxi', 'autobus', 'avion'], correcta: 'avion' },
    { pregunta: 'Como se dice estacion en polaco?', opciones: ['lotnisko', 'dworzec', 'hotel', 'peron'], correcta: 'dworzec' },
    { pregunta: 'Que significa zwiedzac?', opciones: ['recomendar', 'vacaciones', 'visitar recorrer', 'viajar'], correcta: 'visitar recorrer' },
  ]
  const seleccionarRespuesta = (idx, opcion) => setRespuestas({ ...respuestas, [idx]: opcion })
  const calcularPuntaje = () => examen.filter((ej, idx) => respuestas[idx] === ej.correcta).length
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/cursos/polaco-a1/modulo-6"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/cursos/polaco-a1/modulo-6" className="text-sm text-gray-500">Volver al modulo</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Leccion 60 · Modulo 6</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">Repaso del Modulo 6</h1>
          <p className="text-gray-500 mt-2">Repasa transporte ciudad y viajes</p>
        </div>
        <div className="flex gap-2 mb-8 bg-white rounded-xl p-1 shadow-sm">
          {['repaso','examen'].map((t) => (
            <button key={t} onClick={() => setTab(t)} className={"flex-1 py-2 rounded-lg text-sm font-medium transition-colors " + (tab === t ? 'bg-red-500 text-white' : 'text-gray-500')}>
              {t === 'repaso' ? 'Repaso' : 'Examen del modulo'}
            </button>
          ))}
        </div>
        {tab === 'repaso' && (
          <div className="grid gap-6">
            {repaso.map((seccion, sidx) => (
              <div key={sidx} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{seccion.categoria}</h3>
                <div className="grid gap-3">
                  {seccion.frases.map((frase, fidx) => (
                    <div key={fidx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div>
                        <p className="font-bold text-gray-900">{frase.polaco}</p>
                        <p className="text-sm text-red-500">{frase.pronunciacion}</p>
                      </div>
                      <p className="text-gray-600 font-medium text-sm text-right">{frase.traduccion}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="bg-red-50 rounded-2xl p-6 text-center">
              <p className="text-red-600 font-semibold mb-4">Listo para el examen?</p>
              <button onClick={() => setTab('examen')} className="bg-red-500 text-white font-semibold px-6 py-3 rounded-xl">Hacer el examen</button>
            </div>
          </div>
        )}
        {tab === 'examen' && (
          <div>
            {!mostrarResultado ? (
              <div className="grid gap-6">
                <div className="bg-red-50 rounded-2xl p-4 text-center">
                  <p className="text-red-600 font-semibold">Examen del Modulo 6 · 10 preguntas</p>
                </div>
                {examen.map((ej, idx) => (
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
                <div className="text-6xl mb-4">{calcularPuntaje() >= 8 ? '🏆' : '💪'}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{calcularPuntaje()} de {examen.length} correctas</h2>
                <div className="w-full bg-gray-100 rounded-full h-4 mb-8">
                  <div className="bg-red-500 h-4 rounded-full" style={{width: (calcularPuntaje() / examen.length * 100) + '%'}}></div>
                </div>
                <div className="flex gap-4 justify-center">
                  <button onClick={() => { setRespuestas({}); setMostrarResultado(false) }} className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600">Repetir</button>
                  <a href="/cursos/polaco-a1/modulo-7" className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold">Ir al Modulo 7</a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
