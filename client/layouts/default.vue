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
	@media ($phone)
		margin-top: $header-height-mobile

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
