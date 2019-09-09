const postcssPlugins = require('./../postcss.plugins.js')

module.exports = {
	parser: require('sugarss'),
	plugins: postcssPlugins
};