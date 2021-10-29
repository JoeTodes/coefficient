module.exports = {
	siteName: "coEfficient Solutions",
	transformers: {
		remark: {
			externalLinksTarget: "_blank",
			externalLinksRel: ["nofollow", "noopener", "noreferrer"],
		},
	},
	plugins: [
		{ use: "gridsome-plugin-tailwindcss" },
		{ use: "gridsome-plugin-netlify-cms" },
		{
			use: "@gridsome/source-filesystem",
			options: {
				baseDir: "./cms/portfolios",
				path: "*.md",
				typeName: "Portfolios",
			},
		},
		{
			use: "@gridsome/source-filesystem",
			options: {
				baseDir: "./cms/content",
				path: "*.md",
				typeName: "Content",
			},
		},
		{
			use: "@gridsome/source-filesystem",
			options: {
				baseDir: "./cms/posts",
				path: "*.md",
				typeName: "Posts",
			},
		},
	],
};