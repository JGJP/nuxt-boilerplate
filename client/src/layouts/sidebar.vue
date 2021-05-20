<template lang="pug">

	#layout-sidebar.layout

		Header
		main
			nuxt
			aside#sidebar
				.container
					aside
						Sidebar
		Footer

</template>

<script lang="ts">
import Vue from "vue"
import Header from "../components/Header.vue"
import Footer from "../components/Footer.vue"
import Sidebar from "../components/Sidebar.vue"

export default Vue.extend({
	components: {
		Header,
		Footer,
		Sidebar,
	},
},
)

</script>

<style lang="sss" scoped>

@import "../assets/vars.sss"

$sidebar-div: 4

.layout
	main
		> *:first-child
			@media ($not-phone)
				@mixin big-vert-padding-bottom

#layout-sidebar
	main
		@media ($not-phone)
			position: relative
			display: flex
			flex-direction: column-reverse
		> *:first-child
			.container
				@media ($not-phone)
					padding-right: calc( $width-full / $sidebar-div + $unit1 )
		aside#sidebar
			@media ($not-phone)
				padding-top: 0
				padding-bottom: 0
			.container
				aside
					@media ($not-phone)
						@mixin medium-vert-padding-top
						position: absolute
						top: 0
						right: 0
						width: calc( $width-full / $sidebar-div )
						padding-left: $unit1
					.inner
						background: $bg
						@mixin box-shadow
						@mixin rounded
						min-height: 20em
						padding: $unit1

</style>
