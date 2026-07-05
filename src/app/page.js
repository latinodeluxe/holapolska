'use client'
import { useLanguage } from '@/context/LanguageContext'
import SelectorIdioma from '@/components/SelectorIdioma'
import CookieBanner from '@/components/CookieBanner'
import Link from 'next/link'

const WA_LINK = 'https://wa.me/48733205803?text=Hola%20HolaPolska%2C%20me%20interesa%20aparecer%20en%20el%20directorio%20de%20negocios%20latinos.'

const modulos = [
  { key: 'vivirEnPolonia', icono: '🏠', href: '/vivir-en-polonia', color: 'mango' },
  { key: 'legalidad', icono: '⚖️', href: '/legalidad', color: 'teal' },
  { key: 'cultura', icono: '🎭', href: '/cultura', color: 'navy' },
  { key: 'herramientas', icono: '🛠️', href: '/herramientas', color: 'mango' },
  { key: 'comunidad', icono: '🤝', href: '/comunidad', color: 'magenta' },
  { key: 'recursos', icono: '📚', href: '/recursos', color: 'teal' },
]

const negocios = [
  { nombre: 'Latino Kitchen', tipo: 'Restaurante · Varsovia', icono: '🍽️', color: 'magenta' },
  { nombre: 'Asesor Legal PL', tipo: 'Servicios legales', icono: '💼', color: 'teal' },
  { nombre: 'Tienda Latina', tipo: 'Productos · Cracovia', icono: '🛍️', color: 'mango' },
  { nombre: 'Estilo Latino', tipo: 'Peluqueria · Gdansk', icono: '✂️', color: 'navy' },
  { nombre: 'Ritmos PL', tipo: 'Eventos · Wroclaw', icono: '🎵', color: 'magenta' },
]

const colorClasses = {
  mango:   { bg: 'bg-mango-light',   icon: 'bg-mango',   text: 'text-yellow-800' },
  magenta: { bg: 'bg-magenta-light', icon: 'bg-magenta', text: 'text-pink-900' },
  teal:    { bg: 'bg-teal-light',    icon: 'bg-teal',    text: 'text-teal-900' },
  navy:    { bg: 'bg-navy/5',        icon: 'bg-navy',    text: 'text-navy/50' },
}

export default function Home() {
  const { t } = useLanguage()

  return (
    <main className="min-h-screen bg-cream font-sans">

      <nav className="bg-cream border-b border-navy/8 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
        <Link href="/" className="flex items-center gap-0.5">
          <span className="text-xl font-extrabold text-magenta tracking-tight">Hola</span>
          <span className="text-xl font-extrabold text-navy tracking-tight">Polska</span>
        </Link>
        <div className="flex items-center gap-3">
          <SelectorIdioma />
          <Link href="/nosotros" className="text-sm text-navy/50 font-medium hover:text-navy transition-colors hidden sm:block">{t(`+"`"+nav.nosotros+"`"+`)}</Link>
          <SelectorIdioma />
          <Link href="/nosotros" className="text-sm text-navy/50 font-medium hover:text-navy transition-colors hidden sm:block">
            {t('nav.nosotros')}
          </Link>
          <SelectorIdioma />
          <Link href="/idioma/login" className="text-sm text-navy/45 font-medium hidden sm:block hover:text-navy transition-colors">
            {t('nav.iniciarSesion')}
          </Link>
          <Link href="/idioma/registro" className="bg-magenta text-white text-sm font-semibold px-5 py-2.5 rounded-full hover:bg-magenta/90 transition-colors">
            {t('nav.empezarGratis')}
          </Link>
        </div>
      </nav>

      <section className="bg-navy px-8 pt-16 pb-0">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-end">
          <div className="pb-12">
            <div className="inline-flex items-center gap-2 mb-6">
              <div className="w-2 h-2 rounded-full bg-mango"></div>
              <span className="text-xs text-white/50 font-semibold tracking-widest uppercase">{t('home.tagline')}</span>
            </div>
            <h1 className="font-display text-5xl font-extrabold text-white leading-tight tracking-tight mb-5">
              {t('home.heroTitle')}<br />
              <span className="text-mango">{t('home.heroSubtitle')}</span>
            </h1>
            <p className="text-base text-white/50 leading-relaxed mb-8 max-w-md">{t('home.heroDesc')}</p>
            <div className="flex gap-3 flex-wrap">
              <Link href="/idioma/registro" className="bg-magenta text-white text-sm font-bold px-7 py-3.5 rounded-full hover:bg-magenta/90 transition-colors">
                {t('nav.empezarGratis')}
              </Link>
              <Link href="/idioma" className="border border-white/20 text-white/70 text-sm px-6 py-3.5 rounded-full hover:border-white/40 transition-colors">
                {t('home.verModulos')}
              </Link>
            </div>
          </div>

          <div className="pb-0">
            <div className="bg-white/5 rounded-t-2xl border border-white/10 border-b-0 p-6">
              <div className="text-xs text-white/30 font-semibold uppercase tracking-widest mb-4">Leccion de hoy</div>
              <div className="text-4xl font-extrabold text-white tracking-tight mb-1">Dziękuję</div>
              <div className="text-base text-mango font-medium mb-1">dyen-KU-ye</div>
              <div className="text-sm text-white/50 mb-6">Gracias</div>
              <div className="flex items-center gap-3 mb-6">
                <div className="flex-1 h-1.5 bg-white/10 rounded-full overflow-hidden">
                  <div className="h-full w-1/3 bg-teal rounded-full"></div>
                </div>
                <span className="text-xs text-white/30">35 / 100</span>
              </div>
              <div className="grid grid-cols-3 gap-px bg-white/8 rounded-xl overflow-hidden">
                {[
                  { n: '100', l: 'lecciones', c: 'text-mango' },
                  { n: '729', l: 'palabras', c: 'text-magenta' },
                  { n: '7',   l: 'modulos', c: 'text-teal' },
                ].map(({ n, l, c }) => (
                  <div key={l} className="bg-white/4 px-4 py-4 text-center">
                    <div className={`text-2xl font-extrabold tracking-tight ${c}`}>{n}</div>
                    <div className="text-xs text-white/30 mt-1">{l}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-8 py-14 border-b border-navy/8">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-end justify-between mb-8">
            <div>
              <div className="text-xs font-bold text-mango tracking-widest uppercase mb-2">{t('home.losModulos')}</div>
              <h2 className="font-display text-2xl font-bold text-navy tracking-tight">{t('home.todoEnUnLugar')}</h2>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-4">
            <Link href="/idioma" className="bg-magenta rounded-2xl p-6 flex flex-col justify-between lg:row-span-2 hover:bg-magenta/90 transition-colors">
              <div>
                <div className="w-14 h-14 rounded-2xl bg-white/15 flex items-center justify-center text-3xl mb-5">🇵🇱</div>
                <div className="text-xl font-bold text-white mb-2">{t('modulos.idioma')}</div>
                <div className="text-sm text-white/60 leading-relaxed">Curso A1 completo con vocabulario, flashcards y ejercicios interactivos.</div>
              </div>
              <div className="mt-6">
                <span className="bg-white/20 text-white text-xs font-bold px-4 py-1.5 rounded-full">{t('home.leccionesGratis')}</span>
              </div>
            </Link>

            {modulos.map((m) => {
              const c = colorClasses[m.color]
              return (
                <Link key={m.key} href={m.href} className={`${c.bg} rounded-2xl p-5 flex items-center gap-4 hover:opacity-90 transition-opacity`}>
                  <div className={`${c.icon} w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>{m.icono}</div>
                  <div>
                    <div className="text-base font-semibold text-navy">{t(`modulos.${m.key}`)}</div>
                  </div>
                </Link>
              )
            })}
          </div>
        </div>
      </section>

      <section className="px-8 py-14 border-b border-navy/8">
        <div className="max-w-6xl mx-auto">
          <div className="mb-8">
            <div className="text-xs font-bold text-magenta tracking-widest uppercase mb-2">Aliados y patrocinadores</div>
            <h2 className="font-display text-2xl font-bold text-navy tracking-tight">{t('home.negociosTitle')}</h2>
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {negocios.map((n) => {
              const c = colorClasses[n.color]
              return (
                <div key={n.nombre} className="bg-white rounded-2xl border border-navy/8 p-5 flex items-center gap-4">
                  <div className={`${c.icon} w-12 h-12 rounded-xl flex items-center justify-center text-xl flex-shrink-0`}>{n.icono}</div>
                  <div>
                    <div className="text-sm font-bold text-navy">{n.nombre}</div>
                    <div className="text-xs text-navy/40 mt-0.5">{n.tipo}</div>
                  </div>
                </div>
              )
            })}
            <Link href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="bg-mango-light rounded-2xl p-5 border-2 border-dashed border-mango/40 flex items-center gap-4 hover:border-mango/70 transition-colors">
              <div className="w-12 h-12 rounded-xl bg-mango/20 flex items-center justify-center text-mango text-2xl font-bold flex-shrink-0">+</div>
              <div>
                <div className="text-sm font-bold text-navy">{t('home.tuNegocio')}</div>
                <div className="text-xs text-yellow-800 mt-0.5">Gratis durante el lanzamiento</div>
              </div>
            </Link>
          </div>
          <div className="bg-navy rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <div className="text-base font-semibold text-white mb-1">{t('home.tieneNegocio')}</div>
              <div className="text-sm text-white/40">{t('home.aparecerGratis')}</div>
            </div>
            <Link href={WA_LINK} target="_blank" rel="noopener noreferrer"
              className="bg-mango text-navy text-sm font-bold px-6 py-3 rounded-full whitespace-nowrap hover:bg-mango/90 transition-colors flex-shrink-0">
              {t('home.contactanos')}
            </Link>
          </div>
        </div>
      </section>

      <section className="bg-magenta px-8 py-10">
        <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <div className="text-2xl font-display font-extrabold text-white mb-2">{t('home.empiezaHoy')}</div>
            <div className="text-sm text-white/65">{t('home.sinTarjeta')}</div>
          </div>
          <Link href="/idioma/registro" className="bg-white text-magenta text-sm font-bold px-7 py-3.5 rounded-full whitespace-nowrap hover:bg-white/90 transition-colors">
            {t('home.crearCuenta')}
          </Link>
        </div>
      </section>

      <footer className="bg-navy px-8 py-8">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-6">
            <div>
              <span className="text-magenta font-extrabold text-base">Hola</span>
              <span className="text-white font-extrabold text-base">Polska</span>
              <p className="text-xs text-white/25 mt-1">Hecho con amor para la comunidad latina en Polonia</p>
            </div>
            <div className="flex gap-6 flex-wrap">
              {[['Aviso Legal', '/compliance/legal'], ['Privacidad', '/compliance/privacy'], ['Cookies', '/compliance/cookies'], ['Accesibilidad', '/compliance/accessibility']].map(([l, h]) => (
                <Link key={l} href={h} className="text-xs text-white/30 hover:text-white/60 transition-colors">{l}</Link>
              ))}
            </div>
          </div>
          <div className="border-t border-white/8 pt-6">
            <p className="text-xs text-white/25">HolaPolska · Pablo Sebastian Cupajita Chitiva · lavozlatinapl@gmail.com · Polonia, Union Europea</p>
          </div>
        </div>
      </footer>

    </main>
  )
}
