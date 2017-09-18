import React, { Component } from 'react';
import CardContainer from './CardContainer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

import Sidebar from './Sidebar';
import Home from './Home';

import { CSSTransitionGroup } from 'react-transition-group';
//import { TransitionGroup } from 'react-transition-group';

class HomeContainer extends Component {
  render() {
  	console.log('Home props', this.props);
    const animate = this.props.animations;

    return (
      <div className="flex-row full-height">
          <Sidebar />
        <main className="flex-col flex-three-fourths flex-vertical-three-fourths flex-tablet-full site-content">
          <CSSTransitionGroup
            transitionName="change-view"
            transitionAppear={animate}
            transitionAppearTimeout={1000}
            transitionEnterTimeout={3000}
            transitionLeaveTimeout={3000}
          >
            <Home animate={this.props.animation} />
          </CSSTransitionGroup>

          <div className="home-background">
            <CSSTransitionGroup
              transitionName="background-color"
              transitionAppear={animate}
              transitionAppearTimeout={1500}
              transitionEnterTimeout={3000}
              transitionLeaveTimeout={3000}
            >
              <div className="home-background-piece background-piece-right-color"></div>
            </CSSTransitionGroup>

            <CSSTransitionGroup
              transitionName="background-main"
              transitionAppear={animate}
              transitionAppearTimeout={1500}
              transitionEnterTimeout={3000}
              transitionLeaveTimeout={3000}
            >
              <div className="home-background-piece background-piece-right-main"></div>
            </CSSTransitionGroup>
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

