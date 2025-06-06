import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, MapPin, Phone } from "lucide-react";
import ProfileCard from "@/components/profile-card";
import avatar from "@/assets/avatar.png";

interface HeroSectionProps {
	profile: {
		name: string;
		title: string;
		email: string;
		phone?: string;
		location: string;
		githubUrl?: string[];
		linkedinUrl?: string;
		about?: {
			description: string[];
			technologies?: string[];
		};
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
						<div className="flex justify-center">
							<ProfileCard
								name="Afiq Zudin Hadi"
								title={profile.title}
								avatarUrl={avatar}
								showUserInfo={false}
								enableTilt={true}
							/>
						</div>
						<p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
							{profile.about?.description?.map((desc, idx) => (
								<span key={idx} className={idx > 0 ? "block mt-2" : undefined}>
									{desc}
								</span>
							))}
						</p>
					</div>

					<div className="flex flex-wrap justify-center gap-4 mb-8">
						{profile.githubUrl && profile.githubUrl.length > 0 && (
							<>
								<Button asChild>
									<a
										href={profile.githubUrl[0]}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="mr-2 h-4 w-4" />
										GitHub (Main)
									</a>
								</Button>
								{profile.githubUrl[1] && (
									<Button asChild variant="outline">
										<a
											href={profile.githubUrl[1]}
											target="_blank"
											rel="noopener noreferrer"
										>
											<Github className="mr-2 h-4 w-4" />
											GitHub (Alt)
										</a>
									</Button>
								)}
							</>
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
