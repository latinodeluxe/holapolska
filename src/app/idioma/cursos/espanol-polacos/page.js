'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'
import Link from 'next/link'

export default function EspanolPolacos() {
  const [usuario, setUsuario] = useState(null)
  const [modulos, setModulos] = useState([])
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const cargar = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { window.location.href = '/idioma/login'; return }
      setUsuario(user)

      const { data: niveles } = await supabase
        .from('niveles')
        .select('id, titulo, descripcion, orden, lecciones(id, titulo, orden)')
        .eq('curso_id', 3)
        .order('orden')

      const { data: progreso } = await supabase
        .from('progreso')
        .select('leccion_id')
        .eq('usuario_id', user.id)
        .eq('completada', true)

      const completadasSet = new Set((progreso || []).map(p => p.leccion_id))

      const modulosConProgreso = (niveles || []).map(n => {
        const leccionesOrdenadas = [...n.lecciones].sort((a, b) => a.orden - b.orden)
        const completadas = leccionesOrdenadas.filter(l => completadasSet.has(l.id)).length
        return { ...n, lecciones: leccionesOrdenadas, completadas }
      })

      setModulos(modulosConProgreso)
      setCargando(false)
    }
    cargar()
  }, [])

  if (cargando) return (
    <main className="min-h-screen bg-cream flex items-center justify-center">
      <div className="text-navy/40 text-sm">Ladowanie...</div>
    </main>
  )

  const totalLecciones = modulos.reduce((acc, m) => acc + m.lecciones.length, 0)
  const totalCompletadas = modulos.reduce((acc, m) => acc + m.completadas, 0)
  const porcentajeTotal = totalLecciones ? Math.round((totalCompletadas / totalLecciones) * 100) : 0
  const leccionSiguiente = modulos.flatMap(m => m.lecciones)[totalCompletadas]?.id || modulos[0]?.lecciones[0]?.id

  return (
    <main className="min-h-screen bg-cream font-sans">
      <nav className="bg-cream border-b border-navy/8 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-0.5">
          <span className="text-xl font-extrabold text-magenta tracking-tight">Hola</span>
          <span className="text-xl font-extrabold text-navy tracking-tight">Polska</span>
        </Link>
        <div className="flex items-center gap-4">
          <Link href="/idioma/dashboard" className="text-sm text-navy/45 hover:text-navy transition-colors">← Dashboard</Link>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-8 py-10">
        <div className="mb-8">
          <div className="text-xs font-bold text-mango tracking-widest uppercase mb-2">Kurs jezykowy</div>
          <h1 className="font-display text-3xl font-extrabold text-navy tracking-tight mb-2">Hiszpański dla Polaków</h1>
          <p className="text-navy/50 text-sm max-w-xl">Naucz sie podstaw hiszpanskiego: powitania, rodzina, liczby i zycie codzienne. Kurs pilotazowy — 40 lekcji.</p>
        </div>

        <div className="bg-navy rounded-2xl p-6 mb-8">
          <div className="flex items-center justify-between mb-3">
            <span className="text-sm text-white/60">Postep kursu</span>
            <span className="text-2xl font-extrabold text-mango">{porcentajeTotal}%</span>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden mb-3">
            <div className="h-full bg-mango rounded-full transition-all" style={{ width: `${porcentajeTotal}%` }}></div>
          </div>
          <div className="flex justify-between text-xs text-white/30">
            <span>{totalCompletadas} z {totalLecciones} lekcji</span>
            {leccionSiguiente && (
              <Link href={`/idioma/curso/${leccionSiguiente}`} className="text-mango font-semibold hover:underline">Kontynuuj →</Link>
            )}
          </div>
        </div>

        <div className="space-y-4">
          {modulos.map((m) => (
            <div key={m.id} className="bg-white rounded-2xl border border-navy/8 overflow-hidden">
              <div className="px-5 py-4 flex items-center justify-between border-b border-navy/5">
                <div>
                  <div className="text-xs font-bold text-mango uppercase tracking-widest mb-1">Modul {m.orden}</div>
                  <h2 className="font-display font-bold text-navy">{m.titulo}</h2>
                </div>
                <div className="text-sm text-navy/40 font-medium flex-shrink-0">{m.completadas}/{m.lecciones.length}</div>
              </div>
              <div className="divide-y divide-navy/5">
                {m.lecciones.map((l, idx) => {
                  const completada = idx < m.completadas
                  return (
                    <Link key={l.id} href={`/idioma/curso/${l.id}`}
                      className="flex items-center gap-3 px-5 py-3.5 hover:bg-cream transition-colors group">
                      <div className={`w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 ${completada ? 'bg-mango text-white' : 'bg-navy/5 text-navy/40'}`}>
                        {completada ? '✓' : idx + 1}
                      </div>
                      <span className="text-sm text-navy/70 group-hover:text-navy transition-colors">{l.titulo}</span>
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  )
}
