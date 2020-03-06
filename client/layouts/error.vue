<template lang="pug">

	#error
		section
			.container.space-items.errorText
				h2(v-if="error.statusCode === 404") 404 error
				h2(v-else) error occured

</template>



<style lang="sss" scoped>

@import "../assets/vars.sss"

#error
	.errorText
		@media ($not-phone)
			min-height: 50vh

</style>



<script>

	export default {
		props: ["error"],
		layout: "default",
		head(){
			return {
				title: "error",
			}
		},
	}

</script>
