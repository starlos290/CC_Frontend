/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    // SVGR — allow importing SVGs as React components
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: '@svgr/webpack',
          options: {
            svgo: true,
            svgoConfig: {
              plugins: [{ name: 'removeViewBox', active: false }],
            },
            titleProp: true,
          },
        },
      ],
    });
    return config;
  },
  images: {
    domains: [],
    formats: ['image/webp'],
  },
};

module.exports = nextConfig;
