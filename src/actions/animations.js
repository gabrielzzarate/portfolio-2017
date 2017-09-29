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
const heading = document.getElementsByClassName('section-head');
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
			.staggerFromTo(heading, 2, {
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
	animateHome(){
		const timelineHome = new TimelineMax({ onComplete: cb });
		const cardOne = document.getElementsByClassName('1-card');
		const cardTwo = document.getElementsByClassName('2-card');
		const cardThree = document.getElementsByClassName('3-card');

		return timelineHome
			.staggerFromTo(cardOne, 2, {
				autoAlpha: 0,
				y: 40
			}, {
				autoAlpha: 1,
				y: 0,
				ease: Expo.easeOut
			}, 0, 1.4)
			.staggerFromTo(cardTwo, 2, {
				autoAlpha: 0,
				y: 40
			}, {
				autoAlpha: 1,
				y: 0,
				ease: Expo.easeOut
			}, 0, 1.8)
			.staggerFromTo(cardThree, 2, {
				autoAlpha: 0,
				y: 40
			}, {
				autoAlpha: 1,
				y: 0,
				ease: Expo.easeOut
			}, 0, 2)
			.staggerFromTo(heading, 2, {
				autoAlpha: 0,
				y: 30
			}, {
				autoAlpha: 1,
				y: 0,
				ease: Expo.easeOut
			}, 0, 1.8)
			.fromTo(aboutLine, 1.8, {
				scaleX: 0
			}, {
				scaleX: 1,
				ease: Expo.easeOut
			}, 1.6, 2.5);
	}
}


