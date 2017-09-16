import React, { Component } from 'react';
import { connect } from 'react-redux';
// after
//import { withRouter } from 'react-router-dom'



class Project extends Component {
  render() {

  	const projectURL = this.props.match.params.projectURL;

  	const data = this.props.content.projects.filter((project) => {
  		return project.projectURL === projectURL;
  	});

  	console.log('project data', data);
    return (
        <section className="standard-section-padding project-section">

    		<div className="flex-row full-height bottom-xs">

    			<div className="flex-col flex-half">
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


function mapStateToProps(state){
  return {
    content: state.content,
  }
}

export default connect(mapStateToProps, {} )(Project);

