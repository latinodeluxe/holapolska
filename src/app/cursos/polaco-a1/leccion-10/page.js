'use client'
import { useState } from 'react'
export default function Leccion10() {
  const [tab, setTab] = useState('repaso')
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const repaso = [
    { categoria: 'Saludos', frases: [
      { polaco: 'Czesc', pronunciacion: 'cheshch', traduccion: 'Hola' },
      { polaco: 'Dzien dobry', pronunciacion: 'dyen DOB-ri', traduccion: 'Buenos dias' },
      { polaco: 'Do widzenia', pronunciacion: 'do vi-DZE-nya', traduccion: 'Hasta luego' },
    ]},
    { categoria: 'Presentacion', frases: [
      { polaco: 'Nazywam sie...', pronunciacion: 'na-ZI-vam she', traduccion: 'Me llamo...' },
      { polaco: 'Jestem z...', pronunciacion: 'YES-tem z', traduccion: 'Soy de...' },
      { polaco: 'Mam ... lat', pronunciacion: 'mam ... lat', traduccion: 'Tengo ... anos' },
    ]},
    { categoria: 'Cortesia', frases: [
      { polaco: 'Dziekuje', pronunciacion: 'dyen-KU-ye', traduccion: 'Gracias' },
      { polaco: 'Prosze', pronunciacion: 'PRO-she', traduccion: 'Por favor' },
      { polaco: 'Przepraszam', pronunciacion: 'pshe-PRA-sham', traduccion: 'Perdon' },
    ]},
  ]
  const examen = [
    { pregunta: 'Como se dice Hola en polaco?', opciones: ['Dziekuje', 'Czesc', 'Prosze', 'Do widzenia'], correcta: 'Czesc' },
    { pregunta: 'Que significa Nazywam sie?', opciones: ['Como estas', 'Me llamo', 'Soy de', 'Tengo'], correcta: 'Me llamo' },
    { pregunta: 'Como se dice Gracias en polaco?', opciones: ['Tak', 'Nie', 'Dziekuje', 'Prosze'], correcta: 'Dziekuje' },
    { pregunta: 'Que significa piec?', opciones: ['tres', 'cuatro', 'cinco', 'seis'], correcta: 'cinco' },
    { pregunta: 'Como se dice yo en polaco?', opciones: ['ty', 'on', 'ja', 'my'], correcta: 'ja' },
    { pregunta: 'Que significa Dobrze?', opciones: ['Mal', 'Regular', 'Bien', 'Excelente'], correcta: 'Bien' },
    { pregunta: 'Como se dice Perdon en polaco?', opciones: ['Rozumiem', 'Przepraszam', 'Dziekuje', 'Prosze'], correcta: 'Przepraszam' },
    { pregunta: 'Que significa ona?', opciones: ['el', 'ella', 'nosotros', 'ellos'], correcta: 'ella' },
    { pregunta: 'Como se dice Hasta luego en polaco?', opciones: ['Czesc', 'Dzien dobry', 'Do widzenia', 'Prosze'], correcta: 'Do widzenia' },
    { pregunta: 'Que significa Jestem z Polski?', opciones: ['Soy de Mexico', 'Soy de Polonia', 'Soy de Espana', 'Soy de Argentina'], correcta: 'Soy de Polonia' },
  ]
  const seleccionarRespuesta = (idx, opcion) => setRespuestas({ ...respuestas, [idx]: opcion })
  const calcularPuntaje = () => examen.filter((ej, idx) => respuestas[idx] === ej.correcta).length
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/cursos/polaco-a1"><span className="font-bold text-gray-900">Polska</span><span className="font-bold text-red-500">Nol</span></a>
        <a href="/cursos/polaco-a1" className="text-sm text-gray-500">Volver al modulo</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Leccion 10 · Modulo 1</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">Repaso y practica</h1>
          <p className="text-gray-500 mt-2">Repasa todo lo aprendido en el Modulo 1</p>
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
                      <p className="text-gray-600 font-medium">{frase.traduccion}</p>
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
                  <p className="text-red-600 font-semibold">Examen del Modulo 1 · 10 preguntas</p>
                </div>
                {examen.map((ej, idx) => (
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
                <div className="text-6xl mb-4">{calcularPuntaje() >= 8 ? '🏆' : '💪'}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{calcularPuntaje()} de {examen.length} correctas</h2>
                <div className="w-full bg-gray-100 rounded-full h-4 mb-8">
                  <div className="bg-red-500 h-4 rounded-full" style={{width: (calcularPuntaje() / examen.length * 100) + '%'}}></div>
                </div>
                <div className="flex gap-4 justify-center">
                  <button onClick={() => { setRespuestas({}); setMostrarResultado(false) }} className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600">Repetir</button>
                  <a href="/cursos/polaco-a1/leccion-11" className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold">Ir al Modulo 2</a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}