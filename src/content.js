//import placeholderCardImage from './assets/production/images/project-thumbnail.jpg';
import sponsorCardImage from './assets/production/images/sportsengine-sponsor-image_resized.jpg';
import sweetwaterVideo from './assets/production/video/swb-homepage-video.mp4';
import analyzeCardImage from './assets/production/images/project-thumbnail_analyze.png';
import browserSweetWater from './assets/production/images/sweetwater-desktop.png';
import browserSponsor from './assets/production/images/sponsor-desktop.png';
import browserAnalyze from './assets/production/images/analyze-desktop.png';


export const projects = [
	{
		id: 1,
		projectName: "SweetWater Brewing",
		projectURL: "sweetwater",
		projectCategory: "Web Development",
		projectDescription: "A highly interactive, branded site redesign for SweetWater Brewery.",
		cardImage: null,
		cardVideo: sweetwaterVideo,
		projectColor: '#128879',
		projectDesktop: browserSweetWater,
		projectLink: 'http://sweetwaterbrew.com/',
		technologyUsed: 'SASS, Flexbox, Swiper, Wordpress',
		projectRole: 'Conception, Art Direction, Web Design, Responsive Design',
		projectTeam: 'Jason Lehmkuhle',
		projectAgency: 'Vert Digital',
		projectDate: '2017',
		projectImageDescription: "Website Sponsorship project",
		additionalInfo: {},
	},
	{
		id: 2,
		projectName: "Sponsorship App",
		projectURL: "sponsor",
		projectCategory: "React / Redux Project",
		projectDesktop: browserSponsor,
		projectLink: 'http://inspire.sportsengine.com/',
		projectDescription: "Turn your club’s emails into win-win opportunities by allowing sponsors to provide exclusive offers to your members.",
		projectAgency: 'Vert Digital',
		projectRole: 'Conception, Art Direction, Web Design, Responsive Design',
		projectTeam: 'Jason Lehmkuhle',
		projectDate: '2017',
		cardImage: sponsorCardImage,
		projectColor: 'rgba(40,165,225, 0.8)',
	},
	{
		id: 3,
		projectName: "Analyze",
		projectURL: "analyze",
		projectCategory: "React App for Therapists",
		projectLink: 'http://gabrielzzarate.github.io/analyze-finalproject/',
		projectDescription: "Put your sponsors front and center with value-add opportunities during your club’s registration process this season.",
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




