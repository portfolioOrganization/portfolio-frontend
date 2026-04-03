import { useState, useEffect } from 'react';
import { ExternalLink, Github, Star, Code, ArrowUpRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import GalleryModal from '@/components/GalleryModal';

const Portfolio = () => {
  const [activeFilter, setActiveFilter] = useState('All');
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [selectedGallery, setSelectedGallery] = useState(null);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);

  const categories = ['All'];

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/projects`);
        if (!response.ok) throw new Error('Failed to fetch projects');
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

  const mappedProjects = projects.map(project => ({
    id: project.id,
    title: project.title,
    category: 'Web Development',
    description: project.description,
    image: `${import.meta.env.VITE_STORAGE_URL}${project.featured_image}`,
    technologies: project.technologies
      ? typeof project.technologies === 'string'
        ? project.technologies.split(',').map(t => t.trim())
        : project.technologies
      : [],
    liveUrl: project.project_url,
    githubUrl: project.github_url,
    isPublished: project.is_published,
    featured: project.is_published,
    status: project.is_published ? 'Live' : 'Draft',
    year: new Date(project.created_at).getFullYear().toString(),
    gallery_items: project.gallery_items || [],
  }));

  const openGallery = (project, index = 0) => {
    if (project.gallery_items?.length > 0) {
      setSelectedGallery({ images: project.gallery_items, initialIndex: index });
      setGalleryModalOpen(true);
    }
  };

  const filteredProjects = activeFilter === 'All'
    ? mappedProjects
    : mappedProjects.filter(p => p.category === activeFilter);

  const statusColor = (status) => {
    switch (status) {
      case 'Live':       return 'bg-emerald-500/10 text-emerald-700 border-emerald-500/20';
      case 'Production': return 'bg-blue-500/10 text-blue-700 border-blue-500/20';
      case 'Beta':       return 'bg-orange-500/10 text-orange-700 border-orange-500/20';
      default:           return 'bg-gray-500/10 text-gray-600 border-gray-300';
    }
  };

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="animate-spin rounded-full h-10 w-10 border-2 border-muted border-t-primary" />
    </div>
  );

  if (error) return (
    <div className="min-h-screen flex items-center justify-center px-6 text-center">
      <div>
        <p className="text-destructive font-semibold mb-1">Error loading projects</p>
        <p className="text-sm text-muted-foreground">{error}</p>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-background">

      {/* ── Hero ──────────────────────────────────────────────────────────── */}
      <section className="relative pt-20 pb-16 px-5 sm:px-6 overflow-hidden">
        {/* Subtle bg blobs — desktop only visible */}
        <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-primary/5 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2 pointer-events-none" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-accent/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3 pointer-events-none" />

        <div className="relative max-w-4xl mx-auto text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-primary/8 rounded-full text-sm font-medium text-primary border border-primary/15">
            <Code className="w-3.5 h-3.5" />
            Portfolio Showcase
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold leading-tight tracking-tight">
            <span className="bg-gradient-to-r from-primary to-primary/70 bg-clip-text text-transparent">
              Featured
            </span>{' '}
            <span className="text-foreground">Projects</span>
          </h1>

          <p className="text-base sm:text-lg text-muted-foreground max-w-xl mx-auto leading-relaxed">
            Web development, DevOps automation, and full-stack solutions built with care.
          </p>

          {/* Stats — 2×2 on mobile, 4 cols on lg */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 max-w-2xl mx-auto pt-4">
            {[
              { value: '20+', label: 'Projects' },
              { value: '3+',  label: 'Years Exp' },
              { value: '10+', label: 'Clients' },
              { value: '99%', label: 'Satisfaction' },
            ].map(({ value, label }) => (
              <div key={label} className="py-4 rounded-2xl bg-secondary/40 border border-border/60 space-y-0.5">
                <div className="text-2xl sm:text-3xl font-bold text-primary">{value}</div>
                <div className="text-xs text-muted-foreground">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>


      {/* ── Projects Grid ─────────────────────────────────────────────────── */}
      <section className="max-w-6xl mx-auto px-5 sm:px-6 pb-24">

        <GalleryModal
          images={selectedGallery?.images || []}
          isOpen={galleryModalOpen}
          onClose={() => setGalleryModalOpen(false)}
          initialIndex={selectedGallery?.initialIndex || 0}
        />

        {/* Header + filters */}
        <div className="flex flex-col gap-4 mb-8 sm:flex-row sm:items-center sm:justify-between">
          <h2 className="text-2xl sm:text-3xl font-bold">Projects</h2>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none -mx-1 px-1">
            {categories.map(cat => (
              <button
                key={cat}
                onClick={() => setActiveFilter(cat)}
                className={`flex-shrink-0 px-4 py-1.5 rounded-full text-sm font-medium transition-all ${
                  activeFilter === cat
                    ? 'bg-primary text-primary-foreground shadow-sm'
                    : 'bg-secondary/60 text-muted-foreground hover:bg-secondary hover:text-foreground'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {filteredProjects.length === 0 ? (
          <p className="text-center text-sm text-muted-foreground py-12">No projects found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {filteredProjects.map(project => (
              <div
                key={project.id}
                role="button"
                tabIndex={0}
                aria-label={`Open gallery for ${project.title}`}
                onClick={() => openGallery(project, 0)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openGallery(project, 0);
                  }
                }}
                className={`group flex flex-col rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ${
                  project.featured
                    ? 'border-2 border-primary/30 bg-primary/[0.02] shadow-md shadow-primary/10'
                    : 'border border-border bg-card'
                } ${project.gallery_items.length > 0 ? 'cursor-zoom-in' : 'cursor-default'}`}
              >
                {/* Image */}
                <div className="relative aspect-video overflow-hidden bg-muted">
                  {project.image && (
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                  {/* Status + featured badge */}
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    <Badge className={`text-xs border backdrop-blur-sm ${statusColor(project.status)}`}>
                      {project.status}
                    </Badge>
                    {project.featured && (
                      <Badge className="text-xs bg-amber-400/90 text-amber-900 border-none backdrop-blur-sm gap-1">
                        <Star className="w-2.5 h-2.5 fill-amber-900" />
                        Featured
                      </Badge>
                    )}
                  </div>

                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ArrowUpRight className="w-4 h-4 text-white drop-shadow" />
                  </div>

                  {/* Gallery thumbnails on hover */}
                  {project.gallery_items.length > 0 && (
                    <div className="absolute bottom-0 left-0 right-0 p-3 flex gap-1.5 overflow-x-auto scrollbar-none opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300">
                      {project.gallery_items.slice(0, 5).map((item, i) => (
                        <button
                          key={item.id}
                          onClick={(e) => {
                            e.stopPropagation();
                            openGallery(project, i);
                          }}
                          className="flex-shrink-0 w-10 h-10 rounded-md overflow-hidden border border-white/30 bg-black/20 relative group/thumb"
                        >
                          <img
                            src={`${import.meta.env.VITE_STORAGE_URL}${item.image_path}`}
                            alt={item.caption || ''}
                            className="w-full h-full object-cover"
                          />
                        </button>
                      ))}
                      {project.gallery_items.length > 5 && (
                        <button
                          onClick={(e) => {
                            e.stopPropagation();
                            openGallery(project, 5);
                          }}
                          className="flex-shrink-0 w-10 h-10 rounded-md border border-white/30 bg-black/50 flex items-center justify-center text-white text-[10px] font-semibold"
                        >
                          +{project.gallery_items.length - 5}
                        </button>
                      )}
                    </div>
                  )}
                </div>

                {/* Body */}
                <div className="flex flex-col flex-1 p-5 space-y-3">
                  <div className="flex items-start justify-between gap-2">
                    <h3 className="text-base font-semibold leading-snug line-clamp-1 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <span className="text-xs text-muted-foreground bg-secondary/60 px-2 py-0.5 rounded flex-shrink-0">
                      {project.year}
                    </span>
                  </div>

                  <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed flex-1">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.slice(0, 3).map(tech => (
                      <Badge key={tech} variant="secondary" className="text-[10px] rounded-full px-2">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 3 && (
                      <Badge variant="secondary" className="text-[10px] rounded-full px-2 text-muted-foreground">
                        +{project.technologies.length - 3}
                      </Badge>
                    )}
                  </div>

                  {(project.isPublished || project.githubUrl) && (
                    <div className="flex gap-2 pt-1">
                      {project.isPublished ? (
                        project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="flex-1 inline-flex items-center justify-center gap-1.5 h-8 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
                          >
                            <ExternalLink className="w-3 h-3" />
                            Demo
                          </a>
                        )
                      ) : (
                        <button
                          type="button"
                          disabled
                          className="flex-1 inline-flex items-center justify-center gap-1.5 h-8 rounded-lg bg-secondary text-muted-foreground text-xs font-medium cursor-not-allowed"
                        >
                          Coming Soon
                        </button>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 inline-flex items-center justify-center gap-1.5 h-8 rounded-lg border border-border text-xs font-medium hover:bg-secondary transition-colors"
                        >
                          <Github className="w-3 h-3" />
                          Code
                        </a>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </section>
    </div>
  );
};

export default Portfolio;