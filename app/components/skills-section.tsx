import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

interface Skill {
	name: string;
	level: number;
}

interface SkillCategory {
	_id: string;
	category: string;
	items: Skill[];
}

interface SkillsSectionProps {
	skills: SkillCategory[];
}

export function SkillsSection({ skills }: SkillsSectionProps) {
	return (
		<section id="skills" className="py-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold text-center mb-16">Skills</h2>
				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{skills.map((skillCategory) => (
						<Card
							key={skillCategory._id}
							className="hover:shadow-lg transition-shadow"
						>
							<CardHeader>
								<CardTitle className="text-xl text-center">
									{skillCategory.category}
								</CardTitle>
							</CardHeader>
							<CardContent className="space-y-4">
								{skillCategory.items.map((skill) => (
									<div key={skill.name} className="space-y-2">
										<div className="flex justify-between text-sm">
											<span className="font-medium">{skill.name}</span>
											<span className="text-muted-foreground">
												{skill.level}%
											</span>
										</div>
										<Progress value={skill.level} className="h-2" />
									</div>
								))}
							</CardContent>
						</Card>
					))}
				</div>
			</div>
		</section>
	);
}
