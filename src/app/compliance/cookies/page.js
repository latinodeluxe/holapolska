export default function CookiesPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Política de Cookies</h1>
      <p><em>Última actualización: 30 de junio de 2026</em></p>
      
      <section style={{ marginBottom: '1.5rem' }}>
        <h2>1. ¿Qué son las cookies?</h2>
        <p>Las cookies son pequeños archivos de texto que se almacenan en tu dispositivo al visitar nuestra plataforma. Nos ayudan a recordar tus preferencias y a mantener tu sesión iniciada de manera segura.</p>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2>2. Cookies utilizadas en HolaPolska</h2>
        <p>Utilizamos dos tipos principales de cookies:</p>
        <ul>
          <li><strong>Cookies Técnicas (Necesarias):</strong> Son estrictamente necesarias para el funcionamiento de la plataforma, como mantener tu sesión de usuario iniciada mediante Supabase Auth y recordar tus preferencias de seguridad. No pueden desactivarse.</li>
          <li><strong>Cookies de Análisis:</strong> (Opcional) Utilizamos herramientas para entender cómo los usuarios interactúan con el curso y mejorar la calidad de nuestra metodología de enseñanza.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2>3. Control de Cookies</h2>
        <p>Puedes configurar tu navegador para rechazar todas las cookies o para que te avise cuando se esté enviando una. Sin embargo, ten en cuenta que desactivar las cookies técnicas podría afectar el funcionamiento de tu sesión y el progreso en el curso.</p>
      </section>

      <section>
        <h2>4. Consentimiento</h2>
        <p>Al continuar navegando en HolaPolska, aceptas el uso de cookies técnicas. Para cualquier cookie de análisis, solicitaremos tu consentimiento explícito a través de nuestro banner de avisos al ingresar por primera vez.</p>
      </section>
    </main>
  );
}