export default function Checklists() {
  const listas = [
    {
      titulo: 'Al llegar a Polonia',
      icono: '✈️',
      items: [
        'Comprar tarjeta SIM local (Orange, Play, T-Mobile o Plus)',
        'Registrar tu direccion en el Urzad Miasta (meldunek)',
        'Solicitar el numero PESEL',
        'Abrir cuenta bancaria',
        'Conseguir seguro medico (privado mientras no tienes ZUS activo)',
        'Guardar los numeros de emergencia (112, 999, 997)',
      ]
    },
    {
      titulo: 'Para trabajar legalmente',
      icono: '💼',
      items: [
        'Verificar que tu empleador tiene permiso para contratarte',
        'Firmar contrato de trabajo (umowa o prace) antes de empezar',
        'Pedir copia del contrato en un idioma que entiendas',
        'Confirmar que el empleador te ha registrado en el ZUS',
        'Verificar en zus.pl que tu cotizacion esta activa',
        'Guardar copia del contrato y de tu permiso de trabajo',
      ]
    },
    {
      titulo: 'Para tramitar la Karta Pobytu',
      icono: '📄',
      items: [
        'Verificar que aun tienes dias de estancia legal validos',
        'Descargar el formulario del Urzad Wojewodzki de tu region',
        'Reunir: pasaporte, seguro medico, comprobante de domicilio, contrato de trabajo',
        'Hacer copias de todos los documentos',
        'Pedir cita o presentarte en el Urzad Wojewodzki',
        'Guardar el recibo o sello de presentacion de solicitud',
        'Renovar con al menos 45 dias de anticipacion al vencimiento',
      ]
    },
    {
      titulo: 'Documentos siempre a mano',
      icono: '📁',
      items: [
        'Pasaporte vigente',
        'Karta Pobytu (si ya la tienes)',
        'Contrato de trabajo',
        'Numero PESEL apuntado en lugar seguro',
        'Numero de cuenta bancaria',
        'Numero de tu SIM polaca',
        'Numero de emergencias: 112',
        'Numero de tu consulado o embajada',
      ]
    },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/recursos" className="text-sm text-gray-500">Volver a Recursos</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-sm text-red-500 font-medium">Recursos</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Checklists para vivir en Polonia</h1>
        <p className="text-gray-500 mb-10">Listas de verificacion para los momentos clave. Guardala, imprimela o compartela.</p>
        <div className="space-y-8">
          {listas.map((lista) => (
            <div key={lista.titulo} className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="bg-red-500 px-6 py-4 flex items-center gap-3">
                <span className="text-2xl">{lista.icono}</span>
                <h2 className="text-white font-bold text-lg">{lista.titulo}</h2>
              </div>
              <ul className="p-6 space-y-3">
                {lista.items.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-red-500 mt-0.5">☐</span>
                    <span className="text-gray-700 text-sm">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/recursos" className="text-red-500 font-medium hover:underline">← Volver a Recursos</a>
        </div>
      </div>
    </main>
  )
}
