import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { TimelineMax } from 'gsap';
import animation from '../actions/animations';

import Contact from './Contact';

function AboutSectionHead(props) {
    return (
    	<div className="section-head about">
			<h2 className="section-title">About Me</h2>
			    <span className="section-line"></span>
			</div>
	);

}

function AboutSubSectionSkills(props){
	return (
		<div className="sub-section flex-row sub-about">
		    <h3 className="flex-col flex-forty sub-section-title">What I Do</h3>
		    <div className="flex-col flex-sixty sub-section-list">
		    	<span className="sub-section-list-item skills-item">React / Redux</span>
		    	<span className="sub-section-list-item skills-item">SASS / Flexbox / Grid</span>
		    	<span className="sub-section-list-item skills-item">UI/UX</span>
		    </div>
		</div>
	);
}

function AboutSubSectionOtherTech(props){
	return (
		<div className="sub-section flex-row sub-tech">
		    <h3 className="flex-col flex-forty sub-section-title">Other Technologies</h3>
		    <div className="flex-col flex-sixty sub-section-list">
		    	<span className="sub-section-list-item tech-item">Greensock.js</span>
		    	<span className="sub-section-list-item tech-item">D3.js</span>
		    	<span className="sub-section-list-item tech-item">UI/UX</span>
		    </div>
		</div>
	);
}

class About extends Component {
	constructor(props){
		super(props);
		this.state = {
			visibilitySectionActive: false,
			visibilitySubSectionSkillsActive: false,
			visibilitySubSectionTechActive: false,
		}
		this.onChangeSection = this.onChangeSection.bind(this);
		this.onChangeSubSectionSkills = this.onChangeSubSectionSkills.bind(this);
		this.onChangeSubSectionTech = this.onChangeSubSectionTech.bind(this);
	}

	componentWillMount(){
		this.props.getAnimationTarget([this.aboutContentIntroOne, this.aboutContentIntroTwo ]);
	}

	componentDidMount(){
		this.setState({
			visibilitySectionActive: true,
			visibilitySubSectionSkillsActive: true,
			visibilitySubSectionTechActive: true,
		})
	}

	onChangeSection(isVisible) {
		if(isVisible){
			animation.animateAboutSection();
			this.setState({
				visibilitySectionActive: false
			});
		}
  	}

  	onChangeSubSectionSkills(isVisible) {
		if(isVisible){
			const timelineSubSectionSkills = new TimelineMax({ onComplete: cbSub });
			animation.animateSubSectionSkills(timelineSubSectionSkills);
			this.setState({
				visibilitySubSectionSkillsActive: false
			});
		}
   	}

  	onChangeSubSectionTech(isVisible) {
		if(isVisible){
			const timelineSubSectionTech = new TimelineMax({ onComplete: cbSub });
			animation.animateSubSectionTech(timelineSubSectionTech);
			this.setState({
				visibilitySubSectionTechActive: false
			});
		}
  	}

	render() {

		return (
		    <div className="about view">
			    <section className="standard-section-padding about-section">
			    	<div className="flex-row full-height bottom-xs">
				        <div className="container slimmer-container about-container">
				           <p ref={ (p) => { this.aboutContentIntroOne = p;} } className="about-intro-paragraph">I'm a Atlanta based web developer specializing in React development. I'm a fan of premier league soccer, my charcoil grill, and making my wife Caitlyn laugh.</p>
				           <p ref={ (p) => { this.aboutContentIntroTwo = p;} } className="about-intro-paragraph">I thrive working on challenging problems in a collaborative environment with great people. I'm a life-long learner who loves my work because I get to turn problems into solutions in creative ways each day.  </p>

			           		<VisibilitySensor onChange={this.onChangeSection} active={this.state.visibilitySectionActive}>
							   	<AboutSectionHead />
							</VisibilitySensor>

							<VisibilitySensor onChange={this.onChangeSubSectionSkills} active={this.state.visibilitySubSectionSkillsActive}>
							   	<AboutSubSectionSkills />
							</VisibilitySensor>

							<VisibilitySensor onChange={this.onChangeSubSectionTech} active={this.state.visibilitySubSectionTechActive}>
							   	<AboutSubSectionOtherTech />
							</VisibilitySensor>

				        </div>
				    </div>
			    </section>

			    <Contact />
		  	</div>
		);
	}
}

export default About;

function cbSub(){
	console.log('sub ANIMATE');
}
