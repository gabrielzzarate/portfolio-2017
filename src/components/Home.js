import React, { Component } from 'react';
import CardContainer from './CardContainer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

import { CSSTransitionGroup } from 'react-transition-group';

class Home extends Component {

  	render() {
	    const { animate } = this.props;

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
	                	<CardContainer playHomeAnimation={this.props.playHomeAnimation} projects={this.props.content.projects} />
	                </CSSTransitionGroup>
	            </div>
	        </section>
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);

