import React, { Component } from 'react';

import { CSSTransitionGroup } from 'react-transition-group';

class Sidebar extends Component {
  render() {
    return (
      	<div className="flex-col flex-one-fourth flex-vertical-one-fourth flex-tablet-full navigation-sidebar">
			   <div className="flex-row full-height middle-xs center-flex">
				<CSSTransitionGroup
                  transitionName="heading"
                  transitionAppear={true}
                  transitionAppearTimeout={2000}
                  transitionEnterTimeout={1000}
                  transitionLeaveTimeout={3000}
                >
                  <div className="name">
						<h2>
							<span>G</span>
							<span>a</span>
							<span>b</span>
							<span>r</span>
							<span>i</span>
							<span>e</span>
							<span>l</span>
							<span>&nbsp;</span>
							<span>Z</span>
							<span>a</span>
							<span>r</span>
							<span>a</span>
							<span>t</span>
							<span>e</span>
						</h2>
						<span className="sub-head">Front-End Developer</span>
					</div>
                </CSSTransitionGroup>
			   </div>

        	<div className="home-background">
            <CSSTransitionGroup
              transitionName="background-color"
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnterTimeout={3000}
              transitionLeaveTimeout={3000}
            >
          	 <div className="home-background-piece background-piece-left-color"></div>
            </CSSTransitionGroup>

            <CSSTransitionGroup
              transitionName="background-main"
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnterTimeout={3000}
              transitionLeaveTimeout={3000}
            >
             <div className="home-background-piece background-piece-left-main"></div>
            </CSSTransitionGroup>
          </div>
		</div>
    );
  }
}

export default Sidebar;
