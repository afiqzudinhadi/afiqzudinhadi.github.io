export const portfolioData = {
	profile: {
		name: "Alex Johnson",
		title: "Full Stack Developer",
		bio: "Passionate full-stack developer with 5+ years of experience building scalable web applications. I love creating elegant solutions to complex problems and am always eager to learn new technologies.",
		email: "alex.johnson@example.com",
		phone: "+1 (555) 123-4567",
		location: "San Francisco, CA",
		githubUrl: "https://github.com/alexjohnson",
		linkedinUrl: "https://linkedin.com/in/alexjohnson",
	},
	experiences: [
		{
			_id: "1",
			company: "TechCorp Inc.",
			position: "Senior Full Stack Developer",
			duration: "2022 - Present",
			description:
				"Lead development of microservices architecture serving 1M+ users. Mentored junior developers and implemented CI/CD pipelines that reduced deployment time by 60%.",
			technologies: [
				"React",
				"Node.js",
				"TypeScript",
				"AWS",
				"Docker",
				"PostgreSQL",
			],
			current: true,
		},
		{
			_id: "2",
			company: "StartupXYZ",
			position: "Full Stack Developer",
			duration: "2020 - 2022",
			description:
				"Built the entire web platform from scratch using modern technologies. Collaborated with designers and product managers to deliver features that increased user engagement by 40%.",
			technologies: ["Vue.js", "Python", "Django", "Redis", "MySQL"],
			current: false,
		},
		{
			_id: "3",
			company: "Digital Agency",
			position: "Frontend Developer",
			duration: "2019 - 2020",
			description:
				"Developed responsive websites and web applications for various clients. Focused on performance optimization and accessibility standards.",
			technologies: ["JavaScript", "HTML5", "CSS3", "Sass", "Webpack"],
			current: false,
		},
	],
	projects: [
		{
			_id: "1",
			title: "E-commerce Platform",
			description:
				"A full-featured e-commerce platform with real-time inventory management, payment processing, and admin dashboard.",
			technologies: ["Next.js", "Stripe", "Prisma", "PostgreSQL"],
			githubUrl: "https://github.com/alexjohnson/ecommerce-platform",
			liveUrl: "https://ecommerce-demo.example.com",
			featured: true,
		},
		{
			_id: "2",
			title: "Task Management App",
			description:
				"Collaborative task management application with real-time updates, file sharing, and team communication features.",
			technologies: ["React", "Socket.io", "Express", "MongoDB"],
			githubUrl: "https://github.com/alexjohnson/task-manager",
			liveUrl: "https://taskmanager-demo.example.com",
			featured: true,
		},
		{
			_id: "3",
			title: "Weather Dashboard",
			description:
				"Interactive weather dashboard with location-based forecasts, historical data visualization, and weather alerts.",
			technologies: ["Vue.js", "Chart.js", "OpenWeather API"],
			githubUrl: "https://github.com/alexjohnson/weather-dashboard",
			liveUrl: "https://weather-demo.example.com",
			featured: false,
		},
	],
	skills: [
		{
			_id: "1",
			category: "Frontend",
			items: [
				{ name: "React", level: 90 },
				{ name: "TypeScript", level: 85 },
				{ name: "Vue.js", level: 80 },
				{ name: "Next.js", level: 85 },
				{ name: "Tailwind CSS", level: 90 },
			],
		},
		{
			_id: "2",
			category: "Backend",
			items: [
				{ name: "Node.js", level: 90 },
				{ name: "Python", level: 80 },
				{ name: "Express", level: 85 },
				{ name: "Django", level: 75 },
				{ name: "GraphQL", level: 70 },
			],
		},
		{
			_id: "3",
			category: "Database",
			items: [
				{ name: "PostgreSQL", level: 85 },
				{ name: "MongoDB", level: 80 },
				{ name: "Redis", level: 75 },
				{ name: "MySQL", level: 80 },
			],
		},
		{
			_id: "4",
			category: "DevOps",
			items: [
				{ name: "AWS", level: 80 },
				{ name: "Docker", level: 85 },
				{ name: "CI/CD", level: 80 },
				{ name: "Kubernetes", level: 70 },
			],
		},
	],
};
