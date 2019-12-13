<template lang="pug">

	.layout

		HeaderDouble
		main
			nuxt
		Footer

</template>



<style lang="sss">

@import "../assets/vars.sss"

main
	margin-top: $header-height
	@media ($tablet)
		margin-top: $header-height-mobile
	> *:first-child
		min-height: 30em

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
