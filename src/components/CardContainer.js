import React, { Component } from 'react';
import Card from './Card';



class CardContainer extends Component {
  render() {
  	const { projects, projectLinks } = this.props;

  	const projectCards = projects.map((project, i) => {
  		return (<Card playHomeAnimation={this.props.playHomeAnimation} key={i} project={project} /> );
  	});

    const projectCardLinks = projectLinks.map((project, i) => {
      return (
          <div key={i} className={"flex-col flex-half card-wrapper " + (project ? project.id + '-card' : '')}>
            <a href={project.projectLink} className="photo-card" target="_blank">
              <div className="photo-card-container">
                <div className="card-image-container">
                  { project.cardImage ? <img src={ project.cardImage } className="project-thumbnail" alt="Project Thumbnail" /> : <video autoPlay loop muted><source src={ project.cardVideo } type="video/mp4" alt="SweetWater Brewing" /></video>}
                </div>

              <div className="card-content-container">
                <h2 className="project-title card transition-link">
                  { project.projectTitle }
                </h2>
                <strong className="project-sub-head transition-link">
                  { project.projectCategory }
                </strong>
              </div>

              <div className="card-overlay-container">
                <div className="card-overlay"></div>
              </div>
            </div>
            <div className="card-background"></div>
          </a>
      </div> );
    });

    return (
    	<div className="flex-row">
        { projectCards }
        {projectCardLinks}
        </div>
    );
  }
}

export default CardContainer;
