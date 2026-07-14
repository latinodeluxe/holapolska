export const metadata = {
  title: 'Búsqueda de empleo en Polonia — Guía en español | HolaPolska',
  description: 'Dónde buscar trabajo en Polonia, salario mínimo 2026, tipos de contrato y derechos laborales básicos.',
}

import Navbar from '@/components/Navbar'
import Footer from '@/components/Footer'
import DisclaimerLegal from '@/components/DisclaimerLegal'

export default function Empleo() {
  return (
    <div className="min-h-screen bg-cream flex flex-col font-sans">
      <Navbar volver="Vivir en Polonia" volverHref="/vivir-en-polonia" />
      <div className="max-w-3xl mx-auto px-8 py-12 flex-1 w-full">
        <div className="mb-8">
          <a href="/vivir-en-polonia" className="text-xs font-bold text-navy/40 tracking-widest uppercase hover:text-navy transition-colors">← Vivir en Polonia</a>
          <h1 className="font-display text-4xl font-extrabold text-navy tracking-tight mt-3 mb-4">Búsqueda de empleo en Polonia</h1>
          <p className="text-navy/50 text-base leading-relaxed">Polonia tiene una demanda real de trabajadores. Como extranjero con permiso de trabajo o residencia, tienes acceso al mercado laboral casi en igualdad de condiciones.</p>
        </div>
        <div className="space-y-4">
          <div className="bg-white rounded-2xl p-6 border border-navy/8">
            <h2 className="font-display text-base font-bold text-navy mb-2">Dónde buscar trabajo</h2>
            <p className="text-navy/65 leading-relaxed text-sm">Los portales principales son Pracuj.pl (el más usado para empleos con contrato formal), OLX Praca (trabajos manuales y de temporada), Pracaplus.pl y LinkedIn para perfiles profesionales. Para trabajos en fábricas y producción, muchas empresas contratan a través de agencias de trabajo temporal (agencje pracy).</p>
          </div>
          <div className="bg-mango rounded-2xl p-6">
            <h2 className="font-display text-base font-bold text-white mb-2">Salario mínimo 2026</h2>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-white">4.806 PLN</div>
                <div className="text-xs text-white/70 mt-1">brutos al mes</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4 text-center">
                <div className="text-2xl font-extrabold text-white">31,40 PLN</div>
                <div className="text-xs text-white/70 mt-1">brutos por hora</div>
              </div>
            </div>
          </div>
          {[
            { titulo: 'Umowa o pracę — Contrato de trabajo', desc: 'El mejor contrato. Da todos los derechos: vacaciones pagadas (26 días/año con más de 10 años de trabajo), baja por enfermedad, seguridad social completa y protección frente al despido.', tag: 'Más recomendado', color: 'bg-teal' },
            { titulo: 'Umowa zlecenie — Contrato de servicios', desc: 'Contrato civil, más flexible para el empleador. Menos protecciones que el laboral, aunque desde 2022 incluye cotizaciones al ZUS. Común en trabajos temporales.', tag: 'Frecuente', color: 'bg-mango' },
            { titulo: 'Umowa o dzieło — Contrato por obra', desc: 'Para trabajos concretos con resultado definido. No incluye cotizaciones sociales en muchos casos. Es el menos protegido.', tag: 'Menor protección', color: 'bg-navy' },
          ].map((item) => (
            <div key={item.titulo} className="bg-white rounded-2xl p-6 border border-navy/8">
              <div className="flex items-center gap-3 mb-3">
                <div className={`${item.color} w-3 h-3 rounded-full flex-shrink-0`}></div>
                <h2 className="font-display text-base font-bold text-navy">{item.titulo}</h2>
                <span className="text-xs bg-navy/5 text-navy/50 px-2 py-0.5 rounded-full ml-auto">{item.tag}</span>
              </div>
              <p className="text-navy/65 leading-relaxed text-sm">{item.desc}</p>
            </div>
          ))}
          <div className="bg-magenta-light rounded-2xl p-6">
            <p className="text-sm text-pink-900 font-semibold mb-2">⚠️ Importante</p>
            <p className="text-sm text-pink-900">Si tu contrato dice menos de 4.806 PLN brutos al mes, algo está mal. Si tu empleador no te da contrato escrito, puedes denunciarlo ante la Państwowa Inspekcja Pracy (Inspección de Trabajo).</p>
          </div>
          <DisclaimerLegal modulo="Esta guía sobre búsqueda de empleo" />
        </div>
      </div>
      <Footer />
    </div>
  )
}
