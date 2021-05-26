<template lang="pug">

	#layout-default.layout

		Header
		main
			nuxt
		Footer

</template>

<script lang="ts">

import Vue from "vue"
import Header from "~/components/Header.vue"
import Footer from "~/components/Footer.vue"

export default Vue.extend({
	components: {
		Header,
		Footer,
	},
},
)

</script>

<style lang="sss">

@import "../assets/vars.sss"

#layout-default
	main
		> *
			> *:first-child:not(#hero)
				@mixin super-big-vert-padding-top
			> *:last-child
				@mixin big-vert-padding-bottom

</style>
