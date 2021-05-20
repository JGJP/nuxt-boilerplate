<template lang="pug">

	#index

		Hero

		section
			.container.space-items
				h1 title
				p some content

</template>

<script lang="ts">
import Vue from "vue"
import Hero from "../components/Hero.vue"

export default Vue.extend({
	components: {
		Hero,
	},
	layout: "video",
	scrollToTop: true,
	head() {
		return {
			title: "Home",
			meta: [
				{ hid: "description", name: "description", content: "description text" },
			],
		}
	},
})

</script>

<style lang="sss" scoped>

	@import "../assets/vars.sss"

</style>
