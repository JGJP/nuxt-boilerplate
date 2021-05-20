<template lang="pug">

	#form
		section
			.container.space-items
				h1 form
			.container.narrow
				.box
					form.lines.space-items-big(action="https://formspree.io/someid" method="POST" v-scroll-reveal)
						input.full(type="email" name="email" placeholder="email")
						div
							textarea-autosize(:min-height="72" name="message" placeholder="message")
							.right
								button.space-before(type="submit") send >

</template>



<script lang="ts">
	import Vue from 'vue'	
	import Footer from '../components/Footer.vue'

	export default Vue.extend({
		head(){
			return {
				title: 'form',
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
	form
		textarea
			width: 100%
			// resize: none
			height: 2.4em
			// max-height: 20em

</style>