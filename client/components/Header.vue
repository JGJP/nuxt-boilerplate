<template lang="pug">

	header

		.mobile
			
			nuxt-link(to="/") 
				img(src="~/assets/images/logo.png" alt="logo")

			.menu-button(@click="open = !open")
				.bars(:class="{open: open}")

		nav(:class="{open: open, closed: !open}")

			.container

				.logo
					nuxt-link(to="/")
						img(src="~/assets/images/logo.png" alt="logo")

				ul
					li
						nuxt-link(to="/page1/")
							span page 1
					li
						nuxt-link(to="/page2/")
							span page 2
						ul
							li
								nuxt-link(to="/page 3/")
									span page 3
							li
								nuxt-link(to="/page 4/")
									span page 4

</template>

<script>
	
	export default {
		data: () => ({
			open: false
		}),
	}

</script>

<style lang="sss">

	@import "../assets/vars.sss"
	@import "../assets/burgermenu.sss"

	header
		position: fixed
		width: 100%

		nav
			background: $nav-bg

			.container
				display: flex
				justify-content: space-between
				flex-wrap: wrap
				align-items: stretch

				.logo,
				> ul
					color: $white
					@media ($not-phone)
						height: 3.5em

				.logo
					a
						img
							@mixin hover-opacity
							@mixin hover-scale
							display: block
							padding: 1em

				> ul
					display: flex
					@media ($not-phone)
						align-items: stretch

					> li
						a
							@mixin hover-opacity
							@mixin hover-scale
							height: 100%
							display: flex
							flex-direction: column
							justify-content: space-around
							padding: 0 1em
							padding-top: 0.25em
							text-align: center
							@mixin font-range 0.8em, 1em, 34em 42em

						ul
							@media ($phone)
								display: none
							background: $nav-bg
							@mixin transparent
							overflow: hidden
							max-height: 0
							@mixin transition max-height

							li
								background: $nav-bg
								a
									text-align: left
							li:first-child
								padding-top: 0.5em
							li:last-child
								padding-bottom: 0.5em

					> li:hover
						ul
							max-height: 10em
						ul.shorter
							max-height: 5em

		.mobile
			@media ($not-phone)
				display: none
			img
				padding: 0.35em
				height: 2.5em
			background: $white
			padding: .4em 1.2em
			display: flex
			justify-content: space-between
			align-items: center
			&.open
				border-bottom: 1px solid $white-rim

		nav
			@media ($phone)
				display: flex
				flex-direction: column

				&.closed
					padding: 0
					height: 0
					opacity: 0
					visibility: hidden
					transition: opacity $trans-time ease
					transition: visibility 0s $trans-time
					transition: height 0s $trans-time
					transition: padding 0s $trans-time

				&.open
					padding: 1.2em
					height: calc(100vh - 2.5em - .4em * 2)
					visibility: visible
					opacity: 1
					transition: opacity $trans-time $ease-out
					background: $white-transparent

				.container
					flex-direction: column
					justify-content: center
					height: 100%
					padding: 0

					ul
						flex-direction: column
						align-items: center
						justify-content: space-around
						height: 20em
						max-width: 100%

						li
							flex: 1
							background: $white
							width: 20em
							margin: 0.25em
							max-width: 100%
							border: 1px solid $white-rim

							a
								padding: 0
								font-size: 1em
				.logo
					display: none

</style>