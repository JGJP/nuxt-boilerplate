<template lang="pug">
	
	#hero.container

		section.narrow
			img(src="~/assets/images/logo.png" alt="logo")
			.content
				h1
					|some catchphrase,
					.sub
						|really nice slogan
				p
					|more details here
					|in this paragraph text.
					|great!
				nuxt-link(to="/page1/") scroll down


</template>



<style lang="sss">
	
	@import "../assets/vars.sss"

	#hero
		@mixin background-image '../assets/images/hero.png'
		height: 60em
		max-height: 140vw

		// account for header
		padding-top: 6em

		section
			display: flex
			flex-direction: column
			align-items: center
			justify-content: space-between
			height: 100%

			.content
				text-align: center

				a
					@mixin ghost-button $black, white

</style>