export const portfolioData = {
	profile: {
		name: "Noor Afiq 'Izzuddin bin Haji Noor Hadi",
		title: "Software Developer at Datastream Digital",
		email: "afiqzudinhadi@gmail.com",
		phone: "+673 830 2284",
		location: "Bandar Seri Begawan, Brunei Darussalam",
		avatar: {
			gradient: "from-blue-500 to-purple-600",
			initials: "AJ",
		},
		githubUrl: [
			"https://github.com/afiqzudinhadi",
			"https://github.com/0xAnjing",
		],
		linkedinUrl: "https://linkedin.com/in/afiqzudinhadi",
		about: {
			description: [
				"I am a Software Engineer at Datastream Digital Sdn. Bhd., where I design and implement CRM systems, improving efficiency and reducing costs. My recent projects include developing a comprehensive CRM Prepaid system and enhancing testing processes with Cypress. My experience spans various roles and technologies.",
				"I've worked as a freelance engineer on blockchain solutions and game server migrations, built backend systems and APIs, and improved UI/UX designs. My technical toolkit includes Next.js, Laravel, Node.js, AWS, and more, reflecting my broad expertise in both front-end and back-end development.",
			],
			technologies: ["React", "TypeScript", "Node.js", "Python", "AWS"],
		},
	},

	experiences: [
		{
			_id: "1",
			company: "Datastream Digital Sdn. Bhd.",
			position: "Software Engineer",
			duration: "Apr 2023 - Present",
			description: [
				"Launched and deployed the CRM Prepaid system within a year, enabling 150 employees to efficiently serve 300,000 customers, resulting in $80k monthly cost savings, and implemented Cypress to enhance testing processes.",
				"Increased control over data by allowing direct access and modifications, integrating with a mobile SuperApp and third-party OSS/BSS systems for seamless customer registration, invoicing, and number management.",
				"Developed in-house microservice-based CRM solution using Next.js, Laravel, Docker, and Cypress, following TDD, which improved automation by eliminating vendor dependencies and enabling faster provisioning of mobile numbers.",
				"Implemented Cypress for UI testing, integrated with Jenkins to catch pre-production errors, significantly increasing test coverage (~2x more tests than Jest) with ~80 test files.",
			],
			technologies: [
				"Laravel",
				"Next.js",
				"Cypress",
				"Jenkins",
				"Docker",
				"PostgreSQL",
				"AWS",
			],
			current: true,
		},
		{
			_id: "2",
			company: "Mintly.gg",
			position: "Software Engineer (Remote Freelance)",
			duration: "Jul 2022 - Present",
			description: [
				"Built Solana Disperse Token script to distribute tokens from one wallet to multiple wallets in a single transaction with random or set values and priority fees, using JavaScript and Solana libraries.",
				"Reskinned and configured Club Penguin game, migrating servers from AWS to Digital Ocean, setting up SSL with Cloudflare, and running on LAMP/Node.js with Ruffle for Flash support and pm2 for server management.",
				"Developed 18 backend logic APIs and designed 2 database models using Node.js, Express, TypeScript, MongoDB, and Mongoose, improving data management and product functionality.",
				"Implemented Twitter’s API and automated the fetching of engagements using cron jobs, which allowed users to see real-time raffle participation enhancing the product’s functionality and providing real-time data insights.",
				"Proposed and implemented new features, including a leaderboard page/API for user engagement metrics with spam prevention, resulting in a 12% increase in user adoption.",
				"Maintained the production server and swiftly resolved errors, including mitigating a DDoS attack using CloudFlare, minimizing downtime to 30-60 minutes to ensure platform reliability.",
			],
			technologies: [
				"React",
				"Express",
				"Mongoose",
				"Node.js",
				"solana/web3.js",
				"Apache",
				"Digital Ocean",
				"AWS Lightsail",
			],
			current: true,
		},
		{
			_id: "3",
			company: "DXM Sdn. Bhd.",
			position: "Software Engineer",
			duration: "Mar 2020 - Jul 2020",
			description: [
				"Built web functions and processes for various clients’ products, including Weekend Warriors and ULU.",
				"Streamlined workflows for HeyDomo's operation teams by maintaining, improving, and adding new processes to the admin panel, using Phalcon.",
			],
			technologies: ["Phalcon"],
			current: false,
		},
		{
			_id: "4",
			company: "Nextacloud Technologies Sdn. Bhd.",
			position: "Software Engineer",
			duration: "Feb 2019 - Jun 2019",
			description: [
				"Engineered and delivered UI/UX designs and frontend interface for the Takaful Brunei Darussalam mobile application using NativeScript-Vue, ensuring consistent user experience across Android and iOS with a single codebase.",
				"Implemented key functionalities including user registration, login, navigation bar, product showcase with ads banner, and detailed product pages, optimizing the interface for a clutter-free mobile experience.",
			],
			technologies: ["NativeScript-Vue", "Vue.js", "JavaScript", "Figma"],
			current: false,
		},
		{
			_id: "5",
			company: "ACTi Hub",
			position: "Software Engineer",
			duration: "Jun 2018 - Dec 2018",
			description: [
				"Led the initial coding process for Flipidea.co, supervising server, backend, and frontend development, managing technical documentation, and providing technical support and bug fixes to streamline business operations.",
				"Developed backend RESTful APIs using Node.js and Express, and deployed AWS Lightsail server for Flipidea.co, ensuring a reliable and scalable infrastructure with future migration capability to EC2.",
			],
			technologies: [
				"Node.js",
				"Express",
				"AWS Lightsail",
				"MongoDB",
				"Angular.js",
			],
			current: false,
		},
	],
	projects: [
		{
			_id: "1",
			title: "DST CRM",
			description:
				"The CRM system is an in-house, microservice-based customer management platform designed and deployed at Datastream Digital. Built with Next.js, Laravel, Docker, and Cypress, it streamlines customer registration, invoicing, and number management for over 300,000 users. The system integrates with a mobile SuperApp and third-party OSS/BSS systems, automates workflows, and significantly reduces operational costs while improving data control and test coverage.",
			technologies: [
				"Laravel",
				"Next.js",
				"Cypress",
				"Jenkins",
				"Docker",
				"PostgreSQL",
				"AWS",
			],
			liveUrl: "https://www.tungku.link",
			featured: true,
		},
		{
			_id: "2",
			title: "E-Commerce Platform",
			description:
				"WIP – I’m building a full-stack e-commerce template with Laravel, Next.js, PostgresSQL, Docker, and integrated payment gateways (Stripe, PayPal, Hel.io, Jup.ag, Solana/web3.js), designed to serve as the foundation for three upcoming client e-commerce platforms. Even as a work in progress, it showcases my focus on modular design, scalability, and seamless integrations.",
			technologies: [
				"Laravel",
				"Next.js",
				"Node.js",
				"PostgresSQL",
				"Stripe",
				"PayPal",
				"Hel.io",
				"Jup.ag",
				"Solana/web3.js",
			],
			featured: false,
		},
		{
			_id: "3",
			title: "Takaful Brunei Darussalam Mobile App",
			description:
				"Insurance mobile application for Takaful Brunei Darussalam, built with NativeScript-Vue. It features user registration, login, product showcase, and detailed product pages, providing a seamless experience across Android and iOS platforms.",
			technologies: ["NativeScript-Vue", "Vue.js", "JavaScript", "Figma"],
			liveUrl: "https://apps.apple.com/bn/app/takaful-brunei/id1463472725",
			featured: true,
		},
		{
			_id: "4",
			title: "Mintly.gg",
			description:
				"Mintly.gg is a Twitter-based NFT raffle platform, where I contributed as a Software Engineer, developing backend APIs and implementing real-time engagement tracking using the Twitter API.",
			technologies: [
				"React",
				"Express",
				"Mongoose",
				"Node.js",
				"solana/web3.js",
				"Docker",
				"Digital Ocean",
				"Cloudflare",
			],
			liveUrl: "https://x.com/Mintlygg",
			featured: true,
		},
		{
			_id: "5",
			title: "EcoSteno Firmware",
			description:
				"A hobby to keymap my keyboard - Firmware for EcoSteno, a stenography machine, built with C. It features customizable key mappings, real-time feedback, and supports n-key rollover.",
			technologies: ["C", "Firmware Development"],
			githubUrl: "https://github.com/afiqzudinhadi/EcoSteno-Firmware",
			featured: false,
		},
		{
			_id: "6",
			title: "JupMerch Store",
			description:
				"Shopify store for JupMerch, a Solana-based merchandise platform.",
			technologies: ["Shopify Liquid", "HTML", "CSS", "JavaScript"],
			liveUrl: "https://jupmerch.id",
			featured: false,
		},
	],

	businesses: [
		{
			_id: "1",
			name: "Vive Coffee",
			role: "Founder",
			established: "2023",
			description:
				"Vive Coffee is a coffee beans reseller in Brunei Darussalam, offering a range of specialty coffees from all over the world. We focus on quality and sustainability, sourcing our beans from local farmers.",
			instagramUrl: "https://www.instagram.com/vivecoffee.bn/",
		},
		{
			_id: "2",
			name: "aravista",
			role: "Co-Founder",
			established: "2024",
			description:
				"aravista is a purpose-driven travel company offering immersive cultural experiences that directly support community development. By partnering with local communities, aravista connects travelers with authentic experiences while building sustainable water sources to create long-lasting impact.",
			websiteUrl: "https://ara-vista.com/",
			instagramUrl: "https://www.instagram.com/aravista.official/",
			facebookUrl: "https://www.facebook.com/profile.php?id=61576677113507",
			tiktokUrl: "https://www.tiktok.com/@aravista.official",
		},
	],
};
