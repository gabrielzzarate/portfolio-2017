import React, { Component } from 'react';
import CardContainer from './CardContainer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

import Sidebar from './Sidebar';
import About from './About';

//import { CSSTransitionGroup } from 'react-transition-group';
//import { TransitionGroup } from 'react-transition-group';

class AboutContainer extends Component {

  render() {
    return (
      <div className="flex-row full-height">
          <Sidebar />
        <main className="flex-col flex-three-fourths flex-vertical-three-fourths flex-tablet-full site-content">
          <About />
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
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutContainer);

