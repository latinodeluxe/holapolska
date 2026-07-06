export default function Legal() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Aviso Legal</h1>
        <p className="text-gray-500 mb-10">Ultima actualizacion: 1 de julio de 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Datos identificativos del titular</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm text-gray-700 space-y-1">
              <p><strong>Titular:</strong> Pablo Sebastian Cupajita Chitiva</p>
              <p><strong>Proyecto:</strong> HolaPolska — plataforma digital de integracion</p>
              <p><strong>Pais de operacion:</strong> Polonia (Union Europea)</p>
              <p><strong>Correo electronico:</strong> <a href="mailto:biuro@holapolska.com" className="text-red-500">biuro@holapolska.com</a></p>
              <p className="text-sm text-gray-500 mt-2">Nota: HolaPolska es un proyecto personal en fase de lanzamiento, sin actividad comercial ni registro mercantil activo. No se realizan transacciones economicas en la plataforma.</p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Objeto y naturaleza del servicio</h2>
            <p className="text-gray-700">HolaPolska es una plataforma educativa e informativa gratuita destinada a hispanohablantes que viven o planean vivir en Polonia. Ofrece contenido sobre idioma polaco, tramites de residencia, informacion cultural y recursos practicos.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Caracter informativo del contenido</h2>
            <p className="text-gray-700">El contenido publicado en HolaPolska tiene caracter exclusivamente informativo y divulgativo. No constituye asesoria legal, fiscal, laboral ni medica. Para decisiones con implicaciones legales o economicas, el usuario debe consultar con profesionales habilitados. El titular no se responsabiliza de las decisiones tomadas en base a la informacion publicada en la plataforma.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Propiedad intelectual</h2>
            <p className="text-gray-700">El contenido original de HolaPolska (textos, diseno, estructura, codigo) es titularidad de Pablo Sebastian Cupajita Chitiva y esta protegido por la legislacion de propiedad intelectual aplicable en Polonia y la Union Europea. Se permite la reproduccion parcial con fines no comerciales citando la fuente. Queda prohibida la reproduccion total o comercial sin autorizacion expresa.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Legislacion aplicable</h2>
            <p className="text-gray-700">Este aviso legal se rige por la legislacion polaca, en particular la Ustawa o swiadczeniu uslug droga elektroniczna (Ley de servicios electronicos), y por el derecho de la Union Europea aplicable. Para cualquier controversia, las partes se someten a los tribunales competentes de Polonia.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Contacto</h2>
            <p className="text-gray-700">Para cualquier consulta legal: <a href="mailto:biuro@holapolska.com" className="text-red-500">biuro@holapolska.com</a></p>
          </section>
        </div>
      </div>
    </main>
  )
}
