import React from 'react'
import fs from 'fs'
const Sitemap = () => {}

export const getServerSideProps = ({ res }) => {
  const baseUrl = {
    development: 'http://localhost:8000',
    production: 'https://traderscentral.com'
  }[process.env.NODE_ENV]

  const staticPages = fs
    .readdirSync(
      {
        development: 'pages',
        production: './pages'
      }[process.env.NODE_ENV]
    )
    .filter(staticPage => {
      return !['_app.js', 'sitemap.js', 'api', 'products'].includes(staticPage)
    })
    .map(staticPagePath => {
      return `${baseUrl}/${staticPagePath}`
    })

  var productPages = fs
    .readdirSync(
      {
        development: 'pages/products',
        production: './pages/products'
      }[process.env.NODE_ENV]
    )
    .filter(staticPage => {
      return !['_app.js', 'sitemap.js'].includes(staticPage)
    })
    .map(staticPagePath => {
      return `${baseUrl}/products/${staticPagePath}`
    })

  staticPages.push(...productPages)

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${staticPages
          .map(url => {
            return `
              <url>
                <loc>${url.replace('.js', '')}</loc>
                <lastmod>${new Date().toISOString()}</lastmod>
                <changefreq>monthly</changefreq>
                <priority>1.0</priority>
              </url>
            `
          })
          .join('')}
      </urlset>
    `

  res.setHeader('Content-Type', 'text/xml')
  res.write(sitemap)
  res.end()

  return {
    props: {}
  }
}

export default Sitemap
