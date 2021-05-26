module.exports = {
	presets: [
		[
			"@nuxt/babel-preset-app",
			{
                corejs: { version: "3.12.1" },
                bugfixes: true,
			},
		],
		"@babel/preset-typescript",
	],
	plugins: ["@babel/plugin-proposal-optional-chaining"],
}