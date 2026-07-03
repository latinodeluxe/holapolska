'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function RecuperarPassword() {
  const [correo, setCorreo] = useState('')
  const [cargando, setCargando] = useState(false)
  const [enviado, setEnviado] = useState(false)
  const [error, setError] = useState('')

  const enviar = async (e) => {
    e.preventDefault()
    setError('')
    if (!correo) { setError('Ingresa tu correo electronico.'); return }
    setCargando(true)
    const { error } = await supabase.auth.resetPasswordForEmail(correo, { redirectTo: 'https://holapolska.vercel.app/idioma/nueva-password' })
    if (error) { setError('No pudimos enviar el enlace. Verifica el correo.'); setCargando(false); return }
    setEnviado(true)
    setCargando(false)
  }

  if (enviado) return (
    <main className="min-h-screen bg-cream flex items-center justify-center px-6">
      <div className="w-full max-w-md text-center">
        <div className="text-6xl mb-6">📧</div>
        <h1 className="text-2xl font-display font-bold text-navy mb-4">Revisa tu correo</h1>
        <p className="text-navy/50 mb-8 text-sm leading-relaxed">Enviamos un enlace a <strong className="text-navy">{correo}</strong> para restablecer tu contrasena.</p>
        <a href="/idioma/login" className="text-magenta font-medium hover:underline text-sm">Volver al inicio de sesion</a>
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
          <h1 className="text-2xl font-display font-bold text-navy mb-1 tracking-tight">Recuperar contrasena</h1>
          <p className="text-sm text-navy/45 mb-8">Ingresa tu correo y te enviamos un enlace para crear una nueva contrasena.</p>
          {error && <div className="bg-magenta-light border border-magenta/20 text-pink-900 rounded-xl px-4 py-3 mb-6 text-sm">{error}</div>}
          <form onSubmit={enviar} className="space-y-4">
            <div>
              <label className="text-sm font-medium text-navy block mb-1.5">Correo electronico</label>
              <input type="email" value={correo} onChange={(e) => setCorreo(e.target.value)} placeholder="tu@correo.com" required className="w-full border border-navy/15 rounded-xl px-4 py-3 text-navy text-sm focus:outline-none focus:border-magenta bg-cream" />
            </div>
            <button type="submit" disabled={cargando} className="w-full bg-magenta hover:bg-magenta/90 text-white font-semibold py-3 rounded-xl transition-colors disabled:opacity-50 text-sm">
              {cargando ? 'Enviando...' : 'Enviar enlace'}
            </button>
          </form>
          <p className="text-center text-sm text-navy/45 mt-6"><a href="/idioma/login" className="text-magenta font-medium hover:underline">Volver al inicio de sesion</a></p>
        </div>
      </div>
    </main>
  )
}
