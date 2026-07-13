'use client'
import { useState } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

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
  { código: 'MXN', nombre: 'Peso mexicano', bandera: '🇲🇽' },
  { código: 'COP', nombre: 'Peso colombiano', bandera: '🇨🇴' },
  { código: 'ARS', nombre: 'Peso argentino', bandera: '🇦🇷' },
  { código: 'CLP', nombre: 'Peso chileno', bandera: '🇨🇱' },
  { código: 'PEN', nombre: 'Sol peruano', bandera: '🇵🇪' },
  { código: 'EUR', nombre: 'Euro', bandera: '🇪🇺' },
  { código: 'USD', nombre: 'Dolar americano', bandera: '🇺🇸' },
]

export default function ConversorPln() {
  const [cantidad, setCantidad] = useState('')
  const [moneda, setMoneda] = useState('MXN')
  const [modo, setModo] = useState('pln_a_moneda')

  const calcular = () => {
    const num = parseFloat(cantidad)
    if (isNaN(num)) return ''
    if (modo === 'pln_a_moneda') return (num * tasas[moneda]).toLocaleString('es-MX', { maximumFractionDigits: 2 })
    return (num / tasas[moneda]).toLocaleString('es-MX', { maximumFractionDigits: 2 })
  }

  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Herramientas" volverHref="/herramientas" />
      <div className="max-w-xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/herramientas" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Herramientas</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-2">Conversor de PLN</h1>
          <p className="text-navy/50 text-sm">Tasas de referencia aproximadas al 1 de julio 2026. Para operaciones reales usa Wise o Google.</p>
        </div>

        <div className="bg-white rounded-2xl border border-navy/8 p-6 space-y-5">
          <div>
            <label className="text-xs font-bold text-navy/50 uppercase tracking-widest block mb-3">Moneda</label>
            <div className="grid grid-cols-2 gap-2">
              {monedas.map((m) => (
                <button key={m.código} onClick={() => setMoneda(m.código)}
                  className={`p-3 rounded-xl border text-sm font-medium transition-colors text-left ${moneda === m.código ? 'bg-magenta text-white border-magenta' : 'border-navy/10 text-navy hover:border-magenta/30'}`}>
                  {m.bandera} {m.código} — {m.nombre}
                </button>
              ))}
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-navy/50 uppercase tracking-widest block mb-3">Dirección</label>
            <div className="flex gap-2">
              <button onClick={() => setModo('pln_a_moneda')}
                className={`flex-1 p-3 rounded-xl border text-sm font-semibold transition-colors ${modo === 'pln_a_moneda' ? 'bg-magenta text-white border-magenta' : 'border-navy/10 text-navy hover:border-magenta/30'}`}>
                PLN → {moneda}
              </button>
              <button onClick={() => setModo('moneda_a_pln')}
                className={`flex-1 p-3 rounded-xl border text-sm font-semibold transition-colors ${modo === 'moneda_a_pln' ? 'bg-magenta text-white border-magenta' : 'border-navy/10 text-navy hover:border-magenta/30'}`}>
                {moneda} → PLN
              </button>
            </div>
          </div>

          <div>
            <label className="text-xs font-bold text-navy/50 uppercase tracking-widest block mb-2">
              Cantidad en {modo === 'pln_a_moneda' ? 'PLN' : moneda}
            </label>
            <input type="number" value={cantidad} onChange={(e) => setCantidad(e.target.value)}
              placeholder="0.00"
              className="w-full border border-navy/10 rounded-xl px-4 py-3 text-lg text-navy focus:outline-none focus:border-magenta bg-cream" />
          </div>

          {cantidad && calcular() && (
            <div className="bg-magenta-light rounded-xl p-6 text-center">
              <p className="text-sm text-navy/50 mb-1">
                {cantidad} {modo === 'pln_a_moneda' ? 'PLN' : moneda} equivale aproximadamente a
              </p>
              <p className="text-4xl font-extrabold text-magenta tracking-tight">
                {calcular()} {modo === 'pln_a_moneda' ? moneda : 'PLN'}
              </p>
              <p className="text-xs text-navy/40 mt-2">Tasa: 1 PLN = {tasas[moneda]} {moneda}</p>
            </div>
          )}
        </div>

        <div className="mt-4 bg-mango-light rounded-xl p-4">
          <p className="text-sm text-yellow-800">💡 Para tasas en tiempo real usa <strong>Wise.com</strong> o busca directamente en Google.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
