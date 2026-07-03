export const metadata = { title: "Karta Pobytu — Permiso de residencia en Polonia | HolaPolska", description: "Guia completa para tramitar el permiso de residencia en Polonia. Documentos, plazos y consejos." }

export default function PermisoResidencia() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/legalidad" className="text-sm text-gray-500">Volver a Legalidad</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-sm text-red-500 font-medium">Legalidad</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-8">El permiso de residencia en Polonia: que es, tipos y como tramitarlo</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Si planeas quedarte en Polonia mas de 90 dias, necesitas legalizar tu estancia. El documento que lo confirma se llama Karta Pobytu (tarjeta de residencia) y es basicamente tu identificacion oficial en el pais mientras tu pasaporte confirma tu nacionalidad. Sin ella, tecnicamente estas en situacion irregular, lo cual puede traerte problemas serios.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Los tres tipos principales</h2>
          <ul className="space-y-4 text-gray-700 mb-6">
            <li><strong>Residencia temporal (pobyt czasowy)</strong> — la mas comun. Se otorga por hasta 3 anos segun el motivo de tu estancia (trabajo, estudios, familia). Renovable antes de que venza.</li>
            <li><strong>Residencia permanente (pobyt staly)</strong> — para quienes llevan mas de 5 anos viviendo legalmente en Polonia con empleo estable en los ultimos 3. Se emite por tiempo indefinido.</li>
            <li><strong>Residencia de larga duracion UE (rezydent dlugookresowy)</strong> — similar a la permanente, da mas derechos y movilidad dentro de la UE.</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Lo que necesitas para la residencia temporal</h2>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>• Pasaporte valido con al menos 6 meses de vigencia</li>
            <li>• Formulario de solicitud completado (disponible en el Urzad Wojewodzki de tu region)</li>
            <li>• Seguro medico valido en Polonia</li>
            <li>• Comprobante de domicilio (contrato de alquiler o declaracion del propietario)</li>
            <li>• Justificacion del motivo: contrato de trabajo, carta de aceptacion universitaria, etc.</li>
            <li>• Prueba de ingresos suficientes para cubrir tu estancia</li>
            <li>• Tasa administrativa: aproximadamente 340 PLN por la solicitud mas 50 PLN por la tarjeta</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">El paso a paso</h2>
          <ol className="space-y-3 text-gray-700 mb-6">
            <li><strong>1.</strong> Ubica el Urzad Wojewodzki (oficina del voivoda) de tu region, no el ayuntamiento</li>
            <li><strong>2.</strong> Descarga y completa el formulario de solicitud antes de ir</li>
            <li><strong>3.</strong> Presenta la solicitud en persona antes de que venza tu visa o tus 90 dias de estancia sin visa</li>
            <li><strong>4.</strong> Una vez presentada, tu estancia es legal mientras esperas la resolucion</li>
            <li><strong>5.</strong> Si la resolucion es positiva, acudes a recoger la tarjeta con tu pasaporte y pagas la tasa final</li>
          </ol>
          <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-6">
            <p className="text-gray-800 font-medium mb-2">Aviso importante</p>
            <p className="text-gray-700 text-sm">En algunos voivodatos el tiempo de espera real para la resolucion puede superar los 12 meses, aunque la ley establece 60 dias. Presenta la solicitud con anticipacion y guarda el sello de entrada en el registro como prueba de que tu estancia es legal mientras esperas.</p>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tips que te van a ahorrar dolores de cabeza</h2>
          <div className="bg-red-50 rounded-2xl p-6 space-y-3">
            <p className="text-gray-700">💡 Presenta la solicitud antes de que venza tu visa o tus 90 dias: una vez presentada, tu estancia es legal aunque no tengas respuesta todavia.</p>
            <p className="text-gray-700">💡 Haz copias de todos tus documentos antes de entregarlos: en algunos casos no te los devuelven hasta que retiras la tarjeta.</p>
            <p className="text-gray-700">💡 Si cambias de empleador despues de obtener la residencia vinculada a ese trabajo, puede que necesites modificar el permiso o hacer una nueva solicitud.</p>
            <p className="text-gray-700">💡 La Karta Pobytu te permite cruzar la frontera polaca y viajar por el espacio Schengen hasta 90 dias en un periodo de 180 dias sin necesitar visa adicional.</p>
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
