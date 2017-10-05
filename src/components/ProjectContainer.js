import React, { Component } from 'react';
import CardContainer from './CardContainer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

import Sidebar from './Sidebar';
import Project from './Project';
import animation from '../actions/animations';

import { CSSTransitionGroup } from 'react-transition-group';

class ProjectContainer extends Component {
	constructor(props){
		super(props);
		this.runProjectTransition = this.runProjectTransition.bind(this);
	}

	componentDidMount(){
		this.runProjectTransition();
	}

	runProjectTransition(){
		animation.transitionMain(this.projectBackgroundColor, this.projectBackgroundMain);
	}

	render() {
		const projectURL = this.props.match.params.projectURL;

	  	const data = this.props.content.projects.filter((project) => {
	  		return project.projectURL === projectURL;
	  	});

	  	console.log('data', data);

	  	var styles = {
			backgroundColor: data[0].projectColor,
		};

		return (
		  <div className="flex-row full-height">
		    <Sidebar project={data} heading={'project'} animate={this.props.animations.bool} appLocation={this.props.match.path}  />
		    <main className="flex-col flex-three-fourths flex-vertical-three-fourths flex-tablet-full site-content">
		    	<CSSTransitionGroup
			        transitionName="change-view"
			        transitionAppear={true}
			        transitionAppearTimeout={2000}
			        transitionEnterTimeout={3000}
			        transitionLeaveTimeout={3000}
			    >
		      		<Project project={data} />
		      	</CSSTransitionGroup>

		      <div className="main-background">
		      		<div ref={ (div) => { this.projectBackgroundColor = div; } } style={styles} className="background-piece background-piece-right-color"></div>
              		<div ref={ (div) => { this.projectBackgroundMain = div; } } className="background-piece background-piece-right-main"></div>
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

export default connect(mapStateToProps, mapDispatchToProps)(ProjectContainer);

