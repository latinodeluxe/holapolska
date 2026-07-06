export default function robots() {
  return {
    rules: [
      {
        userAgent: '*',
        allow: '/',
        disallow: [
          '/idioma/dashboard',
          '/idioma/curso/',
          '/api/',
        ],
      },
    ],
    sitemap: 'https://holapolska.com/sitemap.xml',
  }
}
