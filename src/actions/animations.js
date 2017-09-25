import * as types from './types';
//import { TimelineMax, Expo } from '../lib/TweenMax.min.js';
import { TimelineMax, Expo } from 'gsap';

export function playHomeAnimation(bool){
	return {
		type: types.PLAY_ANIMATE,
		bool
	}
}

function cb(){
	console.log('transition complete');
}

//var tl = new TimelineMax({ onComplete: cb });

export default {
	transitionSidebar(colorPanel, mainPanel){
		var tl = new TimelineMax({ onComplete: cb });
		return tl
			//.pause(0, true)
			.to(colorPanel, 1.2, {
				scaleX: 1,
				ease: Expo.easeInOut }, .3)
			.to(mainPanel, 1.2, {
				scaleX: 1,
				ease: Expo.easeInOut }, .4);
			//.remove();
	},
	transitionMain(colorPanel, mainPanel){
		var tl = new TimelineMax({ onComplete: cb });
		return tl
			.to(colorPanel, 1.2, {
				scaleX: 1,
				ease: Expo.easeInOut }, .3)
			.to(mainPanel, 1.2, {
				scaleX: 1,
				ease: Expo.easeInOut }, .4);
			//.remove();
	},
}
