export default function Privacy() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Politica de Privacidad</h1>
        <p className="text-gray-500 mb-10">Ultima actualizacion: 1 de julio de 2026</p>

        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">1. Responsable del tratamiento</h2>
            <div className="bg-white rounded-xl p-6 shadow-sm text-gray-700 space-y-1">
              <p><strong>Nombre:</strong> Pablo Sebastian Cupajita Chitiva</p>
              <p><strong>Proyecto:</strong> HolaPolska</p>
              <p><strong>Pais de operacion:</strong> Polonia (Union Europea)</p>
              <p><strong>Correo de contacto:</strong> <a href="mailto:biuro@holapolska.com" className="text-red-500">biuro@holapolska.com</a></p>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">2. Datos que recopilamos y por que</h2>
            <p className="text-gray-700 mb-4">Recopilamos unicamente los datos necesarios para prestarte el servicio:</p>
            <div className="space-y-4">
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-gray-900 mb-1">Al registrarte</p>
                <p className="text-gray-600 text-sm">Nombre, correo electronico y contrasena. Base legal: ejecucion de un contrato (Art. 6.1.b RGPD) — necesario para prestarte el servicio de aprendizaje.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-gray-900 mb-1">Al usar el curso</p>
                <p className="text-gray-600 text-sm">Progreso de lecciones, XP acumulado y racha diaria. Base legal: ejecucion del contrato (Art. 6.1.b RGPD) — necesario para guardar tu avance.</p>
              </div>
              <div className="bg-white rounded-xl p-5 shadow-sm">
                <p className="font-semibold text-gray-900 mb-1">Datos tecnicos</p>
                <p className="text-gray-600 text-sm">Logs de acceso basicos gestionados por Supabase y Vercel. Base legal: interes legitimo (Art. 6.1.f RGPD) — seguridad e integridad del servicio.</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">3. Transferencias internacionales de datos</h2>
            <p className="text-gray-700">Utilizamos los siguientes proveedores que pueden procesar datos fuera del EEE:</p>
            <ul className="space-y-2 text-gray-700 mt-3">
              <li>• <strong>Supabase Inc.</strong> (EE.UU.) — base de datos y autenticacion. Cumple el Marco de Privacidad UE-EE.UU.</li>
              <li>• <strong>Vercel Inc.</strong> (EE.UU.) — alojamiento web. Cumple el Marco de Privacidad UE-EE.UU.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">4. Plazo de conservacion</h2>
            <p className="text-gray-700">Conservamos tus datos mientras mantengas tu cuenta activa. Si eliminas tu cuenta, tus datos personales se eliminaran en un plazo maximo de 30 dias, salvo obligacion legal de conservacion.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">5. Tus derechos</h2>
            <p className="text-gray-700 mb-3">Bajo el RGPD tienes derecho a:</p>
            <ul className="space-y-2 text-gray-700">
              <li>• <strong>Acceso:</strong> solicitar copia de tus datos personales</li>
              <li>• <strong>Rectificacion:</strong> corregir datos incorrectos</li>
              <li>• <strong>Supresion:</strong> solicitar la eliminacion de tu cuenta y datos</li>
              <li>• <strong>Portabilidad:</strong> recibir tus datos en formato estructurado</li>
              <li>• <strong>Oposicion:</strong> oponerte a determinados tratamientos</li>
              <li>• <strong>Reclamacion:</strong> presentar reclamacion ante la UODO (autoridad polaca de proteccion de datos) en <a href="https://uodo.gov.pl" className="text-red-500">uodo.gov.pl</a></li>
            </ul>
            <p className="text-gray-700 mt-3">Para ejercer cualquier derecho: <a href="mailto:biuro@holapolska.com" className="text-red-500">biuro@holapolska.com</a>. Responderemos en un plazo maximo de 30 dias.</p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">6. Seguridad</h2>
            <p className="text-gray-700">Implementamos medidas tecnicas de seguridad incluyendo cifrado en transito (HTTPS), politicas de control de acceso a nivel de base de datos (RLS en Supabase) y autenticacion segura gestionada por Supabase Auth.</p>
          </section>
        </div>
      </div>
    </main>
  )
}
