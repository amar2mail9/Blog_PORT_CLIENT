/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://polytechub.vercel.app",
  generateRobotsTxt: true,
  sitemapSize: 5000,
  changefreq: "daily",
  priority: 0.7,
  exclude: ["/admin/*", "/private/*"], // Exclude pages from the sitemap
  transform: async (config, url) => {
    return {
      loc: url,
      changefreq: url.includes("/blog") ? "weekly" : "monthly",
      priority: url === "/" ? 1.0 : 0.7,
      lastmod: new Date().toISOString(),
    };
  },
};
