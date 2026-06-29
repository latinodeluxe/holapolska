'use client'
import { useState } from 'react'
export default function Leccion70() {
  const [tab, setTab] = useState('repaso')
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const repaso = [
    { categoria: 'Cuerpo y sintomas', frases: [
      { polaco: 'glowa / reka / noga', pronunciacion: 'GWO-va / REN-ka / NO-ga', traduccion: 'cabeza / mano / pierna' },
      { polaco: 'boli mnie / goraczka / kaszel', pronunciacion: 'BO-li mnye / go-RACH-ka / KA-shel', traduccion: 'me duele / fiebre / tos' },
      { polaco: 'jestem chory / czuje sie zle', pronunciacion: 'YES-tem HO-ri / CHU-ye she zle', traduccion: 'estoy enfermo / me siento mal' },
    ]},
    { categoria: 'Medico y farmacia', frases: [
      { polaco: 'lekarz / apteka / szpital', pronunciacion: 'LE-kazh / ap-TE-ka / SHPI-tal', traduccion: 'medico / farmacia / hospital' },
      { polaco: 'recepta / tabletka / syrop', pronunciacion: 're-TSEP-ta / tab-LET-ka / SI-rop', traduccion: 'receta / pastilla / jarabe' },
    ]},
    { categoria: 'Salud y bienestar', frases: [
      { polaco: 'zdrowie / sport / cwiczenia', pronunciacion: 'ZDRO-vye / sport / chvi-CHE-nya', traduccion: 'salud / deporte / ejercicio' },
      { polaco: 'szczesliwy / smutny / zmeczony', pronunciacion: 'shches-LI-vi / SMUT-ni / zmen-CHO-ni', traduccion: 'feliz / triste / cansado' },
    ]},
  ]
  const examen = [
    { pregunta: 'Como se dice cabeza en polaco?', opciones: ['twarz', 'glowa', 'oko', 'nos'], correcta: 'glowa' },
    { pregunta: 'Que significa goraczka?', opciones: ['tos', 'resfriado', 'fiebre', 'dolor'], correcta: 'fiebre' },
    { pregunta: 'Como se dice farmacia en polaco?', opciones: ['szpital', 'lekarz', 'apteka', 'recepta'], correcta: 'apteka' },
    { pregunta: 'Que significa tabletka?', opciones: ['jarabe', 'pastilla tableta', 'crema', 'dosis'], correcta: 'pastilla tableta' },
    { pregunta: 'Como se dice correr en polaco?', opciones: ['plywac', 'biegac', 'spacer', 'cwiczenia'], correcta: 'biegac' },
    { pregunta: 'Que significa szczesliwy?', opciones: ['triste', 'cansado', 'feliz contento', 'estresado'], correcta: 'feliz contento' },
    { pregunta: 'Como se dice hospital en polaco?', opciones: ['apteka', 'przychodnia', 'szpital', 'lekarz'], correcta: 'szpital' },
    { pregunta: 'Que significa boli mnie?', opciones: ['estoy enfermo', 'me duele', 'tengo fiebre', 'me siento mal'], correcta: 'me duele' },
    { pregunta: 'Como se dice piscina en polaco?', opciones: ['silownia', 'basen', 'park', 'sport'], correcta: 'basen' },
    { pregunta: 'Que significa zdrowie?', opciones: ['deporte', 'ejercicio', 'salud', 'bienestar'], correcta: 'salud' },
  ]
  const seleccionarRespuesta = (idx, opcion) => setRespuestas({ ...respuestas, [idx]: opcion })
  const calcularPuntaje = () => examen.filter((ej, idx) => respuestas[idx] === ej.correcta).length
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/cursos/polaco-a1/modulo-7"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/cursos/polaco-a1/modulo-7" className="text-sm text-gray-500">Volver al modulo</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Leccion 70 · Modulo 7</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">Repaso del Modulo 7</h1>
          <p className="text-gray-500 mt-2">Repasa salud cuerpo y bienestar</p>
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
                  <p className="text-red-600 font-semibold">Examen del Modulo 7 · 10 preguntas</p>
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
                  <a href="/cursos/polaco-a1/modulo-8" className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold">Ir al Modulo 8</a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
