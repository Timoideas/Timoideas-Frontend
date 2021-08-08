module.exports = {
  async redirects() {
    return [
      {
        source: 'Stream',
        destination: 'stream',
        permanent: true,
      },
      {
        source: '/index',
        destination: '/',
        permanent: true,
      },
    ];
  },
  // i18n: {
  //   locales: ['es-US', 'fr', 'nl-NL'],
  //   defaultLocale: 'es-US',
  // },
};
