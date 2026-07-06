import './globals.css'
import CookieBanner from '@/components/CookieBanner'
import { LanguageProvider } from '@/context/LanguageContext'
import GoogleAnalytics from '@/components/GoogleAnalytics'

export const metadata = {
  title: 'HolaPolska — Plataforma de integracion para hispanohablantes en Polonia',
  description: 'Aprende polaco, conoce tus derechos, entiende la cultura y conecta con la comunidad latina en Polonia. Todo gratis, todo en espanol.',
  metadataBase: new URL('https://holapolska.com'),
  openGraph: {
    title: 'HolaPolska — Tu vida en Polonia empieza aqui',
    description: 'Idioma, tramites, cultura y comunidad para hispanohablantes en Polonia. 100% gratuito.',
    url: 'https://holapolska.com',
    siteName: 'HolaPolska',
    locale: 'es_ES',
    type: 'website',
    images: [
      {
        url: '/og-image.svg',
        width: 1200,
        height: 630,
        alt: 'HolaPolska — Plataforma de integracion para hispanohablantes en Polonia',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'HolaPolska — Tu vida en Polonia empieza aqui',
    description: 'Idioma, tramites, cultura y comunidad para hispanohablantes en Polonia. 100% gratuito.',
    images: ['/og-image.svg'],
  },
}

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body>
        <GoogleAnalytics />
        <LanguageProvider>
          {children}
          <CookieBanner />
        </LanguageProvider>
      </body>
    </html>
  )
}
