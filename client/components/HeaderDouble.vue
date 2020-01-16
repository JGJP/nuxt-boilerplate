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

		nav(:class="{open: open, closed: !open}" @click="bgclick")

			.container.no-padding

				ul
					li(v-for="item in menu" :class="item.class")
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
					label: "components",
					link: "/components/",
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
		methods: {
			bgclick(){
				if(this.open)
					this.open = false
			}
		}
	}

</script>

<style lang="sss" scoped>

	@import "../assets/vars.sss"
	@import "../assets/burgermenu.sss"

	header
		position: fixed
		width: 100%
		@mixin box-shadow

		#logo-bar

			background: $bg
			height: $logo-bar-height
			@media ($nav-breakpoint)
				height: $header-height-mobile
				padding-top: $unit05
				padding-bottom: 0

			.container

				height: 100%
				display: flex
				justify-content: space-between
				@media ($not-nav-breakpoint)
					flex-wrap: wrap
					align-items: flex-end
				@media ($nav-breakpoint)
					flex-direction: column

				&:last-child
					@media ($nav-breakpoint)
						padding: 0

				.logo
					@media ($not-nav-breakpoint)
						height: 100%
					@media ($nav-breakpoint)
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
						@media ($not-nav-breakpoint)
							display: none
						margin-left: $unit05
						background: $double-nav-fg
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
					@media ($nav-breakpoint)
						text-align: right
						display: flex
						.button
							width: 50%
							text-align: center
							height: $nav-height
							line-height: calc($nav-height - $unit05 * 2)
							margin-right: 0
							border-radius: 0

		nav
			background: $double-nav-bg
			@mixin box-shadow
			border-top: 1px solid color( $double-nav-bg shade(10%) )

			.container
				display: flex
				align-items: stretch

				> ul
					color: $double-nav-color
					height: $nav-height
					width: 100%
					display: flex
					justify-content: stretch
					@media ($not-nav-breakpoint)
						align-items: stretch

					> li
						flex-grow: 1
						position: relative
						border-left: 1px solid color( $double-nav-bg shade(10%) )
						&:last-child
							border-right: 1px solid color( $double-nav-bg shade(10%) )
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
							@media ($nav-breakpoint)
								display: none
							overflow: hidden
							max-height: 0
							@mixin transition max-height
							background: $double-nav-bg
							@mixin box-shadow-down
							@mixin rounded
							border-top-right-radius: 0
							border-top-left-radius: 0

							li
								border-top: 1px solid color( $double-nav-bg shade(10%) )
								a
									padding: $unit05 $unit2
									text-align: left
									white-space: nowrap

					> li:hover
						ul
							max-height: 20em
						ul.shorter
							max-height: 5em

					> li:last-child
						ul
							right: 0
							left: auto


		nav
			@media ($nav-breakpoint)
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
					background: $double-nav-bg-transparent

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
							background: $double-nav-bg
							@mixin rounded
							width: 20em
							margin: 0.25em
							max-width: 100%
							border: 1px solid $double-nav-bg-rim

							a
								padding: 0
								font-size: 1em
								height: $unit3
				.logo
					display: none

</style>