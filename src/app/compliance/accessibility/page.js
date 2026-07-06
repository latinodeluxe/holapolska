export default function Accessibility() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Declaracion de Accesibilidad</h1>
        <p className="text-gray-500 mb-10">Ultima actualizacion: 1 de julio de 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Compromiso con la accesibilidad</h2>
            <p className="text-gray-700">HolaPolska se compromete a hacer su plataforma accesible para todas las personas, independientemente de sus capacidades. Trabajamos para cumplir con las Pautas de Accesibilidad al Contenido Web (WCAG) 2.1.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Nivel de conformidad actual</h2>
            <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-5 mb-4">
              <p className="text-gray-800 font-medium mb-1">Estado actual: Conformidad parcial con WCAG 2.1 Nivel A</p>
              <p className="text-gray-600 text-sm">La plataforma se encuentra en fase de lanzamiento inicial. Se ha realizado autoevaluacion interna. No se ha realizado auditoria externa de accesibilidad a la fecha de esta declaracion.</p>
            </div>
            <p className="text-gray-700">Objetivo: alcanzar conformidad con WCAG 2.1 Nivel AA antes del 1 de enero de 2027.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Contenido accesible actualmente</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Diseno responsivo compatible con dispositivos moviles y de escritorio</li>
              <li>• Contraste de colores adecuado en elementos principales</li>
              <li>• Navegacion por teclado en formularios y botones principales</li>
              <li>• Etiquetas descriptivas en campos de formulario</li>
              <li>• Idioma de la pagina declarado correctamente (lang=es)</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Limitaciones conocidas</h2>
            <ul className="space-y-2 text-gray-700">
              <li>• Las flashcards interactivas pueden no ser completamente accesibles para lectores de pantalla en su estado actual</li>
              <li>• Algunos elementos interactivos del curso pueden requerir mejoras de etiquetado ARIA</li>
              <li>• No se han realizado pruebas con tecnologias asistivas reales a la fecha de esta declaracion</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Contacto y mecanismo de reclamacion</h2>
            <p className="text-gray-700 mb-3">Si encuentras alguna barrera de accesibilidad en HolaPolska, contacta a:</p>
            <p className="text-gray-700"><a href="mailto:biuro@holapolska.com" className="text-red-500">biuro@holapolska.com</a></p>
            <p className="text-gray-700 mt-3">Nos comprometemos a responder en un plazo maximo de 7 dias habiles e implementar mejoras en la medida de lo posible.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Base normativa</h2>
            <p className="text-gray-700">Esta declaracion se elabora en conformidad con la Directiva UE 2019/882 (Acto Europeo de Accesibilidad) y la normativa polaca de accesibilidad digital (Ustawa o dostepnosci cyfrowej).</p>
          </section>
        </div>
      </div>
    </main>
  )
}
