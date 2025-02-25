/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  // example of redirect
  async redirects() {
    return [
      {
        source: '/old-path',
        destination: '/dynamicHeader',
        // below is for ceo
        permanent: true,
      },
    ];
  }
};

export default nextConfig;
