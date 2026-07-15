'use client'
import { useState, useEffect } from 'react'
import preguntas from './preguntas.json'

function shuffle(arr) {
  const a = [...arr]
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]]
  }
  return a
}

function generarExamen() {
  const siNo = preguntas.filter(q => q.tipo === 'si_no')
  const abc = preguntas.filter(q => q.tipo === 'abc')
  const selSiNo = shuffle(siNo).slice(0, 20)
  const selAbc = shuffle(abc).slice(0, 12)
  return shuffle([...selSiNo, ...selAbc])
}

export default function SimulacroConduccion() {
  const [fase, setFase] = useState('inicio')
  const [examen, setExamen] = useState([])
  const [actual, setActual] = useState(0)
  const [respuestas, setResponder] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [tiempoRestante, setTiempoRestante] = useState(25 * 60)

  useEffect(() => {
    if (fase !== 'examen') return
    if (tiempoRestante <= 0) { setFase('resultado'); return }
    const timer = setInterval(() => setTiempoRestante(t => t - 1), 1000)
    return () => clearInterval(timer)
  }, [fase, tiempoRestante])

  const iniciar = () => {
    setExamen(generarExamen())
    setResponder({})
    setActual(0)
    setTiempoRestante(25 * 60)
    setMostrarResultado(false)
    setFase('examen')
  }

  const responder = (resp) => {
    setResponder(prev => ({ ...prev, [actual]: resp }))
    setMostrarResultado(true)
  }

  const siguiente = () => {
    setMostrarResultado(false)
    if (actual < examen.length - 1) {
      setActual(actual + 1)
    } else {
      setFase('resultado')
    }
  }

  const minutos = Math.floor(tiempoRestante / 60)
  const segundos = tiempoRestante % 60

  // PANTALLA INICIO
  if (fase === 'inicio') return (
    <main className="min-h-screen bg-cream font-sans">
      <nav className="bg-cream border-b border-navy/8 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <a href="/" className="flex items-center gap-0.5">
          <span className="text-xl font-extrabold text-magenta tracking-tight">Hola</span>
          <span className="text-xl font-extrabold text-navy tracking-tight">Polska</span>
        </a>
        <a href="/recursos" className="text-sm text-navy/45 hover:text-navy transition-colors">← Recursos</a>
      </nav>
      <div className="max-w-2xl mx-auto px-8 py-12">
        <div className="text-xs font-bold text-mango tracking-widest uppercase mb-2">Simulacro</div>
        <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mb-4">Test de conducción en Polonia</h1>
        <p className="text-navy/50 text-base leading-relaxed mb-8">Practica con preguntas reales del examen teórico polaco, traducidas al español. 32 preguntas aleatorias con límite de 25 minutos — igual que el examen real.</p>

        <div className="bg-white rounded-2xl border border-navy/8 p-6 mb-6">
          <h2 className="font-display font-bold text-navy mb-4">Estructura del examen</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="bg-magenta-light rounded-xl p-4 text-center">
              <div className="text-2xl font-extrabold text-magenta">20</div>
              <div className="text-xs text-pink-900 mt-1">Preguntas SÍ / NO</div>
            </div>
            <div className="bg-teal-light rounded-xl p-4 text-center">
              <div className="text-2xl font-extrabold text-teal">12</div>
              <div className="text-xs text-teal-900 mt-1">Preguntas A / B / C</div>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-3 mb-4">
            <div className="bg-cream rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-navy">25 min</div>
              <div className="text-xs text-navy/40">Tiempo límite</div>
            </div>
            <div className="bg-cream rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-navy">68 pts</div>
              <div className="text-xs text-navy/40">Para aprobar</div>
            </div>
            <div className="bg-cream rounded-xl p-3 text-center">
              <div className="text-lg font-bold text-navy">74 pts</div>
              <div className="text-xs text-navy/40">Máximo posible</div>
            </div>
          </div>
        </div>

        <button onClick={iniciar} className="w-full bg-magenta hover:bg-magenta/90 text-white font-bold py-4 rounded-xl transition-colors text-base">
          Comenzar simulacro
        </button>

        <div className="mt-6 bg-mango-light rounded-xl p-4">
          <p className="text-sm text-yellow-800">💡 Este simulacro es orientativo y educativo. Las preguntas están basadas en el temario real del examen polaco pero no sustituyen la preparación oficial.</p>
        </div>
      </div>
    </main>
  )

  // PANTALLA RESULTADO FINAL
  if (fase === 'resultado') {
    let puntosObtenidos = 0
    let correctas = 0
    examen.forEach((q, i) => {
      if (respuestas[i] === q.respuesta_correcta) {
        puntosObtenidos += q.puntos
        correctas++
      }
    })
    const aprobado = puntosObtenidos >= 68
    const maxPuntos = examen.reduce((s, q) => s + q.puntos, 0)

    return (
      <main className="min-h-screen bg-cream font-sans">
        <nav className="bg-cream border-b border-navy/8 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
          <a href="/" className="flex items-center gap-0.5">
            <span className="text-xl font-extrabold text-magenta tracking-tight">Hola</span>
            <span className="text-xl font-extrabold text-navy tracking-tight">Polska</span>
          </a>
        </nav>
        <div className="max-w-2xl mx-auto px-8 py-12">
          <div className={`${aprobado ? 'bg-teal' : 'bg-magenta'} rounded-2xl p-8 text-center mb-8`}>
            <div className="text-6xl mb-4">{aprobado ? '🎉' : '📚'}</div>
            <h1 className="font-display text-3xl font-extrabold text-white mb-2">
              {aprobado ? 'Aprobado' : 'No aprobado'}
            </h1>
            <p className="text-white/70 text-sm mb-4">
              {aprobado ? 'Excelente preparación. Sigue practicando para asegurar el resultado.' : 'Necesitas repasar algunos temas. Vuelve a intentarlo.'}
            </p>
            <div className="grid grid-cols-3 gap-4">
              <div className="bg-white/20 rounded-xl p-3">
                <div className="text-2xl font-extrabold text-white">{puntosObtenidos}</div>
                <div className="text-xs text-white/60">de {maxPuntos} puntos</div>
              </div>
              <div className="bg-white/20 rounded-xl p-3">
                <div className="text-2xl font-extrabold text-white">{correctas}</div>
                <div className="text-xs text-white/60">de {examen.length} correctas</div>
              </div>
              <div className="bg-white/20 rounded-xl p-3">
                <div className="text-2xl font-extrabold text-white">68</div>
                <div className="text-xs text-white/60">puntos para aprobar</div>
              </div>
            </div>
          </div>

          <div className="space-y-3 mb-8">
            {examen.map((q, i) => {
              const correcta = respuestas[i] === q.respuesta_correcta
              const noRespondida = respuestas[i] === undefined
              return (
                <div key={i} className={`bg-white rounded-xl p-4 border ${correcta ? 'border-teal/30' : 'border-magenta/30'}`}>
                  <div className="flex items-start gap-3">
                    <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${correcta ? 'bg-teal text-white' : 'bg-magenta text-white'}`}>
                      {correcta ? '✓' : '✗'}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm text-navy font-medium mb-1">{q.pregunta}</p>
                      <p className="text-xs text-navy/50">
                        Tu respuesta: {noRespondida ? 'Sin responder' : respuestas[i]} · Correcta: {q.respuesta_correcta} · {q.puntos} pts
                      </p>
                      {q.justificacion && <p className="text-xs text-teal mt-1">{q.justificacion}</p>}
                    </div>
                  </div>
                </div>
              )
            })}
          </div>

          <div className="flex gap-3">
            <button onClick={iniciar} className="flex-1 bg-magenta hover:bg-magenta/90 text-white font-bold py-3 rounded-xl transition-colors text-sm">
              Repetir simulacro
            </button>
            <a href="/recursos" className="flex-1 bg-navy/10 hover:bg-navy/15 text-navy font-bold py-3 rounded-xl transition-colors text-sm text-center">
              Volver a Recursos
            </a>
          </div>
        </div>
      </main>
    )
  }

  // PANTALLA EXAMEN
  const pregunta = examen[actual]
  const yaRespondida = respuestas[actual] !== undefined
  const esCorrecta = respuestas[actual] === pregunta.respuesta_correcta

  return (
    <main className="min-h-screen bg-cream font-sans">
      <nav className="bg-navy px-8 py-3 flex justify-between items-center sticky top-0 z-50">
        <div className="flex items-center gap-4">
          <span className="text-sm text-white/60 font-medium">Pregunta {actual + 1} de {examen.length}</span>
          <span className="text-xs bg-white/10 text-white/50 px-2 py-0.5 rounded-full">{pregunta.puntos} pts</span>
        </div>
        <div className={`text-sm font-bold ${tiempoRestante < 300 ? 'text-magenta' : 'text-white/70'}`}>
          {minutos}:{segundos.toString().padStart(2, '0')}
        </div>
      </nav>

      <div className="h-1 bg-navy/10">
        <div className="h-full bg-magenta transition-all" style={{ width: `${((actual + 1) / examen.length) * 100}%` }}></div>
      </div>

      <div className="max-w-2xl mx-auto px-8 py-10">
        <div className="bg-white rounded-2xl border border-navy/8 p-6 mb-6">
          <div className="text-xs font-bold text-mango uppercase tracking-widest mb-3">
            {pregunta.tipo === 'si_no' ? 'Responde SÍ o NO' : 'Elige A, B o C'}
          </div>
          <p className="text-navy font-medium text-base leading-relaxed">{pregunta.pregunta}</p>
        </div>

        {pregunta.tipo === 'si_no' ? (
          <div className="grid grid-cols-2 gap-3 mb-6">
            {['SÍ', 'NO'].map((opcion) => {
              let estilo = 'bg-white border-navy/10 text-navy hover:border-magenta/30'
              if (mostrarResultado && yaRespondida) {
                if (opcion === pregunta.respuesta_correcta) estilo = 'bg-teal text-white border-teal'
                else if (opcion === respuestas[actual] && opcion !== pregunta.respuesta_correcta) estilo = 'bg-magenta text-white border-magenta'
              } else if (respuestas[actual] === opcion) {
                estilo = 'bg-magenta/10 border-magenta text-magenta'
              }
              return (
                <button key={opcion} onClick={() => { if (yaRespondida === false) responder(opcion) }}
                  disabled={yaRespondida}
                  className={`p-5 rounded-xl border-2 text-lg font-bold transition-colors ${estilo}`}>
                  {opcion}
                </button>
              )
            })}
          </div>
        ) : (
          <div className="space-y-3 mb-6">
            {Object.entries(pregunta.opciones).map(([letra, texto]) => {
              let estilo = 'bg-white border-navy/10 text-navy hover:border-magenta/30'
              if (mostrarResultado && yaRespondida) {
                if (letra === pregunta.respuesta_correcta) estilo = 'bg-teal text-white border-teal'
                else if (letra === respuestas[actual] && letra !== pregunta.respuesta_correcta) estilo = 'bg-magenta text-white border-magenta'
              } else if (respuestas[actual] === letra) {
                estilo = 'bg-magenta/10 border-magenta text-magenta'
              }
              return (
                <button key={letra} onClick={() => { if (yaRespondida === false) responder(letra) }}
                  disabled={yaRespondida}
                  className={`w-full p-4 rounded-xl border-2 text-left transition-colors flex items-center gap-3 ${estilo}`}>
                  <span className="font-bold text-lg">{letra}</span>
                  <span className="text-sm">{texto}</span>
                </button>
              )
            })}
          </div>
        )}

        {mostrarResultado && (
          <div className={`${esCorrecta ? 'bg-teal-light' : 'bg-magenta-light'} rounded-xl p-4 mb-6`}>
            <p className={`text-sm font-semibold ${esCorrecta ? 'text-teal-900' : 'text-pink-900'} mb-1`}>
              {esCorrecta ? '✓ Correcto' : '✗ Incorrecto'} — {pregunta.puntos} puntos
            </p>
            {pregunta.justificacion && (
              <p className={`text-sm ${esCorrecta ? 'text-teal-900/70' : 'text-pink-900/70'}`}>{pregunta.justificacion}</p>
            )}
          </div>
        )}

        {mostrarResultado && (
          <button onClick={siguiente}
            className="w-full bg-navy hover:bg-navy/90 text-white font-bold py-3 rounded-xl transition-colors text-sm">
            {actual < examen.length - 1 ? 'Siguiente pregunta' : 'Ver resultados'}
          </button>
        )}

        <div className="mt-6 flex flex-wrap gap-1.5">
          {examen.map((_, i) => {
            let color = 'bg-navy/10'
            if (respuestas[i] !== undefined) {
              color = respuestas[i] === examen[i].respuesta_correcta ? 'bg-teal' : 'bg-magenta'
            }
            if (i === actual) color += ' ring-2 ring-navy/30'
            return <div key={i} className={`w-6 h-6 rounded-md ${color} transition-colors`}></div>
          })}
        </div>
      </div>
    </main>
  )
}
