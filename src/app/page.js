import CookieBanner from '@/components/CookieBanner'

const modulos = [
  { titulo: 'Vivir en Polonia', desc: 'PESEL, banco, SIM, alquiler', icono: '🏠', href: '/vivir-en-polonia', color: 'mango' },
  { titulo: 'Legalidad', desc: 'Residencia, visas, contratos', icono: '⚖️', href: '/legalidad', color: 'teal' },
  { titulo: 'Cultura', desc: 'Costumbres, fiestas, normas', icono: '🎭', href: '/cultura', color: 'navy' },
  { titulo: 'Herramientas', desc: 'Conversor PLN, frases utiles', icono: '🛠️', href: '/herramientas', color: 'mango' },
  { titulo: 'Comunidad', desc: 'Eventos, negocios latinos', icono: '🤝', href: '/comunidad', color: 'magenta' },
  { titulo: 'Recursos', desc: 'Guias, checklists y PDF', icono: '📚', href: '/recursos', color: 'teal' },
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

const WA_LINK = 'https://wa.me/48733205803?text=Hola%20HolaPolska%2C%20me%20interesa%20aparecer%20en%20el%20directorio%20de%20negocios%20latinos.'

export default function Home() {
  return (
    <main className="min-h-screen bg-cream font-sans">

      <nav className="bg-cream border-b border-navy/8 px-6 py-4 flex justify-between items-center sticky top-0 z-50">
        <a href="/" className="flex items-center gap-0.5">
          <span className="text-xl font-extrabold text-magenta tracking-tight">Hola</span>
          <span className="text-xl font-extrabold text-navy tracking-tight">Polska</span>
        </a>
        <div className="flex items-center gap-4">
          <a href="/idioma/login" className="text-sm text-navy/45 font-medium hidden sm:block">Iniciar sesion</a>
          <a href="/idioma/registro" className="bg-magenta text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-magenta/90 transition-colors">Empezar gratis</a>
        </div>
      </nav>

      <section className="bg-navy px-6 pt-14 pb-0">
        <div className="max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 mb-5">
            <div className="w-2 h-2 rounded-full bg-mango"></div>
            <span className="text-xs text-white/50 font-semibold tracking-widest uppercase">Para hispanohablantes en Polonia</span>
          </div>
          <h1 className="font-display text-4xl font-extrabold text-white leading-tight tracking-tight mb-4">
            Todo lo que necesitas<br />para vivir en Polonia.<br />
            <span className="text-mango">En tu idioma.</span>
          </h1>
          <p className="text-sm text-white/50 leading-relaxed max-w-sm mb-8">
            Idioma, tramites, cultura y comunidad — sin costo, sin barreras.
          </p>
          <div className="flex gap-3 flex-wrap mb-10">
            <a href="/idioma/registro" className="bg-magenta text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-magenta/90 transition-colors">Empezar gratis</a>
            <a href="/idioma" className="border border-white/20 text-white/70 text-sm px-5 py-3 rounded-full hover:border-white/40 transition-colors">Ver el curso de polaco</a>
          </div>
          <div className="grid grid-cols-3 gap-px bg-white/8 rounded-t-2xl overflow-hidden">
            {[
              { n: '100', l: 'lecciones A1', c: 'text-mango' },
              { n: '729', l: 'palabras', c: 'text-magenta' },
              { n: '7',   l: 'modulos', c: 'text-teal' },
            ].map(({ n, l, c }) => (
              <div key={l} className="bg-white/4 px-4 py-5">
                <div className={`text-3xl font-extrabold tracking-tight ${c}`}>{n}</div>
                <div className="text-xs text-white/40 mt-1">{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-6 py-10 border-b border-navy/8 max-w-2xl mx-auto">
        <div className="text-xs font-bold text-mango tracking-widest uppercase mb-2">Los 7 modulos</div>
        <h2 className="font-display text-xl font-bold text-navy mb-6 tracking-tight">Todo lo que necesitas en un solo lugar</h2>

        <a href="/idioma" className="bg-magenta rounded-2xl p-5 flex items-center justify-between mb-3 hover:bg-magenta/90 transition-colors">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-xl bg-white/15 flex items-center justify-center text-2xl">🇵🇱</div>
            <div>
              <div className="text-base font-bold text-white mb-1">Aprender polaco</div>
              <div className="text-xs text-white/60">A1 completo — 100 lecciones, XP y rachas</div>
            </div>
          </div>
          <span className="bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full">Destacado</span>
        </a>

        <div className="grid grid-cols-2 gap-2">
          {modulos.map((m) => {
            const c = colorClasses[m.color]
            return (
              <a key={m.titulo} href={m.href} className={`${c.bg} rounded-xl p-4 flex items-center gap-3 hover:opacity-90 transition-opacity`}>
                <div className={`${c.icon} w-9 h-9 rounded-xl flex items-center justify-center text-base flex-shrink-0`}>{m.icono}</div>
                <div>
                  <div className="text-sm font-semibold text-navy">{m.titulo}</div>
                  <div className={`text-xs mt-0.5 ${c.text}`}>{m.desc}</div>
                </div>
              </a>
            )
          })}
        </div>
      </section>

      <section className="px-6 py-10 border-b border-navy/8 max-w-2xl mx-auto">
        <div className="text-xs font-bold text-magenta tracking-widest uppercase mb-2">Aliados y patrocinadores</div>
        <h2 className="font-display text-xl font-bold text-navy mb-2 tracking-tight">Negocios que apoyan a la comunidad</h2>
        <p className="text-sm text-navy/45 mb-6 leading-relaxed">Empresas y negocios latinos en Polonia que confian en HolaPolska para llegar a su comunidad.</p>

        <div className="grid grid-cols-3 gap-3 mb-4">
          {negocios.map((n) => {
            const c = colorClasses[n.color]
            return (
              <div key={n.nombre} className="bg-white rounded-xl p-4 border border-navy/8 flex flex-col items-center gap-2 text-center">
                <div className={`${c.icon} w-11 h-11 rounded-xl flex items-center justify-center text-xl`}>{n.icono}</div>
                <div className="text-xs font-bold text-navy leading-tight">{n.nombre}</div>
                <div className="text-xs text-navy/40 leading-tight">{n.tipo}</div>
              </div>
            )
          })}
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-mango-light rounded-xl p-4 border-2 border-dashed border-mango/40 flex flex-col items-center justify-center gap-2 text-center hover:border-mango/70 transition-colors">
            <div className="text-mango text-xl font-bold">+</div>
            <div className="text-xs font-semibold text-yellow-800 leading-tight">Tu negocio aqui</div>
          </a>
        </div>

        <div className="bg-navy rounded-xl p-5 flex items-center justify-between gap-4">
          <div>
            <div className="text-sm font-semibold text-white mb-1">Tienes un negocio latino en Polonia?</div>
            <div className="text-xs text-white/40">Aparecer aqui es gratis durante el lanzamiento.</div>
          </div>
          <a href={WA_LINK} target="_blank" rel="noopener noreferrer" className="bg-mango text-navy text-xs font-bold px-4 py-2.5 rounded-full whitespace-nowrap hover:bg-mango/90 transition-colors">Contactanos</a>
        </div>
      </section>

      <section className="bg-magenta px-6 py-8 flex items-center justify-between gap-4">
        <div>
          <div className="text-base font-bold text-white mb-1">Empieza hoy, es gratis.</div>
          <div className="text-xs text-white/65">Sin tarjeta, sin suscripcion, sin tramites.</div>
        </div>
        <a href="/idioma/registro" className="bg-white text-magenta text-sm font-bold px-5 py-3 rounded-full whitespace-nowrap hover:bg-white/90 transition-colors">Crear cuenta</a>
      </section>

      <footer className="bg-navy px-6 py-6">
        <div className="max-w-2xl mx-auto">
          <div className="flex justify-between items-center mb-4 flex-wrap gap-4">
            <div>
              <span className="text-magenta font-extrabold text-sm">Hola</span>
              <span className="text-white font-extrabold text-sm">Polska</span>
            </div>
            <div className="flex gap-4 flex-wrap">
              {[['Aviso Legal', '/compliance/legal'], ['Privacidad', '/compliance/privacy'], ['Cookies', '/compliance/cookies'], ['Accesibilidad', '/compliance/accessibility']].map(([l, h]) => (
                <a key={l} href={h} className="text-xs text-white/30 hover:text-white/60 transition-colors">{l}</a>
              ))}
            </div>
          </div>
          <div className="border-t border-white/8 pt-4">
            <p className="text-xs text-white/25 leading-relaxed">HolaPolska · Pablo Sebastian Cupajita Chitiva · lavozlatinapl@gmail.com · Polonia, Union Europea</p>
          </div>
        </div>
      </footer>

      <CookieBanner />
    </main>
  )
}
