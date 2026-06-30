export default function RetentionPage() {
  return (
    <main style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto', fontFamily: 'sans-serif' }}>
      <h1>Política de Retención de Datos</h1>
      <p><em>Última actualización: 30 de junio de 2026</em></p>
      
      <section style={{ marginBottom: '1.5rem' }}>
        <h2>1. Principio de Minimización</h2>
        <p>HolaPolska almacena datos personales solo durante el tiempo estrictamente necesario para cumplir con las finalidades para las que fueron recopilados, o según lo requieran las obligaciones legales vigentes en Polonia.</p>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2>2. Periodos de Retención</h2>
        <ul>
          <li><strong>Cuentas Activas:</strong> Los datos se conservan mientras la cuenta del usuario permanezca activa.</li>
          <li><strong>Cuentas Inactivas:</strong> Si un usuario no accede a la plataforma durante un periodo de 24 meses, procederemos a la anonimización o eliminación de sus datos personales, salvo que exista una obligación legal de retención.</li>
          <li><strong>Datos de Comunicación:</strong> Los registros de contacto se conservarán el tiempo necesario para resolver la consulta del usuario.</li>
        </ul>
      </section>

      <section style={{ marginBottom: '1.5rem' }}>
        <h2>3. Eliminación Definitiva</h2>
        <p>Tras finalizar el periodo de retención, los datos son eliminados de forma segura de nuestras bases de datos de Supabase y de cualquier sistema de respaldo, asegurando que no quede rastro de información identificable.</p>
      </section>

      <section>
        <h2>4. Excepciones Legales</h2>
        <p>En casos donde la ley polaca (ej. obligaciones fiscales o tributarias) exija la conservación de ciertos datos por un periodo determinado, HolaPolska cumplirá estrictamente con dichos plazos antes de proceder a la supresión definitiva.</p>
      </section>
    </main>
  );
}