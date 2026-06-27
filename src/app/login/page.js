'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Login() {
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [cargando, setCargando] = useState(false)
  const [mensaje, setMensaje] = useState('')

  const handleLogin = async () => {
    setCargando(true)
    setMensaje('')

    const { data, error } = await supabase.auth.signInWithPassword({
      email: correo,
      password: password,
    })

    if (error) {
      setMensaje('Error: ' + error.message)
    } else {
      window.location.href = '/dashboard'
    }
    setCargando(false)
  }

  return (
    <main className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md">

        <div className="text-center mb-8">
          <a href="/" className="inline-flex items-center gap-1 text-2xl font-bold mb-6">
            <span className="text-gray-900">Polska</span>
            <span className="text-red-500">Nol</span>
          </a>
          <h1 className="text-2xl font-bold text-gray-900">Bienvenido de vuelta</h1>
          <p className="text-gray-500 mt-2">Continúa aprendiendo polaco</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Correo electrónico</label>
            <input
              type="email"
              value={correo}
              onChange={(e) => setCorreo(e.target.value)}
              placeholder="tu@correo.com"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Contraseña</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Tu contraseña"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          {mensaje && (
            <div className="text-sm p-3 rounded-xl bg-red-50 text-red-600">
              {mensaje}
            </div>
          )}

          <button
            onClick={handleLogin}
            disabled={cargando}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            {cargando ? 'Entrando...' : 'Iniciar sesión'}
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          ¿No tienes cuenta?{' '}
          <a href="/registro" className="text-red-500 font-medium hover:underline">
            Crear cuenta gratis
          </a>
        </p>

      </div>
    </main>
  )
}