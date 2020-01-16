<template lang="pug">

	#layout-fullscreen.layout
		main
			nuxt

</template>



<style lang="sss">

@import "../assets/vars.sss"

body
	overflow-y: auto

#layout-fullscreen
	main
		> *:first-child
			min-height: 100vh
		margin-top: 0
		@media ($nav-breakpoint)
			margin-top: 0
		> *:first-child
			@mixin big-vert-padding-bottom

</style>



<script>

	import Header from '~/components/Header';
	import Footer from '~/components/Footer';

	export default {
		components: {
			Header,
			Footer,
			},
		}

</script>
