/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com']
    },
    async headers() {
        return [
            {
                source: '/(.*)',
                headers: [
                    {
                        key: 'Access-Control-Allow-Origin',
                        value: '*', // Cho phép từ tất cả các nguồn
                    },
                ],
            },
        ];
    },
}

module.exports = nextConfig
