import { useState, useEffect } from 'react';
import { ExternalLink, Github, Filter, Star, Calendar, Code, Zap, Users, ArrowUpRight, Play } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import GalleryModal from '@/components/GalleryModal';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);

  const categories = ['All', 'Web Development', 'DevOps', 'Full-Stack'];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  // Map API data to match your expected format
  const mappedProjects = projects.map(project => ({
    id: project.id,
    title: project.title,
    category: 'Web Development', // You might want to add this field to your API
    description: project.description,
    image: `${import.meta.env.VITE_STORAGE_URL}${project.featured_image}`,
    technologies: project.technologies
      ? typeof project.technologies === 'string'
        ? project.technologies.split(',').map(tech => tech.trim())
        : project.technologies
      : [],
    liveUrl: project.project_url,
    githubUrl: project.github_url,
    featured: project.is_published,
    status: project.is_published ? 'Live' : 'Draft',
    year: new Date(project.created_at).getFullYear().toString(),
    impact: '', // You might want to add this field to your API
    metrics: {
      users: '10K+',
      performance: '98%',
      uptime: '99.9%'
    },
    gallery_items: project.gallery_items || []
  }));

  const openGallery = (project, index = 0) => {
    if (project.gallery_items && project.gallery_items.length > 0) {
      setSelectedGallery({
        images: project.gallery_items,
        initialIndex: index
      });
      setGalleryModalOpen(true);
    }
  };

  const filteredProjects = activeFilter === 'All'
    ? mappedProjects
    : mappedProjects.filter(project => project.category === activeFilter);

  const featuredProjects = mappedProjects.filter(project => project.featured);

  const getStatusColor = (status) => {
    switch (status) {
      case 'Live': return 'bg-green-500/10 text-green-700 border-green-500/20';
      case 'Production': return 'bg-blue-500/10 text-blue-700 border-blue-500/20';
      case 'Beta': return 'bg-orange-500/10 text-orange-700 border-orange-500/20';
      case 'Draft': return 'bg-gray-500/10 text-gray-700 border-gray-500/20';
      default: return 'bg-gray-500/10 text-gray-700 border-gray-500/20';
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <div className="text-destructive text-lg mb-2">Error loading projects</div>
          <div className="text-muted-foreground">{error}</div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      {/* Hero Section */}
      <div className="relative pt-24 pb-20 overflow-hidden">
        <div className="absolute top-20 left-10 w-96 h-96 bg-primary/5 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-72 h-72 bg-accent/5 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-6">
          <div className="text-center space-y-8 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4">
              <Code className="w-4 h-4 mr-2" />
              Portfolio Showcase
            </div>

            <h1 className="text-5xl md:text-7xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                Featured
              </span>
              <br />
              <span className="text-foreground">Projects</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Explore my latest work in{' '}
              <span className="text-primary font-semibold">web development</span>,{' '}
              <span className="text-accent font-semibold">DevOps automation</span>, and{' '}
              <span className="text-primary font-semibold">full-stack solutions</span>
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto mt-12">
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">20+</div>
                <div className="text-sm text-muted-foreground">Projects</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-accent mb-1 group-hover:scale-110 transition-transform">3+</div>
                <div className="text-sm text-muted-foreground">Years Exp</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-primary mb-1 group-hover:scale-110 transition-transform">10+</div>
                <div className="text-sm text-muted-foreground">Clients</div>
              </div>
              <div className="text-center group">
                <div className="text-3xl font-bold text-accent mb-1 group-hover:scale-110 transition-transform">99%</div>
                <div className="text-sm text-muted-foreground">Satisfaction</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6">
        {/* Featured Projects */}
        <section className="mb-20">
          <div className="flex items-center gap-3 mb-12">
            <Star className="w-6 h-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Projects</h2>
          </div>

          <GalleryModal
            images={selectedGallery?.images || []}
            isOpen={galleryModalOpen}
            onClose={() => setGalleryModalOpen(false)}
            initialIndex={selectedGallery?.initialIndex || 0}
          />
          {featuredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-muted-foreground">No featured projects yet</div>
            </div>
          ) : (
            <div className="space-y-12">
              {featuredProjects.map((project, index) => (
                <div key={project.id} className={`group ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'} flex flex-col lg:flex-row gap-8 lg:gap-12 items-center`}>
                  {/* Project Image */}
                  <div className="lg:w-1/2">
                    <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-700">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                      <div className="absolute top-4 right-4 flex gap-2">
                        <Badge className={`${getStatusColor(project.status)} border`}>
                          {project.status}
                        </Badge>
                        <Badge variant="outline" className="bg-background/90 text-foreground">
                          {project.year}
                        </Badge>
                      </div>
                      {project.liveUrl && (
                        <div className="absolute bottom-4 right-4">
                          <Button size="sm" className="bg-background/90 text-foreground hover:bg-background group/btn">
                            <Play className="w-4 h-4 mr-1 group-hover/btn:scale-110 transition-transform" />
                            Live Demo
                          </Button>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Project Details */}
                  <div className="lg:w-1/2 space-y-6">
                    <div className="space-y-4">
                      <div className="flex items-center gap-2">
                        <Badge className="bg-primary/10 text-primary px-3 py-1 cursor-pointer">
                          {project.category}
                        </Badge>
                        {/* <span className="text-sm text-muted-foreground">•</span> */}
                        {/* <span className="text-sm text-muted-foreground">{project.impact}</span> */}
                      </div>

                      <h3 className="text-2xl md:text-3xl font-bold text-foreground group-hover:text-primary transition-colors">
                        {project.title}
                      </h3>

                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Badge key={tech} variant="secondary" className="hover:bg-accent/20 hover:text-accent transition-colors">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                    {project.gallery_items && project.gallery_items.length > 0 && (
                      <div className="pt-4">
                        <h4 className="text-sm font-medium text-muted-foreground mb-2">
                          Project Gallery ({project.gallery_items.length} images)
                        </h4>
                        <div className="flex gap-2 overflow-x-auto pb-2">
                          {project.gallery_items.map((item, itemIndex) => (
                            <div
                              key={item.id}
                              className="flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden border cursor-pointer group/item relative"
                              onClick={() => openGallery(project, itemIndex)}
                            >
                              <img
                                src={`${import.meta.env.VITE_STORAGE_URL}${item.image_path}`}
                                alt={item.caption || 'Gallery item'}
                                className="w-full h-full object-cover group-hover/item:scale-110 transition-transform duration-300"
                              />
                              <div className="absolute inset-0 bg-black/0 group-hover/item:bg-black/40 transition-all duration-300 flex items-center justify-center">
                                <div className="opacity-0 group-hover/item:opacity-100 transition-opacity">
                                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                                  </svg>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                        <p className="text-xs text-muted-foreground mt-1">
                          Click on any image to view full gallery
                        </p>
                      </div>
                    )}

                    {/* Action Buttons */}
                    <div className="flex gap-3">
                      {project.liveUrl && (
                        <Button asChild className="group/btn">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-4 h-4 mr-2 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                            Live Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button asChild variant="outline" className="group/btn">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                            View Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        {/* All Projects */}
        <section className="pb-20">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 mb-12">
            <div className="flex items-center gap-3">
              <Filter className="w-6 h-6 text-accent" />
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">All Projects</h2>
            </div>

            {/* Filter Buttons */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <Button
                  key={category}
                  variant={activeFilter === category ? "default" : "outline"}
                  size="sm"
                  className={`rounded-full px-4 transition-all duration-300 ${activeFilter === category
                    ? 'shadow-lg scale-105'
                    : 'hover:scale-105'
                    }`}
                  onClick={() => setActiveFilter(category)}
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-muted-foreground">No projects found</div>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project) => (
                <Card key={project.id} className="group hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 border-border/50 overflow-hidden bg-background/80 backdrop-blur-sm">
                  <div className="relative aspect-video overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute top-3 left-3">
                      <Badge className={`${getStatusColor(project.status)} border text-xs`}>
                        {project.status}
                      </Badge>
                    </div>
                    <div className="absolute bottom-3 right-3">
                      <ArrowUpRight className="w-5 h-5 text-white opacity-0 group-hover:opacity-100 transform translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300" />
                    </div>
                  </div>

                  <CardHeader className="pb-3">
                    <div className="flex items-start justify-between gap-2 mb-2">
                      <CardTitle className="text-lg font-bold line-clamp-1 group-hover:text-primary transition-colors">
                        {project.title}
                      </CardTitle>
                      <span className="text-xs text-muted-foreground bg-secondary/50 px-2 py-1 rounded">
                        {project.year}
                      </span>
                    </div>
                    <Badge variant="outline" className="w-fit text-xs mb-2">
                      {project.category}
                    </Badge>
                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </CardHeader>

                  <CardContent className="space-y-4">
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <Badge key={tech} variant="secondary" className="text-xs">
                          {tech}
                        </Badge>
                      ))}
                      {project.technologies.length > 3 && (
                        <Badge variant="secondary" className="text-xs">
                          +{project.technologies.length - 3}
                        </Badge>
                      )}
                    </div>

                    <div className="flex gap-2 pt-2">
                      {project.liveUrl && (
                        <Button asChild size="sm" className="flex-1 text-xs group/btn">
                          <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                            <ExternalLink className="w-3 h-3 mr-1 group-hover/btn:scale-110 transition-transform" />
                            Demo
                          </a>
                        </Button>
                      )}
                      {project.githubUrl && (
                        <Button asChild variant="outline" size="sm" className="flex-1 text-xs group/btn">
                          <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                            <Github className="w-3 h-3 mr-1 group-hover/btn:rotate-12 transition-transform" />
                            Code
                          </a>
                        </Button>
                      )}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default Portfolio;