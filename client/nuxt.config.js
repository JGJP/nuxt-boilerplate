export default {
	render: {
		injectScripts: true,
		resourceHints: false,
	},
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
		base: "/",
	},
	plugins: [
		// "~/plugins/vue-scrollto",
		// "~/plugins/vue-youtube-embed",
		{ src: "~/plugins/vue-textarea-autosize", ssr: true },
		{ src: "~/plugins/vue-scroll-reveal", ssr: false },
	],
	buildModules: [
		"@nuxtjs/router",
	],
	build: {
		// transpile: [
		// 	/(.+)(@nuxtjs\\axios\\lib\\)(.+)(\.js)$/,
		// ],
		// hardSource: true,
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
				const ruleString = "/\\.(png|jpe?g|gif|svg|webp)$/i"
				if(!config.module.rules
					.filter(rule => rule.test.toString() === ruleString)
					.length)
					throw "failed to find webpack images rule"
				config.module.rules.forEach((rule) => {
					if (rule.test.toString() === ruleString) {
						rule.use = [
							{
								loader: "url-loader",
								options: {
									limit: 1000,
									name: "img/[name]_[hash:7].[ext]",
								},
							},
							{
								loader: "image-webpack-loader",
								options: {
									mozjpeg: {
										progressive: true,
										quality: 50,
									},
									// optipng: {
									// 	enabled: true,
									// },
									pngquant: {
										quality: [0.5, 0.5],
										speed: 1,
										verbose: true,
									},
									// webp: {
									// 	quality: 75,
									// },
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
	],
	head: {
		htmlAttrs: {
			lang: "en",
		},
		titleTemplate: "%s | NUXT",
		meta: [
			{ charset: "utf-8" },
			{ name: "robots", content: "noindex, nofollow, noimageindex, noarchive" },
			{ name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
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
