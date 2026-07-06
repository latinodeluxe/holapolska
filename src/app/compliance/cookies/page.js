export default function Cookies() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Politica de Cookies</h1>
        <p className="text-gray-500 mb-10">Ultima actualizacion: 1 de julio de 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Que son las cookies</h2>
            <p className="text-gray-700">Las cookies son pequenos archivos de texto que los sitios web almacenan en tu dispositivo cuando los visitas. Permiten que el sitio recuerde tus preferencias y mejoren tu experiencia de navegacion.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Cookies que utilizamos</h2>
            <p className="text-gray-700 mb-4">HolaPolska unicamente utiliza cookies tecnicas estrictamente necesarias para el funcionamiento de la plataforma. No utilizamos cookies de publicidad, rastreo ni analisis de terceros.</p>
            <div className="bg-white rounded-xl p-6 shadow-sm">
              <table className="w-full text-sm">
                <thead>
                  <tr className="border-b">
                    <th className="text-left py-2 text-gray-700">Cookie</th>
                    <th className="text-left py-2 text-gray-700">Finalidad</th>
                    <th className="text-left py-2 text-gray-700">Duracion</th>
                  </tr>
                </thead>
                <tbody className="text-gray-600">
                  <tr className="border-b">
                    <td className="py-2">sb-auth-token</td>
                    <td className="py-2">Mantener la sesion del usuario autenticado</td>
                    <td className="py-2">Sesion</td>
                  </tr>
                  <tr className="border-b">
                    <td className="py-2">holapolska_cookies</td>
                    <td className="py-2">Guardar tu preferencia sobre cookies</td>
                    <td className="py-2">1 ano</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Base legal</h2>
            <p className="text-gray-700">Las cookies tecnicas listadas son estrictamente necesarias para el funcionamiento del servicio y se instalan sin necesidad de consentimiento previo, de conformidad con el articulo 173 de la Prawo telekomunikacyjne polaca y la Directiva ePrivacy 2002/58/CE. No instalamos ninguna cookie que requiera consentimiento previo.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Como gestionar las cookies</h2>
            <p className="text-gray-700 mb-4">Puedes configurar tu navegador para rechazar todas las cookies o para recibir una alerta cuando se instale una. Ten en cuenta que desactivar las cookies tecnicas puede impedir el correcto funcionamiento de la plataforma, incluyendo el inicio de sesion.</p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Chrome:</strong> Configuracion › Privacidad y seguridad › Cookies</li>
              <li>• <strong>Firefox:</strong> Opciones › Privacidad y seguridad</li>
              <li>• <strong>Safari:</strong> Preferencias › Privacidad</li>
              <li>• <strong>Edge:</strong> Configuracion › Cookies y permisos del sitio</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Contacto</h2>
            <p className="text-gray-700">Para cualquier consulta sobre el uso de cookies: <a href="mailto:biuro@holapolska.com" className="text-red-500">biuro@holapolska.com</a></p>
          </section>
        </div>
      </div>
    </main>
  )
}
