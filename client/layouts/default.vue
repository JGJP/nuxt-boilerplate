<template lang="pug">

	.layout

		Header
		nuxt

</template>



<style lang="sss">

@import "../assets/vars.sss"

.layout
	overflow: hidden
	position: relative

main
	background: white
	min-height: 20em
	overflow: hidden

body
	background: $black

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
