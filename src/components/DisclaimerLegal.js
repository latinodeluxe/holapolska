export default function DisclaimerLegal({ modulo = 'Este contenido' }) {
  return (
    <div className="bg-magenta-light rounded-2xl p-6">
      <p className="text-sm font-semibold text-pink-900 mb-2">⚠️ Información orientativa</p>
      <p className="text-sm text-pink-900 leading-relaxed">
        {modulo} fue preparado con fines informativos y educativos para ayudarte a entender el sistema polaco. No reemplaza asesoramiento legal, laboral o administrativo profesional. Las normativas pueden cambiar — verifica siempre con las autoridades competentes antes de tomar decisiones importantes.
      </p>
      <p className="text-sm text-pink-900 mt-2">
        Dudas? Escribenos a <a href="mailto:biuro@holapolska.com" className="underline font-semibold">biuro@holapolska.com</a>
      </p>
    </div>
  )
}
