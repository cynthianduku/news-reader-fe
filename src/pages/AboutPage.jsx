import React from 'react'
import { Link } from 'react-router-dom'
import Header from '@/components/Header'
import { Button } from '@/components/ui/button'
import { ArrowLeft, Users, Target, Award, Globe } from 'lucide-react'

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-4xl mx-auto px-4 md:px-6 py-8">
        <div className="mb-8">
          <Link to="/">
            <Button variant="ghost" size="sm">
              <ArrowLeft className="h-4 w-4 mr-2" />
              Back to Home
            </Button>
          </Link>
        </div>
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-card-foreground">
            About NewsHub
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Your trusted source for curated headlines and comprehensive coverage across technology, sports, business, science, and world events.
          </p>
        </div>
        <section className="mb-12">
          <div className="bg-card rounded-lg border p-8">
            <div className="flex items-center gap-3 mb-4">
              <Target className="h-6 w-6 text-primary" />
              <h2 className="text-2xl font-bold text-card-foreground">Our Mission</h2>
            </div>
            <p className="text-muted-foreground leading-relaxed">
              At NewsHub, we believe that staying informed shouldn't be overwhelming. Our mission is to deliver accurate, timely, and relevant news coverage that helps you understand the world around you. We curate content from reliable sources and present it in a clean, accessible format that respects your time and intelligence.
            </p>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-card-foreground">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-card rounded-lg border p-6 text-center">
              <Award className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Accuracy</h3>
              <p className="text-sm text-muted-foreground">
                We verify our sources and fact-check our content to ensure you receive reliable information.
              </p>
            </div>
            <div className="bg-card rounded-lg border p-6 text-center">
              <Globe className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Global Perspective</h3>
              <p className="text-sm text-muted-foreground">
                We cover stories from around the world to give you a comprehensive view of current events.
              </p>
            </div>
            <div className="bg-card rounded-lg border p-6 text-center">
              <Users className="h-8 w-8 text-primary mx-auto mb-4" />
              <h3 className="text-lg font-semibold mb-2 text-card-foreground">Community</h3>
              <p className="text-sm text-muted-foreground">
                We serve our readers by providing content that matters to your daily life and decisions.
              </p>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-8 text-card-foreground">What We Cover</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-4">
              <div className="bg-nh-orange p-4 rounded-lg text-white">
                <h3 className="font-semibold mb-2">World News</h3>
                <p className="text-sm opacity-90">International events, politics, and global affairs</p>
              </div>
              <div className="bg-nh-teal p-4 rounded-lg text-white">
                <h3 className="font-semibold mb-2">Technology</h3>
                <p className="text-sm opacity-90">Innovation, startups, and digital transformation</p>
              </div>
              <div className="bg-nh-red p-4 rounded-lg text-white">
                <h3 className="font-semibold mb-2">Business</h3>
                <p className="text-sm opacity-90">Markets, economy, and corporate developments</p>
              </div>
            </div>
            <div className="space-y-4">
              <div className="bg-nh-teal p-4 rounded-lg text-white">
                <h3 className="font-semibold mb-2">Sports</h3>
                <p className="text-sm opacity-90">Athletic achievements and sporting events worldwide</p>
              </div>
              <div className="bg-nh-purple p-4 rounded-lg text-white">
                <h3 className="font-semibold mb-2">Science</h3>
                <p className="text-sm opacity-90">Research breakthroughs and scientific discoveries</p>
              </div>
              <div className="bg-nh-blue p-4 rounded-lg text-white">
                <h3 className="font-semibold mb-2">Special Reports</h3>
                <p className="text-sm opacity-90">In-depth analysis and investigative journalism</p>
              </div>
            </div>
          </div>
        </section>
        <section className="mb-12">
          <div className="bg-card rounded-lg border p-8 text-center">
            <h2 className="text-2xl font-bold mb-4 text-card-foreground">Our Team</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              NewsHub is powered by a dedicated team of journalists, editors, and technology professionals who are passionate about delivering quality news coverage. Our editorial team has decades of combined experience in journalism and media.
            </p>
            <Link to="/contact">
              <Button variant="outline">Get in Touch</Button>
            </Link>
          </div>
        </section>
        <section className="text-center">
          <div className="bg-primary text-primary-foreground rounded-lg p-8">
            <h2 className="text-2xl font-bold mb-4">Stay Informed</h2>
            <p className="mb-6 opacity-90">
              Join thousands of readers who trust NewsHub for their daily news updates.
            </p>
            <Link to="/">
              <Button variant="secondary" size="lg">
                Explore Latest News
              </Button>
            </Link>
          </div>
        </section>
      </main>
    </div>
  )
}
