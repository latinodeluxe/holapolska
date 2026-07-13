'use client'
import { createContext, useContext, useState, useEffect } from 'react'
import es from '@/i18n/es.json'
import pl from '@/i18n/pl.json'

const diccionarios = { es, pl }

const LanguageContext = createContext(null)

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState('es')
  const [montado, setMontado] = useState(false)

  useEffect(() => {
    const guardado = localStorage.getItem('holapolska_lang')
    if (guardado && diccionarios[guardado]) setLang(guardado)
    setMontado(true)
  }, [])

  const cambiarIdioma = (nuevoIdioma) => {
    if (diccionarios[nuevoIdioma] === undefined) return
    setLang(nuevoIdioma)
    localStorage.setItem('holapolska_lang', nuevoIdioma)
  }

  const t = (clave) => {
    const partes = clave.split('.')
    let valor = diccionarios[lang]
    for (const parte of partes) {
      if (valor === undefined) return clave
      valor = valor[parte]
    }
    return valor || clave
  }

  if (montado === false) {
    return <>{children}</>
  }

  return (
    <LanguageContext.Provider value={{ lang, cambiarIdioma, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (ctx === null) return { lang: 'es', cambiarIdioma: () => {}, t: (k) => k }
  return ctx
}
