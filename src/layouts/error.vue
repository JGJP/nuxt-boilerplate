<template lang="pug">

	#error
		section
			.container.space-items.errorText
				h2(v-if="error.statusCode === 404") 404 error
				h2(v-else) error occured

</template>

<script lang="ts">

import Vue from "vue"

export default Vue.extend({
	layout: "default",
	props: ["error"],
	head() {
		return {
			title: "error",
		}
	},
})

</script>

<style lang="sss" scoped>

@import "../assets/vars.sss"

#error
	.errorText
		@media ($not-phone)
			min-height: 50vh

</style>
