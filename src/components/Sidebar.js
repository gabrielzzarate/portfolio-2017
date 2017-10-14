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
			this.runSidebarTransition();
		} else if (this.props.appLocation === "/about" || this.props.appLocation === "/project/:projectURL") {
			this.runSidebarTransition();
		}
	}

	runSidebarTransition(){
		animation.transitionSidebar(this.sidebarBackgroundColor, this.sidebarBackgroundMain);
	}

  	render() {
  		const { project } = this.props;
  		const isMobile = document.body.classList.contains('isMobile');
  		const sidebarFadeInMobile = isMobile === true && this.props.appLocation === "/project/:projectURL" ? true : false;
  	
  		
	    return (
	    	<CSSTransitionGroup
	            transitionName="change-view"
	            transitionAppear={sidebarFadeInMobile}
	            transitionAppearTimeout={1000}
	            transitionEnter={false}
	            transitionLeave={false}
	            className="transition-group-block flex-col flex-one-fourth flex-vertical-one-fourth flex-tablet-full"
	        >
		      	<div className={ (isMobile === false ? null : 'isMobile') + " navigation-sidebar " + ( project !== null ? project[0].projectURL : '') }>
				   <div className="flex-row full-height middle-xs center-flex sidebar-inner">
						<CSSTransitionGroup
		                  transitionName="heading"
		                  transitionAppear={true}
		                  transitionAppearTimeout={2000}
		                  transitionEnterTimeout={1000}
		                  transitionLeaveTimeout={3000}
		                >
		                	<Heading heading={this.props.heading} projectName={project !== null ? project[0].projectName : null}  />
		                </CSSTransitionGroup>
				   </div>

		        	<div className="sidebar-background">
		          	 	<div ref={ (div) => { this.sidebarBackgroundColor = div; } } style={ project !== null ? { backgroundColor: project[0].projectColor } : { backgroundColor: '#e8eaef' } } className="background-piece background-piece-left-color"></div>
		           		<div ref={ (div) => { this.sidebarBackgroundMain = div; } } className="background-piece background-piece-left-main"></div>
		          	</div>
				</div>
			</CSSTransitionGroup>
	    );
  	}
}

export default Sidebar;


function Heading(props){
	const heading = props.heading;
	const projectName = props.projectName;

	if(heading === 'home'){
		return <div className="name">
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
	} else if (heading === 'about') {
		return <div className="name">
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
		</div>
	} else {
		return <div className="name">
			<h2>
				{ projectName }
			</h2>
		</div>
	}
}
