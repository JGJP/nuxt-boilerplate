export default {
	loading: false,
	pageTransition: {
		name: "page",
		mode: "out-in",
	},
	css: [
		"@/assets/base.sss", 
		"@/assets/transitions.sss",
	],
	generate: {
		routes: [
			"/",
			"/components/",
			"/colors/",
		],
	},
	router: {
		linkActiveClass: "active",
	},
	plugins: [
		// "~/plugins/vue-scrollto",
		// "~/plugins/vue-youtube-embed",
		// "~/plugins/vue-textarea-autosize",
		{ src: "~/plugins/vue-scroll-reveal", ssr: false },
	],
	buildModules: [
		"@nuxtjs/router",
	],
	build: {
		// transpile: [
		// 	/(.+)(@nuxtjs\\axios\\lib\\)(.+)(\.js)$/,
		// ],
		babel: {
			presets: function ({isServer}, [preset, options]) {
				const r = [
					[
						preset, {
							buildTarget: isServer ? 'server' : 'client',
							...options
						}
					]
				]
				r[0][1].targets = {
					"browsers": ["> 1%", "last 2 versions"],
					ie: 11
				}
				r[0][1].polyfills = [
					// 'es6.array.iterator',
					// 'es6.promise',
					// 'es6.object.assign',
					// 'es7.promise.finally',
					// 'es6.symbol',
					// 'es6.array.find',
					'es6.array.from',
				]
				return r
			},
			plugins: [
				'@babel/plugin-transform-runtime'
			],
		},
		extractCSS: true,
		extend (config, { isDev, isClient, isServer }) {
			if (!isDev) {
				config.module.rules.forEach((rule) => {
					if (rule.test.toString() === "/\\.(png|jpe?g|gif|svg)$/") {
						rule.use = [
							{
								loader: "url-loader",
								options: {
									limit: 10000,
									name: "img/[name].[hash:7].[ext]",
								},
							},
							{
								loader: "image-webpack-loader",
								options: {
									mozjpeg: {
										progressive: true,
										quality: 65,
									},
									optipng: {
										enabled: true,
									},
									pngquant: {
										quality: "65-90",
										speed: 1,
										verbose: true,
									},
								},
							},
						]
						delete rule.loader
						delete rule.options
					}
				})
			}
			const vueStyle = { loader: "vue-style-loader", options: { sourceMap: true } }
			const css = {
				loader: "css-loader",
				options: {
					sourceMap: true,
					importLoaders: 2,
					onlyLocals: false
				}
			}
			const postcss = {
				loader: "postcss-loader",
				options: {
					parser: "sugarss",
					sourceMap: true,
					plugins: loader => [
						require("postcss-easy-import")({ extensions: [".sss"] }),
						require("postcss-mixins"),
						require("precss"),
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
					order: "presetEnvAndCssnanoLast"
				}
			}
			const cssModule = {
				...css,
				options: {
					...css.options,
					localIdentName: "[local]_[hash:base64:5]",
					modules: true,
				},
			}
			config.module.rules.push({
				test: /\.sss$/,
				oneOf: [
					{ resourceQuery: /module/, use: [vueStyle, cssModule, postcss] },
					{ use: [vueStyle, css, postcss] },
				],
			})		
		},
	},
	babel: {
		presets: ["env"],
	},
	vendor: ["babel-polyfill", "image-webpack-loader"],
	modules: [
		// "@nuxtjs/axios",
		["vue-scrollto/nuxt", {
			duration: 800,
			easing: "ease out",
			offset: -300,
		}],
	]
	head: {
		titleTemplate: "%s | NUXT",
		meta: [
			{ charset: "utf-8" },
			{ name: "robots", content: "noindex, nofollow, noimageindex, noarchive" },
			{ name: "viewport", content: "width=device-width, initial-scale=1" },
			{ hid: "description", name: "description", content: "description content", },
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.png" },
			// { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Noto+Sans+JP" },
			// { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,500,700,900" },
		],
		// script: [
		// 	{ src: "https://cdn.polyfill.io/v2/polyfill.js?features="+
		// 		"String.prototype.includes,"+
		// 		"Array.prototype.find,"+
		// 		"Array.prototype.from,"+
		// 		"Promise,"+
		// 		"Object.assign"
		// 	},
		// ],
	},
}
