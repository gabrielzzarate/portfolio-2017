import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import cardImage from '../assets/production/images/project-thumbnail.jpg';

class Card extends Component {

  render() {
  	const { project } = this.props;
  	const projectTitle = spanifyTitle(project.projectName);
  	const projectCategory = spanifyTitle(project.projectCategory);

    return (
    	<div className="flex-col flex-half card-wrapper">
	        <Link
				to={ `/project/${project.projectURL}` }
				className="photo-card">
	        	<div className="photo-card-container">
					<div className="card-image-container">
						<img src={ cardImage } className="project-thumbnail" alt="Project Thumbnail" />
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



/*

<Link
to={ `/packages/${info.packageName}` }
className="button package-selector"
onClick={ marketoSub }>Select</Link>

*/
