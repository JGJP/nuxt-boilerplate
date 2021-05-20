<template lang="pug">

	#text
		section
			.container.space-items
				img.big(src="~/assets/images/sample01.jpg")
				h1 Lorem Ipsum
				h2.space-before What is Lorem Ipsum?
				p Lorem Ipsum is simply <a href="#">dummy text</a> of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
				h2.space-before Where does it come from?
				p Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.
				p The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
				h3.space-before h3 header
				p here is some text content, wow, glorious
				h4.space-before h4 header
				p here is some text content, wow, glorious
				h5.space-before h5 header
				p here is some text content, wow, glorious
				h6.space-before h6 header
				p here is some text content, wow, glorious
				ul.list
					li item 1
					li item 2
					li item 3
				img.medium(src="~/assets/images/sample04.jpg")

</template>



<script lang="ts">
	import Vue from 'vue'
	import Footer from '../components/Footer.vue'

	export default Vue.extend({
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
	})

</script>



<style lang="sss" scoped>

	@import "../assets/vars.sss"

</style>