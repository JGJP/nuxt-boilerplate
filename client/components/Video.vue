<template lang="pug">
	
	#video.inverted.center
		a.bg(href="#" @click="close")
		a.close(href="#" @click="close")
			img(src="~/assets/images/close.png")
		.youtube-el
			.inner
				youtube(:video-id="'vmV1G1Wn0uo'" 
					player-width="100%"
					player-height="100%"
					v-on:ready="ready"
					v-bind:player-vars="{showinfo: 0}")

</template>


<script>
	
	export default {
		data: () => ({
			player: {}
		}),
		methods: {
			ready(player){
				this.player = player
			},
			close(){
				this.player.stopVideo()
			},
		}
	}

</script>

<style lang="sss">
	
	@import "../assets/vars.sss"

	#video
		@mixin position-absolute
		position: fixed
		&:not(:target)
			opacity: 0
			z-index: -100
		@mixin transition opacity, 0.5s
		opacity: 1
		height: 100vh
		width: 100vw
		background: color( $black a(90%) )
		z-index: 100
		.bg
			cursor: default
			display: block
			@mixin position-absolute
		.youtube-el
			width: 60em
			max-width: 100%
			.inner
				width: 100%
				@util aspect-ratio(16:9)
				> *
					@mixin position-absolute
		.close
			position: absolute
			padding: $unit2
			height: $unit5
			width: $unit5
			right: $unit2
			top: 0

</style>