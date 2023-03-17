/** @type {import('next-sitemap').IConfig} */
module.exports = {
	siteUrl: 'https://haidevs.alawonn.com/',
	generateRobotsTxt: true,
	robotsTxtOptions: {
		policies: [
			{
				userAgent: '*',
				allow: ['/'],
				// disallow: ['/admin/(.*)'] // 
			},
		],
	},
	alternateRefs: [ // Option in robots.txt file generated by next-sitemap
		{
			href: 'https://haidevs.alawonn.com//fr',
			hreflang: 'fr',
		},
		{
			href: 'https://haidevs.alawonn.com//ht',
			hreflang: 'ht',
		},
		{
			href: 'https://haidevs.alawonn.com//en-US',
			hreflang: 'en-US',
		},
	],
    
};