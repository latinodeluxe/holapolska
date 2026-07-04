export default function Footer() {
  return (
    <footer className="bg-navy px-8 py-8 mt-auto">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-6 mb-6">
          <div>
            <span className="text-magenta font-extrabold text-base">Hola</span>
            <span className="text-white font-extrabold text-base">Polska</span>
            <p className="text-xs text-white/25 mt-1">Hecho con amor para la comunidad latina en Polonia</p>
          </div>
          <div className="flex gap-6 flex-wrap">
            {[['Aviso Legal', '/compliance/legal'], ['Privacidad', '/compliance/privacy'], ['Cookies', '/compliance/cookies'], ['Accesibilidad', '/compliance/accessibility']].map(([l, h]) => (
              <a key={l} href={h} className="text-xs text-white/30 hover:text-white/60 transition-colors">{l}</a>
            ))}
          </div>
        </div>
        <div className="border-t border-white/8 pt-6">
          <p className="text-xs text-white/25">HolaPolska · Pablo Sebastian Cupajita Chitiva · lavozlatinapl@gmail.com · Polonia, Union Europea</p>
        </div>
      </div>
    </footer>
  )
}
