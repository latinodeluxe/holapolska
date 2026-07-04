export const metadata = {
  title: 'Aprender polaco gratis — Curso A1 completo | HolaPolska',
  description: 'Aprende polaco desde cero con 100 lecciones gratis. Vocabulario, ejercicios y gamificacion.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Idioma() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Inicio" volverHref="/" />
      <div className="max-w-6xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-12">
          <div>
            <div className="text-xs font-bold text-magenta tracking-widest uppercase mb-2">Modulo principal</div>
            <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mb-4">Aprende polaco desde cero</h1>
            <p className="text-navy/50 text-base leading-relaxed mb-6">Curso completo de polaco A1 con 100 lecciones, 729 palabras de vocabulario y 456 ejercicios interactivos. Todo gratis, todo en espanol.</p>
            <div className="flex gap-3 flex-wrap">
              <a href="/idioma/registro" className="bg-magenta text-white text-sm font-bold px-6 py-3 rounded-full hover:bg-magenta/90 transition-colors">Empezar gratis</a>
              <a href="/idioma/login" className="border border-navy/15 text-navy text-sm font-medium px-6 py-3 rounded-full hover:border-navy/30 transition-colors">Ya tengo cuenta</a>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4">
            {[
              { n: '100', l: 'lecciones', c: 'text-magenta', bg: 'bg-magenta-light' },
              { n: '729', l: 'palabras', c: 'text-mango', bg: 'bg-mango-light' },
              { n: '456', l: 'ejercicios', c: 'text-teal', bg: 'bg-teal-light' },
            ].map(({ n, l, c, bg }) => (
              <div key={l} className={`${bg} rounded-2xl p-5 text-center`}>
                <div className={`text-3xl font-extrabold ${c} tracking-tight`}>{n}</div>
                <div className="text-xs text-navy/50 mt-1 font-medium">{l}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="mb-6">
          <div className="text-xs font-bold text-navy/40 tracking-widest uppercase mb-4">Los 10 modulos del curso A1</div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { num: 1, titulo: 'Saludos y presentaciones', inicio: 1 },
              { num: 2, titulo: 'Familia y profesiones', inicio: 11 },
              { num: 3, titulo: 'Casa y hogar', inicio: 21 },
              { num: 4, titulo: 'Comida y restaurante', inicio: 31 },
              { num: 5, titulo: 'Tiempo y calendario', inicio: 41 },
              { num: 6, titulo: 'Transporte y ciudad', inicio: 51 },
              { num: 7, titulo: 'Salud y cuerpo', inicio: 61 },
              { num: 8, titulo: 'Trabajo y oficina', inicio: 71 },
              { num: 9, titulo: 'Conversaciones reales', inicio: 81 },
              { num: 10, titulo: 'Repaso final A1', inicio: 91 },
            ].map((m) => (
              <a key={m.num} href={`/idioma/curso/${m.inicio}`} className="bg-white rounded-xl border border-navy/8 p-4 flex items-center gap-3 hover:border-magenta/30 hover:shadow-sm transition-all group">
                <div className="w-10 h-10 rounded-xl bg-magenta/10 flex items-center justify-center flex-shrink-0">
                  <span className="text-sm font-bold text-magenta">{m.num}</span>
                </div>
                <div>
                  <div className="text-sm font-semibold text-navy group-hover:text-magenta transition-colors">{m.titulo}</div>
                  <div className="text-xs text-navy/40 mt-0.5">10 lecciones</div>
                </div>
              </a>
            ))}
          </div>
        </div>

        <div className="bg-navy rounded-2xl p-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div>
            <div className="text-base font-semibold text-white mb-1">Listo para empezar?</div>
            <div className="text-sm text-white/40">Crea tu cuenta gratis y empieza la leccion 1 ahora mismo.</div>
          </div>
          <a href="/idioma/registro" className="bg-magenta text-white text-sm font-bold px-6 py-3 rounded-full whitespace-nowrap hover:bg-magenta/90 transition-colors">Empezar gratis</a>
        </div>
      </div>
      <Footer />
    </div>
  )
}
