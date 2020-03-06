import Vue from "vue"
import Router from "vue-router"

import top from "~/pages/index.vue"
import components from "~/pages/components.vue"
import images from "~/pages/images.vue"

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
		]
	})
}
