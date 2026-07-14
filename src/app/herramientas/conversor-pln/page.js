'use client'
import { useState, useEffect } from 'react'
import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

const monedas = [
  { codigo: 'MXN', nombre: 'Peso mexicano', bandera: '🇲🇽' },
  { codigo: 'COP', nombre: 'Peso colombiano', bandera: '🇨🇴' },
  { codigo: 'ARS', nombre: 'Peso argentino', bandera: '🇦🇷' },
  { codigo: 'CLP', nombre: 'Peso chileno', bandera: '🇨🇱' },
  { codigo: 'PEN', nombre: 'Sol peruano', bandera: '🇵🇪' },
  { codigo: 'EUR', nombre: 'Euro', bandera: '🇪🇺' },
  { codigo: 'USD', nombre: 'Dólar americano', bandera: '🇺🇸' },
  { codigo: 'BRL', nombre: 'Real brasileño', bandera: '🇧🇷' },
  { codigo: 'GBP', nombre: 'Libra esterlina', bandera: '🇬🇧' },
]

export default function ConversorPln() {
  const [cantidad, setCantidad] = useState('')
  const [moneda, setMoneda] = useState('EUR')
  const [modo, setModo] = useState('pln_a_moneda')
  const [tasas, setTasas] = useState(null)
  const [cargando, setCargando] = useState(true)
  const [error, setError] = useState(false)
  const [ultimaActualizacion, setUltimaActualizacion] = useState('')

  useEffect(() => {
    const cargarTasas = async () => {
      try {
        const res = await fetch('https://api.frankfurter.app/latest?from=PLN')
        if (res.ok === false) throw new Error('API error')
        const data = await res.json()
        setTasas(data.rates)
        setUltimaActualizacion(data.date)
        setCargando(false)
      } catch (err) {
        console.error('Error cargando tasas:', err)
        setError(true)
        setTasas({
          MXN: 4.07, COP: 798, ARS: 348, CLP: 216,
          PEN: 0.80, EUR: 0.235, USD: 0.255, BRL: 1.22, GBP: 0.198
        })
        setUltimaActualizacion('tasas aproximadas')
        setCargando(false)
      }
    }
    cargarTasas()
  }, [])

  const calcular = () => {
    if (tasas === null) return ''
    const num = parseFloat(cantidad)
    if (isNaN(num)) return ''
    const tasa = tasas[moneda]
    if (tasa === undefined) return ''
    if (modo === 'pln_a_moneda') return (num * tasa).toLocaleString('es-MX', { maximumFractionDigits: 2 })
    return (num / tasa).toLocaleString('es-MX', { maximumFractionDigits: 2 })
  }

  const tasaActual = tasas ? tasas[moneda] : null

  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Herramientas" volverHref="/herramientas" />
      <div className="max-w-xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/herramientas" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Herramientas</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-2">Conversor de PLN</h1>
          <p className="text-navy/50 text-sm">
            {cargando ? 'Cargando tasas...' : error ? 'Tasas aproximadas (sin conexión a la API)' : `Tasas actualizadas: ${ultimaActualizacion} · Fuente: Banco Central Europeo`}
          </p>
        </div>

        <div className="bg-white rounded-2xl border border-navy/8 p-6 space-y-5">
          <div>
            <label className="text-xs font-bold text-navy/50 uppercase tracking-widest block mb-3">Moneda</label>
            <div className="grid grid-cols-2 gap-2">
              {monedas.map((m) => (
                <button key={m.codigo} onClick={() => setMoneda(m.codigo)}
                  className={`p-3 rounded-xl border text-sm font-medium transition-colors text-left ${moneda === m.codigo ? 'bg-magenta text-white border-magenta' : 'border-navy/10 text-navy hover:border-magenta/30'}`}>
                  {m.bandera} {m.codigo} — {m.nombre}
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
              {tasaActual && (
                <p className="text-xs text-navy/40 mt-2">Tasa: 1 PLN = {tasaActual} {moneda}</p>
              )}
            </div>
          )}
        </div>

        <div className="mt-4 bg-mango-light rounded-xl p-4">
          <p className="text-sm text-yellow-800">💡 Las tasas se actualizan diariamente desde el Banco Central Europeo. Para operaciones reales usa <strong>Wise.com</strong> o tu banco.</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}
