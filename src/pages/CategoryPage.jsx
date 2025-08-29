import React, { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { getCategoryBySlug, getArticlesByCategory } from '@/data'
import { ArrowLeft, Clock, User } from 'lucide-react'

export default function CategoryPage() {
  const { category } = useParams()
  const categoryData = getCategoryBySlug(category || '')
  const [articles, setArticles] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  useEffect(() => {
    const fetchCategoryNews = async () => {
      if (category) {
        setIsLoading(true)
        try {
          const fetchedArticles = await getArticlesByCategory(category)
          setArticles(fetchedArticles)
        } catch (error) {
          console.error('Error fetching category news:', error)
        } finally {
          setIsLoading(false)
        }
      }
    }
    fetchCategoryNews()
  }, [category])

  if (!categoryData) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="max-w-screen-xl-custom mx-auto px-4 md:px-6 py-8">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Category Not Found</h1>
            <Link to="/">
              <Button variant="outline">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Home
              </Button>
            </Link>
          </div>
        </main>
      </div>
    )
  }

  const colorClasses = {
    blue: 'bg-nh-blue',
    teal: 'bg-nh-teal',
    red: 'bg-nh-red',
    orange: 'bg-nh-orange',
    purple: 'bg-nh-purple',
    magenta: 'bg-nh-magenta'
  }

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-screen-xl-custom mx-auto px-4 md:px-6 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm" className="mb-4">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
          <div className={`${colorClasses[categoryData.color]} rounded-lg p-8 text-white mb-6`}>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">{categoryData.name}</h1>
            <p className="text-xl opacity-90">{categoryData.description}</p>
          </div>
        </div>
        {isLoading && (
          <div className="text-center py-12">
            <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading {categoryData.name.toLowerCase()} articles...</p>
          </div>
        )}
        {!isLoading && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {articles.map((article) => (
              <article key={article.id} className="bg-card rounded-lg shadow-sm border overflow-hidden group hover:shadow-md transition-shadow">
                <Link to={`/article/${article.id}`}>
                  <div className="aspect-video bg-muted relative overflow-hidden">
                    {article.imageUrl ? (
                      <img 
                        src={article.imageUrl} 
                        alt={article.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    ) : (
                      <div className="w-full h-full bg-gradient-to-br from-muted to-muted/50 flex items-center justify-center">
                        <span className="text-muted-foreground text-sm">No image</span>
                      </div>
                    )}
                  </div>
                </Link>
                <div className="p-4">
                  <div className="flex items-center gap-2 mb-3">
                    <Badge variant="secondary">{categoryData.name}</Badge>
                    <div className="flex items-center text-xs text-muted-foreground">
                      <Clock className="h-3 w-3 mr-1" />
                      {new Date(article.publishedAt).toLocaleDateString()}
                    </div>
                  </div>
                  <Link to={`/article/${article.id}`}>
                    <h2 className="font-semibold text-lg mb-2 text-card-foreground group-hover:text-primary transition-colors line-clamp-2">
                      {article.title}
                    </h2>
                  </Link>
                  <p className="text-muted-foreground text-sm mb-3 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center text-xs text-muted-foreground">
                      <User className="h-3 w-3 mr-1" />
                      {article.author}
                    </div>
                    <Link to={`/article/${article.id}`}>
                      <Button variant="link" size="sm" className="h-auto p-0 text-xs">
                        Read more →
                      </Button>
                    </Link>
                  </div>
                </div>
              </article>
            ))}
          </div>
        )}
        {!isLoading && articles.length === 0 && (
          <div className="text-center py-12">
            <h2 className="text-xl font-semibold mb-2">No articles found</h2>
            <p className="text-muted-foreground">Check back later for new {categoryData.name.toLowerCase()} articles.</p>
          </div>
        )}
      </main>
    </div>
  )
}
