/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: '/ourworks',
        destination: '/ourworks/1',
        permanent: true, 
      },
    ];
  },
};

export default nextConfig;
