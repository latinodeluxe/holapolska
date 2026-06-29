'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function Dashboard() {
  const [usuario, setUsuario] = useState(null)
  const [cargando, setCargando] = useState(true)

  useEffect(() => {
    supabase.auth.getUser().then(({ data: { user } }) => {
      if (!user) { window.location.href = '/login'; return }
      setUsuario(user)
      setCargando(false)
    })
  }, [])

  const cerrarSesion = async () => {
    await supabase.auth.signOut()
    window.location.href = '/'
  }

  if (cargando) return (
    <main className="min-h-screen flex items-center justify-center bg-gray-50">
      <p className="text-gray-500">Cargando...</p>
    </main>
  )

  const modulos = [
    { num: 1, titulo: 'Saludos y presentaciones', icono: '👋', href: '/cursos/polaco-a1' },
    { num: 2, titulo: 'Familia y profesiones', icono: '👨‍👩‍👧', href: '/cursos/polaco-a1/modulo-2' },
    { num: 3, titulo: 'Casa y hogar', icono: '🏠', href: '/cursos/polaco-a1/modulo-3' },
    { num: 4, titulo: 'Comida y restaurante', icono: '🍽️', href: '/cursos/polaco-a1/modulo-4' },
    { num: 5, titulo: 'Tiempo y calendario', icono: '📅', href: '/cursos/polaco-a1/modulo-5' },
    { num: 6, titulo: 'Transporte y ciudad', icono: '🚌', href: '/cursos/polaco-a1/modulo-6' },
    { num: 7, titulo: 'Salud y cuerpo', icono: '🏥', href: '/cursos/polaco-a1/modulo-7' },
    { num: 8, titulo: 'Trabajo y oficina', icono: '💼', href: '/cursos/polaco-a1/modulo-8' },
    { num: 9, titulo: 'Conversaciones reales', icono: '💬', href: '/cursos/polaco-a1/modulo-9' },
    { num: 10, titulo: 'Repaso y evaluacion', icono: '🏆', href: '/cursos/polaco-a1/modulo-10' },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-1">
          <span className="text-xl font-bold text-red-500">Hola</span>
          <span className="text-xl font-bold text-gray-900">Polska</span>
        </div>
        <div className="flex gap-4 items-center">
          <span className="text-sm text-gray-500">Hola, {usuario?.user_metadata?.nombre || 'Estudiante'}</span>
          <button onClick={cerrarSesion} className="text-sm text-gray-500 hover:text-gray-900 transition-colors">Cerrar sesion</button>
        </div>
      </nav>

      <div className="max-w-5xl mx-auto px-6 py-10">
        <div className="mb-10">
          <h1 className="text-3xl font-bold text-gray-900">Bienvenido, {usuario?.user_metadata?.nombre || 'Estudiante'}!</h1>
          <p className="text-gray-500 mt-1">Continua tu aprendizaje del polaco</p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-red-500">0</div>
            <div className="text-sm text-gray-500 mt-1">XP total</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-orange-500">0</div>
            <div className="text-sm text-gray-500 mt-1">Racha de dias</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-blue-500">0</div>
            <div className="text-sm text-gray-500 mt-1">Lecciones</div>
          </div>
          <div className="bg-white rounded-2xl p-6 shadow-sm text-center">
            <div className="text-3xl font-bold text-green-500">0</div>
            <div className="text-sm text-gray-500 mt-1">Palabras</div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-8 mb-8">
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-bold text-gray-900">Polaco A1</h2>
            <span className="bg-red-50 text-red-500 text-xs font-medium px-3 py-1 rounded-full">En progreso</span>
          </div>
          <p className="text-gray-500 text-sm mb-6">Nivel basico desde cero · 100 lecciones</p>
          <div className="w-full bg-gray-100 rounded-full h-3 mb-6">
            <div className="bg-red-500 h-3 rounded-full w-0"></div>
          </div>
          <a href="/cursos/polaco-a1" className="bg-red-500 hover:bg-red-600 text-white font-semibold px-6 py-3 rounded-xl transition-colors">
            Continuar aprendiendo
          </a>
        </div>

        <h2 className="text-xl font-bold text-gray-900 mb-4">Modulos del curso</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {modulos.map((m) => (
            <a href={m.href} key={m.num} className="bg-white rounded-2xl p-6 shadow-sm flex items-center gap-4 ring-2 ring-red-500 hover:shadow-md transition-shadow">
              <div className="text-3xl">{m.icono}</div>
              <div className="flex-1">
                <p className="text-xs text-gray-400">Modulo {m.num}</p>
                <h3 className="font-semibold text-gray-900">{m.titulo}</h3>
                <p className="text-sm text-gray-400">10 lecciones</p>
              </div>
              <span className="text-red-500">▶</span>
            </a>
          ))}
        </div>
      </div>
    </main>
  )
}