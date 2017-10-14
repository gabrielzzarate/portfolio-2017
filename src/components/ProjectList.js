import React from 'react';
import { Link } from 'react-router-dom';

export default function ProjectList(props){

	const projectLinks = props.projects.map((project, i) => {
		if(project.projectURL !== props.current.projectURL) {
			return <h2 key={i}><a href={`/project/${project.projectURL}`} >{project.projectName}</a></h2>
		}
	});

	return (
		<section className="callout-container contact">
			<div className="flex-row full-height middle-xs">

				<div className="callout-content">
					{ projectLinks }
				</div>
			</div>
		</section>
	);
}