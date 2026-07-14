export const metadata = {
  title: 'Gastronomía polaca — Platos típicos explicados en español | HolaPolska',
  description: 'Los platos típicos de Polonia explicados para hispanohablantes. Pierogi, bigos, żurek y más.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function Gastronomia() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Cultura" volverHref="/cultura" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/cultura" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Cultura</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Gastronomía polaca</h1>
          <p className="text-navy/50 text-base leading-relaxed">La comida polaca es contundente, sabrosa y muy distinta a lo que conocemos en Latinoamérica. Conocerla es parte de integrarte — y probablemente termines amando más de un plato.</p>
        </div>
        <div className="space-y-4">
          {[
            { nombre: 'Pierogi', desc: 'Las estrellas de la cocina polaca. Empanadillas rellenas que pueden ser saladas (con carne, col y champiñones, patata y queso) o dulces (con frutos rojos). Se sirven cocidas o fritas. Son el equivalente polaco de nuestras empanadas, pero con su propia personalidad.', icono: '🥟' },
            { nombre: 'Bigos', desc: 'El guiso nacional polaco. Una mezcla de chucrut (col fermentada), col fresca, varias carnes (salchicha, cerdo, a veces caza) y especias, cocido lentamente. Sabe mejor al segundo día. Es un plato de invierno por excelencia.', icono: '🍲' },
            { nombre: 'Żurek', desc: 'Sopa agria hecha con harina de centeno fermentada, servida con salchicha blanca (biała kiełbasa) y huevo duro. A veces se sirve dentro de un pan ahuecado. El sabor es único — ácido pero reconfortante. Es el plato que más sorprende a los latinos.', icono: '🥣' },
            { nombre: 'Kotlet schabowy', desc: 'El equivalente polaco de nuestra milanesa: chuleta de cerdo empanizada y frita, servida con puré de patata y ensalada de col (surówka). Es probablemente el almuerzo más común en los hogares polacos.', icono: '🍖' },
            { nombre: 'Placki ziemniaczane', desc: 'Tortitas de patata rallada, crujientes por fuera y suaves por dentro. Se sirven con crema agria (śmietana), salsa de champiñones o gulash. Comida callejera muy popular en mercados y festivales.', icono: '🥞' },
            { nombre: 'Rosół', desc: 'Caldo de pollo con fideos finos, zanahoria y perejil. Es el plato dominical por excelencia en las familias polacas — el equivalente del sancocho o la sopa de gallina de nuestros abuelos. Se sirve como primer plato antes del obiad (almuerzo principal).', icono: '🍜' },
          ].map((plato) => (
            <div key={plato.nombre} className="bg-white rounded-2xl p-6 border border-navy/8 flex items-start gap-4">
              <div className="text-3xl flex-shrink-0">{plato.icono}</div>
              <div>
                <h2 className="font-display text-base font-bold text-navy mb-2">{plato.nombre}</h2>
                <p className="text-navy/65 leading-relaxed text-sm">{plato.desc}</p>
              </div>
            </div>
          ))}
          <div className="bg-white rounded-2xl p-6 border border-navy/8">
            <h2 className="font-display text-base font-bold text-navy mb-3">Dónde probar comida polaca auténtica</h2>
            <p className="text-navy/65 leading-relaxed text-sm">Los bar mleczny (bares de leche) son comedores populares subvencionados que sirven comida casera polaca a precios muy bajos (un plato completo por 15-25 PLN). Existen en todas las ciudades grandes y son una experiencia cultural en sí mismos. También busca restaurantes que digan kuchnia polska (cocina polaca) o kuchnia domowa (cocina casera).</p>
          </div>
          <div className="bg-mango-light rounded-2xl p-6 space-y-3">
            {['El obiad (almuerzo) es la comida principal del día en Polonia — se come entre las 14:00 y 16:00, no al mediodía como en Latinoamérica.', 'Prueba los pierogi ruskie (de patata y queso blanco) antes de formarte una opinión — son el favorito de todo el mundo.', 'En los bar mleczny no esperes servicio de restaurante — es autoservicio, rápido y sin pretensiones, pero la comida es casera y abundante.'].map((tip, i) => (
              <p key={i} className="text-sm text-yellow-800">💡 {tip}</p>
            ))}
          </div>
          <DisclaimerLegal modulo="Este contenido sobre gastronomía polaca" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
