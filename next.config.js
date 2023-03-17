/** @type {import('next').NextConfig} */
const withPWA = require('next-pwa')({
	dest: 'public',
	disable: process.env.NODE_ENV == 'development',
	register: true,
	skipWaiting: true,
	scope: '/',
	cacheStartUrl: true,
	dynamicStartUrl: true,
	reloadOnOnline: true
});

const nextConfig = withPWA({
	reactStrictMode: true,
  swcMinify: true,
  output: 'standalone',
	poweredByHeader: false,
	onDemandEntries: {
		// period (in ms) where the server will keep pages in the buffer
		maxInactiveAge: 25 * 1000,
		// number of pages that should be kept simultaneously without being disposed
		pagesBufferLength: 20,
	},
	basePath: '/'
});

module.exports = nextConfig;
