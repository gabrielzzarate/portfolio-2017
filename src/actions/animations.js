import * as types from './types';
//import { TimelineMax, Expo } from '../lib/TweenMax.min.js';
import { TimelineMax, Expo } from 'gsap';


export function playHomeAnimation(bool){
	return {
		type: types.PLAY_ANIMATE,
		bool
	}
}

export function getAnimationTarget(target){
	return {
		type: types.GET_ANIMATION_TARGET,
		target
	}
}

function cb(){
	console.log('transition complete');
}

function cbContent(){
	console.log('content animation complete');
}

//var tl = new TimelineMax({ onComplete: cb });
//console.log('aboutContent', aboutContent);
//const timelineContent = new TimelineMax({ onComplete: cbContent });
const timelineContent = new TimelineMax({ onComplete: cbContent });

const target = document.querySelector('about-intro-paragraph');
const aboutContent = document.getElementsByClassName('section-head');
const aboutLine = document.getElementsByClassName('section-line');

export default {
	transitionSidebar(colorPanel, mainPanel){
		var timeline = new TimelineMax({ onComplete: cb });
		return timeline
			.to(colorPanel, 1.2, {
				scaleX: 1,
				ease: Expo.easeInOut }, .3)
			.to(mainPanel, 1.2, {
				scaleX: 1,
				ease: Expo.easeInOut }, .4);
	},
	transitionMain(colorPanel, mainPanel){
		var timeline = new TimelineMax({ onComplete: cb });
		return timeline
			.to(colorPanel, 1.2, {
				scaleX: 1,
				ease: Expo.easeInOut }, .3)
			.to(mainPanel, 1.2, {
				scaleX: 1,
				ease: Expo.easeInOut }, .4);
	},
	animateAboutStart(colorPanel, mainPanel, intro){
		var timeline = new TimelineMax({ onComplete: cb });
		return timeline
			.to(colorPanel, 1.2, {
				scaleX: 1,
				ease: Expo.easeInOut }, .3)
			.to(mainPanel, 1.2, {
				scaleX: 1,
				ease: Expo.easeInOut }, .4)
			.staggerFromTo(intro, 2, {
				autoAlpha: 0,
				y: 30
			}, {
				autoAlpha: 1,
				y: 0,
				ease: Expo.easeOut
			}, 0, 2);
	},
	animateAboutContent(){
		return timelineContent
			.staggerFromTo(aboutContent, 2, {
				autoAlpha: 0,
				y: 30
			}, {
				autoAlpha: 1,
				y: 0,
				ease: Expo.easeOut
			}, 0)
			.fromTo(aboutLine, 1.8, {
				scaleX: 0
			}, {
				scaleX: 1,
				ease: Expo.easeOut
			}, .2);
	},
	animateHomeHeading(){
		const timelineHome = new TimelineMax({ onComplete: cb });
		return timelineHome
			.staggerFromTo(aboutContent, 2, {
				autoAlpha: 0,
				y: 30
			}, {
				autoAlpha: 1,
				y: 0,
				ease: Expo.easeOut
			}, 0, 1.4)
			.fromTo(aboutLine, 1.8, {
				scaleX: 0
			}, {
				scaleX: 1,
				ease: Expo.easeOut
			}, 1.6, 2.5);
	}
}


