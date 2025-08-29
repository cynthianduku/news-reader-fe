import React, { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { ArrowLeft, Clock, User, Share2, Bookmark } from 'lucide-react'
import { useToast } from '@/hooks/use-toast'

export default function ArticlePage() {
  const { id } = useParams()
  const [article, setArticle] = useState(null)
  const [loading, setLoading] = useState(true)
  const { toast } = useToast()

  useEffect(() => {
    const fetchArticle = async () => {
      try {
        const articleUrl = decodeURIComponent(id)
        const res = await fetch(
  `https://newsapi.org/v2/everything?domains=${new URL(articleUrl).hostname}&apiKey=${import.meta.env.VITE_NEWS_API_KEY}`
)
        const data = await res.json()
        const found = data.articles.find(a => a.url === articleUrl)
        setArticle(found || null)
      } catch (error) {
        console.error(error)
        setArticle(null)
      } finally {
        setLoading(false)
      }
    }

    fetchArticle()
  }, [id])

  const handleShare = () => {
    navigator.clipboard.writeText(window.location.href)
    toast({
      title: 'Link Copied',
      description: 'Article link has been copied to clipboard'
    })
  }

  const handleBookmark = () => {
    toast({
      title: 'Bookmarked',
      description: 'Article has been saved to your reading list'
    })
  }

  if (loading) return <div className="min-h-screen bg-background">Loading...</div>
  if (!article) return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-screen-xl-custom mx-auto px-4 md:px-6 py-8">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
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

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <div className="mb-6">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>

        <header className="mb-8">
          <div className="flex items-center gap-3 mb-4">
            <Badge variant="secondary">{article.source.name || article.source}</Badge>
            <div className="flex items-center text-sm text-muted-foreground">
              <Clock className="h-4 w-4 mr-1" />
              {new Date(article.publishedAt).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
            </div>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-card-foreground mb-4 leading-tight">
            {article.title}
          </h1>
          <p className="text-xl text-muted-foreground mb-6 leading-relaxed">
            {article.description || article.content}
          </p>
          <div className="flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-3">
              <div className="flex items-center text-sm text-muted-foreground">
                <User className="h-4 w-4 mr-2" />
                <span>By <strong>{article.author || 'Unknown'}</strong></span>
              </div>
              <span className="text-muted-foreground">•</span>
              <span className="text-sm text-muted-foreground">{article.source.name || article.source}</span>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" onClick={handleShare}>
                <Share2 className="h-4 w-4 mr-2" />
                Share
              </Button>
              <Button variant="outline" size="sm" onClick={handleBookmark}>
                <Bookmark className="h-4 w-4 mr-2" />
                Save
              </Button>
            </div>
          </div>
        </header>

        {article.urlToImage && (
          <div className="mb-8">
            <div className="aspect-video rounded-lg overflow-hidden">
              <img 
                src={article.urlToImage} 
                alt={article.title}
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        )}

        <article className="prose prose-lg max-w-none">
          <div className="text-card-foreground leading-relaxed space-y-4">
            <p>{article.content}</p>
          </div>
        </article>
      </main>
    </div>
  )
}
