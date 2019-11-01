<template lang="pug">

	section
		.container.space-items
			h1 buttons
			p some text
			.space-items-horz
				button button
				button.ghost button
				a.button anchor
				a.button.ghost anchor ghost

</template>



<script>
	
	import Footer from '~/components/Footer'

	export default {
		head(){
			return {
				title: 'page 2',
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