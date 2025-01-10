const { SitemapStream, streamToPromise } = require('sitemap');
const fs = require('fs');

const links = [
  { url: '/', changefreq: 'daily', priority: 1.0 },
  { url: '/aboutUs', changefreq: 'monthly', priority: 0.8 },
  { url: '/contact', changefreq: 'monthly', priority: 0.7 },
  { url: '/dashboard', changefreq: 'monthly', priority: 0.7 },
  { url: '/Manufacturing', changefreq: 'monthly', priority: 0.7 },
  { url: '/capsules', changefreq: 'monthly', priority: 0.7 },
  { url: '/tablets', changefreq: 'monthly', priority: 0.7 },
  { url: '/syrups', changefreq: 'monthly', priority: 0.7 },
  { url: '/sachets', changefreq: 'monthly', priority: 0.7 },
  { url: '/ayurvedic', changefreq: 'monthly', priority: 0.7 },
  { url: '/powder', changefreq: 'monthly', priority: 0.7 },
  { url: '/overview', changefreq: 'monthly', priority: 0.7 },
  { url: '/whyaislin', changefreq: 'monthly', priority: 0.7 },
  { url: '/management', changefreq: 'monthly', priority: 0.7 },
];

const sitemap = new SitemapStream({ hostname: 'https://aislinformulations.com' });

streamToPromise(sitemap)
  .then((data) => {
    fs.writeFileSync('./public/sitemap.xml', data.toString());
    console.log('Sitemap created successfully!');
  })
  .catch((error) => {
    console.error('Error generating sitemap:', error);
  });

links.forEach((link) => sitemap.write(link));
sitemap.end();
