import React, { Component } from 'react';
import Card from './Card';



class CardContainer extends Component {
  render() {
  	const { projects } = this.props;

  	const projectCards = projects.map((project, i) => {
  		return (<Card playHomeAnimation={this.props.playHomeAnimation} key={i} project={project} /> );
  	});

    return (
    	<div className="flex-row">
        { projectCards }
        </div>
    );
  }
}

export default CardContainer;
