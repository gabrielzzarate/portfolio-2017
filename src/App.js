import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
//import './assets/production/css/portfolio-main.min.css';


// child components
import Sidebar from './components/Sidebar';
import Home from './components/Home';
import About from './components/About';


class App extends Component {
  render() {
    return (
      <Router>
        <div className="flex-row full-height">
          <Sidebar />
          <main className="flex-col flex-three-fourths site-content">
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </main>

          <header>
            <Link className="nav-link" to='/'>
              <span>H</span>
              <span>o</span>
              <span>m</span>
              <span>e</span>
            </Link>
            <Link className="nav-link" to='/about'>
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

export default App;
