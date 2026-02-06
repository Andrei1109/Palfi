/** @type {import('next').NextConfig} */
const nextConfig = {
    compiler: {
        styledComponents: true,
    },
    devIndicators: {
        buildActivity: false,
        staticPageGenerationIndicator: false,
    },
}

module.exports = nextConfig
