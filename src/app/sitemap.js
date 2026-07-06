export default function sitemap() {
  const baseUrl = 'https://holapolska.com'
  const fechaActual = new Date().toISOString()

  return [
    { url: baseUrl, lastModified: fechaActual, changeFrequency: 'weekly', priority: 1 },
    { url: `${baseUrl}/nosotros`, lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/idioma`, lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/vivir-en-polonia`, lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/vivir-en-polonia/pesel`, lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/vivir-en-polonia/banco`, lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/vivir-en-polonia/sim`, lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/legalidad`, lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.9 },
    { url: `${baseUrl}/legalidad/permiso-residencia`, lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/legalidad/contrato-trabajo`, lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/legalidad/zus`, lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.8 },
    { url: `${baseUrl}/cultura`, lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/cultura/costumbres`, lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/cultura/fiestas`, lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/cultura/normas-sociales`, lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/herramientas`, lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.8 },
    { url: `${baseUrl}/herramientas/conversor-pln`, lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/herramientas/frases-utiles`, lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/herramientas/numeros-emergencia`, lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.7 },
    { url: `${baseUrl}/comunidad`, lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/recursos`, lastModified: fechaActual, changeFrequency: 'weekly', priority: 0.7 },
    { url: `${baseUrl}/recursos/checklists`, lastModified: fechaActual, changeFrequency: 'monthly', priority: 0.6 },
  ]
}
