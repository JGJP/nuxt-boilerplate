<template lang="pug">

	#layout-default.layout

		HeaderDouble
		main
			nuxt
		Footer

</template>



<style lang="sss">

@import "../assets/vars.sss"

#layout-default
	main
		> *:first-child
			@mixin big-vert-padding-bottom

</style>



<script>

	import HeaderDouble from '~/components/HeaderDouble';
	import Footer from '~/components/Footer';

	export default {
		components: {
			HeaderDouble,
			Footer,
			},
		}

</script>
