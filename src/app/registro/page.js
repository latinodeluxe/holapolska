'use client'
import { useState } from 'react'
import { supabase } from '@/lib/supabase'

export default function Registro() {
  const [nombre, setNombre] = useState('')
  const [correo, setCorreo] = useState('')
  const [password, setPassword] = useState('')
  const [cargando, setCargando] = useState(false)
  const [mensaje, setMensaje] = useState('')

  const handleRegistro = async () => {
    setCargando(true)
    setMensaje('')

    const { data, error } = await supabase.auth.signUp({
      email: correo,
      password: password,
      options: {
        data: { nombre: nombre }
      }
    })

    if (error) {
      setMensaje('Error: ' + error.message)
    } else {
      setMensaje('¡Cuenta creada! Revisa tu correo para confirmar.')
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
          <h1 className="text-2xl font-bold text-gray-900">Crear cuenta gratis</h1>
          <p className="text-gray-500 mt-2">Empieza a aprender polaco hoy</p>
        </div>

        <div className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Nombre</label>
            <input
              type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              placeholder="Tu nombre"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

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
              placeholder="Mínimo 6 caracteres"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
            />
          </div>

          {mensaje && (
            <div className={`text-sm p-3 rounded-xl ${mensaje.includes('Error') ? 'bg-red-50 text-red-600' : 'bg-green-50 text-green-600'}`}>
              {mensaje}
            </div>
          )}

          <button
            onClick={handleRegistro}
            disabled={cargando}
            className="w-full bg-red-500 hover:bg-red-600 disabled:bg-red-300 text-white font-semibold py-3 rounded-xl transition-colors"
          >
            {cargando ? 'Creando cuenta...' : 'Crear cuenta gratis'}
          </button>
        </div>

        <p className="text-center text-sm text-gray-500 mt-6">
          ¿Ya tienes cuenta?{' '}
          <a href="/login" className="text-red-500 font-medium hover:underline">
            Iniciar sesión
          </a>
        </p>

      </div>
    </main>
  )
}