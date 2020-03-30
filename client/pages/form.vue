<template lang="pug">

	#form
		section
			.container.space-items
				h1 form
			.container.narrow
				.box
					form.space-items-big(action="https://formspree.io/someid" method="POST" v-scroll-reveal)
						input.full(type="email" name="email" placeholder="email")
						div
							textarea-autosize(:min-height="72" name="message" placeholder="message")
							.right
								button.space-before(type="submit") send >

</template>



<script>
	
	import Footer from '~/components/Footer'

	export default {
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
	}

</script>



<style lang="sss" scoped>

	@import "../assets/vars.sss"
	.box-shadow,
	.box-shadow-big
		height: $unit6
		padding: $unit1

</style>