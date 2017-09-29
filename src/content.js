import placeholderCardImage from './assets/production/images/project-thumbnail.jpg';
import sponsorCardImage from './assets/production/images/sportsengine-sponsor-image_resized.jpg';
import sweetwaterVideo from './assets/production/video/swb-homepage-video.mp4';
import analyzeCardImage from './assets/production/images/project-thumbnail_analyze.png';

export const projects = [
	{
		id: 1,
		projectName: "SweetWater Brewing",
		projectURL: "sweetwater",
		projectCategory: "Web Development",
		projectDescription: "Turn unused real estate on your website into dynamic profit centers that connect sponsors with your club’s members.",
		projectIcon: "icon-website-big",
		cardImage: null,
		cardVideo: sweetwaterVideo,
		projectColor: '#26356b',
		projectImage: "images/project-image-1.jpg",

		projectRole: 'Conception, Art Direction, Web Design, Responsive Design',
		projectTeam: 'Jason Lehmkuhle',
		projectAgency: 'Vert Digital',
		projectDate: '2017',
		projectImageDescription: "Website Sponsorship project",
		additionalInfo: {},
		projectOptions: [
			{
				name: 'Banner Ad',
				selected: false,
				amount: '100',
				details: ['Page-width ad with image/logo. Hyperlinks to a designated URL.']
			},
			{
				name: 'CTA Ad',
				selected: false,
				amount: '60',
				details: ['1/3-page square ad with image/logo. Hyperlinks to a designated URL.']
			},
			{
				name: 'Sidebar Logo',
				selected: false,
				amount: '40',
				frequency: 'monthly',
				details: ['Logo only. Hyperlinks to a designated URL.']
			}
		],
		discount: {},
		revenueEst: 0
	},
	{
		id: 2,
		projectName: "Sponsorship App",
		projectURL: "sponsor",
		projectCategory: "React / Redux Project",
		projectDescription: "Turn your club’s emails into win-win opportunities by allowing sponsors to provide exclusive offers to your members.",
		projectAgency: 'Vert Digital',
		projectRole: 'Conception, Art Direction, Web Design, Responsive Design',
		projectTeam: 'Jason Lehmkuhle',
		projectDate: '2017',
		cardImage: sponsorCardImage,
		projectColor: '#26356b',
		projectIcon: "icon-email-big",
		projectImage: "images/project-image-2.jpg",
		projectImageDescription: "Email Sponsorship project",
		additionalInfo: {},
		projectOptions: [
			{
				name: 'Banner ad',
				selected: false,
				amount: '100',
				details: [
					'Page-width ad with image/logo. Hyperlinks to a designated URL.',
					'Include a message and offer in the email text to be sent directly to our members.'
				]
			}
		],
		discount: {},
		revenueEst: 0
	},
	{
		id: 3,
		projectName: "Analyze",
		projectURL: "analyze",
		projectCategory: "React App for Therapists",
		projectDescription: "Put your sponsors front and center with value-add opportunities during your club’s registration process this season.",
		projectIcon: "icon-registration",
		cardImage: analyzeCardImage,
		projectColor: '#26356b',
		projectImage: "images/project-image-3.jpg",
		projectImageDescription: "Registration Sponsorship project",
		projectAgency: 'Vert Digital',
		projectRole: 'Conception, Art Direction, Web Design, Responsive Design',
		projectTeam: 'Jason Lehmkuhle',
		projectDate: '2017',
		additionalInfo: {},
		projectOptions: [
			{
				name: 'Web page banner ad & email confirmation ad',
				selected: false,
				amount: '100',
				frequency: "monthly",
				details: [
					'Includes: 1 Page-width web page ad with image/logo. Hyperlinks to a designated URL 1 Page-width email ad with image/logo. Hyperlinks to a designated URL.',
					'Include a message and offer in the email text to be sent directly to our members'
				]
			}
		],
		discount: {},
		revenueEst: 0
	},
];

export const about = [
	{
		projectName: "SweetWater Brewing",
		projectURL: "sweetwater",
		projectCategory: "Web Development",
		id: 1,
		projectDescription: "Turn unused real estate on your website into dynamic profit centers that connect sponsors with your club’s members.",
		projectIcon: "icon-website-big",
		projectImage: "images/project-image-1.jpg",
		projectImageDescription: "Website Sponsorship project",
		billingFrequency: 'Monthly',
		additionalInfo: {},
		projectOptions: [
			{
				name: 'Banner Ad',
				selected: false,
				amount: '100',
				details: ['Page-width ad with image/logo. Hyperlinks to a designated URL.']
			},
			{
				name: 'CTA Ad',
				selected: false,
				amount: '60',
				details: ['1/3-page square ad with image/logo. Hyperlinks to a designated URL.']
			},
			{
				name: 'Sidebar Logo',
				selected: false,
				amount: '40',
				frequency: 'monthly',
				details: ['Logo only. Hyperlinks to a designated URL.']
			}
		],
		discount: {},
		revenueEst: 0
	},
	{
		projectName: "Email",
		id: 2,
		projectDescription: "Turn your club’s emails into win-win opportunities by allowing sponsors to provide exclusive offers to your members.",
		projectIcon: "icon-email-big",
		projectImage: "images/project-image-2.jpg",
		projectImageDescription: "Email Sponsorship project",
		billingFrequency: 'Monthly',
		additionalInfo: {},
		projectOptions: [
			{
				name: 'Banner ad',
				selected: false,
				amount: '100',
				details: [
					'Page-width ad with image/logo. Hyperlinks to a designated URL.',
					'Include a message and offer in the email text to be sent directly to our members.'
				]
			}
		],
		discount: {},
		revenueEst: 0
	},
	{
		projectName: "Registration",
		id: 3,
		projectDescription: "Put your sponsors front and center with value-add opportunities during your club’s registration process this season.",
		projectIcon: "icon-registration",
		projectImage: "images/project-image-3.jpg",
		projectImageDescription: "Registration Sponsorship project",
		billingFrequency: 'Monthly',
		additionalInfo: {},
		projectOptions: [
			{
				name: 'Web page banner ad & email confirmation ad',
				selected: false,
				amount: '100',
				frequency: "monthly",
				details: [
					'Includes: 1 Page-width web page ad with image/logo. Hyperlinks to a designated URL 1 Page-width email ad with image/logo. Hyperlinks to a designated URL.',
					'Include a message and offer in the email text to be sent directly to our members'
				]
			}
		],
		discount: {},
		revenueEst: 0
	},
];


