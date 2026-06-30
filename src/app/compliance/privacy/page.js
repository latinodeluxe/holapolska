export default function PrivacyPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Política de Privacidad</h1>
      <p><em>Última actualización: 30 de junio de 2026</em></p>
      
      <section style={{ marginBottom: '1.5rem' }}>
        <h2>1. Introducción</h2>
        <p>En HolaPolska, la protección de tus datos personales es nuestra prioridad. Esta política describe qué información recopilamos cuando utilizas nuestra plataforma y cómo la tratamos para mejorar tu experiencia de integración en Polonia.</p>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2>2. Datos que recopilamos</h2>
        <p>Recopilamos únicamente la información necesaria para el funcionamiento de los servicios:</p>
        <ul>
          <li><strong>Datos de cuenta:</strong> Nombre, dirección de correo electrónico y nivel de idioma.</li>
          <li><strong>Datos de uso:</strong> Progreso en los cursos, rachas de aprendizaje y logros obtenidos.</li>
          <li><strong>Datos técnicos:</strong> Información básica de conexión necesaria para mantener la seguridad de tu sesión (autenticación).</li>
        </ul>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2>3. Finalidad del tratamiento</h2>
        <p>Utilizamos tus datos para:</p>
        <ul>
          <li>Gestionar tu registro y acceso a la plataforma.</li>
          <li>Personalizar tu experiencia de aprendizaje y gamificación.</li>
          <li>Enviar notificaciones relevantes sobre el progreso de tus cursos o eventos de la comunidad.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2>4. Tus derechos (GDPR/RODO)</h2>
        <p>De acuerdo con la normativa vigente en Polonia y la Unión Europea, tienes derecho a:</p>
        <ul>
          <li>Acceder, rectificar o eliminar tus datos personales en cualquier momento.</li>
          <li>Solicitar la limitación del tratamiento de tus datos.</li>
          <li>Retirar tu consentimiento para el tratamiento de datos para fines específicos.</li>
        </ul>
      </section>

      <section>
        <h2>5. Seguridad de la información</h2>
        <p>Implementamos medidas técnicas de seguridad (como Supabase Auth y Row Level Security) para proteger tu información contra el acceso no autorizado o la divulgación indebida.</p>
      </section>
    </main>
  );
}