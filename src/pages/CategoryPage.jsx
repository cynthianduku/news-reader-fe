import React from "react"
import { useParams, useNavigate } from "react-router-dom"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { getCategoryBySlug, getArticlesByCategory } from "@/data"
import { ArrowLeft, Clock, User } from "lucide-react"

export default function CategoryPage() {
	const { category } = useParams()
	const navigate = useNavigate()
	const categoryData = getCategoryBySlug(category || "")
	const articles = getArticlesByCategory(category || "")

	if (!categoryData) {
		return (
			<div className="min-h-screen bg-background">
				<Header />
				<main className="max-w-screen-xl-custom mx-auto px-4 md:px-6 py-8">
					<div className="text-center">
						<h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
						<Button variant="outline" onClick={() => navigate("/")}>
							<ArrowLeft className="h-4 w-4 mr-2" />
							Back to Home
						</Button>
					</div>
				</main>
			</div>
		)
	}

	const colorClasses = {
		blue: "bg-nh-blue",
		teal: "bg-nh-teal",
		red: "bg-nh-red",
		orange: "bg-nh-orange",
		purple: "bg-nh-purple",
		magenta: "bg-nh-magenta"
	}

	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main className="max-w-screen-xl-custom mx-auto px-4 md:px-6 py-8">
				<div className="mb-8">
					<Button variant="ghost" size="sm" onClick={() => navigate("/")}>
						<ArrowLeft className="h-4 w-4 mr-2" />
						Back to Home
					</Button>
					<div className={`${colorClasses[categoryData.color]} rounded-lg p-8 text-white mb-6`}>
						<h1 className="text-4xl md:text-5xl font-bold mb-2">{categoryData.name}</h1>
						<p className="text-xl opacity-90">{categoryData.description}</p>
					</div>
				</div>
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
					{articles.map(article => (
						<article key={article.id} className="bg-card rounded-lg shadow-sm border overflow-hidden group hover:shadow-md transition-shadow">
							<div className="aspect-video bg-muted relative overflow-hidden cursor-pointer" onClick={() => navigate(`/article/${article.id}`)}>
								{article.imageUrl ? (
									<img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
								) : (
									<div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
										<span className="text-muted-foreground text-sm">No image</span>
									</div>
								)}
							</div>
							<div className="p-4">
								<div className="flex items-center gap-2 mb-3">
									<Badge variant="secondary">{categoryData.name}</Badge>
									<div className="flex items-center text-xs text-muted-foreground">
										<Clock className="h-3 w-3 mr-1" />
										{new Date(article.publishedAt).toLocaleDateString()}
									</div>
								</div>
								<h2 className="font-semibold text-lg mb-2 text-card-foreground group-hover:text-primary transition-colors line-clamp-2 cursor-pointer" onClick={() => navigate(`/article/${article.id}`)}>
									{article.title}
								</h2>
								<p className="text-muted-foreground text-sm mb-3 line-clamp-3">{article.excerpt}</p>
								<div className="flex items-center justify-between">
									<div className="flex items-center text-xs text-muted-foreground">
										<User className="h-3 w-3 mr-1" />
										{article.author}
									</div>
									<Button variant="link" size="sm" className="h-auto p-0 text-xs" onClick={() => navigate(`/article/${article.id}`)}>
										Read more →
									</Button>
								</div>
							</div>
						</article>
					))}
				</div>
				{articles.length === 0 && (
					<div className="text-center py-12">
						<h2 className="text-xl font-semibold mb-2">No articles found</h2>
						<p className="text-muted-foreground">Check back later for new {categoryData.name.toLowerCase()} articles.</p>
					</div>
				)}
			</main>
		</div>
	)
}
