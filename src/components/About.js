import React, { Component } from 'react';
import CardContainer from './CardContainer';
import VisibilitySensor from 'react-visibility-sensor';

import { CSSTransitionGroup } from 'react-transition-group';
import animation from '../actions/animations';

class AboutSectionHead extends Component {

	render(){
		console.log('head', this.props);
		this.props.isVisible == true ? alert('visible') : console.log('not visible');
	    return <div className="about-section-head">
				    <h2 className="about-section-title">About Me</h2>
				    <span className="about-section-line"></span>
				</div>;
	}
}

class About extends Component {
	constructor(props){
		super(props);
		this.state = {
			visibilityActive: true,
		}
		this.onChange = this.onChange.bind(this);
	}

	componentWillMount(){
		this.props.getAnimationTarget([this.aboutContentIntroOne, this.aboutContentIntroTwo ]);
	}

	onChange(isVisible) {
		if(isVisible){
			animation.animateAboutContent();
			this.setState({
				visibilityActive: false
			});
		}
    	//console.log('Element is now %s', isVisible ? 'visible' : 'hidden');
  	}

	render() {
		console.log('about state', this.state);
		return (
		    <div className="about view">
			    <section className="standard-section-padding about-section">
			        <div className="container slimmer-container about-container">
			           <p ref={ (p) => { this.aboutContentIntroOne = p;} } className="about-intro-paragraph">I'm a Atlanta based web developer specializing in React / Redux development. I currently work at Vert Digital and love to code stuff.</p>

			           <p ref={ (p) => { this.aboutContentIntroTwo = p;} } className="about-intro-paragraph">I love to create interactive solutions with a strong emphasis on clean, simple, and usable design.</p>


			           		<VisibilitySensor onChange={this.onChange} active={this.state.visibilityActive}>
							   	<AboutSectionHead />
							</VisibilitySensor>




			        </div>
			    </section>
		  	</div>
		);
	}
}

export default About;
