require("dotenv").config();

const metadata = {
  companyName: 'Shape Startup',
  companyUrl: 'https://www.takeshape.io/',
  authorName: 'TakeShape, Inc.',
  authorUrl: 'https://www.takeshape.io/',
  siteUrl: 'https://gatsby-starter-takeshape-startup.netlify.com'
}

module.exports = {
  siteMetadata: metadata,
  plugins: [
    'gatsby-plugin-resolve-src',
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/images`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'TS',
        fieldName: 'takeshape',
        url: `https://api.takeshape.io/project/${process.env.TAKESHAPE_PROJECT}/graphql`,
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${process.env.TAKESHAPE_API_KEY}`,
        },
        fetchOptions: {}
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: metadata.companyName,
        short_name: metadata.companyName,
        start_url: '/',
        icon: './static/favicon.png'
      },
    },
    {
      // This should be removed when going live
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        policy: [{ userAgent: '*', disallow: ['/'] }]
      }
    },
    'gatsby-plugin-sitemap'
  ],
}
