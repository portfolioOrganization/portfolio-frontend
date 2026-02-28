import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
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
  sort_order: number;
  gallery_items: Array<{
    id: number;
    project_id: number;
    image_path: string;
    caption: string;
    display_order: number;
  }>;
}

interface FormattedProject {
  id: number;
  title: string;
  category: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string | null;
  color: string;
}

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<FormattedProject[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/projects/featured`);
        const data: Project[] = await response.json();
        
        const formattedProjects: FormattedProject[] = data.map((project, index) => ({
          id: project.id,
          title: project.title,
          category: 'Web Development',
          description: project.description,
          image: `${import.meta.env.VITE_STORAGE_URL}${project.featured_image}`,
          tags: project.technologies.split(',').map(tag => tag.trim()),
          link: project.project_url || '#',
          github: project.github_url || null,
          color: index % 2 === 0 ? 'from-primary' : 'from-accent',
        }));
        
        setProjects(formattedProjects);
      } catch (error) {
        console.error('Error fetching featured projects:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProjects();
  }, []);

  return (
    <div id="projects" className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute -top-40 -right-40 w-80 h-80 bg-primary/10 rounded-full blur-3xl opacity-50"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Showcase of my recent work combining innovation, technical excellence, and creative problem-solving
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6"></div>
        </div>

        {loading ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">Loading projects...</p>
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-20">
            <p className="text-muted-foreground">No featured projects available.</p>
          </div>
        ) : (
          <div className="space-y-20">
            {projects.map((project, index) => (
            <div key={project.id} className="group">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Content */}
                <div className={`space-y-6 ${index === 1 ? 'lg:order-2' : ''}`}>
                  <div className="inline-flex items-center px-3 py-1 bg-foreground/5 rounded-full text-sm font-medium text-foreground/75 border border-foreground/10">
                    {project.category}
                  </div>

                  <h3 className="text-4xl md:text-5xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>

                  <p className="text-lg text-muted-foreground leading-relaxed">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 pt-4">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-3 py-1 bg-foreground/5 text-foreground/70 text-sm rounded-full border border-foreground/10 group-hover:border-primary/30 group-hover:text-primary transition-all"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex flex-wrap gap-4 pt-8">
                    <Button asChild className="group/btn">
                      <a href={project.link} className="flex items-center gap-2">
                        View Project
                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                      </a>
                    </Button>
                    {project.github && (
                      <Button variant="outline" asChild>
                        <a href={project.github} className="flex items-center gap-2">
                          <Github className="w-4 h-4" />
                          Source Code
                        </a>
                      </Button>
                    )}
                  </div>
                </div>

                {/* Image */}
                <div className={`${index === 1 ? 'lg:order-1' : ''}`}>
                  <div className="relative aspect-video rounded-3xl overflow-hidden bg-gradient-to-br from-foreground/5 to-foreground/10 group-hover:shadow-2xl group-hover:shadow-foreground/10 transition-all duration-500">
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                    
                    {/* Floating Badge */}
                    <div className="absolute top-6 right-6 flex items-center gap-2 px-4 py-2 bg-white/10 backdrop-blur-md rounded-full text-white text-sm font-medium border border-white/20 opacity-0 group-hover:opacity-100 transition-all duration-300 transform -translate-y-2 group-hover:translate-y-0">
                      <ArrowUpRight className="w-4 h-4" />
                      Visit
                    </div>
                  </div>
                </div>
              </div>
            </div>
            ))}
          </div>
        )}

        {/* View All Projects CTA */}
        <div className="text-center mt-20">
          <Button asChild size="lg" variant="outline" className="group">
            <a href="/portfolio" className="flex items-center gap-2">
              View All Projects
              <ArrowUpRight className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProjects;