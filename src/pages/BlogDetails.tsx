import { useState } from 'react';
import { Calendar, Clock, User, Eye, Heart, Share2, ArrowLeft, ArrowRight, Tag, BookOpen, Coffee, Github, ExternalLink, MessageCircle } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

const BlogDetail = () => {
  const [isLiked, setIsLiked] = useState(false);
  const [likesCount, setLikesCount] = useState(156);

  const handleLike = () => {
    setIsLiked(!isLiked);
    setLikesCount(prev => isLiked ? prev - 1 : prev + 1);
  };

  // Sample blog post data
  const post = {
    id: 1,
    title: 'Building Scalable React Applications: Advanced Patterns for 2024',
    excerpt: 'Master advanced React patterns, performance optimization techniques, and architectural decisions that scale with your application growth.',
    category: 'Web Development',
    tags: ['React', 'Performance', 'Architecture', 'JavaScript', 'Best Practices'],
    publishDate: '2024-01-15',
    readTime: '12 min read',
    image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=1200&h=600&fit=crop',
    author: {
      name: 'Your Name',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=64&h=64&fit=crop&crop=face',
      bio: 'Full-Stack Developer & DevOps Engineer with 3+ years of experience building scalable web applications.',
      social: {
        github: 'https://github.com',
        twitter: 'https://twitter.com'
      }
    },
    views: 2500,
    likes: likesCount,
    difficulty: 'Advanced',
    tableOfContents: [
      { id: 'introduction', title: 'Introduction', level: 1 },
      { id: 'component-patterns', title: 'Advanced Component Patterns', level: 1 },
      { id: 'compound-components', title: 'Compound Components', level: 2 },
      { id: 'render-props', title: 'Render Props Pattern', level: 2 },
      { id: 'hooks-patterns', title: 'Custom Hooks Patterns', level: 2 },
      { id: 'performance', title: 'Performance Optimization', level: 1 },
      { id: 'memoization', title: 'Memoization Strategies', level: 2 },
      { id: 'code-splitting', title: 'Code Splitting', level: 2 },
      { id: 'architecture', title: 'Application Architecture', level: 1 },
      { id: 'conclusion', title: 'Conclusion', level: 1 }
    ]
  };

  const relatedPosts = [
    {
      id: 2,
      title: 'React Performance: Optimizing Large Applications',
      image: 'https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=300&h=200&fit=crop',
      readTime: '8 min read',
      category: 'Web Development'
    },
    {
      id: 3,
      title: 'Modern React Patterns: Hooks vs Classes',
      image: 'https://images.unsplash.com/photo-1517180102446-f3ece451e9d8?w=300&h=200&fit=crop',
      readTime: '10 min read',
      category: 'Web Development'
    },
    {
      id: 4,
      title: 'State Management in React: Redux vs Context',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=300&h=200&fit=crop',
      readTime: '15 min read',
      category: 'Web Development'
    }
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', { 
      year: 'numeric', 
      month: 'long', 
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
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Navigation */}
      <div className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-4xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <Button variant="ghost" size="sm" className="group">
              <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" />
              Back to Blog
            </Button>
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                size="sm"
                onClick={handleLike}
                className={`group ${isLiked ? 'text-red-500' : ''}`}
              >
                <Heart className={`w-4 h-4 mr-1 ${isLiked ? 'fill-current' : ''} group-hover:scale-110 transition-transform`} />
                {likesCount}
              </Button>
              <Button variant="ghost" size="sm" className="group">
                <Share2 className="w-4 h-4 mr-1 group-hover:scale-110 transition-transform" />
                Share
              </Button>
            </div>
          </div>
        </div>
      </div>

      <article className="max-w-4xl mx-auto px-6 py-12">
        {/* Header */}
        <header className="mb-12">
          <div className="space-y-6">
            {/* Category & Difficulty */}
            <div className="flex flex-wrap items-center gap-3">
              <Badge className="bg-primary/10 text-primary px-3 py-1">
                {post.category}
              </Badge>
              <Badge className={`${getDifficultyColor(post.difficulty)} border px-3 py-1`}>
                {post.difficulty}
              </Badge>
              <div className="flex items-center gap-4 text-sm text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Eye className="h-4 w-4" />
                  {post.views.toLocaleString()} views
                </span>
                <span className="flex items-center gap-1">
                  <MessageCircle className="h-4 w-4" />
                  12 comments
                </span>
              </div>
            </div>

            {/* Title */}
            <h1 className="text-4xl md:text-5xl font-bold text-foreground leading-tight">
              {post.title}
            </h1>

            {/* Excerpt */}
            <p className="text-xl text-muted-foreground leading-relaxed">
              {post.excerpt}
            </p>

            {/* Meta Info */}
            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <img 
                  src={post.author.avatar} 
                  alt={post.author.name}
                  className="w-8 h-8 rounded-full"
                />
                <span className="font-medium text-foreground">{post.author.name}</span>
              </div>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center gap-1">
                <Calendar className="h-4 w-4" />
                {formatDate(post.publishDate)}
              </span>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center gap-1">
                <Clock className="h-4 w-4" />
                {post.readTime}
              </span>
              <span className="hidden sm:block">•</span>
              <span className="flex items-center gap-1">
                <Coffee className="h-4 w-4" />
                Grab a coffee
              </span>
            </div>

            {/* Tags */}
            <div className="flex flex-wrap gap-2">
              {post.tags.map((tag) => (
                <Badge key={tag} variant="secondary" className="hover:bg-secondary/80 transition-colors">
                  <Tag className="h-3 w-3 mr-1" />
                  {tag}
                </Badge>
              ))}
            </div>
          </div>
        </header>

        {/* Featured Image */}
        <div className="mb-12">
          <div className="aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10">
            <img 
              src={post.image} 
              alt={post.title}
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-4 gap-12">
          {/* Table of Contents */}
          <aside className="lg:col-span-1 order-2 lg:order-1">
            <div className="sticky top-24 space-y-6">
              <Card className="p-6 bg-background/50 backdrop-blur-sm border-border/50">
                <h3 className="font-semibold text-foreground mb-4 flex items-center gap-2">
                  <BookOpen className="h-4 w-4" />
                  Table of Contents
                </h3>
                <nav className="space-y-2">
                  {post.tableOfContents.map((item) => (
                    <a
                      key={item.id}
                      href={`#${item.id}`}
                      className={`block text-sm text-muted-foreground hover:text-primary transition-colors ${
                        item.level === 2 ? 'pl-4' : ''
                      }`}
                    >
                      {item.title}
                    </a>
                  ))}
                </nav>
              </Card>

              {/* Author Card */}
              <Card className="p-6 bg-background/50 backdrop-blur-sm border-border/50">
                <div className="text-center space-y-4">
                  <img 
                    src={post.author.avatar} 
                    alt={post.author.name}
                    className="w-16 h-16 rounded-full mx-auto"
                  />
                  <div>
                    <h4 className="font-semibold text-foreground">{post.author.name}</h4>
                    <p className="text-sm text-muted-foreground mt-2 leading-relaxed">{post.author.bio}</p>
                  </div>
                  <div className="flex justify-center gap-2">
                    <Button variant="outline" size="sm" asChild>
                      <a href={post.author.social.github} target="_blank" rel="noopener noreferrer">
                        <Github className="h-4 w-4" />
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild>
                      <a href={post.author.social.twitter} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </div>
          </aside>

          {/* Main Content */}
          <main className="lg:col-span-3 order-1 lg:order-2">
            <div className="prose prose-lg max-w-none">
              {/* Content sections would be dynamically rendered here */}
              <section id="introduction" className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Introduction</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  React has evolved significantly since its introduction, and building scalable applications requires more than just understanding the basics. In this comprehensive guide, we'll explore advanced patterns and architectural decisions that will help you build maintainable, performant applications that can grow with your team and business needs.
                </p>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Whether you're working on a small startup MVP or a large enterprise application, the patterns and techniques covered in this article will provide you with the tools needed to write better React code and make informed architectural decisions.
                </p>
              </section>

              <section id="component-patterns" className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Advanced Component Patterns</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Modern React development relies heavily on well-designed component patterns that promote reusability, maintainability, and testability. Let's explore some of the most effective patterns for building scalable applications.
                </p>

                <h3 id="compound-components" className="text-2xl font-semibold text-foreground mb-4">Compound Components</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Compound Components pattern allows you to create components that work together to form a complete UI element while maintaining clean separation of concerns and flexibility.
                </p>

                <div className="bg-muted/30 rounded-lg p-6 mb-6 border border-border/20">
                  <pre className="text-sm text-foreground overflow-x-auto">
                    <code>{`// Example: Modal compound component
const Modal = ({ children, isOpen, onClose }) => {
  return (
    <ModalContext.Provider value={{ isOpen, onClose }}>
      {children}
    </ModalContext.Provider>
  );
};

Modal.Header = ({ children }) => (
  <div className="modal-header">{children}</div>
);

Modal.Body = ({ children }) => (
  <div className="modal-body">{children}</div>
);

Modal.Footer = ({ children }) => (
  <div className="modal-footer">{children}</div>
);`}
                    </code>
                  </pre>
                </div>

                <h3 id="render-props" className="text-2xl font-semibold text-foreground mb-4">Render Props Pattern</h3>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  The Render Props pattern provides a way to share code between React components using a prop whose value is a function.
                </p>
              </section>

              <section id="performance" className="mb-12">
                <h2 className="text-3xl font-bold text-foreground mb-6">Performance Optimization</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">
                  Performance is crucial for user experience and SEO. Let's explore advanced techniques for optimizing React applications.
                </p>

                <div className="bg-blue-50 dark:bg-blue-950/20 border border-blue-200 dark:border-blue-800/30 rounded-lg p-6 mb-6">
                  <div className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-blue-500 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xs text-white font-bold">💡</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-blue-900 dark:text-blue-100 mb-2">Pro Tip</h4>
                      <p className="text-blue-800 dark:text-blue-200 text-sm leading-relaxed">
                        Always measure performance before optimizing. Use React DevTools Profiler to identify actual bottlenecks rather than premature optimization.
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              {/* Call to Action */}
              <div className="bg-gradient-to-r from-primary/10 to-accent/10 rounded-2xl p-8 mt-12">
                <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Level Up Your React Skills?</h3>
                <p className="text-muted-foreground mb-6">
                  This article covered just the beginning. Subscribe to get more advanced tutorials, performance tips, and architectural insights delivered directly to your inbox.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <Button className="flex-1 sm:flex-none">
                    Subscribe to Newsletter
                  </Button>
                  <Button variant="outline" className="flex-1 sm:flex-none">
                    Follow on GitHub
                  </Button>
                </div>
              </div>
            </div>
          </main>
        </div>
        </article>
        </div>
    );
}

export default BlogDetail;