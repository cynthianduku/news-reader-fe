import React from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function FeaturedNews(props) {
	const {
		title = "Featured News",
		headline = "Breaking: Major Climate Summit Reaches Historic Agreement",
		excerpt = "World leaders unite on unprecedented climate action plan that could reshape global environmental policy for decades to come.",
		tag = "World",
		date = "2025-01-01",
		url,
		onReadMore
	} = props;

	const handleReadMore = () => {
		if (url) {
			window.open(url, "_blank", "noopener,noreferrer");
		} else if (onReadMore) {
			onReadMore({
				title: headline,
				excerpt,
				tag,
				date,
				url
			});
		}
	};

	return (
		<section className="space-y-4">
			<div className="bg-nh-blue h-40 md:h-56 rounded-lg flex items-center justify-center text-white relative overflow-hidden">
				<div className="absolute inset-0 bg-gradient-to-r from-nh-blue to-nh-blue/80" />
				<h1 className="text-3xl md:text-5xl font-bold relative z-10 text-center px-4">
					{title}
				</h1>
			</div>

			<div className="bg-card rounded-lg shadow-sm border p-6 animate-fade-in">
				<div className="flex items-center gap-3 mb-3">
					<Badge variant="secondary" className="text-xs">
						{tag}
					</Badge>
					<span className="text-xs text-muted-foreground">{date}</span>
				</div>

				<h2 className="text-xl md:text-2xl font-bold mb-3 text-card-foreground leading-tight">
					{headline}
				</h2>

				<p className="text-sm text-muted-foreground mb-4 leading-relaxed">
					{excerpt}
				</p>

				<Button variant="news" onClick={handleReadMore} className="group">
					Read Full Story
					<span className="ml-1 transition-transform group-hover:translate-x-1">→</span>
				</Button>
			</div>
		</section>
	);
}
