'use client'
import { useState } from 'react'
export default function Leccion100() {
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const examenFinal = [
    { pregunta: 'Como se dice Hola en polaco?', opciones: ['Dziekuje', 'Czesc', 'Prosze', 'Tak'], correcta: 'Czesc' },
    { pregunta: 'Que significa Nazywam sie?', opciones: ['Como estas', 'Me llamo', 'Soy de', 'Tengo'], correcta: 'Me llamo' },
    { pregunta: 'Como se dice familia en polaco?', opciones: ['mama', 'rodzina', 'brat', 'siostra'], correcta: 'rodzina' },
    { pregunta: 'Que significa lekarz?', opciones: ['profesor', 'medico', 'abogado', 'ingeniero'], correcta: 'medico' },
    { pregunta: 'Como se dice cocina en polaco?', opciones: ['salon', 'kuchnia', 'lazienka', 'sypialnia'], correcta: 'kuchnia' },
    { pregunta: 'Que significa restauracja?', opciones: ['tienda', 'restaurante', 'hotel', 'oficina'], correcta: 'restaurante' },
    { pregunta: 'Como se dice lunes en polaco?', opciones: ['wtorek', 'sroda', 'poniedzialek', 'czwartek'], correcta: 'poniedzialek' },
    { pregunta: 'Que significa autobus?', opciones: ['tren', 'autobus', 'avion', 'taxi'], correcta: 'autobus' },
    { pregunta: 'Como se dice cabeza en polaco?', opciones: ['twarz', 'glowa', 'oko', 'nos'], correcta: 'glowa' },
    { pregunta: 'Que significa praca?', opciones: ['oficina', 'jefe', 'trabajo empleo', 'salario'], correcta: 'trabajo empleo' },
    { pregunta: 'Como se dice estoy de acuerdo en polaco?', opciones: ['Masz racje', 'Mysle ze', 'Zgadzam sie', 'Oczywiście'], correcta: 'Zgadzam sie' },
    { pregunta: 'Que significa jestem?', opciones: ['eres', 'es', 'soy', 'somos'], correcta: 'soy' },
    { pregunta: 'Como se dice rojo en polaco?', opciones: ['niebieski', 'zielony', 'czerwony', 'zolty'], correcta: 'czerwony' },
    { pregunta: 'Que significa dziekuje?', opciones: ['por favor', 'de nada', 'gracias', 'perdon'], correcta: 'gracias' },
    { pregunta: 'Como se dice hoy en polaco?', opciones: ['jutro', 'wczoraj', 'dzisiaj', 'teraz'], correcta: 'dzisiaj' },
  ]
  const seleccionarRespuesta = (idx, opcion) => setRespuestas({ ...respuestas, [idx]: opcion })
  const calcularPuntaje = () => examenFinal.filter((ej, idx) => respuestas[idx] === ej.correcta).length
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/dashboard"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/dashboard" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8 text-center">
          <span className="text-sm text-red-500 font-medium">Leccion 100 · Examen Final</span>
          <h1 className="text-4xl font-bold text-gray-900 mt-1">Examen Final A1</h1>
          <p className="text-gray-500 mt-2">15 preguntas de todo el curso. Apruebas con 11 o mas correctas.</p>
        </div>
        {!mostrarResultado ? (
          <div className="grid gap-6">
            {examenFinal.map((ej, idx) => (
              <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm">
                <p className="font-semibold text-gray-900 mb-4">{idx + 1}. {ej.pregunta}</p>
                <div className="grid grid-cols-2 gap-3">
                  {ej.opciones.map((op) => (
                    <button key={op} onClick={() => seleccionarRespuesta(idx, op)} className={"p-3 rounded-xl border text-sm font-medium transition-colors " + (respuestas[idx] === op ? 'bg-red-500 text-white border-red-500' : 'border-gray-200 text-gray-700')}>{op}</button>
                  ))}
                </div>
              </div>
            ))}
            <button onClick={() => setMostrarResultado(true)} className="w-full bg-red-500 text-white font-semibold py-4 rounded-xl text-lg">Finalizar examen</button>
          </div>
        ) : (
          <div className="bg-white rounded-2xl p-10 shadow-sm text-center">
            <div className="text-7xl mb-4">{calcularPuntaje() >= 11 ? '🎓' : '💪'}</div>
            <h2 className="text-3xl font-bold text-gray-900 mb-2">{calcularPuntaje()} de {examenFinal.length} correctas</h2>
            <p className="text-gray-500 mb-2">{calcularPuntaje() >= 11 ? 'Felicidades! Has completado el nivel A1 de Polaco!' : 'Casi lo logras! Repasa los modulos y vuelve a intentarlo.'}</p>
            <div className="w-full bg-gray-100 rounded-full h-4 my-8">
              <div className="bg-red-500 h-4 rounded-full" style={{width: (calcularPuntaje() / examenFinal.length * 100) + '%'}}></div>
            </div>
            {calcularPuntaje() >= 11 && (
              <div className="bg-red-50 rounded-2xl p-6 mb-8">
                <p className="text-red-600 font-bold text-lg">🏆 Certificado de Nivel A1 Completado</p>
                <p className="text-gray-600 text-sm mt-2">Ahora puedes presentarte, hacer compras, viajar y mantener conversaciones basicas en polaco.</p>
              </div>
            )}
            <div className="flex gap-4 justify-center">
              <button onClick={() => { setRespuestas({}); setMostrarResultado(false) }} className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600">Repetir examen</button>
              <a href="/dashboard" className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold">Volver al inicio</a>
            </div>
          </div>
        )}
      </div>
    </main>
  )
}
