import React, { Component } from 'react';
import linkIcon from './link.svg';

class Project extends Component {


	render() {
		const data = this.props.project;

	return (
	    <section className="standard-section-padding project-section">

			<div className="project-row flex-row bottom-xs-desktop">

				<div className="flex-col flex-two-thirds project-single-details">
					<a href={ data[0].projectLink} target="_blank" className="project-large-image-container">
						<div className="image-inner">
							<div className="project-desktop-image-wrapper">
								<img className="desktop-image" src={data[0].projectDesktop} alt={data[0].projectName} />

								<div className="link-to-project">
									<img className="icon-link" src={linkIcon} alt="Link Icon" />
								</div>
							</div>
						</div>
					</a>

	    			<div className="project-details">
	    				<h4>{data[0].projectDescription}</h4>
	    				<p><span>Technologies Used:</span> {data[0].technologyUsed}</p>
	    				<p><span>Live:</span> <a target="_blank" href={data[0].projectLink}>See Project</a></p>
	    			</div>
	    		</div>
			</div>
	    </section>
	);
	}
}

export default Project;

