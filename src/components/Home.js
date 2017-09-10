import React, { Component } from 'react';
import Card from './Card';

class Home extends Component {
  render() {
    return (
      <div className="home view">

        <section className="standard-section-padding">
          <div className="container center-text">
            <div className="flex-row">
              <div className="flex-col flex-one-third">
                <Card />
              </div>
            </div>
          </div>
        </section>

        <div className="home-background">
        	<div className="home-background-piece background-piece-left-color"></div>
        	<div className="home-background-piece background-piece-right-color"></div>
        	<div className="home-background-piece background-piece-left-main"></div>
        	<div className="home-background-piece background-piece-right-main"></div>
        </div>
      </div>
    );
  }
}

export default Home;
