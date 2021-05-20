<template lang="pug">

	#shadows
		section
			.container.space-items
				h1 shadows
				.grid
					.quarter.space-items
						.box-shadow
							p .box-shadow
					.quarter.space-items
						.box-shadow-big
							p .box-shadow-big
					.quarter.space-items
					.quarter.space-items

</template>



<script lang="ts">
	import Vue from 'vue'	
	import Footer from '../components/Footer.vue'

	export default Vue.extend({
		head(){
			return {
				title: 'shadows',
				meta: [
					{ hid: 'description', name: 'description', content: 'description text' }
				],
			}
		},
		scrollToTop: true,
		components: {
			Footer,
		},
	})

</script>



<style lang="sss" scoped>

	@import "../assets/vars.sss"
	.box-shadow,
	.box-shadow-big
		height: $unit6
		padding: $unit1

</style>