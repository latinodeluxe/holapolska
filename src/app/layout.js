import './globals.css'
import CookieBanner from '@/components/CookieBanner'
import { LanguageProvider } from '@/context/LanguageContext'

export const metadata = {
  title: 'HolaPolska — Plataforma de integracion para hispanohablantes en Polonia',
  description: 'Aprende polaco, conoce tus derechos, entiende la cultura y conecta con la comunidad latina en Polonia. Todo gratis, todo en espanol.',
  openGraph: {
    title: 'HolaPolska — Tu vida en Polonia empieza aqui',
    description: 'Idioma, tramites, cultura y comunidad para hispanohablantes en Polonia. 100% gratuito.',
    url: 'https://holapolska.vercel.app',
    siteName: 'HolaPolska',
    locale: 'es_ES',
    type: 'website',
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  )
}
