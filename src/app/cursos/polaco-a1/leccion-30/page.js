'use client'
import { useState } from 'react'
export default function Leccion30() {
  const [tab, setTab] = useState('repaso')
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const repaso = [
    { categoria: 'Habitaciones', frases: [
      { polaco: 'kuchnia / lazienka', pronunciacion: 'KUCH-nya / wa-ZHEN-ka', traduccion: 'cocina / bano' },
      { polaco: 'salon / sypialnia', pronunciacion: 'SA-lon / si-PYAL-nya', traduccion: 'sala / dormitorio' },
      { polaco: 'ogród / garaz', pronunciacion: 'O-grut / GA-rash', traduccion: 'jardin / garaje' },
    ]},
    { categoria: 'Muebles', frases: [
      { polaco: 'stól / krzeslo', pronunciacion: 'stul / KSHE-swo', traduccion: 'mesa / silla' },
      { polaco: 'lózko / sofa', pronunciacion: 'WUZH-ko / SO-fa', traduccion: 'cama / sofa' },
      { polaco: 'szafa / biurko', pronunciacion: 'SHA-fa / BYUR-ko', traduccion: 'armario / escritorio' },
    ]},
    { categoria: 'Preposiciones', frases: [
      { polaco: 'w / na / pod', pronunciacion: 'v / na / pot', traduccion: 'en / sobre / debajo' },
      { polaco: 'nad / obok / za', pronunciacion: 'nat / O-bok / za', traduccion: 'encima / al lado / detras' },
    ]},
  ]
  const examen = [
    { pregunta: 'Como se dice dormitorio en polaco?', opciones: ['salon', 'kuchnia', 'sypialnia', 'lazienka'], correcta: 'sypialnia' },
    { pregunta: 'Que significa stól?', opciones: ['silla', 'cama', 'mesa', 'sofa'], correcta: 'mesa' },
    { pregunta: 'Como se dice debajo de en polaco?', opciones: ['nad', 'obok', 'pod', 'za'], correcta: 'pod' },
    { pregunta: 'Que significa lodówka?', opciones: ['horno', 'lavadora', 'refrigerador', 'lavaplatos'], correcta: 'refrigerador' },
    { pregunta: 'Como se dice vivir en polaco?', opciones: ['gotowac', 'spac', 'mieszkac', 'jesc'], correcta: 'mieszkac' },
    { pregunta: 'Que significa duzy?', opciones: ['pequeño', 'viejo', 'limpio', 'grande'], correcta: 'grande' },
    { pregunta: 'Como se dice ascensor en polaco?', opciones: ['schody', 'klucz', 'winda', 'adres'], correcta: 'winda' },
    { pregunta: 'Que significa szafa?', opciones: ['espejo', 'alfombra', 'armario', 'escritorio'], correcta: 'armario' },
    { pregunta: 'Como se dice cocinar en polaco?', opciones: ['spac', 'gotowac', 'myc', 'pic'], correcta: 'gotowac' },
    { pregunta: 'Que significa okno?', opciones: ['puerta', 'ventana', 'pared', 'techo'], correcta: 'ventana' },
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
          <span className="text-sm text-red-500 font-medium">Leccion 30 · Modulo 3</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">Repaso del Modulo 3</h1>
          <p className="text-gray-500 mt-2">Repasa todo sobre la casa y el hogar</p>
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
                  <p className="text-red-600 font-semibold">Examen del Modulo 3 · 10 preguntas</p>
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
                  <a href="/cursos/polaco-a1/leccion-31" className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold">Ir al Modulo 4</a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
