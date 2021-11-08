module.exports = {
	siteName: "coEfficient Solutions",
	transformers: {
		remark: {
			externalLinksTarget: "_blank",
			externalLinksRel: ["nofollow", "noopener", "noreferrer"],

			config: {
				footnotes: true,
			},
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
			use: "gridsome-plugin-netlify-cms-paths",
			options: {
				contentTypes: ["Portfolios", "Content", "Posts"],
				coverField: "thumbnail",
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
