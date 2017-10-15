import React from 'react';
//import placeholderCardImage from './assets/production/images/project-thumbnail.jpg';
import sponsorCardImage from './assets/production/images/sportsengine-sponsor-image_resized.png';
import sweetwaterVideo from './assets/production/video/swb-homepage-video.mp4';
import sweetwaterCardImage from './assets/production/images/sw-static-mobile.png';
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
		projectDescription: "A fully responsive, interactive branded web project for SweetWater Brewery. The site redesign replaced the Brewery's outdated site and better captures its brand voice.",
		cardVideo: sweetwaterVideo,
		cardImage: sweetwaterCardImage,
		projectColor: '#128879',
		projectDesktop: browserSweetWater,
		projectLink: 'http://sweetwaterbrew.com/',
		technologyUsed: 'Sass, Flexbox, Swiper, Wordpress',
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
		projectDescription: "The Sportsengine Sponsorship app is a unique marketing software tool that assists youth sports organizations as they find funding for their local leagues. Using the map feature, administrators can find and contact potential nearby sponsors. Users can also create a fully custom email and pdf proposal to send to local partners they have identified on the map.",
		technologyUsed: <span>React, Redux, PHPMailer, Webpack, React-Router, Google Maps &amp; Places API, mpdf.</span>,
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
		projectDescription: <span>Analyze was built to replace the handwritten datasheets and graphs used by behavioral therapists who work with children with Autism. Therapists can use Analyze to track and update therapy session records and see a child's progress graphed automatically over time.<br/><br /> This project was built with React and Backbone with a Parse API backend. I used Chart.js to graph the behavioral data and Sketch to design the app. <br /><br /> Analyze was an ambitious project that I coded in two weeks to fulfill the requirements of my Front-end Engineering Course at the Iron Yard. Follow the link below and login using the username and password <span className="italic">guest.</span></span>,
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




