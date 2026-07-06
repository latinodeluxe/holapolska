'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Registro() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [contrasena, setContrasena] = useState('')
  const [confirmar, setConfirmar] = useState('')
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')
  const [exito, setExito] = useState(false)

  const validar = () => {
    if (!nombre.trim()) return 'Ingresa tu nombre.'
    if (!correo) return 'Ingresa tu correo electronico.'
    if (contrasena.length < 8) return 'La contrasena debe tener al menos 8 caracteres.'
    if (!/[A-Z]/.test(contrasena)) return 'La contrasena debe tener al menos una mayuscula.'
    if (!/[0-9]/.test(contrasena)) return 'La contrasena debe tener al menos un numero.'
    if (contrasena !== confirmar) return 'Las contrasenas no coinciden.'
    return null
  }

  const registrarse = async (e) => {
    e.preventDefault()
    setError('')
    const err = validar()
    if (err) { setError(err); return }
    setCargando(true)
    const { error } = await supabase.auth.signUp({ email: correo, password: contrasena, options: { data: { nombre: nombre.trim() } } })
    if (error) { console.error('Supabase error:', error); setError(error.message || 'Error al crear la cuenta. Intentalo de nuevo.'); setCargando(false); return }
    setExito(true)
    setCargando(false)
  }

  if (exito) return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="text-6xl mb-6">📧</div>
        <h1 className="text-2xl font-display font-bold text-navy mb-4">Revisa tu correo</h1>
        <p className="text-navy/50 mb-8 text-sm leading-relaxed">Enviamos un enlace de confirmacion a <strong className="text-navy">{correo}</strong>. Haz click para activar tu cuenta.</p>
        <a href="/idioma/login" className="text-magenta font-medium hover:underline text-sm">Volver al inicio de sesion</a>
      </div>
    </main>
  )

  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6 py-10">
      <div className="w-full max-w-md">
        <a href="/" className="flex items-center justify-center gap-0.5 mb-10">
          <span className="text-2xl font-extrabold text-magenta tracking-tight">Hola</span>
          <span className="text-2xl font-extrabold text-navy tracking-tight">Polska</span>
        </a>
        <div className="bg-white rounded-2xl border border-navy/8 p-8">
          <h1 className="text-2xl font-display font-bold text-navy mb-1 tracking-tight">Crea tu cuenta gratis</h1>
          <p className="text-sm text-navy/45 mb-8">Empieza a aprender polaco hoy</p>
          {error && <div className="bg-magenta-light border border-magenta/20 text-pink-900 rounded-xl px-4 py-3 mb-6 text-sm">{error}</div>}
          <form onSubmit={registrarse} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-navy block mb-1.5">Tu nombre</label>
              <input type="text" value={nombre} onChange={(e) => setNombre(e.target.value)} placeholder="Como te llamas" required className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-magenta bg-cream" />
            </div>
            <div>
              <label className="text-sm font-medium text-navy block mb-1.5">Correo electronico</label>
              <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="tu@correo.com" required className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-magenta bg-cream" />
            </div>
            <div>
              <label className="text-sm font-medium text-navy block mb-1.5">Contrasena</label>
              <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} placeholder="Min 8 caracteres, una mayuscula y un numero" required className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-magenta bg-cream" />
            </div>
            <div>
              <label className="text-sm font-medium text-navy block mb-1.5">Confirmar contrasena</label>
              <input type="password" value={confirmar} onChange={(e) => setConfirmar(e.target.value)} placeholder="Repite tu contrasena" required className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-magenta bg-cream" />
            </div>
            <button type="submit" disabled={cargando} className="w-full bg-magenta hover:bg-magenta/90 text-white font-semibold py-3 rounded-xl transition-colors disabled:opacity-50 text-sm">
              {cargando ? 'Creando cuenta...' : 'Crear cuenta gratis'}
            </button>
          </form>
          <p className="text-center text-xs text-navy/30 mt-4">Al registrarte aceptas nuestros <a href="/compliance/terms" className="underline">Terminos</a> y <a href="/compliance/privacy" className="underline">Privacidad</a></p>
          <p className="text-center text-sm text-navy/45 mt-4">Ya tienes cuenta? <a href="/idioma/login" className="text-magenta font-medium hover:underline">Iniciar sesion</a></p>
        </div>
      </div>
    </main>
  )
}
