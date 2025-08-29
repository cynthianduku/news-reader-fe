import React, { useState, useEffect } from "react"
import Header from "../components/Header"
import FeaturedNews from "../components/FeaturedNews"
import { NewsCard, CategoryFilter, SearchBar } from "../components/Common"
import { useToast } from "@/hooks/use-toast"
import { getArticlesByCategory } from "@/data"

const Index = () => {
  const [activeCategory, setActiveCategory] = useState("All")
  const [searchQuery, setSearchQuery] = useState("")
  const [news, setNews] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const { toast } = useToast()

   console.log("Current news state:", news)
  useEffect(() => {
    const fetchNews = async () => {
      setIsLoading(true)
      try {
        const articles = await getArticlesByCategory(activeCategory.toLowerCase())
        console.log("Fetched articles for category", activeCategory, ":", articles)
        setNews(articles)
      } catch (error) {
        console.error('Error fetching news:', error)
        toast({
          title: "Error",
          description: "Failed to fetch news articles",
          variant: "destructive"
        })
      } finally {
        setIsLoading(false)
      }
    }
    fetchNews()
  }, [activeCategory, toast])

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

  const handleReadMore = () => {
    toast({
      title: "Article",
      description: "Opening article..."
    })
  }

  const groupedNews = news.reduce((acc, article) => {
    const category = article.category
    if (!acc[category]) acc[category] = []
    acc[category].push(article)
    return acc
  }, {})

  const NEWS_CARDS = Object.entries(groupedNews).map(([category, articles]) => ({
    id: category,
    header: `${category.charAt(0).toUpperCase() + category.slice(1)} News`,
    color: getCategoryColor(category),
    items: articles.slice(0, 1).map(article => ({
      title: article.title,
      meta: new Date(article.publishedAt).toLocaleDateString(),
      excerpt: article.excerpt
    }))
  }))

  const featuredArticle = news[0]
  const FEATURED_NEWS = featuredArticle ? {
    title: "Featured News",
    headline: featuredArticle.title,
    excerpt: featuredArticle.excerpt,
    tag: featuredArticle.category,
    date: new Date(featuredArticle.publishedAt).toLocaleDateString()
  } : {
    title: "Featured News",
    headline: "Loading latest news...",
    excerpt: "Please wait while we fetch the latest articles.",
    tag: "News",
    date: new Date().toLocaleDateString()
  }

  function getCategoryColor(category) {
    const colors = {
      technology: "teal",
      sports: "teal",
      business: "red",
      science: "purple",
      world: "orange",
      general: "blue"
    }
    return colors[category] || "blue"
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

          {isLoading && (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
              <p className="text-muted-foreground">Loading latest news...</p>
            </div>
          )}

          {!isLoading && (
            <>
              <FeaturedNews 
                {...FEATURED_NEWS}
                onReadMore={handleReadMore}
              />
              <section>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                  {NEWS_CARDS.map((card) => (
                    <NewsCard
                      key={card.id}
                      {...card}
                      onReadMore={handleReadMore}
                    />
                  ))}
                </div>
              </section>
            </>
          )}
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
