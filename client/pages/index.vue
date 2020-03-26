<template lang="pug">

	#index

		Hero

		section
			.container.space-items
				h1 title
				p some content

</template>



<script>
	
	import Hero from '~/components/Hero'

	export default {
		head(){
			return {
				title: 'Home',
				meta: [
					{ hid: 'description', name: 'description', content: 'description text' }
				],
			}
		},
		layout: "video",
		scrollToTop: true,
		components: {
			Hero,
		},
	}

</script>



<style lang="sss" scoped>

	@import "../assets/vars.sss"

</style>