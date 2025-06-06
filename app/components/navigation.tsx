import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";

interface NavigationProps {
	profile: {
		name: string;
	};
}

export function Navigation({ profile }: NavigationProps) {
	const [activeSection, setActiveSection] = useState("about");

	useEffect(() => {
		const handleScroll = () => {
			const sections = [
				"about",
				"experience",
				"projects",
				"businesses",
				"contact",
			];
			const scrollPosition = window.scrollY + 100;

			for (const section of sections) {
				const element = document.getElementById(section);
				if (element) {
					const offsetTop = element.offsetTop;
					const offsetBottom = offsetTop + element.offsetHeight;

					if (scrollPosition >= offsetTop && scrollPosition < offsetBottom) {
						setActiveSection(section);
						break;
					}
				}
			}
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="flex justify-between items-center h-16">
					<div className="font-bold text-xl">{profile.name}</div>
					<div className="hidden md:flex space-x-2">
						{["about", "experience", "projects", "businesses", "contact"].map(
							(section) => (
								<Button
									key={section}
									variant={activeSection === section ? "default" : "ghost"}
									onClick={() => scrollToSection(section)}
									className="capitalize"
								>
									{section}
								</Button>
							)
						)}
					</div>
				</div>
			</div>
		</nav>
	);
}
