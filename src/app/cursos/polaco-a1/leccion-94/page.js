'use client'
import { useState } from 'react'
export default function Leccion94() {
  const [tab, setTab] = useState('repaso')
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const repaso = [
    { categoria: 'Comida y restaurante', frases: [
      { polaco: 'restauracja / kelner / rachunek', pronunciacion: 'res-tau-RAT-sya / KEL-ner / ra-HU-nek', traduccion: 'restaurante / camarero / cuenta' },
      { polaco: 'woda / kawa / herbata', pronunciacion: 'VO-da / KA-va / her-BA-ta', traduccion: 'agua / cafe / te' },
    ]},
  ]
  const examen = [
    { pregunta: 'Como se dice restaurante en polaco?', opciones: ['sklep', 'restauracja', 'kelner', 'menu'], correcta: 'restauracja' },
    { pregunta: 'Que significa rachunek?', opciones: ['propina', 'menu', 'cuenta factura', 'reserva'], correcta: 'cuenta factura' },
    { pregunta: 'Como se dice agua en polaco?', opciones: ['kawa', 'herbata', 'woda', 'sok'], correcta: 'woda' },
    { pregunta: 'Que significa tani?', opciones: ['caro', 'barato', 'precio', 'descuento'], correcta: 'barato' },
  ]
  const seleccionarRespuesta = (idx, opcion) => setRespuestas({ ...respuestas, [idx]: opcion })
  const calcularPuntaje = () => examen.filter((ej, idx) => respuestas[idx] === ej.correcta).length
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/cursos/polaco-a1/modulo-10"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/cursos/polaco-a1/modulo-10" className="text-sm text-gray-500">Volver al modulo</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Leccion 94 · Modulo 10</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">Repaso comida y restaurante</h1>
          <p className="text-gray-500 mt-2">Repasa el Modulo 4</p>
        </div>
        <div className="flex gap-2 mb-8 bg-white rounded-xl p-1 shadow-sm">
          {['repaso','examen'].map((t) => (
            <button key={t} onClick={() => setTab(t)} className={"flex-1 py-2 rounded-lg text-sm font-medium transition-colors " + (tab === t ? 'bg-red-500 text-white' : 'text-gray-500')}>
              {t === 'repaso' ? 'Repaso' : 'Mini examen'}
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
                      <div><p className="font-bold text-gray-900">{frase.polaco}</p><p className="text-sm text-red-500">{frase.pronunciacion}</p></div>
                      <p className="text-gray-600 font-medium text-sm text-right">{frase.traduccion}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <button onClick={() => setTab('examen')} className="bg-red-500 text-white font-semibold px-6 py-3 rounded-xl">Hacer mini examen</button>
          </div>
        )}
        {tab === 'examen' && (
          <div>
            {!mostrarResultado ? (
              <div className="grid gap-6">
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
                <div className="text-6xl mb-4">{calcularPuntaje() >= 3 ? '🏆' : '💪'}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{calcularPuntaje()} de {examen.length} correctas</h2>
                <a href="/cursos/polaco-a1/leccion-95" className="inline-block mt-6 px-6 py-3 bg-red-500 text-white rounded-xl font-semibold">Siguiente leccion</a>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
