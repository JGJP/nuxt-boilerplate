<template lang="pug">

	section#hero.no-padding
		.container.superwide

</template>

<style lang="sss">

	@import "../assets/vars.sss"

	#hero
		background: $bg--1
		.container
			height: 100%
		.container.superwide
			height: 30em
			max-height: 140vw
			@mixin background-image '../assets/images/hero.jpg'

</style>
