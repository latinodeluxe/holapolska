export default function Copyright() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Derechos de Autor</h1>
        <p className="text-gray-500 mb-10">Ultima actualizacion: 1 de julio de 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Titular de los derechos</h2>
            <p className="text-gray-700">El contenido original publicado en HolaPolska — incluyendo textos, estructura del curso, ejercicios, articulos informativos y diseno de la plataforma — es titularidad de <strong>Pablo Sebastian Cupajita Chitiva</strong>, creador y responsable del proyecto.</p>
            <p className="text-gray-700 mt-3">HolaPolska es el nombre comercial del proyecto. No constituye una marca registrada en la Urzad Patentowy RP ni en la EUIPO. El nombre y la identidad visual del proyecto estan protegidos como obra por la legislacion de propiedad intelectual polaca (Ustawa o prawie autorskim i prawach pokrewnych).</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Usos permitidos</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Uso personal y no comercial del contenido publicado</li>
              <li>• Reproduccion parcial con fines educativos o informativos, citando la fuente como "HolaPolska (holapolska.vercel.app)"</li>
              <li>• Compartir enlaces directos a la plataforma</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Usos prohibidos</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Reproduccion total del contenido sin autorizacion expresa</li>
              <li>• Uso comercial del contenido sin acuerdo previo por escrito</li>
              <li>• Crear obras derivadas con fines comerciales</li>
              <li>• Presentar el contenido de HolaPolska como propio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Contenido de terceros</h2>
            <p className="text-gray-700">Algunos articulos informativos referencian fuentes oficiales polacas y europeas. Esas fuentes mantienen sus propios derechos. HolaPolska no reproduce contenido protegido de terceros sin autorizacion.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Reclamaciones</h2>
            <p className="text-gray-700">Si consideras que algun contenido de HolaPolska vulnera tus derechos de autor, contacta a: <a href="mailto:biuro@holapolska.com" className="text-red-500">biuro@holapolska.com</a>. Responderemos en un plazo maximo de 14 dias habiles.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
