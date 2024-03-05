/** @type {import('next').NextConfig} */
const nextConfig = {
    // prevent minify
    webpack: (config, { dev }) => {
        // Override the UglifyJsPlugin settings only if not in development mode
        if (!dev) {
          config.optimization.minimize = false;
        }
        return config;
      }
}

module.exports = nextConfig
