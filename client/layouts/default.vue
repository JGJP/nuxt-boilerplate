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
	margin-top: $nav-height

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
