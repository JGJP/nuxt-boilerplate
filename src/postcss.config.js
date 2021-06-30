module.exports = {
	loader: "postcss-loader",
	options: {
		parser: "sugarss",
		sourceMap: true,
		plugins: () => [
			require("postcss-easy-import")({
				extensions: [".sss"]
			}),
			require("postcss-mixins"),
			require("precss"),
			require("postcss-functions")({
				functions: require("./postcss-functions")
			}),
			require("postcss-color-short"),
			require("postcss-color-function"),
			require("postcss-utilities")(),
			require("postcss-combine-duplicated-selectors"),
			require("autoprefixer"),
			require("postcss-mq-last"),
			require("postcss-join-transitions"),
			require("postcss-responsive-type"),
			require("css-mqpacker"),
		],
		order: "presetEnvAndCssnanoLast",
	},
}
