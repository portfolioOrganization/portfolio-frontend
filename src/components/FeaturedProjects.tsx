import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string;
  project_url: string;
  github_url: string | null;
  featured_image: string;
  is_published: boolean;
  is_featured: boolean;
}

interface FormattedProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string | null;
}

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<FormattedProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/projects/featured`);
        const data: Project[] = await response.json();
        setProjects(data.map(p => ({
          id: p.id,
          title: p.title,
          description: p.description,
          image: `${import.meta.env.VITE_STORAGE_URL}${p.featured_image}`,
          tags: p.technologies.split(',').map(t => t.trim()),
          link: p.project_url || '#',
          github: p.github_url || null,
        })));
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };
    fetchFeaturedProjects();
  }, []);

  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-16">
      <div className="max-w-5xl mx-auto">

        {/* Section label */}
        <div className="flex items-center gap-4 mb-16">
          <span className="text-xs uppercase tracking-widest text-muted-foreground/60 font-medium">Selected Work</span>
          <div className="h-px flex-1 bg-border/60 max-w-[60px]" />
        </div>

        {loading ? (
          <div className="space-y-8">
            {[1, 2].map(i => <div key={i} className="h-64 rounded-2xl bg-muted animate-pulse" />)}
          </div>
        ) : projects.length === 0 ? (
          <p className="text-muted-foreground text-sm">No featured projects yet.</p>
        ) : (
          <div className="space-y-24">
            {projects.map((project, index) => (
              <div
                key={project.id}
                className={`flex flex-col gap-8 lg:gap-16 lg:items-center ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'}`}
              >
                {/* Image */}
                <div className="w-full lg:w-[55%] group/img flex-shrink-0">
                  <div className="relative aspect-[4/3] sm:aspect-video rounded-2xl overflow-hidden bg-muted">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover/img:scale-105 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent" />
                    {project.link && project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="absolute top-4 right-4 w-9 h-9 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover/img:opacity-100 transition-opacity"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-5">
                  {/* Index number */}
                  <span className="text-[10px] font-mono text-muted-foreground/40 uppercase tracking-widest">
                    {String(index + 1).padStart(2, '0')}
                  </span>

                  <h3 className="text-2xl sm:text-3xl font-bold leading-tight text-foreground">
                    {project.title}
                  </h3>

                  <p className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-2.5 py-1 text-[11px] font-medium bg-muted rounded-md text-muted-foreground">
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-3 pt-2">
                    {project.link && project.link !== '#' && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-foreground hover:text-primary transition-colors group/link"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        Live Demo
                        <ArrowUpRight className="w-3 h-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
                      </a>
                    )}
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                      >
                        <Github className="w-3.5 h-3.5" />
                        Source
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* View all */}
        <div className="mt-20 pt-10 border-t border-border/60">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors group"
          >
            View all projects
            <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProjects;