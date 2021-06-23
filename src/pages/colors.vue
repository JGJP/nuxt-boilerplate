<template lang="pug">

	#colors
		section
			.container.space-items
				h1 colors
				.grid
					.quarter.space-items
						p red:
						.color.red
					.quarter.space-items
						p blue:
						.color.blue
					.quarter.space-items
						p green:
						.color.green
					.quarter.space-items
						p orange:
						.color.orange
				.grid
					.quarter.space-items
						p yellow:
						.color.yellow
					.quarter.space-items
						p purple:
						.color.purple
					.quarter.space-items
					.quarter.space-items

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
			title: "colors",
			meta: [
				{ hid: "description", name: "description", content: "description text" },
			],
		}
	},
})

</script>

<style lang="sss" scoped>

	@import "../assets/vars.sss"
	.color
		height: $unit5
		&.red
			background: $red
		&.blue
			background: $blue
		&.green
			background: $green
		&.orange
			background: $orange
		&.yellow
			background: $yellow
		&.purple
			background: $purple

</style>
