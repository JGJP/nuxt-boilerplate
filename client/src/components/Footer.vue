<template lang="pug">

	footer

		section#prefooter.small-padding

			.container.center.space-items-horz
				p.email.smaller(data-website="moc.liame" data-user="resu")

		section#footer.inverted

			.container

				.grid.start
					.quarter.space-items
					#menu.quarter.space-items
						h4 browse
						ul.list
							li
								nuxt-link(to="/components/") components
							li
								nuxt-link(to="/images/") images
							li
								nuxt-link(to="/text/") text
							li
								nuxt-link(to="/colors/") colors
							li
								nuxt-link(to="/shadows/") shadows
							li
								nuxt-link(to="/form/") form
					.quarter.space-items
						h4 find us
						#sns
							.grid.mobile
								.half
									a#meetup(target="_blank" href="https://www.meetup.com/StartupTokyo/")
										.inner
											img(src="~/assets/images/meetup-icon.png")
								.half
									a#facebook(target="_blank" href="https://www.facebook.com/TokyoStartups/")
										.inner
											img(src="~/assets/images/facebook-icon.png")
							div
							.grid.mobile
								.half
									a#instagram(target="_blank" href="instagram.com/tokyostartups/")
										.inner
											img(src="~/assets/images/instagram-icon.png")
								.half
									a#linkedin(target="_blank" href="https://www.linkedin.com/company/tokyostartups")
										.inner
											img(src="~/assets/images/linkedin-icon.png")
					.quarter.space-items

		section#socket.small-padding.inverted

			.container.center
				span.smaller copyright etc

</template>

<script lang="ts">
import Vue from "vue"

export default Vue.extend({})

</script>

<style lang="sss">

	@import "../assets/vars.sss"

	footer
		#prefooter
			background: $bg--1
			.email
				&:after
					content: attr(data-website) "\0040" attr(data-user) " ta tcatnoc"
					unicode-bidi: bidi-override
					direction: rtl

		#footer
			background: $footer-bg
			h3
				position: relative
				padding-bottom: $unit05
				margin-bottom: $unit2
				&:after
					content: ""
					width: 70%
					left: 0
					bottom: 0
					background: $bg
					height: 1px
					position: absolute
					@media ($phone)
						left: 50%
						transform: translateX(-50%)
						width: 40%
			@mixin big-vert-padding
			background: $footer-bg
			@media ($phone)
				text-align: center
				> .container > .grid > *:not(:last-child)
					@mixin big-vert-margin-bottom
			#menu
				ul
					display: inline-block
			#sns
				.grid.mobile
					&:first-child
						margin-bottom: $unit05
					display: inline-flex
					a
						display: inline-block
						@mixin hover-opacity
						@mixin hover-scale
						&#meetup
							.inner
								border-color: transparent
							img
								transform: scale(2.4)
						.inner
							border: 2px solid $bg
							border-radius: 10em
							img
								max-height: $unit4
								padding: $unit-2
								overflow: visible
						&#linkedin .inner
							img
								padding: calc( $unit-2 + $unit-6 )
			#upcoming
				article
					p.smaller
						opacity: 0.6
						font-weight: $font-weight-bold

		#socket
			background: $socket-bg

	#prefooter

</style>
