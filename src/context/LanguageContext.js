'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import es from '@/i18n/es.json'
import pl from '@/i18n/pl.json'

const diccionarios = { es, pl }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')

  useEffect(() => {
    const guardado = localStorage.getItem('holapolska_lang')
    if (guardado && diccionarios[guardado]) setLang(guardado)
  }, [])

  const cambiarIdioma = (nuevoIdioma) => {
    if (!diccionarios[nuevoIdioma]) return
    setLang(nuevoIdioma)
    localStorage.setItem('holapolska_lang', nuevoIdioma)
  }

  const t = (clave) => {
    const partes = clave.split('.')
    let valor = diccionarios[lang]
    for (const parte of partes) {
      valor = valor?.[parte]
    }
    return valor || clave
  }

  return (
    <LanguageContext.Provider value={{ lang, cambiarIdioma, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage debe usarse dentro de LanguageProvider')
  return ctx
}
