import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Card extends Component {

  render() {
  	const { project } = this.props;
  	const projectTitle = spanifyTitle(project.projectName);
  	const projectCategory = spanifyTitle(project.projectCategory);

    return (
    	<div className={"flex-col flex-half card-wrapper " + (project ? project.id + '-card' : '') }>
	        <Link to={ `/project/${project.projectURL}`} onClick={ () => this.props.playHomeAnimation(true) }
				className="photo-card">
	        	<div className="photo-card-container">
					<div className="card-image-container">
						{ project.cardVideo ? <span><video className="desktop-only" id="card-video" loop muted><source src={ project.cardVideo } type="video/mp4" alt="SweetWater Brewing" /></video> <img src={ project.cardImage } className="mobile-only project-thumbnail" alt="Project Thumbnail" /> </span>  : <img src={ project.cardImage } className="project-thumbnail" alt="Project Thumbnail" /> }
					</div>

					<div className="card-content-container">
						<h2 className="project-title card transition-link">
							{ projectTitle }
						</h2>
						<strong className="project-sub-head transition-link">
							{ projectCategory }
						</strong>
					</div>

					<div className="card-overlay-container">
						<div className="card-overlay"></div>
					</div>
				</div>
				<div className="card-background"></div>
	        </Link>
       	</div>
    );
  }
}

export default Card;


function spanifyTitle(title){
	const loopChar = title.split('').map((char, i) => {
		return (<span key={i}>{char}</span>);
	});
	return loopChar;
}


