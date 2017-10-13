import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';
import { TimelineMax } from 'gsap';

import Sidebar from './Sidebar';
import Project from './Project';
import animation from '../actions/animations';

import ProjectList from './ProjectList';

import { CSSTransitionGroup } from 'react-transition-group';


function cb(){
	console.log('transition complete');
}

class ProjectContainer extends Component {
	constructor(props){
		super(props);
		this.runProjectTransition = this.runProjectTransition.bind(this);
	}

	componentDidMount(){
		document.body.scrollTo(0,0);
		this.runProjectTransition();
	}

	runProjectTransition(){
		if( document.body.classList.contains('isMobile') ){
			animation.transitionMain(this.projectBackgroundColorMobile, this.projectBackgroundMainMobile);
			animation.animateProjectEnter();
		} else {
			animation.transitionMain(this.projectBackgroundColor, this.projectBackgroundMain);
			animation.animateProjectEnter();
		}
		
	}

	render() {
		const projectURL = this.props.match.params.projectURL;

	  	const data = this.props.content.projects.filter((project) => {
	  		return project.projectURL === projectURL;
	  	});

	  	var styles = {
			backgroundColor: data[0].projectColor,
		};

		return (
			<div>
			<div className="project-container flex-row full-height">
		    <Sidebar project={data} heading={'project'} animate={this.props.animations.bool} appLocation={this.props.match.path}  />
		    <main className="flex-col flex-three-fourths flex-vertical-three-fourths flex-tablet-full site-content">
		    	<CSSTransitionGroup
			        transitionName="change-view"
			        transitionAppear={true}
			        transitionAppearTimeout={900}
			        transitionEnterTimeout={3000}
			        transitionLeaveTimeout={3000}
			        className="transition-group-wrapper"
				>
		      		<Project project={data} />

		      		<ProjectList projects={this.props.content.projects} current={data[0]} runProjectTransition={this.runProjectTransition} />
		      	</CSSTransitionGroup>
		      	<div className="main-background">
	      			<div ref={ (div) => { this.projectBackgroundColor = div; } } style={styles} className="background-piece background-piece-right-color"></div>
          			<div ref={ (div) => { this.projectBackgroundMain = div; } } className="background-piece background-piece-right-main"></div>
	      		</div>
		    </main>
		    </div>
		    <div className="main-background mobile">
	      		<div ref={ (div) => { this.projectBackgroundColorMobile = div; } } style={styles} className="background-piece background-piece-right-color"></div>
          		<div ref={ (div) => { this.projectBackgroundMainMobile = div; } } className="background-piece background-piece-right-main"></div>
	      	</div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);

