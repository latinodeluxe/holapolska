export const metadata = { title: "PESEL en Polonia — Guia completa en espanol | HolaPolska", description: "Como obtener el numero PESEL en Polonia paso a paso. Guia completa para hispanohablantes." }

export default function Pesel() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/vivir-en-polonia" className="text-sm text-gray-500">Volver a Vivir en Polonia</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-sm text-red-500 font-medium">Vivir en Polonia</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-8">Que es el PESEL y por que lo vas a necesitar si o si</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Apenas pongas un pie en Polonia con planes de quedarte, vas a escuchar esta palabra todo el tiempo: PESEL. Es tu numero de identificacion personal, compuesto por 11 digitos y asignado a cada persona registrada en el sistema administrativo polaco. Aunque tecnicamente no siempre es obligatorio, en la practica facilita absolutamente todo: sin el, vas a tener trabas para abrir cuenta bancaria, firmar contrato de trabajo, ir al medico por el sistema publico, o incluso alquilar un apartamento de forma legal.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Lo que necesitas llevar</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Vas a solicitarlo en el Urzad Miasta (oficina municipal) de la ciudad donde vives. Lleva contigo:
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>• El formulario de solicitud completado (normalmente se descarga desde la web del municipio)</li>
            <li>• Tu pasaporte</li>
            <li>• Tu permiso de residencia (Karta Pobytu), si ya lo tienes</li>
            <li>• En muchos casos te lo piden junto con el comprobante de direccion, porque el PESEL suele solicitarse junto con el empadronamiento (meldunek)</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">El paso a paso</h2>
          <ol className="space-y-3 text-gray-700 mb-6">
            <li><strong>1.</strong> Ubica el Urzad Miasta o Urzad Gminy que corresponde a tu zona de residencia</li>
            <li><strong>2.</strong> Completa el formulario de solicitud (lleva traduccion si no manejas polaco)</li>
            <li><strong>3.</strong> Presentate en persona, el tramite se hace de forma presencial y es bastante directo</li>
            <li><strong>4.</strong> Espera la asignacion, en la mayoria de los casos se asigna el mismo dia o en pocos dias laborables</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tips que te van a ahorrar dolores de cabeza</h2>
          <div className="bg-red-50 rounded-2xl p-6 space-y-3">
            <p className="text-gray-700">💡 El tramite es completamente gratuito. Si alguien te cobra "por gestionarlo rapido", desconfia.</p>
            <p className="text-gray-700">💡 Tramitalo apenas llegues, no lo dejes para despues: lo vas a necesitar para casi todo, desde el banco hasta el contrato de luz.</p>
            <p className="text-gray-700">💡 Tambien lo vas a necesitar para domiciliar pagos de alquiler, electricidad y para recibir tu nomina.</p>
            <p className="text-gray-700">💡 Si te mudas de ciudad o cambias de direccion, mantener tu direccion actualizada en el registro municipal ayuda a que cualquier notificacion oficial te llegue sin problemas.</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/vivir-en-polonia" className="text-red-500 font-medium hover:underline">← Volver a Vivir en Polonia</a>
        </div>
      </div>
    </main>
  )
}
