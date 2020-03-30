import Vue from "vue"
import Router from "vue-router"

import top from "~/pages/index.vue"
import components from "~/pages/components.vue"
import images from "~/pages/images.vue"
import text from "~/pages/text.vue"
import colors from "~/pages/colors.vue"
import shadows from "~/pages/shadows.vue"
import rounding from "~/pages/rounding.vue"

Vue.use(Router)

export function createRouter() {
	return new Router({
		mode: "history",
		scrollBehavior: () => ({
			x: 0,
			y: 0,
		}),
		base: "/",
		linkActiveClass: "active",
		routes: [
			{ path: "/", component: top },
			{ path: "/components/", component: components },
			{ path: "/images/", component: images },
			{ path: "/text/", component: text },
			{ path: "/colors/", component: colors },
			{ path: "/shadows/", component: shadows },
			{ path: "/rounding/", component: rounding },
		]
	})
}
