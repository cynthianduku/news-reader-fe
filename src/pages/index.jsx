import React, { useState, useEffect } from "react"
import Header from "../components/Header"
import FeaturedNews from "../components/FeaturedNews"
import { NewsCard, CategoryFilter, SearchBar } from "../components/Common"
import { useToast } from "@/hooks/use-toast"
import { NEWS_CATEGORIES, MOCK_NEWS, getArticlesByCategory, searchArticles, fetchNewsFromAPI } from "@/data"

const Index = () => {
	const [activeCategory, setActiveCategory] = useState("All")
	const [searchQuery, setSearchQuery] = useState("")
	const [newsCards, setNewsCards] = useState([])
	const [featuredNews, setFeaturedNews] = useState({})
	const { toast } = useToast()

	useEffect(() => {
		const loadNews = async () => {
			try {
				let articles = []

				if (searchQuery) {
					articles = searchArticles(searchQuery)
				} else if (activeCategory.toLowerCase() !== "all") {
					articles = getArticlesByCategory(activeCategory.toLowerCase())
				} else {
					articles = await fetchNewsFromAPI("all")
				}

				if (!articles || articles.length === 0) {
					articles = MOCK_NEWS
				}

				setFeaturedNews({
					title: "Featured News",
					headline: articles[0].title,
					excerpt: articles[0].excerpt,
					tag: articles[0].category,
					date: new Date(articles[0].publishedAt).toLocaleDateString(),
					url: articles[0].url
				})

				const cards = NEWS_CATEGORIES.map(cat => {
					let catArticles = articles.filter(a => a.category === cat.slug)
					if (!catArticles || catArticles.length === 0) {
						catArticles = MOCK_NEWS.filter(a => a.category === cat.slug)
					}
					return {
						id: cat.id,
						header: cat.name,
						color: cat.color,
						items: catArticles.map(a => ({
							title: a.title,
							meta: new Date(a.publishedAt).toLocaleDateString(),
							excerpt: a.excerpt,
							url: a.url
						}))
					}
				})

				setNewsCards(cards)
			} catch (err) {
				console.error(err)
			}
		}
		loadNews()
	}, [activeCategory, searchQuery])

	const handleCategoryChange = (category) => {
		setActiveCategory(category)
		toast({
			title: "Category Selected",
			description: `Showing ${category} news`
		})
	}

	const handleSearch = (query) => {
		setSearchQuery(query)
		toast({
			title: "Search",
			description: `Searching for: ${query}`
		})
	}

	const handleReadMore = (item) => {
		if (item.url) {
			window.open(item.url, "_blank", "noopener,noreferrer")
		}
	}

	return (
		<div className="min-h-screen bg-background">
			<Header 
				onCategoryChange={handleCategoryChange}
				onSearch={handleSearch}
				activeCategory={activeCategory}
			/>
			<main className="flex-1 w-full max-w-screen-xl-custom mx-auto px-4 md:px-6 py-6">
				<div className="space-y-8">
					<div className="flex items-center justify-between flex-wrap gap-4">
						<div className="flex items-center gap-4 flex-wrap">
							<div className="text-sm text-muted-foreground">All</div>
							<CategoryFilter 
								inline
								activeCategory={activeCategory}
								onCategoryChange={handleCategoryChange}
							/>
						</div>
						<SearchBar onSearch={handleSearch} className="w-full sm:w-auto sm:max-w-md" />
					</div>
					<FeaturedNews {...featuredNews} onReadMore={handleReadMore} />
					<section>
						<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
							{newsCards.map(card => (
								<NewsCard key={card.id} {...card} onReadMore={handleReadMore} />
							))}
						</div>
					</section>
				</div>
			</main>
			<footer className="bg-card border-t mt-16">
				<div className="max-w-screen-xl-custom mx-auto px-4 md:px-6 py-10 grid grid-cols-1 md:grid-cols-3 gap-8">
					<div>
						<h3 className="font-bold text-lg mb-2 text-card-foreground">NewsHub</h3>
						<p className="text-sm text-muted-foreground">
							Your trusted source for curated headlines and topical coverage.
						</p>
					</div>
					<div>
						<h4 className="font-semibold mb-2 text-card-foreground">Categories</h4>
						<ul className="text-sm text-muted-foreground space-y-1">
							<li>World</li>
							<li>Technology</li>
							<li>Sports</li>
							<li>Business</li>
							<li>Science</li>
						</ul>
					</div>
					<div>
						<h4 className="font-semibold mb-2 text-card-foreground">Company</h4>
						<ul className="text-sm text-muted-foreground space-y-1">
							<li>About</li>
							<li>Contact</li>
							<li>Privacy</li>
						</ul>
						<div className="mt-4 flex gap-3">
							<div className="w-6 h-6 bg-muted rounded-sm"></div>
							<div className="w-6 h-6 bg-muted rounded-sm"></div>
							<div className="w-6 h-6 bg-muted rounded-sm"></div>
						</div>
					</div>
				</div>
				<div className="text-center text-xs text-muted-foreground pb-4">
					© {new Date().getFullYear()} NewsHub. All rights reserved.
				</div>
			</footer>
		</div>
	)
}

export default Index
