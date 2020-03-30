<template lang="pug">
	
	footer

		section#prefooter.small-padding

			.container.center.space-items-horz
				p.email.smaller(data-website="moc.liame" data-user="resu")

		section#footer.inverted

			.container

		section#socket.small-padding.inverted

			.container.center
				span.smaller copyright etc
		
</template>



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

		#socket
			background: $socket-bg

	#prefooter

</style>