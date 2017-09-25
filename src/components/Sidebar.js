import React, { Component } from 'react';
import { CSSTransitionGroup } from 'react-transition-group';
import animation from '../actions/animations';



class Sidebar extends Component {
	constructor(props){
		super(props);
		this.runSidebarTransition = this.runSidebarTransition.bind(this);
	}

	componentDidMount(){
		if(this.props.animate === true ) {
			console.log('run sidebar animation');
			this.runSidebarTransition();
		} else if (this.props.appLocation === "/about" || this.props.applocation === "/project/:projectURL") {
			this.runSidebarTransition();
		}
	}

	HomeGreeting(props) {
  		return <h1>Gabriel Zarate</h1>;
	}

	AboutGreeting(props) {
  		return <h1>Gabriel Zarate</h1>;
	}

	ProjectGreeting(props) {
		return <h2>Project Title</h2>;
	}

	runSidebarTransition(){
		animation.transitionSidebar(this.sidebarBackgroundColor, this.sidebarBackgroundMain);
	}
  	render() {
  		console.log('sidebar location', this.props.applocation);
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

	        	<div className="sidebar-background">
	          	 <div ref={ (div) => { this.sidebarBackgroundColor = div; } } className="background-piece background-piece-left-color"></div>
	             <div ref={ (div) => { this.sidebarBackgroundMain = div; } } className="background-piece background-piece-left-main"></div>
	          </div>
			</div>
	    );
  	}
}

export default Sidebar;
