/** @type {import('next').NextConfig} */
const nextConfig = {
  allowedDevOrigins: ['*.run.app'],
  async redirects() {
    return [
      {
        source: '/legal-ai',
        destination: '/ai-interpreter',
        statusCode: 301,
      },
      {
        source: '/knowledge/how-to-buy-car-and-property-from-court-auction',
        destination: '/knowledge/government-auction-guide',
        statusCode: 301,
      },
      {
        source: '/knowledge/how-to-buy-car-and-property-from-court-auction/:path*',
        destination: '/knowledge/government-auction-guide',
        statusCode: 301,
      },
      {
        source: '/knowledge/sabt-nam-site-mazaiede-dolat-ghove-ghazaiye',
        destination: '/knowledge/government-auction-guide',
        statusCode: 301,
      },
      {
        source: '/knowledge/setad-auction-registration',
        destination: '/knowledge/government-auction-guide',
        statusCode: 301,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/admin/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, nocache',
          },
        ],
      },
      {
        source: '/admin',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'noindex, nofollow, nocache',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
