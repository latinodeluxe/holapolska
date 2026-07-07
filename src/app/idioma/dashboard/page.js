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

export default function Dashboard() {
  const [usuario, setUsuario] = useState(null)
  const [datos, setDatos] = useState(null)
  const [cursoA1, setCursoA1] = useState({ completadas: 0, total: 100 })
  const [cursoTrabajo, setCursoTrabajo] = useState({ completadas: 0, total: 50 })
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    const cargar = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      if (!user) { window.location.href = '/idioma/login'; return }
      setUsuario(user)

      const { data: perfil } = await supabase.from('usuarios').select('*').eq('id', user.id).single()
      setDatos(perfil)

      // Progreso curso A1 (curso_id = 1, lecciones con numero_global)
      const { data: leccionesA1 } = await supabase
        .from('lecciones')
        .select('id, niveles!inner(curso_id)')
        .eq('niveles.curso_id', 1)

      const idsA1 = (leccionesA1 || []).map(l => l.id)

      // Progreso curso Trabajo (curso_id = 2)
      const { data: leccionesTrabajo } = await supabase
        .from('lecciones')
        .select('id, niveles!inner(curso_id)')
        .eq('niveles.curso_id', 2)

      const idsTrabajo = (leccionesTrabajo || []).map(l => l.id)

      const { data: progreso } = await supabase
        .from('progreso')
        .select('leccion_id')
        .eq('usuario_id', user.id)
        .eq('completada', true)

      const completadasIds = new Set((progreso || []).map(p => p.leccion_id))

      setCursoA1({
        completadas: idsA1.filter(id => completadasIds.has(id)).length,
        total: idsA1.length || 100,
      })
      setCursoTrabajo({
        completadas: idsTrabajo.filter(id => completadasIds.has(id)).length,
        total: idsTrabajo.length || 50,
      })

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
  const progresoNivel = Math.round(((xp - nivel.min) / (nivel.max - nivel.min)) * 100)
  const nombre = datos?.nombre || usuario?.user_metadata?.nombre || 'Estudiante'

  const porcentajeA1 = cursoA1.total ? Math.round((cursoA1.completadas / cursoA1.total) * 100) : 0
  const porcentajeTrabajo = cursoTrabajo.total ? Math.round((cursoTrabajo.completadas / cursoTrabajo.total) * 100) : 0

  return (
    <main className="min-h-screen bg-cream font-sans">
      <nav className="bg-cream border-b border-navy/8 px-8 py-4 flex justify-between items-center">
        <a href="/" className="flex items-center gap-0.5">
          <span className="text-xl font-extrabold text-magenta tracking-tight">Hola</span>
          <span className="text-xl font-extrabold text-navy tracking-tight">Polska</span>
        </a>
        <div className="flex items-center gap-4">
          <a href="/idioma" className="text-sm text-navy/45 hover:text-navy transition-colors">Cursos</a>
          <button onClick={async () => { await supabase.auth.signOut(); window.location.href = '/' }} className="text-sm text-navy/45 hover:text-navy transition-colors">Salir</button>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-8 py-10">

        <div className="mb-8">
          <h1 className="font-display text-3xl font-extrabold text-navy tracking-tight mb-1">Hola, {nombre}</h1>
          <p className="text-navy/45 text-sm">Este es tu progreso general</p>
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
            <div className="h-full bg-mango rounded-full transition-all" style={{ width: `${progresoNivel}%` }}></div>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl border border-navy/8 p-5 text-center">
            <div className="text-3xl font-extrabold text-magenta mb-1">{xp}</div>
            <div className="text-xs text-navy/40 font-medium">XP total</div>
          </div>
          <div className="bg-white rounded-2xl border border-navy/8 p-5 text-center">
            <div className="text-3xl font-extrabold text-mango mb-1">{racha}</div>
            <div className="text-xs text-navy/40 font-medium">Racha de dias</div>
          </div>
        </div>

        <div className="text-xs font-bold text-navy/40 tracking-widest uppercase mb-4">Tus cursos</div>

        <div className="space-y-4">
          <a href="/idioma/cursos/polaco-a1" className="bg-white rounded-2xl border border-navy/8 p-6 block hover:border-magenta/30 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-magenta-light flex items-center justify-center text-lg">🇵🇱</div>
                <div>
                  <div className="font-display font-bold text-navy">Polaco General A1</div>
                  <div className="text-xs text-navy/45">{cursoA1.completadas} de {cursoA1.total} lecciones</div>
                </div>
              </div>
              <div className="text-2xl font-extrabold text-magenta">{porcentajeA1}%</div>
            </div>
            <div className="h-2 bg-navy/5 rounded-full overflow-hidden">
              <div className="h-full bg-magenta rounded-full transition-all" style={{ width: `${porcentajeA1}%` }}></div>
            </div>
          </a>

          <a href="/idioma/cursos/polaco-trabajo" className="bg-white rounded-2xl border border-navy/8 p-6 block hover:border-teal/30 transition-colors">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-teal-light flex items-center justify-center text-lg">🏭</div>
                <div>
                  <div className="font-display font-bold text-navy">Polaco para el Trabajo</div>
                  <div className="text-xs text-navy/45">{cursoTrabajo.completadas} de {cursoTrabajo.total} lecciones</div>
                </div>
              </div>
              <div className="text-2xl font-extrabold text-teal">{porcentajeTrabajo}%</div>
            </div>
            <div className="h-2 bg-navy/5 rounded-full overflow-hidden">
              <div className="h-full bg-teal rounded-full transition-all" style={{ width: `${porcentajeTrabajo}%` }}></div>
            </div>
          </a>
        </div>

      </div>
    </main>
  )
}
