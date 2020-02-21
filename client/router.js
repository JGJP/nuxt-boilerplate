import Vue from "vue"
import Router from "vue-router"

import top from "~/pages/index.vue"
import components from "~/pages/components.vue"

Vue.use(Router)

export function createRouter() {
	return new Router({
		mode: "history",
		routes: [
			{ path: "/", component: top },
			{ path: "/components/", component: components },
		]
	})
}