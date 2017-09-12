import React, { Component } from 'react';

import { CSSTransitionGroup } from 'react-transition-group';

class Sidebar extends Component {
  render() {
    return (
        <div className="flex-col flex-one-fourth navigation-sidebar">
			<div className="flex-row full-height middle-xs center-flex">
				<CSSTransitionGroup
                  transitionName="fade"
                  transitionAppear={true}
                  transitionAppearTimeout={500}
                  transitionEnterTimeout={1000}
                  transitionLeaveTimeout={3000}
                >
                  <div className="name">
						<h2>Gabriel Zarate</h2>
						<span className="sub-head">Front-End Developer</span>
					</div>
                </CSSTransitionGroup>
			</div>
		</div>
    );
  }
}

export default Sidebar;
