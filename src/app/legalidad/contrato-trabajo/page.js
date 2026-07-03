export const metadata = { title: "Contrato de trabajo en Polonia — Tipos y derechos | HolaPolska", description: "Todo sobre contratos laborales en Polonia: umowa o prace, zlecenie, derechos y obligaciones." }

export default function ContratoTrabajo() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/legalidad" className="text-sm text-gray-500">Volver a Legalidad</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-sm text-red-500 font-medium">Legalidad</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-8">Contratos de trabajo en Polonia: lo que debes saber antes de firmar</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            El tipo de contrato que firmes en Polonia no es un detalle menor: define tus derechos, tu cobertura social, tus vacaciones y hasta si puedes acceder a una hipoteca. Y desde 2025 hay un cambio importante que te afecta directamente si eres extranjero.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">El contrato que te protege de verdad: Umowa o Prace</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            El contrato de trabajo formal (umowa o prace) es el unico que te da todas las garantias del Codigo Laboral polaco:
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>• Vacaciones pagadas: 20 dias al ano con menos de 10 anos de servicio, 26 dias con 10 o mas</li>
            <li>• Baja por enfermedad remunerada</li>
            <li>• Proteccion ante despido injustificado</li>
            <li>• Cotizacion al ZUS (seguridad social) y acceso al sistema de salud publica</li>
            <li>• Salario minimo garantizado: 4.666 PLN brutos mensuales en 2025</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Dentro de este contrato hay tres variantes: a prueba (hasta 3 meses), por tiempo determinado (con fecha de fin) e indefinido (sin fecha de fin, el que mas proteccion ofrece). Si firmas tres contratos de duracion determinada seguidos con el mismo empleador, el cuarto se convierte automaticamente en indefinido.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Cambio importante desde 2025: extranjeros solo con Umowa o Prace</h2>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-6">
            <p className="text-gray-800 font-medium mb-2">Novedad legal 2025</p>
            <p className="text-gray-700 text-sm">Desde el 1 de enero de 2025, los empleadores ya no pueden contratar a trabajadores extranjeros bajo contratos civiles (umowa zlecenie u otros). Todos los extranjeros deben trabajar exclusivamente bajo umowa o prace. Esto es una proteccion para ti: garantiza tus derechos desde el primer dia.</p>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Lo que debes revisar antes de firmar</h2>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>• Que el contrato sea por escrito y te entreguen una copia antes de empezar a trabajar</li>
            <li>• Que exista una version en un idioma que entiendas (el empleador esta obligado a proporcionarla)</li>
            <li>• Que el puesto, salario, horario y lugar de trabajo coincidan exactamente con lo que te prometieron de palabra</li>
            <li>• Que el salario no sea inferior al minimo legal vigente</li>
            <li>• Que los datos del contrato coincidan con los de tu permiso de trabajo (si aplica)</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tips que te van a ahorrar dolores de cabeza</h2>
          <div className="bg-red-50 rounded-2xl p-6 space-y-3">
            <p className="text-gray-700">💡 No empieces a trabajar sin contrato firmado. El empleador esta obligado por ley a darte el contrato escrito antes de tu primer dia.</p>
            <p className="text-gray-700">💡 Todo lo que te prometan verbalmente debe estar escrito: alojamiento, comida, pasajes, bonos. Si no esta en el papel, no existe legalmente.</p>
            <p className="text-gray-700">💡 Si cambias de empleador con residencia vinculada a ese trabajo, puede que necesites actualizar tu permiso antes de cambiar.</p>
            <p className="text-gray-700">💡 Si tienes dudas o sospechas que te estan explotando, puedes contactar la Inspeccion Nacional del Trabajo (PIP): pip.gov.pl. Tienen informacion en varios idiomas.</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-400 mb-4">Este contenido es informativo y no sustituye asesoria legal profesional.</p>
          <a href="/legalidad" className="text-red-500 font-medium hover:underline">← Volver a Legalidad</a>
        </div>
      </div>
    </main>
  )
}
