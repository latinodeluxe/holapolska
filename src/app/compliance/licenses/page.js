export default function LicensesPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Licencias y Software</h1>
      <p><em>Última actualización: 30 de junio de 2026</em></p>
      
      <section style={{ marginBottom: '1.5rem' }}>
        <h2>1. Propiedad del Contenido</h2>
        <p>Todo el material educativo, guías de integración, diseños y herramientas desarrollados específicamente para HolaPolska son propiedad exclusiva de LatinoDeluxe y están protegidos por leyes internacionales de derechos de autor.</p>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2>2. Software de Terceros</h2>
        <p>HolaPolska integra tecnologías de terceros para su funcionamiento óptimo. Reconocemos y respetamos las licencias de las siguientes tecnologías:</p>
        <ul>
          <li><strong>Next.js (Framework):</strong> Utilizado bajo licencia MIT.</li>
          <li><strong>Supabase (Backend/Database):</strong> Plataforma de gestión de datos y autenticación.</li>
          <li><strong>React (UI Library):</strong> Utilizada bajo licencia MIT.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2>3. Recursos de Terceros</h2>
        <p>En caso de utilizar imágenes, iconos o recursos multimedia provenientes de fuentes externas, nos aseguramos de contar con las licencias correspondientes (Creative Commons, licencia comercial o uso libre) y damos el crédito adecuado a sus creadores.</p>
      </section>

      <section>
        <h2>4. Uso No Autorizado</h2>
        <p>Queda estrictamente prohibida la reproducción, distribución o modificación total o parcial de nuestro contenido original sin una autorización previa por escrito.</p>
      </section>
    </main>
  );
}