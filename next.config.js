// eslint-disable-next-line @typescript-eslint/no-var-requires
const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})

const nextConfig = {
    distDir: "build", //this line will tell the build to create a file with this name
  };
  
  module.exports = nextConfig;

module.exports = withBundleAnalyzer({
    staticPageGenerationTimeout: 300,
    images: {
        domains: [
            'www.notion.so',
            'notion.so',
            'images.unsplash.com',
            'pbs.twimg.com',
            'abs.twimg.com',
            's3.us-west-2.amazonaws.com',
            'niviki.com'
        ],
        formats: ['image/avif', 'image/webp'],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;"
    },
    // experimental: {
    //     largePageDataBytes: 5280 * 100000,
    // }
})