<template lang="pug">

	#layout-default.layout

		Header
		main
			nuxt
		Footer
		Video

</template>



<style lang="sss" scoped>

@import "../assets/vars.sss"

#layout-default
	main
		> *
			> *:last-child
				@mixin big-vert-padding-bottom

</style>



<script>

	import Header from '~/components/Header';
	import Footer from '~/components/Footer';
	import Video from '~/components/Video';

	export default {
		components: {
			Header,
			Footer,
			Video,
			},
		}

</script>
