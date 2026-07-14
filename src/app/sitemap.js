export default function sitemap() {
  const baseUrl = 'https://holapolska.com'
  const fechaActual = new Date().toISOString()

  return [
    { url: baseUrl, lastModified: fechaActual, changeFrequency: 'weekly', priority: 1 },
    { url: baseUrl + '/nosotros', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    // Idioma
    { url: baseUrl + '/idioma', lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.9 },
    { url: baseUrl + '/idioma/cursos/polaco-a1', lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.9 },
    { url: baseUrl + '/idioma/cursos/polaco-trabajo', lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.9 },
    { url: baseUrl + '/idioma/cursos/espanol-polacos', lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.9 },
    // Vivir en Polonia
    { url: baseUrl + '/vivir-en-polonia', lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.9 },
    { url: baseUrl + '/vivir-en-polonia/pesel', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/vivir-en-polonia/banco', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/vivir-en-polonia/sim', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/vivir-en-polonia/alquiler', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/vivir-en-polonia/transporte', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/vivir-en-polonia/salud', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/vivir-en-polonia/empleo', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/vivir-en-polonia/impuestos', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/vivir-en-polonia/escuelas', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    // Legalidad
    { url: baseUrl + '/legalidad', lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.9 },
    { url: baseUrl + '/legalidad/permiso-residencia', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/legalidad/contrato-trabajo', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/legalidad/zus', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/legalidad/visas', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/legalidad/nfz', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/legalidad/impuestos', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/legalidad/inspeccion-trabajo', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: baseUrl + '/legalidad/multas', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    // Cultura
    { url: baseUrl + '/cultura', lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.8 },
    { url: baseUrl + '/cultura/costumbres', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.7 },
    { url: baseUrl + '/cultura/fiestas', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.7 },
    { url: baseUrl + '/cultura/normas-sociales', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.7 },
    { url: baseUrl + '/cultura/sistema-educativo', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.7 },
    { url: baseUrl + '/cultura/gastronomia', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.7 },
    { url: baseUrl + '/cultura/musica', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.7 },
    // Herramientas
    { url: baseUrl + '/herramientas', lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.8 },
    { url: baseUrl + '/herramientas/conversor-pln', lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.7 },
    { url: baseUrl + '/herramientas/frases-utiles', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.7 },
    { url: baseUrl + '/herramientas/numeros-emergencia', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.7 },
    { url: baseUrl + '/herramientas/traductor-documentos', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.7 },
    // Comunidad
    { url: baseUrl + '/comunidad', lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.7 },
    { url: baseUrl + '/comunidad/eventos', lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.6 },
    { url: baseUrl + '/comunidad/negocios-latinos', lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.6 },
    { url: baseUrl + '/comunidad/voluntariado', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.6 },
    // Recursos
    { url: baseUrl + '/recursos', lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.7 },
    { url: baseUrl + '/recursos/checklists', lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
