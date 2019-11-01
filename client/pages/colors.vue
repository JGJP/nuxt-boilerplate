<template lang="pug">

	main#top
		.container
			section
				h1 colors
				
</template>



<script>
	
	import Footer from '~/components/Footer'

	export default {
		head(){
			return {
				title: 'page 1',
				meta: [
					{ hid: 'description', name: 'description', content: 'description text' }
				],
			}
		},
		scrollToTop: true,
		components: {
			Footer,
		},
	}

</script>



<style lang="sss" scoped>

	@import "../assets/vars.sss"

</style>