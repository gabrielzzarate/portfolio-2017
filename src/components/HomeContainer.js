import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

import Sidebar from './Sidebar';
import Home from './Home';

import { CSSTransitionGroup } from 'react-transition-group';
import animation from '../actions/animations';

class HomeContainer extends Component {
	constructor(props){
		super(props);
		this.runHomeTransition = this.runHomeTransition.bind(this);
	}

	componentDidMount(){
		animation.animateHome();
		if(this.props.animations.bool === true ){
			this.runHomeTransition();
		}
	}

	runHomeTransition(){
		animation.transitionMain(this.homeBackgroundColor, this.homeBackgroundMain);
	}
	render() {
		const animate = this.props.animations;

		return (
		    <div className="flex-row full-height home-container">
		    	<Sidebar project={null} heading={'home'} animate={this.props.animations.bool} appLocation={this.props.match.path} />
		    	<main className="flex-col flex-three-fourths flex-vertical-three-fourths flex-tablet-full site-content">
			      <CSSTransitionGroup
			        transitionName="change-view"
			        transitionAppear={true}
			        transitionAppearTimeout={animate.viewAnimationDelay}
			        transitionEnterTimeout={3000}
			        transitionLeaveTimeout={3000}
			      >
		        		<Home playHomeAnimation={this.props.playHomeAnimation} animate={this.props.animations.bool} />
		      	</CSSTransitionGroup>

		      <div className="main-background">
		          <div ref={ (div) => { this.homeBackgroundColor = div; } } className="background-piece background-piece-right-color"></div>
		          <div ref={ (div) => { this.homeBackgroundMain = div; } } className="background-piece background-piece-right-main"></div>
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
    animations: state.animations,
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(HomeContainer);

