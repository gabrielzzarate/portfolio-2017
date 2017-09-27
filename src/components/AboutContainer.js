import React, { Component } from 'react';
import CardContainer from './CardContainer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

import Sidebar from './Sidebar';
import About from './About';
import animation from '../actions/animations';
import { CSSTransitionGroup } from 'react-transition-group';

class AboutContainer extends Component {
	constructor(props){
		super(props);
		this.runAboutTransition = this.runAboutTransition.bind(this);
		this.runAboutContentAnimation = this.runAboutContentAnimation.bind(this);
	}

	componentDidMount(){
		this.runAboutTransition();
	}

	runAboutTransition(){
		//console.log('target', this.props.animation.animationTarget);
		const target = document.getElementsByClassName('about-intro-paragraph');
		console.log('target', target);
		animation.animateAboutStart(this.aboutBackgroundColor, this.aboutBackgroundMain, target);
	}

	runAboutContentAnimation(){
		//animation.animateAboutContent(this.props.animation.animationTarget);
	}

	render() {
		console.log('about container props', this.props.animation);
		return (
		  <div className="flex-row full-height">
		      <Sidebar appLocation={this.props.match.path} />
		    <main className="flex-col flex-three-fourths flex-vertical-three-fourths flex-tablet-full site-content" onScroll={() => this.runAboutContentAnimation() } >
		    	<CSSTransitionGroup
			        transitionName="change-view"
			        transitionAppear={true}
			        transitionAppearTimeout={2000}
			        transitionEnterTimeout={3000}
			        transitionLeaveTimeout={3000}
			    >
		      		<About getAnimationTarget={this.props.getAnimationTarget} />
		      	</CSSTransitionGroup>

		       	<div className="main-background">
		      		<div ref={ (div) => { this.aboutBackgroundColor = div; } } className="background-piece background-piece-right-color"></div>
              		<div ref={ (div) => { this.aboutBackgroundMain = div; } } className="background-piece background-piece-right-main"></div>
		      	</div>
		    </main>
		 </div>
		);
	}
}

function mapDispatchToProps(dispatch){
  return bindActionCreators(ActionCreators, dispatch);
}


function mapStateToProps(state){
  return {
    content: state.content,
    animation: state.animations,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);

