/** @type {import('next').NextConfig} */
const nextConfig = {
    async redirects() {
        return [
            {
                source: '/project',
                destination: '/#projects',
                permanent: true,
            },
        ];
    },
}

module.exports = nextConfig
