import React, { Component } from 'react';
import CardContainer from './CardContainer';
import { CSSTransitionGroup } from 'react-transition-group';

class Home extends Component {
  	render() {
	    return (
		    <div className="home view">
		        <section className="standard-section-padding home-section">
		           <div className="container center-text">
		                <CSSTransitionGroup
		                  transitionName="fade"
		                  transitionAppear={true}
		                  transitionAppearTimeout={500}
		                  transitionEnterTimeout={1000}
		                  transitionLeaveTimeout={3000}
		                >
		                	<div className="section-head home">
		                		<h2 className="section-title">Featured Work</h2>
					    		<span className="section-line"></span>
		                	</div>
		                	<CardContainer playHomeAnimation={this.props.playHomeAnimation} projects={this.props.content.projects} projectLinks={this.props.content.projectLinks} />
		                </CSSTransitionGroup>
		            </div>
		        </section>
		    </div>
    	);
 	}
}

export default Home;

