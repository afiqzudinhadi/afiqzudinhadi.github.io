import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";

interface HeroSectionProps {
	profile: {
		name: string;
		title: string;
		bio: string;
		email: string;
		phone?: string;
		location: string;
		githubUrl?: string;
		linkedinUrl?: string;
	};
}

export function HeroSection({ profile }: HeroSectionProps) {
	const scrollToSection = (sectionId: string) => {
		const element = document.getElementById(sectionId);
		if (element) {
			element.scrollIntoView({ behavior: "smooth" });
		}
	};

	return (
		<section
			id="about"
			className="pt-16 min-h-screen flex items-center bg-gradient-to-br from-primary/5 to-secondary/5"
		>
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
				<div className="text-center">
					<div className="mb-8">
						<Avatar className="w-32 h-32 mx-auto mb-6">
							<AvatarFallback className="text-4xl font-bold bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
								{profile.name
									.split(" ")
									.map((n) => n[0])
									.join("")}
							</AvatarFallback>
						</Avatar>
						<h1 className="text-5xl md:text-6xl font-bold mb-4">
							{profile.name}
						</h1>
						<h2 className="text-2xl md:text-3xl text-primary font-medium mb-6">
							{profile.title}
						</h2>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							{profile.bio}
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-4 mb-8">
						{profile.githubUrl && (
							<Button asChild>
								<a
									href={profile.githubUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Github className="mr-2 h-4 w-4" />
									GitHub
								</a>
							</Button>
						)}
						{profile.linkedinUrl && (
							<Button asChild variant="outline">
								<a
									href={profile.linkedinUrl}
									target="_blank"
									rel="noopener noreferrer"
								>
									<Linkedin className="mr-2 h-4 w-4" />
									LinkedIn
								</a>
							</Button>
						)}
						<Button
							onClick={() => scrollToSection("contact")}
							variant="secondary"
						>
							<Mail className="mr-2 h-4 w-4" />
							Get In Touch
						</Button>
					</div>

					<div className="flex flex-wrap justify-center gap-6 text-muted-foreground">
						<div className="flex items-center">
							<MapPin className="mr-2 h-4 w-4" />
							{profile.location}
						</div>
						<div className="flex items-center">
							<Mail className="mr-2 h-4 w-4" />
							{profile.email}
						</div>
						{profile.phone && (
							<div className="flex items-center">
								<Phone className="mr-2 h-4 w-4" />
								{profile.phone}
							</div>
						)}
					</div>
				</div>
			</div>
		</section>
	);
}
