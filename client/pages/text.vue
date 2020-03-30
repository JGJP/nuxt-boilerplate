<template lang="pug">

	#text
		section
			.container.space-items
				img.large(src="~/assets/images/sample01.jpg")
				h1 text
				p here is some text content, wow, glorious
				p here is some text content, wow, glorious
				h2.space-before h2 header
				p here is some text content, wow, glorious
				h3.space-before h3 header
				p here is some text content, wow, glorious
				h3.space-before h3 header
				p here is some text content, wow, glorious
				h4.space-before h4 header
				p here is some text content, wow, glorious
				ul.list
					li item 1
					li item 2
					li item 3
				img.medium(src="~/assets/images/sample04.jpg")

</template>



<script>
	
	import Footer from '~/components/Footer'

	export default {
		head(){
			return {
				title: 'text',
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