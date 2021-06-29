import postcssConfig from "./postcss.config"

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
		{ src: "~/plugins/vue-youtube-embed", ssr: true },
		{ src: "~/plugins/vue-textarea-autosize", ssr: true },
		{ src: "~/plugins/vue-scroll-reveal", ssr: false },
	],
	buildModules: [
		"@nuxtjs/router",
		"@nuxt/typescript-build",
		"@nuxt/image",
	],
	build: {
		transpile: [
			"vue-youtube-embed",
		],
		babel: {
			cacheDirectory: false,
			configFile: true,
		},
		extractCSS: true,
		extend(config, { isDev }) {
			if (!isDev) {
				const ruleString = "/\\.(png|jpe?g|gif|svg|webp|avif)$/i"

				if (!config.module.rules.filter(rule => rule.test.toString() === ruleString).length) {
					throw "failed to find webpack images rule"
				}

				config.module.rules.forEach(rule => {
					if (rule.test.toString() === ruleString) {
						rule.use = [
							{
								loader: "url-loader",
								options: {
									esModule: false,
									limit: 1000,
									name: "img/[name]_[hash:7].[ext]",
								},
							},
							{
								loader: "image-webpack-loader",
								options: {
									esModule: false,
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
				},
			}
			const postcss = postcssConfig
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
	modules: [
		"@nuxtjs/axios",
		["vue-scrollto/nuxt", {
			duration: 600,
			easing: "ease out",
			offset: -150,
		}],
	],
	head: {
		htmlAttrs: {
			lang: "en",
			class: "werks-ui-html",
		},
		bodyAttrs: {
			class: "werks-ui",
		},
		titleTemplate: "%s | WERKS",
		meta: [
			{ charset: "utf-8" },
			{ name: "robots", content: "noindex, nofollow, noimageindex, noarchive" },
			{ name: "viewport", content: "width=device-width, initial-scale=1, maximum-scale=1" },
			{ hid: "description", name: "description", content: "description content" },
		],
		link: [
			{ rel: "icon", type: "image/x-icon", href: "/favicon.png" },
			// { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Noto+Sans+JP" },
			// { rel: "stylesheet", href: "https://fonts.googleapis.com/css?family=Roboto:300,500,700,900" },
		],
	},
}
