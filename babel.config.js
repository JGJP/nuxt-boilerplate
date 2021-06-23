module.exports = {
	presets: [
		[
			"@nuxt/babel-preset-app",
			{
				corejs: { version: "3.14.0" },
				bugfixes: true,
			},
		],
		"@babel/preset-typescript",
	],
	plugins: ["@babel/plugin-proposal-optional-chaining"],
}