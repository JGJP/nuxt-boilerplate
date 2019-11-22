<template lang="pug">

	.layout.sidebar

		HeaderDouble
		main
			nuxt
			section#sidebar
				.container
					aside
						Sidebar
		Footer

</template>



<style lang="sss">

@import "../assets/vars.sss"

$sidebar-div: 4

.layout
	main
		margin-top: $header-height
		@media ($phone)
			margin-top: $header-height-mobile
		> *:first-child
			min-height: 30em

.layout.sidebar
	main
		@media ($not-tablet)
			position: relative
			display: flex
			flex-direction: column-reverse
		> *:first-child
			.container
				@media ($not-tablet)
					padding-right: calc( $width-full / $sidebar-div + $unit1 )
		section#sidebar
			@media ($not-tablet)
				padding-top: 0
				padding-bottom: 0
			.container
				aside
					@media ($not-tablet)
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
						height: 20em
						padding: $unit1

</style>



<script>

	import HeaderDouble from "~/components/HeaderDouble";
	import Footer from "~/components/Footer";
	import Sidebar from "~/components/Sidebar";

	export default {
		components: {
			HeaderDouble,
			Footer,
			Sidebar,
			},
		}

</script>
