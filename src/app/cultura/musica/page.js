export const metadata = {
  title: 'Música polaca — Lo que deberías conocer | HolaPolska',
  description: 'La música polaca explicada para hispanohablantes. Géneros, artistas icónicos y lo que suena hoy en Polonia.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function Musica() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Cultura" volverHref="/cultura" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/cultura" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Cultura</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Música polaca</h1>
          <p className="text-navy/50 text-base leading-relaxed">La música es una parte fundamental de la identidad polaca. Desde Chopin hasta el hip-hop contemporáneo, conocer lo que suena en Polonia te conecta con la cultura de una forma que los libros no logran.</p>
        </div>
        <div className="space-y-4">
          {[
            { nombre: 'Chopin — el orgullo nacional', desc: 'Fryderyk Chopin es probablemente el polaco más famoso del mundo. Su música clásica para piano es patrimonio cultural del país. En Varsovia hay un museo dedicado a él, conciertos gratuitos en el Parque Łazienki en verano, y el aeropuerto lleva su nombre. Conocer a Chopin es conocer el alma de Polonia.', icono: '🎹' },
            { nombre: 'Disco Polo', desc: 'Género pop bailable nacido en los años 90 en el campo polaco. Es polarizante: o lo amas o lo odias. Suena en bodas, fiestas y festivales de verano. Artistas como Bayer Full, Boys o Akcent son iconos del género. No es "alta cultura", pero es imposible vivir en Polonia sin cruzártelo.', icono: '🪩' },
            { nombre: 'Hip-hop y rap polaco', desc: 'El rap polaco es enorme — probablemente el género más popular entre los jóvenes. Artistas como Taco Hemingway, Quebonafide, Paluch, Sokół y Pezet dominan las listas. Las letras son inteligentes y a menudo muy poéticas. Si quieres entender a la generación joven polaca, empieza por aquí.', icono: '🎤' },
            { nombre: 'Rock y punk polaco', desc: 'La escena rock polaca tiene décadas de historia. Bandas como Kult, Pidżama Porno, Happysad y Hey son referencias obligatorias. El punk polaco nació como resistencia cultural durante el comunismo y sigue vivo en festivales como Pol\'and\'Rock Festival (antes Woodstock).', icono: '🎸' },
            { nombre: 'Música electrónica', desc: 'Polonia tiene una escena electrónica muy activa. Festivales como Unsound (Cracovia), Up To Date (Białystok) y Open\'er (Gdynia) atraen artistas internacionales. DJs y productores polacos como OSTR, Ten Typ Mes o Catz \'n Dogz son reconocidos internacionalmente.', icono: '🎧' },
            { nombre: 'Villancicos polacos (Kolędy)', desc: 'La tradición de los kolędy (villancicos) es muy fuerte en Polonia. Se cantan en familia durante la Nochebuena y en las iglesias durante toda la temporada navideña. Aunque no seas religioso, escucharlos es una experiencia cultural única — las melodías son hermosas y muy distintas a los villancicos latinos.', icono: '🎄' },
          ].map((item) => (
            <div key={item.nombre} className="bg-white rounded-2xl p-6 border border-navy/8 flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">{item.icono}</div>
              <div>
                <h2 className="font-display text-base font-bold text-navy mb-2">{item.nombre}</h2>
                <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
              </div>
            </div>
          ))}
          <div className="bg-mango-light rounded-2xl p-6 space-y-3">
            {['Spotify Poland tiene playlists actualizadas con lo más popular del momento — busca "Top 50 Poland".', 'El Open\'er Festival en Gdynia (julio) es uno de los mejores festivales de Europa — si vives cerca, no te lo pierdas.', 'Los conciertos de Chopin en el Parque Łazienki de Varsovia son gratuitos cada domingo de verano.'].map((tip, i) => (
              <p key={i} className="text-sm text-yellow-800">💡 {tip}</p>
            ))}
          </div>
          <DisclaimerLegal modulo="Este contenido sobre música polaca" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
