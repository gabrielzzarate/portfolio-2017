import React, { Component } from 'react';


class Project extends Component {


	render() {
		const data = this.props.project;

	return (
	    <section className="standard-section-padding no-padding-bottom project-section">

			<div className="flex-row full-height bottom-xs">

				<div className="flex-col flex-two-thirds project-single-details">
					<div className="project-large-image-container">
						<img src={data[0].projectDesktop} />
					</div>

	    			<div className="project-details">
	    				<h4>{data[0].projectDescription}</h4>
	    				<p><span>Agency:</span> {data[0].projectAgency}</p>
	    				<p><span>Role:</span> {data[0].projectRole}</p>
	    				<p><span>Team:</span> {data[0].projectTeam}</p>
	    				<p><span>Date:</span> {data[0].projectDate}</p>
	    			</div>
	    		</div>
			</div>
	    </section>
	);
	}
}

export default Project;

