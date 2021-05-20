<template lang="pug">

	#layout-default.layout

		Header
		main
			nuxt
		Footer
		Video

</template>

<script lang="ts">
import Vue from "vue"
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import Video from "../components/Video.vue"

export default Vue.extend({
	components: {
		Header,
		Footer,
		Video,
	},
},
)

</script>

<style lang="sss" scoped>

@import "../assets/vars.sss"

#layout-default
	main
		> *
			> *:last-child
				@mixin big-vert-padding-bottom

</style>
