import React, { Component } from 'react';

class Sidebar extends Component {
  render() {
    return (
        <div className="flex-col flex-one-fourth navigation-sidebar">
			<div className="flex-row full-height middle-xs center-flex">
				<div className="name">
					<h2>Gabriel Zarate</h2>
					<span className="sub-head">Front-End Developer</span>
				</div>
			</div>
		</div>
    );
  }
}

export default Sidebar;
