'use client'
import { useState } from 'react'

const tasas = {
  MXN: 4.07,
  COP: 798,
  ARS: 348,
  CLP: 216,
  PEN: 0.80,
  EUR: 0.235,
  USD: 0.255,
}

const monedas = [
  { codigo: 'MXN', nombre: 'Peso mexicano', bandera: '🇲🇽' },
  { codigo: 'COP', nombre: 'Peso colombiano', bandera: '🇨🇴' },
  { codigo: 'ARS', nombre: 'Peso argentino', bandera: '🇦🇷' },
  { codigo: 'CLP', nombre: 'Peso chileno', bandera: '🇨🇱' },
  { codigo: 'PEN', nombre: 'Sol peruano', bandera: '🇵🇪' },
  { codigo: 'EUR', nombre: 'Euro', bandera: '🇪🇺' },
  { codigo: 'USD', nombre: 'Dolar americano', bandera: '🇺🇸' },
]

export default function ConversorPln() {
  const [cantidad, setCantidad] = useState('')
  const [moneda, setMoneda] = useState('MXN')
  const [modo, setModo] = useState('pln_a_moneda')

  const calcular = () => {
    const num = parseFloat(cantidad)
    if (isNaN(num)) return ''
    if (modo === 'pln_a_moneda') {
      return (num * tasas[moneda]).toLocaleString('es-MX', { maximumFractionDigits: 2 })
    } else {
      return (num / tasas[moneda]).toLocaleString('es-MX', { maximumFractionDigits: 2 })
    }
  }

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/herramientas" className="text-sm text-gray-500">Volver a Herramientas</a>
      </nav>
      <div className="max-w-xl mx-auto px-6 py-16">
        <span className="text-sm text-red-500 font-medium">Herramientas</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Conversor de PLN</h1>
        <p className="text-gray-500 mb-2">Convierte entre zlotys polacos y las principales monedas latinas.</p>
        <p className="text-xs text-gray-400 mb-8">Tasas de referencia aproximadas al 1 de julio 2026. Para operaciones financieras reales usa siempre tasas actualizadas en Wise, Google o tu banco.</p>

        <div className="bg-white rounded-2xl shadow-sm p-8 space-y-6">
          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Moneda</label>
            <div className="grid grid-cols-2 gap-2">
              {monedas.map((m) => (
                <button key={m.codigo} onClick={() => setMoneda(m.codigo)}
                  className={"p-3 rounded-xl border text-sm font-medium transition-colors text-left " + (moneda === m.codigo ? 'bg-red-500 text-white border-red-500' : 'border-gray-200 text-gray-700 hover:border-red-300')}>
                  {m.bandera} {m.codigo} — {m.nombre}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">Direccion</label>
            <div className="flex gap-2">
              <button onClick={() => setModo('pln_a_moneda')}
                className={"flex-1 p-3 rounded-xl border text-sm font-medium " + (modo === 'pln_a_moneda' ? 'bg-red-500 text-white border-red-500' : 'border-gray-200 text-gray-700')}>
                PLN → {moneda}
              </button>
              <button onClick={() => setModo('moneda_a_pln')}
                className={"flex-1 p-3 rounded-xl border text-sm font-medium " + (modo === 'moneda_a_pln' ? 'bg-red-500 text-white border-red-500' : 'border-gray-200 text-gray-700')}>
                {moneda} → PLN
              </button>
            </div>
          </div>

          <div>
            <label className="text-sm font-medium text-gray-700 mb-2 block">
              Cantidad en {modo === 'pln_a_moneda' ? 'PLN' : moneda}
            </label>
            <input type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)}
              placeholder="0.00"
              className="w-full border border-gray-200 rounded-xl px-4 py-3 text-lg focus:outline-none focus:border-red-400" />
          </div>

          {cantidad && calcular() && (
            <div className="bg-red-50 rounded-xl p-6 text-center">
              <p className="text-sm text-gray-500 mb-1">
                {cantidad} {modo === 'pln_a_moneda' ? 'PLN' : moneda} equivale aproximadamente a
              </p>
              <p className="text-4xl font-bold text-red-500">
                {calcular()} {modo === 'pln_a_moneda' ? moneda : 'PLN'}
              </p>
              <p className="text-xs text-gray-400 mt-2">Tasa de referencia: 1 PLN = {tasas[moneda]} {moneda}</p>
            </div>
          )}
        </div>

        <div className="mt-6 bg-yellow-50 border border-yellow-200 rounded-xl p-4">
          <p className="text-sm text-gray-700">Para tasas en tiempo real usa <strong>Wise.com</strong> o busca "PLN a {moneda}" en Google.</p>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/herramientas" className="text-red-500 font-medium hover:underline">← Volver a Herramientas</a>
        </div>
      </div>
    </main>
  )
}
