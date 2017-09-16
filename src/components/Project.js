import React, { Component } from 'react';
import { connect } from 'react-redux';

class Project extends Component {
  render() {
  	console.log('project props', this.props);
    return (
        <div className="project">
        	Project
        </div>
    );
  }
}

const mapStateToProps = ({ projects }, { params: { projectURL } }) => ({
	//projects: projects.filter(( p ) => p.projectName == projectName )[0]
});


export default connect(mapStateToProps, {} )(Project);

