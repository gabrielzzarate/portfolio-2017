import React, { Component } from 'react';
import CardContainer from './CardContainer';

import TransitionGroup from 'react-transition-group/TransitionGroup';

class Home extends Component {
  constructor(props){
    super(props);
    this.state = {
      visible: true,
      cards: [1, 2, 3],
    }
  }
  render() {
    const cards = this.state.cards;
    let renderCards;
    return (
      <div className="home view">

        <section className="standard-section-padding">
          <div className="container center-text">
            <div className="flex-row">
              <div className="flex-col flex-one-third">
                <TransitionGroup component='ul'>
                  { renderCards = cards.map((card, i) => {
                    return (<CardContainer
                      component = 'li'
                      key={i}
                    />);
                  })}
                </TransitionGroup>
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

function FirstChild(props) {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
}

export default Home;
