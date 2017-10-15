import React, { Component } from 'react';
import linkIcon from './link.svg';

class Project extends Component {


	render() {
		const data = this.props.project;

	return (
	    <section className="standard-section-padding project-section">

			<div className="project-row">

				<div className="flex-col flex-two-thirds project-single-details">
					<a href={ data[0].projectLink} target="_blank" className="project-large-image-container">
						<img className="desktop-image" src={data[0].projectDesktop} alt={data[0].projectName} />

						<div className="flex-row full-height middle-xs link-to-project">
							<img className="icon-link" src={linkIcon} alt="Link Icon" />
						</div>
					
						
					</a>

	    			<div className="project-details">
	    				<p>{data[0].projectDescription}</p>
	    				<p className="detail"><span>Technologies Used:</span> {data[0].technologyUsed}</p>
	    				<p className="detail"><span>Live:</span> <a target="_blank" href={data[0].projectLink}>See Project</a></p>
	    			</div>
	    		</div>
			</div>
	    </section>
	);
	}
}

export default Project;

