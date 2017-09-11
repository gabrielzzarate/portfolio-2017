import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Card from './Card';

import animation from './animation';
//import TransitionGroup from 'react-transition-group/TransitionGroup';


class CardContainer extends Component {
  constructor(props){
    super(props);
    this.dom = {};
  }

  cb(){
    console.log('hello');
  }

  componentDidMount(cb){
    this.dom.root = ReactDOM.findDOMNode(this);
    animation.show(this.dom.root, cb);
  }

  componentWillUnMount(cb){
    animation.hide(this.dom.root, cb);
  }

  componentWillEnter(cb){
    console.log('enter..');
    animation.show(this.dom.root, cb);
  }

  componentWillLeave(cb){
    animation.hide(this.dom.root, cb);
  }

  render() {
    console.log('dom', this.dom);
    return (
      <Card />

    );
  }
}

export default CardContainer;
