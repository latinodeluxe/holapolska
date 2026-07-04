'use client'
import { useState } from 'react'
import { useLanguage } from '@/context/LanguageContext'

const opciones = [
  { codigo: 'es', label: 'Español', bandera: '🇪🇸' },
  { codigo: 'pl', label: 'Polski', bandera: '🇵🇱' },
]

export default function SelectorIdioma() {
  const { lang, cambiarIdioma } = useLanguage()
  const [abierto, setAbierto] = useState(false)

  const actual = opciones.find(o => o.codigo === lang)

  return (
    <div className="relative">
      <button
        onClick={() => setAbierto(!abierto)}
        className="flex items-center gap-1.5 text-sm text-navy/50 hover:text-navy transition-colors px-2 py-1 rounded-lg hover:bg-navy/5"
      >
        <span>{actual.bandera}</span>
        <span className="font-medium">{actual.codigo.toUpperCase()}</span>
        <span className="text-xs opacity-60">▾</span>
      </button>

      {abierto && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setAbierto(false)} />
          <div className="absolute right-0 top-full mt-2 bg-white rounded-xl border border-navy/10 shadow-lg overflow-hidden z-50 min-w-32">
            {opciones.map((op) => (
              <button
                key={op.codigo}
                onClick={() => { cambiarIdioma(op.codigo); setAbierto(false) }}
                className={`w-full flex items-center gap-2 px-4 py-2.5 text-sm hover:bg-cream transition-colors ${lang === op.codigo ? 'font-semibold text-magenta' : 'text-navy'}`}
              >
                <span>{op.bandera}</span>
                <span>{op.label}</span>
                {lang === op.codigo && <span className="ml-auto text-magenta text-xs">✓</span>}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  )
}
