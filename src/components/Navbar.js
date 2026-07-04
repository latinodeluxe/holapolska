import Link from 'next/link'

export default function Navbar({ volver, volverHref }) {
  return (
    <nav className="bg-cream border-b border-navy/8 px-8 py-4 flex justify-between items-center sticky top-0 z-50">
      <Link href="/" className="flex items-center gap-0.5">
        <span className="text-xl font-extrabold text-magenta tracking-tight">Hola</span>
        <span className="text-xl font-extrabold text-navy tracking-tight">Polska</span>
      </Link>
      <div className="flex items-center gap-4">
        {volver && (
          <Link href={volverHref || '/'} className="text-sm text-navy/45 hover:text-navy transition-colors">
            ← {volver}
          </Link>
        )}
        <Link href="/idioma/login" className="text-sm text-navy/45 font-medium hidden sm:block hover:text-navy transition-colors">Iniciar sesion</Link>
        <Link href="/idioma/registro" className="bg-magenta text-white text-sm font-semibold px-5 py-2 rounded-full hover:bg-magenta/90 transition-colors">Empezar gratis</Link>
      </div>
    </nav>
  )
}
