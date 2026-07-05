export const metadata = {
  title: 'Quienes somos | HolaPolska',
  description: 'HolaPolska nacio de una necesidad real. Conoce la historia, la mision y quien esta detras de la plataforma de integracion para hispanohablantes en Polonia.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'

export default function Nosotros() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar />
      <div className="max-w-3xl mx-auto px-8 py-16 flex-1 w-full">
        <div className="mb-12">
          <div className="text-xs font-bold text-magenta tracking-widest uppercase mb-3">Quienes somos</div>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight leading-tight">
            HolaPolska nacio de una necesidad real, no de una idea de negocio.
          </h1>
        </div>
        <div className="space-y-6 text-navy/70 leading-relaxed text-base">
          <p>No soy experto en polaco ni linguista — soy alguien que llego a Polonia y tuvo que aprender a las malas, como todos. Con el tiempo empece a reunir lo que iba aprendiendo en el dia a dia: las palabras y frases que realmente usaba para sobrevivir, los tramites que tuve que resolver a tientas, las costumbres que nadie me explico antes de llegar. Fui guardando todo eso porque me hubiera gustado tenerlo yo mismo cuando llegue.</p>
          <p>Asi que decidimos construirlo.</p>
          <p>HolaPolska empezo en 2025 como un curso de polaco basado en esa experiencia y crecio hasta convertirse en la plataforma que hoy tienes frente a ti: un espacio gratuito donde encuentras el idioma, los tramites, la legalidad, la cultura y la comunidad latina en Polonia, todo en un solo lugar y en espanol.</p>
        </div>

        <div className="mt-12 space-y-6">
          <div className="bg-white rounded-2xl border border-navy/8 p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-magenta flex items-center justify-center text-white text-lg flex-shrink-0">🎯</div>
              <h2 className="font-display text-xl font-bold text-navy">Nuestra mision</h2>
            </div>
            <p className="text-navy/65 leading-relaxed">Ayudarte a integrarte en Polonia — en el idioma, en el papeleo, en el trabajo y en la vida diaria — sin que tengas que resolverlo todo por tu cuenta como tuve que hacerlo yo.</p>
          </div>

          <div className="bg-white rounded-2xl border border-navy/8 p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-teal flex items-center justify-center text-white text-lg flex-shrink-0">🔭</div>
              <h2 className="font-display text-xl font-bold text-navy">Nuestra vision</h2>
            </div>
            <p className="text-navy/65 leading-relaxed">Ser el lugar al que cualquier hispanohablante en Polonia piensa primero cuando necesita resolver algo — desde tu primer PESEL hasta tu primera conversacion en polaco.</p>
          </div>

          <div className="bg-white rounded-2xl border border-navy/8 p-7">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-mango flex items-center justify-center text-white text-lg flex-shrink-0">🧭</div>
              <h2 className="font-display text-xl font-bold text-navy">Lo que nos guia</h2>
            </div>
            <ul className="space-y-5">
              {[
                { titulo: 'Siempre gratis lo esencial.', desc: 'Aprender polaco basico y entender tus tramites no deberia tener costo.' },
                { titulo: 'Informacion real, de la calle, no de un manual.', desc: 'No copiamos de foros ni traducimos a medias — esto sale de vivirlo.' },
                { titulo: 'Hecho por alguien que lo vivio, no por un experto.', desc: 'HolaPolska no nacio de un estudio de mercado ni de un titulo en filologia polaca, nacio de la necesidad de sobrevivir el dia a dia.' },
                { titulo: 'Honestidad ante todo.', desc: 'Si algo en la plataforma esta incompleto o en construccion, te lo decimos — preferimos ser claros a prometer de mas.' },
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-mango flex-shrink-0 mt-2"></div>
                  <p className="text-navy/65 leading-relaxed text-sm">
                    <span className="font-semibold text-navy">{item.titulo}</span>{' '}{item.desc}
                  </p>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-navy rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-white text-lg flex-shrink-0">👤</div>
              <h2 className="font-display text-xl font-bold text-white">Quien esta detras?</h2>
            </div>
            <p className="text-white/65 leading-relaxed text-sm">HolaPolska es un proyecto creado y desarrollado por <span className="text-white font-semibold">Pablo Sebastian Cupajita Chitiva</span> (conocido tambien como DJ CBASS), hispanohablante viviendo en Polonia. Todo el proyecto —desde el codigo hasta cada guia— se construye de forma independiente, con la comunidad latina en Polonia como unica motivacion.</p>
          </div>

          <div className="bg-magenta-light rounded-2xl p-7">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-magenta flex items-center justify-center text-white text-lg flex-shrink-0">✉️</div>
              <h2 className="font-display text-xl font-bold text-navy">Tienes una idea, una correccion o quieres colaborar?</h2>
            </div>
            <p className="text-navy/65 leading-relaxed text-sm mb-4">Escribenos — leemos todos los mensajes.</p>
            <div className="flex gap-3 flex-wrap">
              <a href="mailto:lavozlatinapl@gmail.com" className="inline-flex items-center gap-2 bg-magenta text-white text-sm font-bold px-5 py-3 rounded-full hover:bg-magenta/90 transition-colors">
                ✉️ lavozlatinapl@gmail.com
              </a>
              <a href="https://wa.me/48733205803?text=Hola%20HolaPolska%2C%20quiero%20contactarlos" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 bg-navy text-white text-sm font-bold px-5 py-3 rounded-full hover:bg-navy/90 transition-colors">
                💬 WhatsApp
              </a>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
