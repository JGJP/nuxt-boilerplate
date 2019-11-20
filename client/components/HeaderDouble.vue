<template lang="pug">

	header

		#logo-bar.section.small-padding

			.container

				.logo
					nuxt-link(to="/")
						img(src="~/assets/images/logo.gif" alt="logo")

					.mobile(@click="open = !open")
						.menu-button
							.bars(:class="{open: open}")

				.ctas.space-items-horz
					nuxt-link.button.secondary.ghost(to="/") contact
					nuxt-link.button.secondary(to="/") reserve

		nav(:class="{open: open, closed: !open}")

			.container.no-padding

				ul
					li(v-for="item in menu")
						nuxt-link(:to="item.link")
							span {{ item.label }}
						ul(v-if="item.submenu")
							li(v-for="child in item.submenu")
								nuxt-link(:to="child.link")
									span {{ child.label }}

</template>

<script>
	
	export default {
		data: () => ({
			open: false,
			menu: [
				{
					label: "buttons",
					link: "/buttons/",
					submenu: [
						{
							label: "child",
							link: "/child/",
						},
						{
							label: "child",
							link: "/child/",
						},
					]
				},
				{
					label: "buttons",
					link: "/buttons/",
				},
				{
					label: "buttons",
					link: "/buttons/",
				},
				{
					label: "buttons",
					link: "/buttons/",
				},
				{
					label: "colors",
					link: "/colors/",
				},
			],
		}),
	}

</script>

<style lang="sss">

	@import "../assets/vars.sss"
	@import "../assets/burgermenu.sss"

	header
		position: fixed
		width: 100%
		@mixin box-shadow

		#logo-bar

			background: $bg
			height: $logo-bar-height
			@media ($phone)
				height: $header-height-mobile
				padding-top: $unit05
				padding-bottom: 0

			.container

				height: 100%
				display: flex
				justify-content: space-between
				@media ($not-phone)
					flex-wrap: wrap
					align-items: flex-end
				@media ($phone)
					flex-direction: column

				&:last-child
					@media ($phone)
						padding: 0

				.logo
					@media ($not-phone)
						height: 100%
					@media ($phone)
						min-height: 0
						padding: 0 $unit1
						display: flex
						margin-bottom: $unit05
					a
						flex-grow: 1
						img
							@mixin hover-opacity
							@mixin hover-scale
							display: block

					.mobile
						@media ($not-phone)
							display: none
						margin-left: $unit05
						background: $nav-fg
						position: relative
						padding-bottom: 0.6em
						cursor: pointer
						&:after
							content: "MENU"
							color: $bg
							font-size: 0.6em
							text-align: center
							width: 100%
							position: absolute
							left: 0
							bottom: 0.2em
						

				.ctas
					@media ($phone)
						text-align: right
						display: flex
						.button
							width: 50%
							text-align: center
							height: 3em
							margin-right: 0
							border-radius: 0

		nav
			background: $nav-bg
			@mixin box-shadow
			border-top: 1px solid color( $nav-bg shade(10%) )

			.container
				display: flex
				align-items: stretch

				> ul
					color: $nav-color
					height: $nav-height
					width: 100%
					display: flex
					justify-content: stretch
					@media ($not-phone)
						align-items: stretch

					> li
						flex-grow: 1
						position: relative
						border-left: 1px solid color( $nav-bg shade(10%) )
						&:last-child
							border-right: 1px solid color( $nav-bg shade(10%) )
						a
							@mixin hover-opacity
							@mixin hover-scale
							height: 100%
							display: flex
							flex-direction: column
							justify-content: space-around
							text-align: center
							@mixin font-range 0.8em, 1em, 34em 42em
						> a
							padding: 0 $unit1
							padding-top: 0.25em
							padding-bottom: 0

						ul
							position: absolute
							top: 100%
							min-width: 100%
							left: 0
							@media ($phone)
								display: none
							overflow: hidden
							max-height: 0
							@mixin transition max-height
							background: $nav-bg
							@mixin box-shadow-down
							@mixin rounded
							border-top-right-radius: 0
							border-top-left-radius: 0

							li
								border-top: 1px solid color( $nav-bg shade(10%) )
								a
									padding: $unit05 $unit2
									text-align: left
									white-space: nowrap

					> li:hover
						ul
							max-height: 10em
						ul.shorter
							max-height: 5em

					> li:last-child
						ul
							right: 0
							left: auto


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
					padding-top: 3em
					height: calc(100vh - 6em - .4em * 2)
					visibility: visible
					opacity: 1
					transition: opacity $trans-time $ease-out
					background: $nav-bg-transparent

				.container
					flex-direction: column
					justify-content: flex-start
					height: 100%
					padding: 0

					ul
						flex-direction: column
						align-items: center
						justify-content: space-between
						max-height: 100%
						max-width: 100%

						li
							flex: 1
							background: $nav-bg
							@mixin rounded
							width: 20em
							margin: 0.25em
							max-width: 100%
							border: 1px solid $nav-bg-rim

							a
								padding: 0
								font-size: 1em
								height: $unit3
				.logo
					display: none

</style>