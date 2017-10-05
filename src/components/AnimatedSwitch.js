import React, { Component } from "react";
import { Switch } from "react-router-dom";
import TransitionGroup from "react-transition-group/TransitionGroup";

import animation from '../actions/animations';

class AnimatedSwitch extends Switch {
	constructor(props){
		super(props);
		this.runHomeTransition = this.runHomeTransition.bind(this);
	}

	componentWillAppear(cb) {
		console.log("componentWillAppear");
		//animation.animateHome();
		//animation.animateHome();
		//this.runHomeTransition();
	}

	componentWillEnter(cb) {
		console.log("componentWillEnter");
	}

	componentWillLeave(cb) {
		console.log("componentWillLeave");

		animation.animateHome();
		this.runHomeTransition();
	}

	runHomeTransition(){
		console.log('runing homie');
		const homeColor = document.getElementsByClassName('background-home-color');
		const homeMain = document.getElementsByClassName('background-home-main');
		animation.transitionMain(homeColor, homeMain);
	}

	render() {
		// const style = {
		// 	opacity: Animated.template`${this.state.animate}`,
		// 	transform: Animated.template`
		// 		translate3d(0,${this.state.animate.interpolate({
		// 		inputRange: [0, 1],
		// 		outputRange: ["12px", "0px"]
		// 	})},0)
		// 	`
		// };
		return (
			super.render()
		);
	}
};

export default AnimatedSwitch;
