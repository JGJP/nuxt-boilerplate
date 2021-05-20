<template lang="pug">

	#layout-fullscreen.layout
		main
			nuxt

</template>

<script lang="ts">

	import Header from '~/components/Header.vue';
	import Footer from '~/components/Footer.vue';

	export default {
		components: {
			Header,
			Footer,
			},
		}

</script>

<style lang="sss" scoped>

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


