<template lang="pug">

	#buttons
		section
			.section
				.container.space-items
					h1 buttons
					p default
					.space-items-horz
						button button
						button.ghost button
						a.button anchor
						a.button.ghost anchor ghost
					p secondary
					.space-items-horz
						button.secondary button
						button.secondary.ghost button
			.section.inverted
				.container.space-items
					p inverted
					.space-items-horz
						button button
						button.ghost button
			.section
				.container.space-items
					p call to action
					.space-items-horz
						button.cta button
						button.cta.ghost button

		section
			.container.space-items
				h1 tables
				table.borders
					tr
						th header
						th header
						th header
					tr
						td cell
						td cell
						td cell
					tr
						td cell
						td cell
						td cell

				table.borders
					tr
						th header
						td cell
						td cell
					tr
						th header
						td cell
						td cell
					tr
						th header
						td cell
						td cell


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