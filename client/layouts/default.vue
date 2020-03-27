<template lang="pug">

	#layout-default.layout

		Header
		main
			nuxt
		Footer

</template>



<style lang="sss">

@import "../assets/vars.sss"

#layout-default
	main
		> *
			> *:first-child
				@mixin super-big-vert-padding-top
			> *:last-child
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
