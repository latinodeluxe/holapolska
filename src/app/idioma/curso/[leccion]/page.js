'use client'
import { useState, useEffect } from 'react'
import { useParams } from 'next/navigation'
import { supabase } from '@/lib/supabase'
import { completarLeccion } from '@/lib/gamificacion'

export default function LeccionDinamica() {
  const params = useParams()
  const numeroLeccion = parseInt(params.leccion)

  const [leccion, setLeccion] = useState(null)
  const [vocabulario, setVocabulario] = useState([])
  const [ejercicios, setEjercicios] = useState([])
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(null)

  const [tab, setTab] = useState('vocabulario')
  const [tarjetaActual, setTarjetaActual] = useState(0)
  const [voltear, setVoltear] = useState(false)
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const [xpGuardado, setXpGuardado] = useState(false)
  const [guardando, setGuardando] = useState(false)

  useEffect(() => {
    cargarLeccion()
  }, [numeroLeccion])

  const cargarLeccion = async () => {
    setCargando(true)
    setError(null)

    const { data: leccionData, error: errorLeccion } = await supabase
      .from('lecciones')
      .select('id, titulo, objetivo, nivel_id, niveles(titulo, curso_id)')
      .eq('numero_global', numeroLeccion)
      .single()

    if (errorLeccion || !leccionData) {
      setError('Leccion no encontrada')
      setCargando(false)
      return
    }

    setLeccion(leccionData)

    const { data: vocabData } = await supabase
      .from('vocabulario')
      .select('*')
      .eq('leccion_id', leccionData.id)
      .order('id')

    const { data: ejerciciosData } = await supabase
      .from('ejercicios')
      .select('*')
      .eq('leccion_id', leccionData.id)
      .order('id')

    setVocabulario(vocabData || [])
    setEjercicios(ejerciciosData || [])
    setCargando(false)
  }

  const seleccionarRespuesta = (idx, opcion) => setRespuestas({ ...respuestas, [idx]: opcion })
  const calcularPuntaje = () => ejercicios.filter((ej, idx) => respuestas[idx] === ej.respuesta_correcta).length

  useEffect(() => {
    if (mostrarResultado && !xpGuardado) {
      guardarProgreso()
    }
  }, [mostrarResultado])

  const guardarProgreso = async () => {
    setGuardando(true)
    const puntaje = calcularPuntaje()
    const total = ejercicios.length
    const porcentaje = total > 0 ? puntaje / total : 0
    const xpGanado = porcentaje >= 0.8 ? 20 : porcentaje >= 0.6 ? 15 : 10
    await completarLeccion(numeroLeccion, xpGanado)
    setXpGuardado(true)
    setGuardando(false)
  }

  if (cargando) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <p className="text-gray-500">Cargando leccion...</p>
      </main>
    )
  }

  if (error || !leccion) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-gray-50">
        <div className="text-center">
          <p className="text-gray-500 mb-4">Leccion no encontrada</p>
          <a href="/idioma/dashboard" className="text-red-500 font-medium">Volver al inicio</a>
        </div>
      </main>
    )
  }

  const moduloNum = Math.ceil(numeroLeccion / 10)
  const siguienteLeccion = numeroLeccion + 1
  const moduloHref = '/cursos/polaco-a1/modulo-' + moduloNum

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href={moduloHref}><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href={moduloHref} className="text-sm text-gray-500">Volver al modulo</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Leccion {numeroLeccion} · Modulo {moduloNum}</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">{leccion.titulo}</h1>
          {leccion.objetivo && <p className="text-gray-500 mt-2">{leccion.objetivo}</p>}
        </div>

        <div className="flex gap-2 mb-8 bg-white rounded-xl p-1 shadow-sm">
          {['vocabulario', 'flashcards', 'ejercicios'].map((t) => (
            <button key={t} onClick={() => setTab(t)} className={"flex-1 py-2 rounded-lg text-sm font-medium capitalize transition-colors " + (tab === t ? 'bg-red-500 text-white' : 'text-gray-500 hover:text-gray-900')}>
              {t === 'vocabulario' ? 'Vocabulario' : t === 'flashcards' ? 'Flashcards' : 'Ejercicios'}
            </button>
          ))}
        </div>

        {tab === 'vocabulario' && (
          <div className="grid gap-4">
            {vocabulario.map((item) => (
              <div key={item.id} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-2xl font-bold text-gray-900">{item.palabra}</h3>
                <p className="text-red-500 font-medium mt-1">{item.pronunciacion}</p>
                <p className="text-gray-600 mt-1">{item.traduccion}</p>
                {item.ejemplo && (
                  <div className="mt-4 bg-gray-50 rounded-xl p-4">
                    <p className="text-sm text-gray-500 mb-1">Ejemplo:</p>
                    <p className="text-gray-700 font-medium">{item.ejemplo}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}

        {tab === 'flashcards' && vocabulario.length > 0 && (
          <div className="text-center">
            <p className="text-gray-500 mb-6">{tarjetaActual + 1} de {vocabulario.length}</p>
            <div onClick={() => setVoltear(!voltear)} className="bg-white rounded-2xl shadow-sm p-12 cursor-pointer min-h-64 flex items-center justify-center mb-6 hover:shadow-md transition-shadow">
              {!voltear ? (
                <div>
                  <p className="text-4xl font-bold text-gray-900 mb-4">{vocabulario[tarjetaActual].palabra}</p>
                  <p className="text-gray-400 text-sm">Click para ver la traduccion</p>
                </div>
              ) : (
                <div>
                  <p className="text-2xl font-bold text-red-500 mb-2">{vocabulario[tarjetaActual].pronunciacion}</p>
                  <p className="text-3xl font-bold text-gray-900 mb-4">{vocabulario[tarjetaActual].traduccion}</p>
                  <p className="text-gray-500 text-sm">{vocabulario[tarjetaActual].ejemplo}</p>
                </div>
              )}
            </div>
            <div className="flex gap-4 justify-center">
              <button onClick={() => { setTarjetaActual(Math.max(0, tarjetaActual - 1)); setVoltear(false) }} className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600 hover:border-gray-300">Anterior</button>
              <button onClick={() => { setTarjetaActual(Math.min(vocabulario.length - 1, tarjetaActual + 1)); setVoltear(false) }} className="px-6 py-3 bg-red-500 text-white rounded-xl hover:bg-red-600">Siguiente</button>
            </div>
          </div>
        )}

        {tab === 'ejercicios' && (
          <div>
            {!mostrarResultado ? (
              <div className="grid gap-6">
                {ejercicios.map((ej, idx) => {
                  const opciones = typeof ej.opciones === 'string' ? JSON.parse(ej.opciones) : ej.opciones
                  return (
                    <div key={ej.id} className="bg-white rounded-2xl p-6 shadow-sm">
                      <p className="font-semibold text-gray-900 mb-4">{idx + 1}. {ej.pregunta}</p>
                      <div className="grid grid-cols-2 gap-3">
                        {opciones.map((op) => (
                          <button key={op} onClick={() => seleccionarRespuesta(idx, op)} className={"p-3 rounded-xl border text-sm font-medium transition-colors " + (respuestas[idx] === op ? 'bg-red-500 text-white border-red-500' : 'border-gray-200 text-gray-700 hover:border-red-300')}>
                            {op}
                          </button>
                        ))}
                      </div>
                    </div>
                  )
                })}
                <button onClick={() => setMostrarResultado(true)} className="w-full bg-red-500 text-white font-semibold py-4 rounded-xl hover:bg-red-600 transition-colors">
                  Ver resultados
                </button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="text-6xl mb-4">{calcularPuntaje() >= ejercicios.length * 0.6 ? '🏆' : '💪'}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{calcularPuntaje()} de {ejercicios.length} correctas</h2>

                {guardando && <p className="text-sm text-gray-400 mb-4">Guardando tu progreso...</p>}
                {xpGuardado && !guardando && (
                  <div className="bg-green-50 text-green-600 rounded-xl p-3 mb-6 inline-block">
                    +XP ganados!
                  </div>
                )}

                <div className="grid gap-4 mb-8 mt-6">
                  {ejercicios.map((ej, idx) => (
                    <div key={ej.id} className={"p-4 rounded-xl text-left " + (respuestas[idx] === ej.respuesta_correcta ? 'bg-green-50 border border-green-200' : 'bg-red-50 border border-red-200')}>
                      <p className="text-sm font-medium text-gray-700 mb-1">{ej.pregunta}</p>
                      <p className="text-sm text-gray-500">Tu respuesta: <span className={respuestas[idx] === ej.respuesta_correcta ? 'text-green-600 font-medium' : 'text-red-600 font-medium'}>{respuestas[idx]}</span></p>
                      {respuestas[idx] !== ej.respuesta_correcta && <p className="text-sm text-green-600 font-medium">Correcta: {ej.respuesta_correcta}</p>}
                    </div>
                  ))}
                </div>
                <div className="flex gap-4 justify-center">
                  <button onClick={() => { setRespuestas({}); setMostrarResultado(false); setXpGuardado(false) }} className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600">Intentar de nuevo</button>
                  <a href={"/idioma/curso/" + siguienteLeccion} className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold">Siguiente leccion</a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
