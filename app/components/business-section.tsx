import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Globe, Instagram, Facebook } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { SiTiktok } from "react-icons/si";
import vivecoffee from "@/assets/business-logos/vivecoffee.png";
import aravista from "@/assets/business-logos/aravista.png";

interface Business {
	_id: string;
	name: string;
	role: string;
	established: string;
	description: string;
	url?: string;
	logo?: string;
	instagramUrl?: string;
	websiteUrl?: string;
	facebookUrl?: string;
	tiktokUrl?: string;
}

interface BusinessSectionProps {
	businesses: Business[];
}

export function BusinessSection({ businesses = [] }: BusinessSectionProps) {
	return (
		<section id="businesses" className="py-20">
			<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
				<h2 className="text-4xl font-bold text-center mb-16">Businesses</h2>

				<div className="grid md:grid-cols-2 gap-8">
					{businesses.map((business) => {
						return (
							<Card
								key={business._id}
								className="hover:shadow-lg transition-shadow"
							>
								<CardHeader>
									<CardTitle className="flex items-center justify-between">
										{business.name}
										<Badge variant="secondary">
											Est. {business.established}
										</Badge>
									</CardTitle>
									<div className="text-sm text-foreground mb-1">
										{business.role}
									</div>
									{business.logo && (
										<div className="flex justify-center mb-3">
											<img
												src={
													business.logo === "vivecoffee"
														? vivecoffee
														: business.logo === "aravista"
														? aravista
														: ""
												}
												alt={`${business.name} logo`}
												className="w-full max-h-24 object-contain rounded-md shadow"
											/>
										</div>
									)}
									<CardDescription className="leading-relaxed">
										{business.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="space-y-2">
									<div className="flex gap-3 pt-2">
										{business.websiteUrl && (
											<a
												href={business.websiteUrl}
												target="_blank"
												rel="noopener noreferrer"
												aria-label="Website"
											>
												<Globe className="w-5 h-5 text-blue-500" />
											</a>
										)}
										{business.instagramUrl && (
											<a
												href={business.instagramUrl}
												target="_blank"
												rel="noopener noreferrer"
												aria-label="Instagram"
											>
												<Instagram className="w-5 h-5 text-pink-500" />
											</a>
										)}
										{business.facebookUrl && (
											<a
												href={business.facebookUrl}
												target="_blank"
												rel="noopener noreferrer"
												aria-label="Facebook"
											>
												<Facebook className="w-5 h-5 text-blue-700" />
											</a>
										)}
										{business.tiktokUrl && (
											<a
												href={business.tiktokUrl}
												target="_blank"
												rel="noopener noreferrer"
												aria-label="TikTok"
											>
												<SiTiktok className="w-5 h-5 text-black" />
											</a>
										)}
									</div>
								</CardContent>
							</Card>
						);
					})}
				</div>
			</div>
		</section>
	);
}
