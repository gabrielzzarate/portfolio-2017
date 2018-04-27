import React, { Component } from 'react';
import VisibilitySensor from 'react-visibility-sensor';
import { TimelineMax } from 'gsap';
import animation from '../actions/animations';

import Contact from './Contact';

function AboutSectionHead(props) {
	return (
		<div className="section-head about">
			<h2 className="section-title">About Me</h2>
			<span className="section-line" />
		</div>
	);
}

function AboutSubSectionSkills(props) {
	return (
		<div className="sub-section flex-row sub-about">
			<h3 className="flex-col flex-forty sub-section-title">What I Do</h3>
			<div className="flex-col flex-sixty sub-section-list">
				<span className="sub-section-list-item skills-item">
					Javascript ES6{' '}
				</span>
				<span className="sub-section-list-item skills-item">
					React &bull; Redux
				</span>
				<span className="sub-section-list-item skills-item">
					Sass &bull; CSS Grid
				</span>
				<span className="sub-section-list-item skills-item">
					Express &bull; MongoDB
				</span>
				<span className="sub-section-list-item skills-item">React Native</span>
			</div>
		</div>
	);
}

function AboutSubSectionOtherTech(props) {
	return (
		<div className="sub-section flex-row sub-tech">
			<h3 className="flex-col flex-forty sub-section-title">
				Other Technologies
			</h3>
			<div className="flex-col flex-sixty sub-section-list">
				<span className="sub-section-list-item tech-item">Greensock.js</span>
				<span className="sub-section-list-item tech-item">Gulp &bull; Git</span>
				<span className="sub-section-list-item tech-item">
					PHP &bull; Wordpress
				</span>
			</div>
		</div>
	);
}

class About extends Component {
	constructor(props) {
		super(props);
		this.state = {
			visibilitySectionActive: false,
			visibilitySubSectionSkillsActive: false,
			visibilitySubSectionTechActive: false
		};
		this.onChangeSection = this.onChangeSection.bind(this);
		this.onChangeSubSectionSkills = this.onChangeSubSectionSkills.bind(this);
		this.onChangeSubSectionTech = this.onChangeSubSectionTech.bind(this);
	}

	componentWillMount() {
		this.props.getAnimationTarget([
			this.aboutContentIntroOne,
			this.aboutContentIntroTwo
		]);
	}

	componentDidMount() {
		this.setState({
			visibilitySectionActive: true,
			visibilitySubSectionSkillsActive: true,
			visibilitySubSectionTechActive: true
		});
	}

	onChangeSection(isVisible) {
		if (isVisible) {
			animation.animateAboutSection();
			this.setState({
				visibilitySectionActive: false
			});
		}
	}

	onChangeSubSectionSkills(isVisible) {
		if (isVisible) {
			const timelineSubSectionSkills = new TimelineMax({ onComplete: cbSub });
			animation.animateSubSectionSkills(timelineSubSectionSkills);
			this.setState({
				visibilitySubSectionSkillsActive: false
			});
		}
	}

	onChangeSubSectionTech(isVisible) {
		if (isVisible) {
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
							<p
								ref={p => {
									this.aboutContentIntroOne = p;
								}}
								className="about-intro-paragraph"
							>
								I'm a design-minded web developer specializing in front-end
								development. I enjoy working with the latest web technologies to
								bridge the gap between engineering and design to create
								beautiful interfaces and experiences.
							</p>
							<p
								ref={p => {
									this.aboutContentIntroTwo = p;
								}}
								className="about-intro-paragraph"
							>
								I thrive working on challenging problems in a collaborative
								environment with great people. I love my work because I have the
								opportunity to join talented teams that creatively solve
								problems everyday.{' '}
							</p>

							<VisibilitySensor
								onChange={this.onChangeSection}
								active={this.state.visibilitySectionActive}
							>
								<AboutSectionHead />
							</VisibilitySensor>

							<VisibilitySensor
								onChange={this.onChangeSubSectionSkills}
								active={this.state.visibilitySubSectionSkillsActive}
							>
								<AboutSubSectionSkills />
							</VisibilitySensor>

							<VisibilitySensor
								onChange={this.onChangeSubSectionTech}
								active={this.state.visibilitySubSectionTechActive}
							>
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

function cbSub() {
	//console.log('sub ANIMATE');
}
