import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
        <div className="photo-card">
        	<div className="photo-card-container">
				<div className="card-image-container">
					<img src="./project-thumbnail.jpg" className="project-thumbnail" alt="Project Thumbnail" />
				</div>

				<div className="card-content-container">
					<h2 className="project-title card">
						<span className="project-title-letter">S</span>
						<span className="project-title-letter">w</span>
						<span className="project-title-letter">e</span>
						<span className="project-title-letter">e</span>
						<span className="project-title-letter">t</span>
						<span className="project-title-letter">W</span>
						<span className="project-title-letter">a</span>
						<span className="project-title-letter">t</span>
						<span className="project-title-letter">e</span>
						<span className="project-title-letter">r</span>
					</h2>
					<strong className="project-sub-head">Web Development</strong>
				</div>

				<div className="card-overlay-container">
					<div className="card-overlay"></div>
				</div>
			</div>
			<div className="card-background"></div>
        </div>
    );
  }
}

export default Card;


// eventually these cards will be Link elements to the project route
