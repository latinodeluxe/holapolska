'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Login() {
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')

  const traducirError = (msg) => {
    if (msg.includes('Invalid login credentials')) return 'Correo o contrasena incorrectos.'
    if (msg.includes('Email not confirmed')) return 'Debes confirmar tu correo antes de iniciar sesion.'
    if (msg.includes('Too many requests')) return 'Demasiados intentos. Espera unos minutos.'
    return 'Error al iniciar sesion. Intentalo de nuevo.'
  }

  const iniciarSesion = async (e) => {
    e.preventDefault()
    setError('')
    if (!correo || !contrasena) { setError('Completa todos los campos.'); return }
    setCargando(true)
    const { error } = await supabase.auth.signInWithPassword({ email: correo, password: contrasena })
    if (error) { setError(traducirError(error.message)); setCargando(false); return }
    window.location.href = '/idioma/dashboard'
  }

  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <a href="/" className="flex items-center justify-center gap-0.5 mb-10">
          <span className="text-2xl font-extrabold text-magenta tracking-tight">Hola</span>
          <span className="text-2xl font-extrabold text-navy tracking-tight">Polska</span>
        </a>
        <div className="bg-white rounded-2xl border border-navy/8 p-8">
          <h1 className="text-2xl font-display font-bold text-navy mb-1 tracking-tight">Bienvenido de vuelta</h1>
          <p className="text-sm text-navy/45 mb-8">Continua aprendiendo polaco</p>
          {error && <div className="bg-magenta-light border border-magenta/20 text-pink-900 rounded-xl px-4 py-3 mb-6 text-sm">{error}</div>}
          <form onSubmit={iniciarSesion} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-navy block mb-1.5">Correo electronico</label>
              <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="tu@correo.com" required className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-magenta bg-cream" />
            </div>
            <div>
              <label className="text-sm font-medium text-navy block mb-1.5">Contrasena</label>
              <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} placeholder="Tu contrasena" required className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-magenta bg-cream" />
            </div>
            <div className="text-right">
              <a href="/idioma/recuperar-password" className="text-sm text-teal hover:underline">Olvide mi contrasena</a>
            </div>
            <button type="submit" disabled={cargando} className="w-full bg-magenta hover:bg-magenta/90 text-white font-semibold py-3 rounded-xl transition-colors disabled:opacity-50 text-sm">
              {cargando ? 'Iniciando sesion...' : 'Iniciar sesion'}
            </button>
          </form>
          <p className="text-center text-sm text-navy/45 mt-6">No tienes cuenta? <a href="/idioma/registro" className="text-magenta font-medium hover:underline">Crear cuenta gratis</a></p>
        </div>
      </div>
    </main>
  )
}
