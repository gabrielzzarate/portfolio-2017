import React, { Component } from 'react';


class Project extends Component {
  render() {
  	const data = this.props.project;
    return (
        <section className="standard-section-padding no-padding-bottom project-section" style={{ backgroundImage: data[0].projectImgLg }}>

    		<div className="flex-row full-height bottom-xs">

    			<div className="flex-col flex-two-thirds project-single-details">
        			<h4>{data[0].projectDescription}</h4>
        			<div className="project-details">
        				<p>Agency: {data[0].projectAgency}</p>
        				<p>Role: {data[0].projectRole}</p>
        				<p>Team: {data[0].projectTeam}</p>
        				<p>Date: {data[0].projectDate}</p>
        			</div>
        		</div>
    		</div>
        </section>
    );
  }
}

export default Project;

