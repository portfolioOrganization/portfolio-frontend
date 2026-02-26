import { useState } from 'react';
import { Calendar, Clock, ArrowRight, Search, Tag, User, Eye, Heart, BookOpen, TrendingUp, Sparkles } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'Web Development', 'DevOps', 'Tutorials', 'Best Practices', 'Career'];

  const blogPosts = [
    {
      id: 1,
      title: 'Building Scalable React Applications: Advanced Patterns for 2024',
      excerpt: 'Master advanced React patterns, performance optimization techniques, and architectural decisions that scale with your application growth.',
      category: 'Web Development',
      tags: ['React', 'Performance', 'Architecture', 'JavaScript'],
      publishDate: '2024-01-15',
      readTime: '12 min read',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&h=400&fit=crop',
      featured: true,
      views: 2500,
      likes: 156,
      author: 'Your Name',
      difficulty: 'Advanced'
    },
    {
      id: 2,
      title: 'Docker & Kubernetes: Production-Ready DevOps Pipeline',
      excerpt: 'Complete guide to containerization and orchestration with real-world examples, security best practices, and monitoring strategies.',
      category: 'DevOps',
      tags: ['Docker', 'Kubernetes', 'DevOps', 'Containers'],
      publishDate: '2024-01-10',
      readTime: '15 min read',
      image: 'https://images.unsplash.com/photo-1605745341112-85968b19335b?w=800&h=400&fit=crop',
      featured: true,
      views: 3200,
      likes: 203,
      author: 'Your Name',
      difficulty: 'Intermediate'
    },
    {
      id: 3,
      title: 'Mastering CI/CD with GitHub Actions: From Zero to Hero',
      excerpt: 'Step-by-step tutorial covering automated testing, deployment strategies, security scanning, and advanced workflow patterns.',
      category: 'Tutorials',
      tags: ['CI/CD', 'GitHub Actions', 'Automation', 'Testing'],
      publishDate: '2024-01-05',
      readTime: '10 min read',
      image: 'https://images.unsplash.com/photo-1556075798-4825dfaaf498?w=800&h=400&fit=crop',
      featured: false,
      views: 1800,
      likes: 89,
      author: 'Your Name',
      difficulty: 'Beginner'
    },
    {
      id: 4,
      title: 'Web Performance Optimization: Core Web Vitals Deep Dive',
      excerpt: 'Comprehensive guide to improving website performance with practical techniques for better Core Web Vitals scores and SEO rankings.',
      category: 'Best Practices',
      tags: ['Performance', 'SEO', 'Web Vitals', 'Optimization'],
      publishDate: '2023-12-28',
      readTime: '8 min read',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=400&fit=crop',
      featured: false,
      views: 2100,
      likes: 142,
      author: 'Your Name',
      difficulty: 'Intermediate'
    },
    {
      id: 5,
      title: 'Infrastructure as Code: Terraform Best Practices',
      excerpt: 'Learn to manage cloud infrastructure efficiently with Terraform modules, state management, and enterprise-grade practices.',
      category: 'DevOps',
      tags: ['Terraform', 'Infrastructure', 'Cloud', 'IaC'],
      publishDate: '2023-12-20',
      readTime: '18 min read',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=400&fit=crop',
      featured: true,
      views: 2800,
      likes: 178,
      author: 'Your Name',
      difficulty: 'Advanced'
    },
    {
      id: 6,
      title: 'From Junior to Senior: My 3-Year Development Journey',
      excerpt: 'Personal insights, lessons learned, and practical advice for developers looking to advance their careers in tech.',
      category: 'Career',
      tags: ['Career', 'Personal Growth', 'Development', 'Advice'],
      publishDate: '2023-12-15',
      readTime: '6 min read',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=400&fit=crop',
      featured: false,
      views: 1600,
      likes: 95,
      author: 'Your Name',
      difficulty: 'Beginner'
    }
  ];

  const filteredPosts = blogPosts.filter(post => {
    const matchesSearch = post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         post.tags.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesCategory = selectedCategory === 'All' || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  const featuredPosts = blogPosts.filter(post => post.featured);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'short', 
      day: 'numeric' 
    });
  };

  const getDifficultyColor = (difficulty) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-500/10 text-green-700 border-green-500/20';
      case 'Intermediate': return 'bg-yellow-500/10 text-yellow-700 border-yellow-500/20';
      case 'Advanced': return 'bg-red-500/10 text-red-700 border-red-500/20';
      default: return 'bg-gray-500/10 text-gray-700 border-gray-500/20';
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-accent/5">
      {/* Hero Section */}
      <div className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-20 right-10 w-96 h-96 bg-accent/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 left-10 w-72 h-72 bg-primary/5 rounded-full blur-3xl animate-pulse delay-1000"></div>
        
        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8">
            <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-sm font-medium text-accent mb-4">
              <BookOpen className="w-4 h-4 mr-2" />
              Engineering Blog
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-accent via-accent to-primary bg-clip-text text-transparent">
                Engineering
              </span>
              <br />
              <span className="text-foreground">Insights</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Deep dives into{' '}
              <span className="text-accent font-semibold">modern development</span>,{' '}
              <span className="text-primary font-semibold">DevOps practices</span>, and{' '}
              <span className="text-accent font-semibold">career growth</span>
            </p>

            {/* Blog Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
              <div className="text-center group">
                <div className="text-3xl font-bold text-accent mb-1 group-hover:scale-110 transition-transform">25+</div>
                <div className="text-sm text-muted-foreground">Articles</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">10K+</div>
                <div className="text-sm text-muted-foreground">Readers</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-accent mb-1 group-hover:scale-110 transition-transform">500+</div>
                <div className="text-sm text-muted-foreground">Likes</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">6</div>
                <div className="text-sm text-muted-foreground">Categories</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Search & Filters */}
        <div className="flex flex-col lg:flex-row gap-6 mb-16 items-center justify-between bg-background/80 backdrop-blur-sm rounded-2xl p-6 border border-border/50">
          <div className="relative flex-1 max-w-lg">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search articles, tags, or topics..."
              className="pl-12 py-3 text-base rounded-xl border-border/50 focus:ring-2 focus:ring-accent/20 bg-background/50"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>

          <div className="flex flex-wrap gap-2">
            {categories.map((category) => (
              <Button
                key={category}
                variant={selectedCategory === category ? "default" : "outline"}
                size="sm"
                className={`rounded-full px-4 transition-all duration-300 ${
                  selectedCategory === category 
                    ? 'bg-accent text-accent-foreground shadow-lg scale-105' 
                    : 'text-muted-foreground hover:text-foreground hover:scale-105'
                }`}
                onClick={() => setSelectedCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>

        {/* Featured Posts */}
        {selectedCategory === 'All' && !searchTerm && (
          <section className="mb-20">
            <div className="flex items-center gap-3 mb-12">
              <Sparkles className="w-6 h-6 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Articles</h2>
              <div className="flex-1 h-px bg-gradient-to-r from-accent/50 to-transparent"></div>
            </div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
              {featuredPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="group overflow-hidden hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-border/50 bg-background/80 backdrop-blur-sm"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className="bg-accent/90 text-accent-foreground border-0">
                        {post.category}
                      </Badge>
                      <Badge className={`${getDifficultyColor(post.difficulty)} border`}>
                        {post.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center gap-4 text-white/90 text-sm">
                        <span className="flex items-center gap-1">
                          <Eye className="h-3 w-3" />
                          {post.views.toLocaleString()}
                        </span>
                        <span className="flex items-center gap-1">
                          <Heart className="h-3 w-3" />
                          {post.likes}
                        </span>
                      </div>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3">
                    <div className="flex flex-wrap items-center gap-2 mb-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {formatDate(post.publishDate)}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                    </div>
                    <CardTitle className="text-xl font-bold leading-tight group-hover:text-accent transition-colors duration-300 line-clamp-2">
                      {post.title}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent className="space-y-4">
                    <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3">{post.excerpt}</p>
                    
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="text-xs bg-secondary/60 hover:bg-secondary transition-colors"
                        >
                          <Tag className="h-2.5 w-2.5 mr-1" />
                          {tag}
                        </Badge>
                      ))}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      className="w-full justify-between text-accent hover:text-accent-foreground hover:bg-accent group/btn transition-all p-0 h-auto py-3"
                    >
                      <span className="font-medium">Read Full Article</span>
                      <ArrowRight className="h-4 w-4 transform group-hover/btn:translate-x-1 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>
        )}

        {/* All Posts */}
        <section className="pb-20">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-12 gap-4">
            <div className="flex items-center gap-3">
              <TrendingUp className="w-6 h-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                {selectedCategory === 'All' ? 'All Articles' : `${selectedCategory} Articles`}
              </h2>
            </div>
            <p className="text-muted-foreground bg-secondary/50 px-4 py-2 rounded-full text-sm">
              {filteredPosts.length} article{filteredPosts.length !== 1 ? 's' : ''} found
            </p>
          </div>

          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredPosts.map((post) => (
                <Card 
                  key={post.id} 
                  className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-border/50 flex flex-col bg-background/80 backdrop-blur-sm overflow-hidden"
                >
                  <div className="relative aspect-[16/9] overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <Badge className={`${getDifficultyColor(post.difficulty)} border text-xs`}>
                        {post.difficulty}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 right-3 flex gap-3 text-white/90 text-xs">
                      <span className="flex items-center gap-1 bg-black/20 px-2 py-1 rounded">
                        <Eye className="h-3 w-3" />
                        {post.views.toLocaleString()}
                      </span>
                      <span className="flex items-center gap-1 bg-black/20 px-2 py-1 rounded">
                        <Heart className="h-3 w-3" />
                        {post.likes}
                      </span>
                    </div>
                  </div>
                  
                  <CardHeader className="pb-3 flex-1">
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="outline" className="text-xs px-2 rounded-md bg-primary/5 text-primary border-primary/20">
                        {post.category}
                      </Badge>
                      <span className="text-xs text-muted-foreground">•</span>
                      <span className="text-xs text-muted-foreground">{formatDate(post.publishDate)}</span>
                    </div>
                    <CardTitle className="text-lg font-bold line-clamp-2 group-hover:text-primary transition-colors leading-tight">
                      {post.title}
                    </CardTitle>
                    <p className="text-sm text-muted-foreground mt-2 line-clamp-3 leading-relaxed">{post.excerpt}</p>
                  </CardHeader>
                  
                  <CardContent className="mt-auto pt-2 space-y-4">
                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                      <span>•</span>
                      <User className="h-3 w-3" />
                      <span>{post.author}</span>
                    </div>
                    
                    <div className="flex flex-wrap gap-1">
                      {post.tags.slice(0, 3).map((tag) => (
                        <Badge 
                          key={tag} 
                          variant="secondary" 
                          className="text-xs px-2"
                        >
                          {tag}
                        </Badge>
                      ))}
                      {post.tags.length > 3 && (
                        <Badge variant="secondary" className="text-xs px-2">
                          +{post.tags.length - 3}
                        </Badge>
                      )}
                    </div>
                    
                    <Button 
                      variant="ghost" 
                      size="sm" 
                      className="w-full justify-between text-primary hover:text-primary-foreground hover:bg-primary group/btn transition-all"
                    >
                      <span className="text-sm font-medium">Read Article</span>
                      <ArrowRight className="h-3 w-3 transform group-hover/btn:translate-x-0.5 transition-transform" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 space-y-6">
              <div className="w-24 h-24 bg-muted rounded-full flex items-center justify-center mx-auto">
                <Search className="h-12 w-12 text-muted-foreground/50" />
              </div>
              <div className="space-y-2">
                <h3 className="text-2xl font-bold text-foreground">No articles found</h3>
                <p className="text-muted-foreground max-w-md mx-auto">
                  We couldn't find any articles matching your search criteria. Try adjusting your filters or search terms.
                </p>
              </div>
              <Button 
                variant="outline" 
                onClick={() => {
                  setSearchTerm('');
                  setSelectedCategory('All');
                }}
                className="rounded-full px-8 hover:shadow-md transition-shadow"
              >
                Clear All Filters
              </Button>
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Blog;