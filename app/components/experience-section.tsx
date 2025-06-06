import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

interface Experience {
	_id: string;
	company: string;
	position: string;
	duration: string;
	description: string[];
	technologies: string[];
	current: boolean;
}

interface ExperienceSectionProps {
	experiences: Experience[];
}

export function ExperienceSection({ experiences }: ExperienceSectionProps) {
	return (
		<section id="experience" className="py-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold text-center mb-16">Experience</h2>
				<div className="space-y-8">
					{experiences.map((exp, index) => (
						<div key={exp._id}>
							<Card className="hover:shadow-lg transition-shadow">
								<CardHeader>
									<div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
										<div>
											<CardTitle className="text-xl">{exp.company}</CardTitle>
											<CardDescription className="text-lg font-medium text-primary">
												{exp.position}
											</CardDescription>
											<p className="text-sm text-muted-foreground">
												{exp.duration}
											</p>
										</div>
										{exp.current && (
											<Badge variant="secondary" className="w-fit">
												Current
											</Badge>
										)}
									</div>
								</CardHeader>
								<CardContent>
									<p className="text-muted-foreground mb-4 leading-relaxed">
										<ul className="list-disc list-inside space-y-1">
											{exp.description.map((item, idx) => (
												<li key={idx}>{item}</li>
											))}
										</ul>
									</p>
									<div className="flex flex-wrap gap-2">
										{exp.technologies.map((tech) => (
											<Badge key={tech} variant="outline">
												{tech}
											</Badge>
										))}
									</div>
								</CardContent>
							</Card>
							{index < experiences.length - 1 && <Separator className="my-8" />}
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
