module.exports = {
  siteMetadata: {
    siteUrl: "https://ekoshkola.ru/",
    title: "Экошкола",
  },
  plugins: [
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-transition-link",
    "gatsby-plugin-react-helmet",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Экошкола',
        short_name: 'Экошкола',
        start_url: '/',
        background_color: '#FFFFFF',
        theme_color: '#FFFFFF',
        display: 'standalone',
        icon: 'src/images/favicon4.png',
      },
    }
  ],
};
