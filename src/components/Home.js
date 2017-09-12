import React, { Component } from 'react';
import CardContainer from './CardContainer';

import { CSSTransitionGroup } from 'react-transition-group';

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
      <div className="home view">

        <section className="standard-section-padding">
          <div className="container center-text">
            <div className="flex-row">
              <div className="flex-col flex-one-third">
                <CSSTransitionGroup
                  transitionName="fade"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnterTimeout={1000}
                  transitionLeaveTimeout={3000}
                >
                  <CardContainer />
                </CSSTransitionGroup>
              </div>
            </div>
          </div>
        </section>

        <div id="home-background" className={'home-background ' + (this.state.active === true ? 'animate' : null)}>
        	{/*<div className="home-background-piece background-piece-left-color"></div> */}
        	<div className="home-background-piece background-piece-right-color"></div>
        	{/*<div className="home-background-piece background-piece-left-main"></div> */}
        	<div className="home-background-piece background-piece-right-main"></div>
        </div>
      </div>
    );
  }
}

export default Home;
