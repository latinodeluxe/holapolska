'use client'
import { useState } from 'react'
export default function Leccion40() {
  const [tab, setTab] = useState('repaso')
  const [respuestas, setRespuestas] = useState({})
  const [mostrarResultado, setMostrarResultado] = useState(false)
  const repaso = [
    { categoria: 'Restaurante', frases: [
      { polaco: 'restauracja / kelner', pronunciacion: 'res-tau-RAT-sya / KEL-ner', traduccion: 'restaurante / camarero' },
      { polaco: 'Prosze o rachunek', pronunciacion: 'PRO-she o ra-HU-nek', traduccion: 'La cuenta por favor' },
      { polaco: 'Chcialbym zamowic', pronunciacion: 'HCHAW-bim za-MO-vich', traduccion: 'Quisiera pedir' },
    ]},
    { categoria: 'Comida y bebidas', frases: [
      { polaco: 'woda / kawa / herbata', pronunciacion: 'VO-da / KA-va / her-BA-ta', traduccion: 'agua / cafe / te' },
      { polaco: 'jablko / banan / pomidor', pronunciacion: 'YAB-ko / BA-nan / po-MI-dor', traduccion: 'manzana / platano / tomate' },
      { polaco: 'Lubie / Nie lubie', pronunciacion: 'LU-bye / nye LU-bye', traduccion: 'Me gusta / No me gusta' },
    ]},
    { categoria: 'Supermercado', frases: [
      { polaco: 'sklep / supermarket', pronunciacion: 'sklep / su-per-MAR-ket', traduccion: 'tienda / supermercado' },
      { polaco: 'cena / tani / drogi', pronunciacion: 'TSE-na / TA-ni / DRO-gi', traduccion: 'precio / barato / caro' },
      { polaco: 'kilogram / litr', pronunciacion: 'KI-lo-gram / litr', traduccion: 'kilogramo / litro' },
    ]},
  ]
  const examen = [
    { pregunta: 'Como se dice restaurante en polaco?', opciones: ['sklep', 'restauracja', 'kelner', 'menu'], correcta: 'restauracja' },
    { pregunta: 'Que significa rachunek?', opciones: ['propina', 'menu', 'cuenta factura', 'reserva'], correcta: 'cuenta factura' },
    { pregunta: 'Como se dice agua en polaco?', opciones: ['kawa', 'herbata', 'woda', 'sok'], correcta: 'woda' },
    { pregunta: 'Que significa tani?', opciones: ['caro', 'barato', 'precio', 'descuento'], correcta: 'barato' },
    { pregunta: 'Como se dice me gusta en polaco?', opciones: ['Nie lubie', 'Uwielbiam', 'Lubie', 'smaczne'], correcta: 'Lubie' },
    { pregunta: 'Que significa pomidor?', opciones: ['zanahoria', 'cebolla', 'tomate', 'papa'], correcta: 'tomate' },
    { pregunta: 'Como se dice camarero en polaco?', opciones: ['menu', 'stolik', 'kelner', 'napiwek'], correcta: 'kelner' },
    { pregunta: 'Que significa pyszne?', opciones: ['salado', 'dulce', 'delicioso', 'picante'], correcta: 'delicioso' },
    { pregunta: 'Como se dice supermercado en polaco?', opciones: ['sklep', 'kasa', 'supermarket', 'koszyk'], correcta: 'supermarket' },
    { pregunta: 'Que significa Smacznego?', opciones: ['Delicioso', 'Buen provecho', 'Para mi', 'Sin'], correcta: 'Buen provecho' },
  ]
  const seleccionarRespuesta = (idx, opcion) => setRespuestas({ ...respuestas, [idx]: opcion })
  const calcularPuntaje = () => examen.filter((ej, idx) => respuestas[idx] === ej.correcta).length
  return (
    <main className="min-h-screen bg-gray-50">
      <nav className="bg-white border-b px-6 py-4 flex justify-between items-center">
        <a href="/cursos/polaco-a1/modulo-4"><span className="font-bold text-red-500">Hola</span><span className="font-bold text-gray-900">Polska</span></a>
        <a href="/cursos/polaco-a1/modulo-4" className="text-sm text-gray-500">Volver al modulo</a>
      </nav>
      <div className="max-w-3xl mx-auto px-6 py-10">
        <div className="mb-8">
          <span className="text-sm text-red-500 font-medium">Leccion 40 · Modulo 4</span>
          <h1 className="text-3xl font-bold text-gray-900 mt-1">Repaso del Modulo 4</h1>
          <p className="text-gray-500 mt-2">Repasa todo sobre comida y restaurante</p>
        </div>
        <div className="flex gap-2 mb-8 bg-white rounded-xl p-1 shadow-sm">
          {['repaso','examen'].map((t) => (
            <button key={t} onClick={() => setTab(t)} className={"flex-1 py-2 rounded-lg text-sm font-medium transition-colors " + (tab === t ? 'bg-red-500 text-white' : 'text-gray-500')}>
              {t === 'repaso' ? 'Repaso' : 'Examen del modulo'}
            </button>
          ))}
        </div>
        {tab === 'repaso' && (
          <div className="grid gap-6">
            {repaso.map((seccion, sidx) => (
              <div key={sidx} className="bg-white rounded-2xl p-6 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900 mb-4">{seccion.categoria}</h3>
                <div className="grid gap-3">
                  {seccion.frases.map((frase, fidx) => (
                    <div key={fidx} className="flex items-center justify-between p-3 bg-gray-50 rounded-xl">
                      <div>
                        <p className="font-bold text-gray-900">{frase.polaco}</p>
                        <p className="text-sm text-red-500">{frase.pronunciacion}</p>
                      </div>
                      <p className="text-gray-600 font-medium text-sm text-right">{frase.traduccion}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
            <div className="bg-red-50 rounded-2xl p-6 text-center">
              <p className="text-red-600 font-semibold mb-4">Listo para el examen?</p>
              <button onClick={() => setTab('examen')} className="bg-red-500 text-white font-semibold px-6 py-3 rounded-xl">Hacer el examen</button>
            </div>
          </div>
        )}
        {tab === 'examen' && (
          <div>
            {!mostrarResultado ? (
              <div className="grid gap-6">
                <div className="bg-red-50 rounded-2xl p-4 text-center">
                  <p className="text-red-600 font-semibold">Examen del Modulo 4 · 10 preguntas</p>
                </div>
                {examen.map((ej, idx) => (
                  <div key={idx} className="bg-white rounded-2xl p-6 shadow-sm">
                    <p className="font-semibold text-gray-900 mb-4">{idx + 1}. {ej.pregunta}</p>
                    <div className="grid grid-cols-2 gap-3">
                      {ej.opciones.map((op) => (
                        <button key={op} onClick={() => seleccionarRespuesta(idx, op)} className={"p-3 rounded-xl border text-sm font-medium transition-colors " + (respuestas[idx] === op ? 'bg-red-500 text-white border-red-500' : 'border-gray-200 text-gray-700')}>{op}</button>
                      ))}
                    </div>
                  </div>
                ))}
                <button onClick={() => setMostrarResultado(true)} className="w-full bg-red-500 text-white font-semibold py-4 rounded-xl">Ver resultados</button>
              </div>
            ) : (
              <div className="bg-white rounded-2xl p-8 shadow-sm text-center">
                <div className="text-6xl mb-4">{calcularPuntaje() >= 8 ? '🏆' : '💪'}</div>
                <h2 className="text-2xl font-bold text-gray-900 mb-2">{calcularPuntaje()} de {examen.length} correctas</h2>
                <div className="w-full bg-gray-100 rounded-full h-4 mb-8">
                  <div className="bg-red-500 h-4 rounded-full" style={{width: (calcularPuntaje() / examen.length * 100) + '%'}}></div>
                </div>
                <div className="flex gap-4 justify-center">
                  <button onClick={() => { setRespuestas({}); setMostrarResultado(false) }} className="px-6 py-3 border border-gray-200 rounded-xl text-gray-600">Repetir</button>
                  <a href="/cursos/polaco-a1/modulo-5" className="px-6 py-3 bg-red-500 text-white rounded-xl font-semibold">Ir al Modulo 5</a>
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </main>
  )
}
