import React, { Component } from 'react';
import CardContainer from './CardContainer';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from '../actions';

import Sidebar from './Sidebar';
import Home from './Home';

import { CSSTransitionGroup } from 'react-transition-group';
import { TransitionGroup } from 'react-transition-group';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      active: this.props.active
    }
  }
  componentDidMount(){
    //this.props.active == true;
    this.setState({ active: true });
  }
  componentWillUnMount(){
    this.setState({ active: false });
  }
  render() {
    return (
      <main className="flex-col flex-three-fourths flex-vertical-three-fourths flex-tablet-full site-content">
          <Sidebar />
          <Home />
     </main>
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

