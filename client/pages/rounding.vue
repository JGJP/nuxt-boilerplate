<template lang="pug">

	#rounding
		section
			.container.space-items
				h1 rounding
				.grid
					.quarter.space-items
						.rounded
							p .rounded
					.quarter.space-items
						.rounded-big
							p .rounded-big
					.quarter.space-items
					.quarter.space-items

</template>



<script>
	
	import Footer from '~/components/Footer'

	export default {
		head(){
			return {
				title: 'rounding',
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
	.rounded,
	.rounded-big
		background: $bg--1
		height: $unit6
		padding: $unit1

</style>