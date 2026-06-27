'use client'
import { useState } from 'react'
export default function Leccion20() {
  const [tab, setTab] = useState('repaso')
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const repaso = [
    { categoria: 'Familia', frases: [
      { polaco: 'mama / tata', pronunciacion: 'MA-ma / TA-ta', traduccion: 'mama / papa' },
      { polaco: 'brat / siostra', pronunciacion: 'brat / SHYO-stra', traduccion: 'hermano / hermana' },
      { polaco: 'dziadek / babcia', pronunciacion: 'DZHA-dek / BAB-cha', traduccion: 'abuelo / abuela' },
    ]},
    { categoria: 'Profesiones', frases: [
      { polaco: 'lekarz', pronunciacion: 'LE-kazh', traduccion: 'medico' },
      { polaco: 'nauczyciel', pronunciacion: 'na-u-CHI-chel', traduccion: 'profesor' },
      { polaco: 'prawnik', pronunciacion: 'PRAV-nik', traduccion: 'abogado' },
    ]},
    { categoria: 'Colores', frases: [
      { polaco: 'czerwony / niebieski', pronunciacion: 'cher-VO-ni / nye-BYES-ki', traduccion: 'rojo / azul' },
      { polaco: 'zielony / zolty', pronunciacion: 'zhe-LO-ni / ZHOW-ti', traduccion: 'verde / amarillo' },
      { polaco: 'bialy / czarny', pronunciacion: 'BYA-wi / CHAR-ni', traduccion: 'blanco / negro' },
    ]},
  ]
  const examen = [
    { pregunta: 'Como se dice hermana en polaco?', opciones: ['brat', 'siostra', 'mama', 'corka'], correcta: 'siostra' },
    { pregunta: 'Que significa lekarz?', opciones: ['abogado', 'profesor', 'medico', 'ingeniero'], correcta: 'medico' },
    { pregunta: 'Como se dice rojo en polaco?', opciones: ['niebieski', 'zielony', 'czerwony', 'zolty'], correcta: 'czerwony' },
    { pregunta: 'Que significa rodzina?', opciones: ['amigo', 'vecino', 'familia', 'primo'], correcta: 'familia' },
    { pregunta: 'Como se dice apartamento en polaco?', opciones: ['dom', 'mieszkanie', 'ogrod', 'garaz'], correcta: 'mieszkanie' },
    { pregunta: 'Que significa chleb?', opciones: ['leche', 'huevo', 'pan', 'queso'], correcta: 'pan' },
    { pregunta: 'Como se dice abuelo en polaco?', opciones: ['babcia', 'wujek', 'dziadek', 'tata'], correcta: 'dziadek' },
    { pregunta: 'Que significa jezyk?', opciones: ['hablar', 'idioma', 'aprender', 'estudiar'], correcta: 'idioma' },
    { pregunta: 'Como se dice cocina en polaco?', opciones: ['lazienka', 'salon', 'sypialnia', 'kuchnia'], correcta: 'kuchnia' },
    { pregunta: 'Que significa niebieski?', opciones: ['verde', 'amarillo', 'azul', 'rojo'], correcta: 'azul' },
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
          <span className="text-sm text-red-500 font-medium">Leccion 20 · Modulo 2</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">Repaso del Modulo 2</h1>
          <p className="text-gray-500 mt-2">Repasa familia, profesiones y colores</p>
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
                  <p className="text-red-600 font-semibold">Examen del Modulo 2 · 10 preguntas</p>
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
                  <a href="/cursos/polaco-a1/leccion-21" className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold">Ir al Modulo 3</a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
