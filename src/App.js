import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { ActionCreators } from './actions';


// child components
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';
import Project from './components/Project';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="flex-row full-height">
          <Sidebar />
          <main className="flex-col flex-three-fourths site-content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
            <Route path="/project" component={Project} />
            <Route path="/packages/:projectName"/>
          </main>

          <header>
            <Link className="nav-link transition-link" to='/'>
              <span>H</span>
              <span>o</span>
              <span>m</span>
              <span>e</span>
            </Link>
            <Link className="nav-link transition-link" to='/about'>
              <span>A</span>
              <span>b</span>
              <span>o</span>
              <span>u</span>
              <span>t</span>
            </Link>
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

