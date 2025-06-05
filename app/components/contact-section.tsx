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
		githubUrl?: string;
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
							<div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
								<Mail className="h-5 w-5 text-primary" />
								<div>
									<p className="font-medium">Email</p>
									<a
										href={`mailto:${profile.email}`}
										className="text-muted-foreground hover:text-primary transition-colors"
									>
										{profile.email}
									</a>
								</div>
							</div>

							{profile.phone && (
								<div className="flex items-center space-x-3 p-3 rounded-lg bg-muted/50">
									<Phone className="h-5 w-5 text-primary" />
									<div>
										<p className="font-medium">Phone</p>
										<a
											href={`tel:${profile.phone}`}
											className="text-muted-foreground hover:text-primary transition-colors"
										>
											{profile.phone}
										</a>
									</div>
								</div>
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
							{profile.githubUrl && (
								<Button variant="outline" size="lg" asChild>
									<a
										href={profile.githubUrl}
										target="_blank"
										rel="noopener noreferrer"
									>
										<Github className="mr-2 h-5 w-5" />
										GitHub
									</a>
								</Button>
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
							<Button size="lg" asChild>
								<a href={`mailto:${profile.email}`}>
									<Mail className="mr-2 h-5 w-5" />
									Send Email
								</a>
							</Button>
						</div>
					</CardContent>
				</Card>
			</div>
		</section>
	);
}
