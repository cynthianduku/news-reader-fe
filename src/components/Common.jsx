import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Search } from "lucide-react";

export function SearchBar({ onSearch, placeholder = "Search news...", className = "w-full max-w-md" }) {
	const [query, setQuery] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		if (onSearch) onSearch(query);
	};

	return (
		<div className={className}>
			<form onSubmit={handleSubmit} className="relative">
				<Input
					type="text"
					placeholder={placeholder}
					value={query}
					onChange={(e) => setQuery(e.target.value)}
					className="pr-10"
				/>
				<Button
					type="submit"
					variant="ghost"
					size="icon"
					className="absolute right-1 top-1/2 -translate-y-1/2 h-7 w-7"
				>
					<Search className="h-4 w-4" />
				</Button>
			</form>
		</div>
	);
}

export function CategoryFilter({
	categories = ["All", "World", "Technology", "Sports", "Business", "Science"],
	activeCategory = "All",
	onCategoryChange,
	inline = false
}) {
	const handleCategoryClick = (category) => {
		if (onCategoryChange) onCategoryChange(category);
	};

	if (inline) {
		return (
			<div className="flex items-center gap-2 flex-wrap">
				{categories.map((category) => (
					<Button
						key={category}
						variant={activeCategory === category ? "category-active" : "category"}
						size="sm"
						onClick={() => handleCategoryClick(category)}
						className="rounded-full text-xs"
					>
						{category}
					</Button>
				))}
			</div>
		);
	}

	return (
		<nav className="flex flex-wrap gap-2">
			{categories.map((category) => (
				<Button
					key={category}
					variant={activeCategory === category ? "category-active" : "category"}
					size="sm"
					onClick={() => handleCategoryClick(category)}
					className="rounded-full"
				>
					{category}
				</Button>
			))}
		</nav>
	);
}

export function NewsCard({ header, color, items, onReadMore }) {
	const colorVariants = {
		blue: "bg-nh-blue",
		teal: "bg-nh-teal",
		red: "bg-nh-red",
		orange: "bg-nh-orange",
		purple: "bg-nh-purple",
		magenta: "bg-nh-magenta"
	};
	const bgColor = colorVariants[color] || "bg-primary";

	return (
		<div className="bg-card rounded-lg shadow-sm border overflow-hidden animate-fade-in">
			<div className={`${bgColor} p-4 text-white`}>
				<h3 className="font-semibold text-base">{header}</h3>
			</div>
			<div className="p-4 space-y-4">
				{items.map((item, index) => (
					<div key={index} className="border-b border-border last:border-b-0 pb-3 last:pb-0">
						<div className="flex items-center gap-2 mb-2">
							<Badge variant="outline" className="text-xs">{item.meta}</Badge>
						</div>
						<h4 className="font-medium text-sm mb-2 text-card-foreground leading-snug">
							{item.title}
						</h4>
						{item.excerpt && (
							<p className="text-xs text-muted-foreground mb-2 leading-relaxed">
								{item.excerpt}
							</p>
						)}
						<Button
							variant="link"
							size="sm"
							onClick={() => onReadMore && onReadMore(item)}
							className="text-xs p-0 h-auto text-primary hover:text-primary/80"
						>
							Read more →
						</Button>
					</div>
				))}
			</div>
		</div>
	);
}
