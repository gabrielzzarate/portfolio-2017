import React, { Component } from 'react';
//import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

import TransitionGroup from 'react-transition-group/TransitionGroup';

const PageShell = Page => class PageShell extends Component {

	componentWillAppear() {
		console.log('component APPEARED');
	}

	componentWillEnter() {
		console.log('component APPEARED');
	}

	render() {
		return (
			<Page {...this.props} />
		)
	}
}

export default PageShell;


// const PageShell = Page => {
//   return props =>
//       <TransitionGroup component={FirstChild}>
//        { <Page {...props} /> }
//       </TransitionGroup>
// };
