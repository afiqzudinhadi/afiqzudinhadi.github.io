import type { MetaFunction } from "@remix-run/node";
import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { ContactSection } from "@/components/contact-section";
import { portfolioData } from "@/data/portfolio";
import { BusinessSection } from "@/components/business-section";
import { ViewPopup } from "@/components/view-popup";

export const meta: MetaFunction = () => {
	return [
		{ title: `${portfolioData.profile.name} - Portfolio` },
		{
			name: "description",
			content: portfolioData.profile.about?.description.join(" "),
		},
	];
};

export default function Index() {
	return (
		<div className="min-h-screen bg-background">
			<Navigation profile={portfolioData.profile} />
			<HeroSection profile={portfolioData.profile} />
			<ExperienceSection experiences={portfolioData.experiences} />
			<ProjectsSection projects={portfolioData.projects} />
			<BusinessSection businesses={portfolioData.businesses} />
			<ContactSection profile={portfolioData.profile} />
			<ViewPopup />
		</div>
	);
}
