import React from 'react';
//import placeholderCardImage from './assets/production/images/project-thumbnail.jpg';
import sponsorCardImage from './assets/production/images/sportsengine-sponsor-image_resized.jpg';
import sweetwaterVideo from './assets/production/video/swb-homepage-video.mp4';
import analyzeCardImage from './assets/production/images/project-thumbnail_analyze.png';
import browserSweetWater from './assets/production/images/sweetwater-desktop.png';
import browserSponsor from './assets/production/images/sponsor-desktop.png';
import browserAnalyze from './assets/production/images/analyze-desktop.png';

// linked projects card images
import vdemCardImage from './assets/production/images/vdem-placeholder-image.png';
import firstnetCard from './assets/production/images/firstnet-calendar-card.png';



export const projects = [
	{
		id: 1,
		projectName: "SweetWater Brewing",
		projectURL: "sweetwater",
		projectCategory: "Web Development",
		projectDescription: "A fully responsive, interactive branded web project for SweetWater Brewery. The site redesign replaced the Brewery's outdated site and better captured its brand voice.",
		cardImage: null,
		cardVideo: sweetwaterVideo,
		projectColor: '#128879',
		projectDesktop: browserSweetWater,
		projectLink: 'http://sweetwaterbrew.com/',
		technologyUsed: 'SASS, Flexbox, Swiper, Wordpress',
		projectRole: 'Lead the development of the frontend of the site',
		projectImageDescription: "Website Sponsorship project",
		additionalInfo: {},
	},
	{
		id: 2,
		projectName: "Sponsorship App",
		projectURL: "sponsor",
		projectCategory: "React / Redux Project",
		projectDesktop: browserSponsor,
		projectLink: "http://inspire.sportsengine.com/",
		projectDescription: "The Sportsengine Sponsorship app is a unique marketing software tool to aid Sportsengine customers as they find sponsors to fund their youth league organizations. Using the map feature, users can find potential nearby sponsors. The app will also build and send a fully designed and custom email and pdf proposal.",
		technologyUsed: "React, Redux, PHPMailer, Webpack, React-Router, Google Maps and Places API, mpdf.",
		projectRole: 'Conception, Art Direction, Web Design, Responsive Design',
		cardImage: sponsorCardImage,
		projectColor: 'rgba(40,165,225, 0.8)',
	},
	{
		id: 3,
		projectName: "Analyze",
		projectURL: "analyze",
		projectCategory: "React App for Therapists",
		projectLink: 'http://gabrielzzarate.github.io/analyze-finalproject/',
		projectDescription: <h4>Analyze was built to replace the handwritten datasheets and graphs used by behavioral therapists who work with children with Autism. With Analyze, a therapist can add session records and the app will graph a child's progress over time.<br/><br /> Analyze is built with React and Backbone with a Parse API backend. I used Chart.js to graph the behavioral data and Sketch to design the app. <br /><br /> Analyze was an ambitious project that I coded in two weeks to fulfill the requirements of my Front-end Engineering Course with the Iron Yard. Follow the link and login using the username and password <i>guest</i></h4>,
		technologyUsed: 'React, Backbone, Parse API, Chart.js.',
		cardImage: analyzeCardImage,
		projectDesktop: browserAnalyze,
		projectColor: 'rgba(38,53,107,0.8)',
		projectImage: "images/project-image-3.jpg",
		projectImageDescription: "SportsEngine Sponsorship App",
		projectAgency: 'Vert Digital',
		projectRole: 'Conception, Art Direction, Web Design, Responsive Design',
		projectTeam: 'Jason Lehmkuhle',
		projectDate: '2017',
	},
];

export const projectLinks = [
	{
		id: 4,
		projectTitle: "VA Emergency",
		projectLink: 'http://www.vaemergency.gov/',
		projectCategory: "Web Development",
		cardImage: vdemCardImage,
	},
	{
		id: 5,
		projectTitle: "Firstnet Events Calendar",
		projectLink: 'http://firstnet.vertserver.com/#calendar',
		projectCategory: "React Calendar",
		cardImage: firstnetCard,
	},
];




