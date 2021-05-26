<template lang="pug">

	#images
		section
			.container
				h1 images
		section
			.container
				img(src="~/assets/images/sample01.jpg" loading="lazy")
		section
			.container
				img(src="~/assets/images/sample02.jpg" loading="lazy")
		section
			.container
				img(src="~/assets/images/sample03.jpg" loading="lazy")
		section
			.container
				img(src="~/assets/images/sample04.jpg" loading="lazy")

</template>

<script lang="ts">
import Vue from "vue"
import Footer from "~/components/Footer.vue"

export default Vue.extend({
	components: {
		Footer,
	},
	scrollToTop: true,
	head() {
		return {
			title: "images",
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
