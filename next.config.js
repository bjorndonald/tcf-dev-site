const webpack = require("webpack");
module.exports = {
  exportPathMap: async function (
    defaultPathMap,
    { dev, dir, outDir, distDir, buildId }
  ) {
    return {
      '/': { page: '/' },
      '/about-us': { page: '/about-us' },
      '/archive': { page: '/archive' },
      '/help-center': { page: '/help-center' },
      '/station': { page: '/station' },
      '/trading-basic': { page: '/trading-basic' },
      '/products/funding': { page: '/products/funding' },
      '/products/liquidity': { page: '/products/liquidity' },
      '/products/token': { page: '/products/token' },
    }
  },
  images: {
    loader: 'imgix',
    path: '/',
  },
  webpack: (config) => {
    config.plugins.push(
      new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
      })
    );
    return config;
  },
};