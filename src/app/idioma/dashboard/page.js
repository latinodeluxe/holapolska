'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

const niveles = [
  { nombre: 'Principiante', min: 0, max: 200 },
  { nombre: 'Basico', min: 200, max: 500 },
  { nombre: 'Elemental', min: 500, max: 900 },
  { nombre: 'Pre-intermedio', min: 900, max: 1400 },
  { nombre: 'Intermedio', min: 1400, max: 2000 },
  { nombre: 'Intermedio alto', min: 2000, max: 2700 },
  { nombre: 'Avanzado', min: 2700, max: 3500 },
  { nombre: 'Muy avanzado', min: 3500, max: 4400 },
  { nombre: 'Experto', min: 4400, max: 5400 },
  { nombre: 'Nativo Honorario', min: 5400, max: 99999 },
]

const modulos = [
  { num: 1, titulo: 'Saludos y presentaciones', rango: '1-10' },
  { num: 2, titulo: 'Familia y profesiones', rango: '11-20' },
  { num: 3, titulo: 'Casa y hogar', rango: '21-30' },
  { num: 4, titulo: 'Comida y restaurante', rango: '31-40' },
  { num: 5, titulo: 'Tiempo y calendario', rango: '41-50' },
  { num: 6, titulo: 'Transporte y ciudad', rango: '51-60' },
  { num: 7, titulo: 'Salud y cuerpo', rango: '61-70' },
  { num: 8, titulo: 'Trabajo y oficina', rango: '71-80' },
  { num: 9, titulo: 'Conversaciones reales', rango: '81-90' },
  { num: 10, titulo: 'Repaso final A1', rango: '91-100' },
]

export default function Dashboard() {
  const [usuario, setUsuario] = useState(null)
  const [datos, setDatos] = useState(null)
  const [lecciones, setLecciones] = useState(0)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const cargar = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { window.location.href = '/idioma/login'; return }
      setUsuario(user)
      const { data: perfil } = await supabase.from('usuarios').select('*').eq('id', user.id).single()
      setDatos(perfil)
      const { count } = await supabase.from('progreso').select('*', { count: 'exact', head: true }).eq('usuario_id', user.id).eq('completada', true)
      setLecciones(count || 0)
      setCargando(false)
    }
    cargar()
  }, [])

  if (cargando) return (
    <main className="min-h-screen bg-cream flex items-center justify-center">
      <div className="text-navy/40 text-sm">Cargando...</div>
    </main>
  )

  const xp = datos?.xp || 0
  const racha = datos?.racha_dias || 0
  const nivel = niveles.find(n => xp >= n.min && xp < n.max) || niveles[0]
  const progreso = Math.round(((xp - nivel.min) / (nivel.max - nivel.min)) * 100)
  const porcentajeCurso = Math.round((lecciones / 100) * 100)
  const nombre = datos?.nombre || usuario?.user_metadata?.nombre || 'Estudiante'
  const leccionSiguiente = Math.min(lecciones + 1, 100)

  return (
    <main className="min-h-screen bg-cream font-sans">
      <nav className="bg-cream border-b border-navy/8 px-8 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-0.5">
          <span className="text-xl font-extrabold text-magenta tracking-tight">Hola</span>
          <span className="text-xl font-extrabold text-navy tracking-tight">Polska</span>
        </a>
        <div className="flex items-center gap-4">
          <a href="/idioma/cursos/polaco-a1" className="text-sm text-navy/45 hover:text-navy transition-colors">Curso</a>
          <button onClick={async () => { await supabase.auth.signOut(); window.location.href = '/' }} className="text-sm text-navy/45 hover:text-navy transition-colors">Salir</button>
        </div>
      </nav>

      <div className="max-w-6xl mx-auto px-8 py-10">

        <div className="mb-8">
          <h1 className="font-display text-3xl font-extrabold text-navy tracking-tight mb-1">Hola, {nombre}</h1>
          <p className="text-navy/45 text-sm">Continua aprendiendo polaco</p>
        </div>

        <div className="bg-navy rounded-2xl p-6 mb-6">
          <div className="flex items-center justify-between mb-3">
            <div>
              <div className="text-xs text-white/40 font-semibold uppercase tracking-widest mb-1">Nivel {niveles.indexOf(nivel) + 1}</div>
              <div className="text-xl font-display font-bold text-white">{nivel.nombre}</div>
            </div>
            <div className="text-right">
              <div className="text-3xl font-extrabold text-mango">{xp}</div>
              <div className="text-xs text-white/40">XP total</div>
            </div>
          </div>
          <div className="h-2 bg-white/10 rounded-full overflow-hidden">
            <div className="h-full bg-teal rounded-full transition-all" style={{ width: `${progreso}%` }}></div>
          </div>
          <div className="flex justify-between mt-2">
            <span className="text-xs text-white/30">{xp} XP</span>
            <span className="text-xs text-white/30">{nivel.max} XP</span>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-6">
          <div className="bg-white rounded-2xl border border-navy/8 p-5 text-center">
            <div className="text-3xl font-extrabold text-magenta mb-1">{xp}</div>
            <div className="text-xs text-navy/40 font-medium">XP total</div>
          </div>
          <div className="bg-white rounded-2xl border border-navy/8 p-5 text-center">
            <div className="text-3xl font-extrabold text-mango mb-1">{racha}</div>
            <div className="text-xs text-navy/40 font-medium">Racha de dias</div>
          </div>
          <div className="bg-white rounded-2xl border border-navy/8 p-5 text-center">
            <div className="text-3xl font-extrabold text-teal mb-1">{lecciones}</div>
            <div className="text-xs text-navy/40 font-medium">Lecciones</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl border border-navy/8 p-6 mb-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <div className="font-display font-bold text-navy text-lg">Polaco A1</div>
              <div className="text-sm text-navy/45">Nivel basico desde cero · {lecciones} de 100 lecciones</div>
            </div>
            <div className="text-2xl font-extrabold text-magenta">{porcentajeCurso}%</div>
          </div>
          <div className="h-2 bg-navy/5 rounded-full overflow-hidden mb-4">
            <div className="h-full bg-magenta rounded-full transition-all" style={{ width: `${porcentajeCurso}%` }}></div>
          </div>
          <a href={`/idioma/curso/${leccionSiguiente}`} className="w-full bg-magenta hover:bg-magenta/90 text-white font-semibold py-3 rounded-xl transition-colors text-sm text-center block">
            Continuar aprendiendo
          </a>
        </div>

        <div>
          <div className="text-xs font-bold text-mango tracking-widest uppercase mb-4">Modulos del curso</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {modulos.map((m) => {
              const leccionInicio = parseInt(m.rango.split('-')[0])
              const completadas = Math.min(Math.max(lecciones - leccionInicio + 1, 0), 10)
              const pct = Math.round((completadas / 10) * 100)
              return (
                <a key={m.num} href={`/idioma/curso/${leccionInicio}`} className="bg-white rounded-xl border border-navy/8 p-4 flex items-center gap-4 hover:border-magenta/30 transition-colors">
                  <div className="w-10 h-10 rounded-xl bg-magenta/10 flex items-center justify-center flex-shrink-0">
                    <span className="text-sm font-bold text-magenta">{m.num}</span>
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="text-sm font-semibold text-navy truncate">{m.titulo}</div>
                    <div className="text-xs text-navy/40 mt-0.5">{completadas}/10 lecciones</div>
                    <div className="h-1 bg-navy/5 rounded-full mt-2 overflow-hidden">
                      <div className="h-full bg-teal rounded-full" style={{ width: `${pct}%` }}></div>
                    </div>
                  </div>
                </a>
              )
            })}
          </div>
        </div>
      </div>
    </main>
  )
}
