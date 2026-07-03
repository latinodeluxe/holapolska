export const metadata = { title: "Cuenta bancaria en Polonia — Guia en espanol | HolaPolska", description: "Como abrir una cuenta bancaria en Polonia siendo extranjero. Bancos, requisitos y consejos." }

export default function Banco() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/vivir-en-polonia" className="text-sm text-gray-500">Volver a Vivir en Polonia</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-sm text-red-500 font-medium">Vivir en Polonia</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-8">Como abrir tu cuenta bancaria en Polonia sin morir en el intento</h1>

        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            Una vez tengas tu PESEL, el siguiente paso logico es abrir cuenta bancaria. No es opcional en la practica: en Polonia casi todo se paga sin efectivo, te van a pagar el sueldo ahi, vas a necesitarla para firmar el contrato de alquiler, y hasta para pagar la factura de la luz. La buena noticia es que tanto residentes como no residentes pueden abrir una cuenta, aunque el proceso varia segun tu situacion.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Lo que normalmente te van a pedir</h2>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>• Tu pasaporte o documento de identidad valido</li>
            <li>• Comprobante de domicilio en Polonia (contrato de alquiler, factura reciente, o declaracion del propietario)</li>
            <li>• Tu numero PESEL, si ya lo tienes (no siempre es obligatorio, pero facilita y acelera todo el proceso)</li>
            <li>• En algunos bancos, comprobante de ingresos o contrato de trabajo</li>
          </ul>
          <p className="text-gray-700 leading-relaxed mb-6">
            Si aun no tienes PESEL ni permiso de residencia, no te preocupes: algunos bancos igual abren cuenta a no residentes con solo el pasaporte y un comprobante de domicilio en tu pais de origen. Eso si, vas a tener menos opciones de bancos disponibles.
          </p>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Que bancos suelen ser mas amigables con extranjeros</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Algunos bancos destacan por ofrecer atencion en ingles u otros idiomas, lo cual facilita mucho las cosas si todavia no manejas polaco:
          </p>
          <ul className="space-y-2 text-gray-700 mb-6">
            <li>• <strong>Millennium Bank</strong> — pagina y app en ingles, puedes empezar el proceso online aunque luego debes firmar en sucursal</li>
            <li>• <strong>PKO Bank Polski</strong> — uno de los bancos mas grandes y antiguos de Polonia, app disponible en varios idiomas</li>
            <li>• <strong>Santander Bank Polska</strong> — buena opcion para quienes manejan transacciones en varias monedas</li>
            <li>• <strong>mBank</strong> — app facil de usar disponible en ingles, aunque la apertura para extranjeros suele requerir visita presencial</li>
          </ul>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">El paso a paso</h2>
          <ol className="space-y-3 text-gray-700 mb-6">
            <li><strong>1.</strong> Elige el banco segun el idioma de atencion y los requisitos que ya cumples</li>
            <li><strong>2.</strong> Llama o consulta en linea que documentos exige exactamente esa sucursal (varia bastante de un banco a otro)</li>
            <li><strong>3.</strong> Acude a la sucursal con tus documentos, o inicia el proceso online si el banco lo permite</li>
            <li><strong>4.</strong> Firma el contrato de apertura de cuenta</li>
            <li><strong>5.</strong> Espera la activacion: si vas en persona, la cuenta suele quedar lista el mismo dia o en pocos minutos; si es online, puede tardar entre 5 dias y 2 semanas, sin contar el envio de la tarjeta</li>
          </ol>

          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tips que te van a ahorrar dolores de cabeza</h2>
          <div className="bg-red-50 rounded-2xl p-6 space-y-3">
            <p className="text-gray-700">💡 Por ley, los bancos deben ofrecer una cuenta basica gratuita a quien nunca haya tenido cuenta en Polonia. Es sencilla pero suficiente para empezar.</p>
            <p className="text-gray-700">💡 Llama antes a la sucursal para confirmar que documentos piden exactamente: los requisitos cambian mucho segun el banco e incluso segun la sucursal.</p>
            <p className="text-gray-700">💡 Si ya tienes PESEL, llevalo siempre contigo, incluso si no es obligatorio: acorta tramites y abre mas opciones de banco.</p>
            <p className="text-gray-700">💡 BLIK es el sistema de pago movil mas usado en Polonia, te permite pagar sin tarjeta fisica desde el celular: muy util una vez tengas tu cuenta activa.</p>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/vivir-en-polonia" className="text-red-500 font-medium hover:underline">← Volver a Vivir en Polonia</a>
        </div>
      </div>
    </main>
  )
}
