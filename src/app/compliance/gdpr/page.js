export default function Gdpr() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/" className="text-sm text-gray-500">Volver al inicio</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-2">Derechos GDPR / RODO</h1>
        <p className="text-gray-500 mb-10">Ultima actualizacion: 1 de julio de 2026</p>
        <div className="prose prose-lg max-w-none space-y-8">
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Tus derechos bajo el RGPD</h2>
            <p className="text-gray-700">Como usuario de HolaPolska tienes los siguientes derechos sobre tus datos personales, de conformidad con el Reglamento General de Proteccion de Datos (RGPD / RODO):</p>
            <ul className="space-y-3 text-gray-700 mt-4">
              <li><strong>Acceso:</strong> puedes solicitar en cualquier momento una copia de los datos personales que tenemos sobre ti.</li>
              <li><strong>Rectificacion:</strong> puedes corregir datos incorrectos o incompletos.</li>
              <li><strong>Supresion:</strong> puedes solicitar la eliminacion de tu cuenta y todos tus datos personales.</li>
              <li><strong>Portabilidad:</strong> puedes solicitar tus datos en formato estructurado y legible por maquina.</li>
              <li><strong>Oposicion:</strong> puedes oponerte al tratamiento de tus datos en determinadas circunstancias.</li>
              <li><strong>Limitacion:</strong> puedes solicitar que limitemos el tratamiento de tus datos mientras se resuelve una reclamacion.</li>
            </ul>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Como ejercer tus derechos</h2>
            <p className="text-gray-700">Envia tu solicitud a: <a href="mailto:biuro@holapolska.com" className="text-red-500">biuro@holapolska.com</a></p>
            <p className="text-gray-700 mt-3">Indica en el asunto: "Solicitud GDPR" y especifica el derecho que deseas ejercer. Responderemos en un plazo maximo de 30 dias naturales.</p>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Reclamacion ante la autoridad supervisora</h2>
            <p className="text-gray-700">Si consideras que el tratamiento de tus datos no es conforme al RGPD, tienes derecho a presentar una reclamacion ante la autoridad polaca de proteccion de datos:</p>
            <div className="bg-white rounded-xl p-5 shadow-sm mt-3">
              <p className="font-semibold text-gray-900">UODO — Urzad Ochrony Danych Osobowych</p>
              <p className="text-gray-600 text-sm mt-1">Web: <a href="https://uodo.gov.pl" className="text-red-500">uodo.gov.pl</a></p>
              <p className="text-gray-600 text-sm">Direccion: ul. Stawki 2, 00-193 Warszawa, Polonia</p>
            </div>
          </section>
          <section>
            <h2 className="text-2xl font-bold text-gray-900 mb-3">Responsable del tratamiento</h2>
            <div className="bg-white rounded-xl p-5 shadow-sm">
              <p className="text-gray-700"><strong>Nombre:</strong> Pablo Sebastian Cupajita Chitiva</p>
              <p className="text-gray-700"><strong>Proyecto:</strong> HolaPolska</p>
              <p className="text-gray-700"><strong>Correo:</strong> <a href="mailto:biuro@holapolska.com" className="text-red-500">biuro@holapolska.com</a></p>
            </div>
          </section>
        </div>
      </div>
    </main>
  )
}
