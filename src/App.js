import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './actions';
import { CSSTransitionGroup } from 'react-transition-group';

// child components
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';


class App extends Component {
  render() {
    console.log('App props', this.props);
    return (
      <Router>
        <div className="flex-row full-height">
          <Sidebar content={this.props.content} />
          <main className="flex-col flex-three-fourths flex-vertical-three-fourths flex-tablet-full site-content">
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/project/:projectURL" component={Project}/>
          </main>

          <header>
            <CSSTransitionGroup
                transitionName="navigation"
                transitionAppear={true}
                transitionAppearTimeout={1000}
                transitionEnterTimeout={0}
                transitionLeaveTimeout={0}
              >
              <Link className="nav-link" to='/'>
                Home
              </Link>
              <Link className="nav-link" to='/about'>
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

