<template lang="pug">

	main#top

		Hero
		
</template>



<script>
	
	import Hero from '~/components/Hero'
	import Footer from '~/components/Footer'

	export default {
		head(){
			return {
				title: 'Home',
				meta: [
					{ hid: 'description', name: 'description', content: 'description text' }
				],
			}
		},
		scrollToTop: true,
		components: {
			Hero,
			Footer,
		},
	}

</script>



<style lang="sss" scoped>

	@import "../assets/vars.sss"

</style>