import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink, Star } from "lucide-react";

interface Project {
	_id: string;
	title: string;
	description: string;
	technologies: string[];
	githubUrl?: string;
	liveUrl?: string;
	featured: boolean;
}

interface ProjectsSectionProps {
	projects: Project[];
}

export function ProjectsSection({ projects }: ProjectsSectionProps) {
	const featuredProjects = projects.filter((p) => p.featured);
	const otherProjects = projects.filter((p) => !p.featured);

	return (
		<section id="projects" className="py-20 bg-muted/30">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold text-center mb-16">Projects</h2>

				{featuredProjects.length > 0 && (
					<div className="mb-16">
						<h3 className="text-2xl font-semibold mb-8 flex items-center">
							<Star className="mr-2 h-6 w-6 text-yellow-500" />
							Featured Projects
						</h3>
						<div className="grid md:grid-cols-2 gap-8">
							{featuredProjects.map((project) => (
								<Card
									key={project._id}
									className="hover:shadow-lg transition-shadow"
								>
									<CardHeader>
										<CardTitle className="flex items-center justify-between">
											{project.title}
											<Badge variant="secondary">Featured</Badge>
										</CardTitle>
										<CardDescription className="leading-relaxed">
											{project.description}
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex flex-wrap gap-2 mb-4">
											{project.technologies.map((tech) => (
												<Badge key={tech} variant="outline">
													{tech}
												</Badge>
											))}
										</div>
										<div className="flex gap-2">
											{project.githubUrl && (
												<Button size="sm" variant="outline" asChild>
													<a
														href={project.githubUrl}
														target="_blank"
														rel="noopener noreferrer"
													>
														<Github className="mr-2 h-4 w-4" />
														Code
													</a>
												</Button>
											)}
											{project.liveUrl && (
												<Button size="sm" asChild>
													<a
														href={project.liveUrl}
														target="_blank"
														rel="noopener noreferrer"
													>
														<ExternalLink className="mr-2 h-4 w-4" />
														Go to site
													</a>
												</Button>
											)}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				)}

				{otherProjects.length > 0 && (
					<div>
						<h3 className="text-2xl font-semibold mb-8">Other Projects</h3>
						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
							{otherProjects.map((project) => (
								<Card
									key={project._id}
									className="hover:shadow-lg transition-shadow"
								>
									<CardHeader>
										<CardTitle className="text-lg">{project.title}</CardTitle>
										<CardDescription className="text-sm leading-relaxed">
											{project.description}
										</CardDescription>
									</CardHeader>
									<CardContent>
										<div className="flex flex-wrap gap-1 mb-4">
											{project.technologies.slice(0, 3).map((tech) => (
												<Badge key={tech} variant="outline" className="text-xs">
													{tech}
												</Badge>
											))}
											{project.technologies.length > 3 && (
												<Badge variant="outline" className="text-xs">
													+{project.technologies.length - 3}
												</Badge>
											)}
										</div>
										<div className="flex gap-2">
											{project.githubUrl && (
												<Button size="sm" variant="outline" asChild>
													<a
														href={project.githubUrl}
														target="_blank"
														rel="noopener noreferrer"
													>
														<Github className="mr-1 h-3 w-3" />
														Code
													</a>
												</Button>
											)}
											{project.liveUrl && (
												<Button size="sm" asChild>
													<a
														href={project.liveUrl}
														target="_blank"
														rel="noopener noreferrer"
													>
														<ExternalLink className="mr-1 h-3 w-3" />
														Go to site
													</a>
												</Button>
											)}
										</div>
									</CardContent>
								</Card>
							))}
						</div>
					</div>
				)}
			</div>
		</section>
	);
}
