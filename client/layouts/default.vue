<template lang="pug">

	.layout

		Header
		main
			nuxt
		Footer

</template>



<style lang="sss">

@import "../assets/vars.sss"

main
	margin-top: $nav-height

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
