import React, { useState, useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import Header from "@/components/Header"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { searchArticles } from "@/data"
import { ArrowLeft, Search, Clock, User } from "lucide-react"

export default function SearchPage() {
	const [searchParams] = useSearchParams()
	const navigate = useNavigate()
	const query = searchParams.get("q") || ""
	const [results, setResults] = useState([])
	const [isLoading, setIsLoading] = useState(false)

	useEffect(() => {
		if (query) {
			setIsLoading(true)
			const timer = setTimeout(() => {
				const searchResults = searchArticles(query)
				setResults(searchResults)
				setIsLoading(false)
			}, 300)
			return () => clearTimeout(timer)
		}
	}, [query])

	return (
		<div className="min-h-screen bg-background">
			<Header />
			<main className="max-w-screen-xl-custom mx-auto px-4 md:px-6 py-8">
				<Button variant="ghost" size="sm" onClick={() => navigate("/")}>
					<ArrowLeft className="h-4 w-4 mr-2" />
					Back to Home
				</Button>
				<div className="mb-8">
					<div className="flex items-center gap-3 mb-4">
						<Search className="h-6 w-6 text-primary" />
						<h1 className="text-2xl md:text-3xl font-bold">Search Results</h1>
					</div>
					{query && (
						<div className="flex items-center gap-2 text-muted-foreground">
							<span>Showing results for:</span>
							<Badge variant="outline" className="font-mono">"{query}"</Badge>
							{!isLoading && <span>({results.length} articles found)</span>}
						</div>
					)}
				</div>
				{isLoading && (
					<div className="text-center py-12">
						<div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
						<p className="text-muted-foreground">Searching articles...</p>
					</div>
				)}
				{!query && !isLoading && (
					<div className="text-center py-12">
						<Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
						<h2 className="text-xl font-semibold mb-2">No search query</h2>
						<p className="text-muted-foreground mb-4">Enter a search term to find relevant news articles.</p>
						<Button variant="outline" onClick={() => navigate("/")}>Browse All News</Button>
					</div>
				)}
				{query && !isLoading && results.length === 0 && (
					<div className="text-center py-12">
						<Search className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
						<h2 className="text-xl font-semibold mb-2">No results found</h2>
						<p className="text-muted-foreground mb-4">Try different keywords or browse our categories below.</p>
						<div className="flex flex-wrap gap-2 justify-center">
							{["world","technology","sports","business","science"].map(cat => (
								<Button key={cat} variant="outline" size="sm" onClick={() => navigate(`/category/${cat}`)}>
									{cat.charAt(0).toUpperCase() + cat.slice(1)}
								</Button>
							))}
						</div>
					</div>
				)}
				{!isLoading && results.length > 0 && (
					<div className="space-y-6">
						{results.map(article => (
							<article key={article.id} className="bg-card rounded-lg shadow-sm border p-6 hover:shadow-md transition-shadow">
								<div className="flex gap-6">
									{article.imageUrl && (
										<div className="w-32 h-24 rounded-lg overflow-hidden cursor-pointer" onClick={() => navigate(`/article/${article.id}`)}>
											<img src={article.imageUrl} alt={article.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
										</div>
									)}
									<div className="flex-1 min-w-0">
										<div className="flex items-center gap-3 mb-2">
											<Badge variant="secondary" className="text-xs">{article.category}</Badge>
											<div className="flex items-center text-xs text-muted-foreground">
												<Clock className="h-3 w-3 mr-1" />
												{new Date(article.publishedAt).toLocaleDateString()}
											</div>
										</div>
										<h2 className="font-semibold text-lg mb-2 text-card-foreground hover:text-primary transition-colors line-clamp-2 cursor-pointer" onClick={() => navigate(`/article/${article.id}`)}>
											{article.title}
										</h2>
										<p className="text-muted-foreground text-sm mb-3 line-clamp-2">{article.excerpt}</p>
										<div className="flex items-center justify-between">
											<div className="flex items-center text-xs text-muted-foreground">
												<User className="h-3 w-3 mr-1" />
												{article.author} • {article.source}
											</div>
											<Button variant="link" size="sm" className="h-auto p-0 text-xs" onClick={() => navigate(`/article/${article.id}`)}>Read article →</Button>
										</div>
									</div>
								</div>
							</article>
						))}
					</div>
				)}
			</main>
		</div>
	)
}
