import type { MetaFunction } from "@remix-run/node";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { portfolioData } from "@/data/portfolio";

export const meta: MetaFunction = () => {
	return [
		{ title: `${portfolioData.profile.name} - Portfolio` },
		{ name: "description", content: portfolioData.profile.bio },
	];
};

export default function Index() {
	return (
		<div className="min-h-screen bg-background">
			<Navigation profile={portfolioData.profile} />
			<HeroSection profile={portfolioData.profile} />
			<ExperienceSection experiences={portfolioData.experiences} />
			<ProjectsSection projects={portfolioData.projects} />
			<SkillsSection skills={portfolioData.skills} />
			<ContactSection profile={portfolioData.profile} />
		</div>
	);
}
