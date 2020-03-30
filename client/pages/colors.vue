<template lang="pug">

	#colors
		section
			.container.space-items
				h1 colors
				p red:
				.color.red
				p blue:
				.color.blue
				p green:
				.color.green
				p orange:
				.color.orange
				p yellow:
				.color.yellow
				p purple:
				.color.purple

</template>



<script>
	
	import Footer from '~/components/Footer'

	export default {
		head(){
			return {
				title: 'colors',
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
	.color
		height: $unit3
		&.red
			background: $red
		&.blue
			background: $blue
		&.green
			background: $green
		&.orange
			background: $orange
		&.yellow
			background: $yellow
		&.purple
			background: $purple

</style>