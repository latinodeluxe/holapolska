'use client'
import { useState, useEffect } from 'react'
import { supabase } from '@/lib/supabase'

export default function NuevaPassword() {
  const [contrasena, setContrasena] = useState('')
  const [confirmar, setConfirmar] = useState('')
  const [cargando, setCargando] = useState(false)
  const [error, setError] = useState('')
  const [exito, setExito] = useState(false)
  const [sesionValida, setSesionValida] = useState(false)

  useEffect(() => {
    const verificarSesion = async () => {
      const { data: { session } } = await supabase.auth.getSession()
      if (session) setSesionValida(true)
    }
    verificarSesion()

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === 'PASSWORD_RECOVERY' || session) setSesionValida(true)
    })

    return () => subscription.unsubscribe()
  }, [])

  const cambiarContrasena = async (e) => {
    e.preventDefault()
    setError('')

    if (contrasena.length < 8) { setError('La contraseña debe tener al menos 8 caracteres.'); return }
    if (!/[A-Z]/.test(contrasena)) { setError('La contraseña debe tener al menos una mayúscula.'); return }
    if (!/[0-9]/.test(contrasena)) { setError('La contraseña debe tener al menos un número.'); return }
    if (contrasena !== confirmar) { setError('Las contraseñas no coinciden.'); return }

    setCargando(true)
    const { error } = await supabase.auth.updateUser({ password: contrasena })

    if (error) {
      setError('No se pudo actualizar la contraseña. Intenta de nuevo.')
      setCargando(false)
      return
    }

    setExito(true)
    setCargando(false)
  }

  if (exito) return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="text-6xl mb-6">✅</div>
        <h1 className="text-2xl font-display font-bold text-navy mb-4">Contraseña actualizada</h1>
        <p className="text-navy/50 mb-8 text-sm leading-relaxed">Tu contraseña ha sido cambiada correctamente. Ya puedes iniciar sesión con tu nueva contraseña.</p>
        <a href="/idioma/login" className="bg-magenta text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-magenta/90 transition-colors">Iniciar sesión</a>
      </div>
    </main>
  )

  if (sesionValida === false) return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="text-6xl mb-6">⏳</div>
        <h1 className="text-2xl font-display font-bold text-navy mb-4">Verificando enlace...</h1>
        <p className="text-navy/50 mb-8 text-sm leading-relaxed">Si el enlace no funciona, solicita uno nuevo desde la página de recuperación.</p>
        <a href="/idioma/recuperar-password" className="text-magenta font-medium hover:underline text-sm">Solicitar nuevo enlace</a>
      </div>
    </main>
  )

  return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="w-full max-w-md">
        <a href="/" className="flex items-center justify-center gap-0.5 mb-10">
          <span className="text-2xl font-extrabold text-magenta tracking-tight">Hola</span>
          <span className="text-2xl font-extrabold text-navy tracking-tight">Polska</span>
        </a>
        <div className="bg-white rounded-2xl border border-navy/8 p-8">
          <h1 className="text-2xl font-display font-bold text-navy mb-1 tracking-tight">Nueva contraseña</h1>
          <p className="text-sm text-navy/45 mb-8">Ingresa tu nueva contraseña para completar el cambio.</p>
          {error && <div className="bg-magenta-light border border-magenta/20 text-pink-900 rounded-xl px-4 py-3 mb-6 text-sm">{error}</div>}
          <form onSubmit={cambiarContrasena} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-navy block mb-1.5">Nueva contraseña</label>
              <input type="password" value={contrasena} onChange={(e) => setContrasena(e.target.value)} placeholder="Mín 8 caracteres, una mayúscula y un número" required className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-magenta bg-cream" />
            </div>
            <div>
              <label className="text-sm font-medium text-navy block mb-1.5">Confirmar contraseña</label>
              <input type="password" value={confirmar} onChange={(e) => setConfirmar(e.target.value)} placeholder="Repite tu nueva contraseña" required className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-magenta bg-cream" />
            </div>
            <button type="submit" disabled={cargando} className="w-full bg-magenta hover:bg-magenta/90 text-white font-semibold py-3 rounded-xl transition-colors disabled:opacity-50 text-sm">
              {cargando ? 'Actualizando...' : 'Cambiar contraseña'}
            </button>
          </form>
        </div>
      </div>
    </main>
  )
}
