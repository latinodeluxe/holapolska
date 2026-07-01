export default function NumerosEmergencia() {
  const numeros = [
    { numero: '112', titulo: 'Emergencias generales', desc: 'Numero unico de emergencias en toda la UE. Funciona para policia, bomberos y ambulancia. Disponible 24/7, algunos operadores hablan ingles.', icono: '🆘' },
    { numero: '999', titulo: 'Ambulancia', desc: 'Servicio de ambulancia directo. Usa este numero si necesitas asistencia medica urgente.', icono: '🚑' },
    { numero: '998', titulo: 'Bomberos', desc: 'Cuerpo de bomberos polaco (Straz Pozarna). Para incendios, accidentes y rescates.', icono: '🚒' },
    { numero: '997', titulo: 'Policia', desc: 'Policia nacional polaca (Policja). Para robos, violencia, accidentes de trafico y situaciones de seguridad.', icono: '🚔' },
    { numero: '986', titulo: 'Policia municipal', desc: 'Straz Miejska. Para infracciones menores, problemas de convivencia, ruido y orden publico local.', icono: '👮' },
    { numero: '985', titulo: 'Rescate de montana', desc: 'GOPR / TOPR. Si haces senderismo o actividades en montanas polacas, guarda este numero.', icono: '🏔️' },
    { numero: '601 100 100', titulo: 'Cruz Roja Polonia', desc: 'Linea de ayuda humanitaria de la Cruz Roja polaca.', icono: '🏥' },
  ]

  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/herramientas" className="text-sm text-gray-500">Volver a Herramientas</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-16">
        <span className="text-sm text-red-500 font-medium">Herramientas</span>
        <h1 className="text-4xl font-bold text-gray-900 mt-2 mb-4">Numeros de emergencia en Polonia</h1>
        <p className="text-gray-500 mb-10">Guardatelos ahora antes de necesitarlos. En una emergencia no hay tiempo para buscar.</p>
        <div className="grid gap-4 mb-10">
          {numeros.map((n) => (
            <div key={n.numero} className="bg-white rounded-xl p-6 shadow-sm flex items-start gap-4">
              <div className="text-3xl">{n.icono}</div>
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-1">
                  <span className="text-2xl font-bold text-red-500">{n.numero}</span>
                  <span className="font-semibold text-gray-900">{n.titulo}</span>
                </div>
                <p className="text-sm text-gray-500">{n.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="bg-red-50 rounded-2xl p-6 space-y-3">
          <p className="text-gray-700">💡 El 112 funciona incluso sin cobertura de tu operador y sin tarjeta SIM activa.</p>
          <p className="text-gray-700">💡 En emergencias puedes llamar en ingles o espanol: los operadores del 112 suelen tener algun nivel de ingles o pueden conectarte con un interprete.</p>
          <p className="text-gray-700">💡 Guarda tambien el numero de tu consulado o embajada para emergencias consulares.</p>
        </div>
        <div className="mt-12 pt-8 border-t border-gray-200">
          <a href="/herramientas" className="text-red-500 font-medium hover:underline">← Volver a Herramientas</a>
        </div>
      </div>
    </main>
  )
}
