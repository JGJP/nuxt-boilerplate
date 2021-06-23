<template lang="pug">

	header

		.mobile

			.logo(@click="open = false")
				nuxt-link(to="/")
					img(src="~/assets/images/logo.png" alt="logo" loading="lazy")

			.menu-button(@click="open = !open")
				.bars(:class="{open: open}")

		nav(:class="{open: open, closed: !open}")

			.container

				.logo
					nuxt-link(to="/")
						img(src="~/assets/images/logo.png" alt="logo")

				ul
					li(v-for="item in menu" :class="item.class" @click="open = !open")
						nuxt-link(:to="item.link")
							span {{ item.label }}
						ul(v-if="item.submenu")
							li(v-for="child in item.submenu" @click="open = !open")
								nuxt-link(:to="child.link")
									span {{ child.label }}

</template>

<script lang="ts">

import Vue from "vue"

export default Vue.extend({
	data: () => ({
		open: false,
		menu: [
			{
				label: "components",
				link: "/components/",
			},
			{
				label: "images",
				link: "/images/",
			},
			{
				label: "text",
				link: "/text/",
			},
			{
				label: "colors",
				link: "/colors/",
			},
			{
				label: "boxes",
				link: "#",
				submenu: [
					{
						label: "shadows",
						link: "/shadows/",
					},
					{
						label: "rounding",
						link: "/rounding/",
					},
				],
			},
			{
				label: "form",
				link: "/form/",
			},
		],
	}),
})

</script>

<style lang="sss" scoped>

	@import "../assets/vars.sss"
	@import "../assets/burgermenu.sss"

	header
		position: fixed
		width: 100%

		.logo
			height: $nav-height
			a
				img
					display: block
					padding: $unit05
					@media ($phone)
						padding-left: $unit1
					position: relative
					right: $unit1

		nav
			background: $nav-bg
			@media ($not-phone)
				padding: $header-padding 0

			.container
				display: flex
				justify-content: space-between
				flex-wrap: wrap
				align-items: stretch

				> ul
					color: $nav-color
					height: $nav-height

				.logo a img
					@mixin hover-opacity
					@mixin hover-scale

				> ul
					display: flex
					@media ($not-phone)
						align-items: stretch

					> li
						position: relative
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
							left: 0
							@media ($phone)
								display: none
							overflow: hidden
							max-height: 0
							@mixin transition max-height
							background: $nav-bg
							color: $nav-color
							li
								a
									padding: $unit05 $unit2
									text-align: left
									white-space: nowrap
							li:first-child
								padding-top: $unit05
							li:last-child
								padding-bottom: $unit05

					> li:hover
						ul
							max-height: 10em
						ul.shorter
							max-height: 5em

					> li:last-child
						ul
							right: 0
							left: auto

		.mobile
			@media ($not-phone)
				display: none
			background: $nav-bg
			padding-left: 1.2em
			padding-right: 1.2em
			display: flex
			justify-content: space-between
			align-items: center
			&.open
				border-bottom: 1px solid $nav-bg-rim

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
					background: $nav-bg-transparent

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
							background: $nav-bg
							width: 20em
							margin: 0.25em
							max-width: 100%
							border: 1px solid $nav-bg-rim

							a
								padding: 0
								font-size: 1em
								align-items: center
				.logo
					display: none

</style>
