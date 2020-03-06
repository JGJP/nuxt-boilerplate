<template lang="pug">

	#images
		section
			.container
				h1 images
		section
			.container
				img(src="~/assets/images/sample01.jpg" loading="lazy")
		section
			.container
				img(src="~/assets/images/sample02.jpg" loading="lazy")
		section
			.container
				img(src="~/assets/images/sample03.jpg" loading="lazy")
		section
			.container
				img(src="~/assets/images/sample04.jpg" loading="lazy")
				
</template>



<script>
	
	import Footer from '~/components/Footer'

	export default {
		head(){
			return {
				title: 'images',
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
	section
		padding-bottom: 100em

</style>