import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Mail, Phone, MapPin, Github, Linkedin } from "lucide-react";

interface ContactSectionProps {
	profile: {
		name: string;
		email: string;
		phone?: string;
		location: string;
		githubUrl?: string[];
		linkedinUrl?: string;
	};
}

export function ContactSection({ profile }: ContactSectionProps) {
	return (
		<section id="contact" className="py-20 bg-muted/30">
			<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold text-center mb-16">Get In Touch</h2>
				<Card className="max-w-2xl mx-auto">
					<CardHeader className="text-center">
						<CardTitle className="text-2xl">Let's Work Together</CardTitle>
						<CardDescription className="text-lg">
							I'm always interested in new opportunities and exciting projects.
							Feel free to reach out if you'd like to collaborate!
						</CardDescription>
					</CardHeader>
					<CardContent className="space-y-6">
						<div className="grid gap-4">
							<a
								href={`mailto:${profile.email}`}
								className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors ring-0 hover:ring-2 hover:ring-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/60"
								style={{ textDecoration: "none" }}
							>
								<Mail className="h-5 w-5 text-primary" />
								<div>
									<p className="font-medium">Email</p>
									<span className="text-muted-foreground hover:text-primary transition-colors">
										{profile.email}
									</span>
								</div>
							</a>

							{profile.phone && (
								<a
									href={`https://wa.me/${profile.phone.replace(/\s+/g, "")}`}
									className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50 hover:bg-muted transition-colors ring-0 hover:ring-2 hover:ring-primary/40 focus:outline-none focus:ring-2 focus:ring-primary/60"
									target="_blank"
									rel="noopener noreferrer"
									style={{ textDecoration: "none" }}
								>
									<Phone className="h-5 w-5 text-primary" />
									<div>
										<p className="font-medium">Phone</p>
										<span className="text-muted-foreground hover:text-primary transition-colors">
											{profile.phone}
										</span>
									</div>
								</a>
							)}

							<div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
								<MapPin className="h-5 w-5 text-primary" />
								<div>
									<p className="font-medium">Location</p>
									<p className="text-muted-foreground">{profile.location}</p>
								</div>
							</div>
						</div>

						<div className="flex justify-center space-x-4 pt-6">
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
								<Button variant="outline" size="lg" asChild>
									<a
										href={profile.linkedinUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Linkedin className="mr-2 h-5 w-5" />
										LinkedIn
									</a>
								</Button>
							)}
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
