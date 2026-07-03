export const metadata = { title: "ZUS en Polonia — Sistema de seguridad social | HolaPolska", description: "Que es el ZUS, como funciona y que cubre el sistema de seguridad social polaco." }

export default function Zus() {
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/legalidad" className="text-sm text-gray-500">Volver a Legalidad</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-sm text-red-500 font-medium">Legalidad</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-8">ZUS: el sistema de seguridad social polaco explicado sin tecnicismos</h1>
        <div className="prose prose-lg max-w-none">
          <p className="text-gray-700 leading-relaxed mb-6">
            El ZUS (Zaklad Ubezpieczen Spolecznych) es la institucion publica que gestiona la seguridad social en Polonia. Si trabajas con contrato formal (umowa o prace), tu empleador te registra automaticamente y descuenta las cotizaciones directamente de tu salario. No tienes que hacer nada extra, pero si es importante que entiendas para que sirve y que cubre.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Que cubre el ZUS</h2>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li><strong>Pension de jubilacion</strong> — cotizas durante tu vida laboral y acumulas derechos de pension para el futuro.</li>
            <li><strong>Pension por invalidez</strong> — si por enfermedad o accidente no puedes trabajar, el ZUS puede reconocerte una pension de invalidez.</li>
            <li><strong>Baja por enfermedad</strong> — si te enfermas y tienes contrato formal, tienes derecho a cobrar el 80% de tu salario desde el cuarto dia de baja (los primeros 3 dias los paga el empleador).</li>
            <li><strong>Baja por maternidad y paternidad</strong> — cubierta por el ZUS si tienes contrato formal y llevas cotizando el tiempo requerido.</li>
            <li><strong>Accidentes laborales</strong> — cobertura en caso de accidente en el trabajo o enfermedad profesional.</li>
          </ul>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Cuanto se descuenta de tu salario</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Las cotizaciones al ZUS se dividen entre el empleador y el empleado. Del lado del trabajador, el descuento total ronda el 22-23% del salario bruto, distribuido entre pension, invalidez, enfermedad y otros fondos. Por eso el salario neto (en mano) es notablemente menor al bruto que aparece en el contrato.
          </p>
          <div className="bg-white rounded-xl p-6 shadow-sm mb-6">
            <p className="text-gray-600 text-sm mb-2">Ejemplo practico:</p>
            <p className="text-gray-700">Con un salario bruto de 5.000 PLN, el neto aproximado despues de ZUS e impuestos es de unos 3.600-3.800 PLN, dependiendo de deducciones personales.</p>
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Como verificar que tu empleador te esta cotizando</h2>
          <p className="text-gray-700 leading-relaxed mb-4">
            Puedes crear una cuenta en el portal del ZUS (zus.pl) con tu PESEL para verificar que tu empleador esta realizando las cotizaciones correctamente. Es importante que lo revises periodicamente, especialmente en los primeros meses de un trabajo nuevo.
          </p>
          <h2 className="text-2xl font-bold text-gray-900 mt-10 mb-4">Tips que te van a ahorrar dolores de cabeza</h2>
          <div className="bg-red-50 rounded-2xl p-6 space-y-3">
            <p className="text-gray-700">💡 Si tu empleador no te cotiza al ZUS, estas trabajando irregularmente aunque tengas contrato firmado. Verificalo en zus.pl con tu PESEL.</p>
            <p className="text-gray-700">💡 Para acceder al medico por el sistema publico (NFZ) necesitas que el ZUS este activo a tu nombre. Sin cotizacion activa, tendras que pagar la consulta de tu bolsillo.</p>
            <p className="text-gray-700">💡 Si tienes algun problema con el ZUS o sospechas irregularidades, puedes acudir a la Inspeccion Nacional del Trabajo (PIP) para orientacion gratuita.</p>
            <p className="text-gray-700">💡 Los anos que cotices en Polonia pueden contarse para tu pension en tu pais de origen segun los convenios de seguridad social. Consulta con el consulado de tu pais para mas detalles.</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <p className="text-xs text-gray-400 mb-4">Este contenido es informativo y no sustituye asesoria legal profesional.</p>
          <a href="/legalidad" className="text-red-500 font-medium hover:underline">← Volver a Legalidad</a>
        </div>
      </div>
    </main>
  )
}
