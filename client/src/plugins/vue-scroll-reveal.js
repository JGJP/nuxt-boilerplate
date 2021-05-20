import Vue from 'vue';
import VueScrollReveal from 'vue-scroll-reveal';

Vue.use(VueScrollReveal,{ 
	class: 'v-scroll-reveal',
	duration: 800,
	opacity: 0,
	scale: 1,
	distance: '10px',
	reset: false,
	viewFactor: .2,
	mobile: false 
});
