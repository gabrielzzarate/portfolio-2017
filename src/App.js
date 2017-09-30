import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './actions';
import { CSSTransitionGroup } from 'react-transition-group';

// child components
import Sidebar from './components/Sidebar';
import HomeContainer from './components/HomeContainer';
import AboutContainer from './components/AboutContainer';
import ProjectContainer from './components/ProjectContainer';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="flex-row full-height">
            <Route exact path="/" component={HomeContainer} />
            <Route path="/about" component={AboutContainer} />
            <Route path="/project/:projectURL" component={ProjectContainer}/>


          <header>
            <CSSTransitionGroup
                transitionName="navigation"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnterTimeout={0}
                transitionLeaveTimeout={0}
              >
              <Link onClick={ () => this.props.playHomeAnimation(true) } className="nav-link" to='/'>
                Home
              </Link>
              <Link onClick={ () => this.props.playHomeAnimation(true) } className="nav-link" to='/about'>
                About
              </Link>
            </CSSTransitionGroup>
          </header>
        </div>
      </Router>
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

export default connect(mapStateToProps, mapDispatchToProps)(App);

