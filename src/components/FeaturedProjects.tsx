import { ExternalLink, Github, Star, ArrowUpRight } from 'lucide-react';
import { useEffect, useState } from 'react';
import { Badge } from '@/components/ui/badge';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import GalleryModal from '@/components/GalleryModal';

interface GalleryItem {
  id?: number | string;
  image_path: string;
  caption?: string;
}

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
  gallery_items?: GalleryItem[];
}

interface FormattedProject {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
  github: string | null;
  galleryItems: GalleryItem[];
}

const toStorageUrl = (path: string | null | undefined) => {
  if (!path) return '';
  if (/^https?:\/\//i.test(path)) return path;
  return `${import.meta.env.VITE_STORAGE_URL}${path}`;
};

const FeaturedProjects = () => {
  const [projects, setProjects] = useState<FormattedProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [selectedGallery, setSelectedGallery] = useState<GalleryItem[]>([]);
  const [galleryModalOpen, setGalleryModalOpen] = useState(false);

  const openGallery = (project: FormattedProject) => {
    const items = project.galleryItems.length > 0
      ? project.galleryItems
      : project.image
        ? [{ image_path: project.image, caption: project.title }]
        : [];

    if (items.length === 0) return;

    setSelectedGallery(items);
    setGalleryModalOpen(true);
  };

  useEffect(() => {
    const fetchFeaturedProjects = async () => {
      try {
        const response = await fetch(`${import.meta.env.VITE_API_URL}/projects/featured`);
        const data: Project[] = await response.json();

        setProjects(
          data.map((p) => ({
            id: p.id,
            title: p.title,
            description: p.description,
            image: toStorageUrl(p.featured_image),
            tags: p.technologies
              ? p.technologies
                  .split(',')
                  .map((t) => t.trim())
                  .filter(Boolean)
              : [],
            link: p.project_url || '#',
            github: p.github_url || null,
            galleryItems: p.gallery_items || [],
          }))
        );
      } catch (e) {
        console.error(e);
      } finally {
        setLoading(false);
      }
    };

    fetchFeaturedProjects();
  }, []);

  return (
    <section className="relative px-5 py-24 sm:px-8 sm:py-28 lg:px-16">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-background to-muted/25" />

      <div className="mx-auto max-w-6xl">
        <GalleryModal
          images={selectedGallery}
          isOpen={galleryModalOpen}
          onClose={() => setGalleryModalOpen(false)}
          initialIndex={0}
        />

        <div className="mb-10 flex flex-col gap-5 sm:mb-12 md:flex-row md:items-end md:justify-between">
          <div className="max-w-2xl space-y-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-primary/15 bg-primary/8 text-primary text-xs font-medium uppercase tracking-[0.16em]">
              <Star className="h-3.5 w-3.5" />
              Featured Projects
            </div>

            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold tracking-tight text-foreground">
              Recent work in a quick tour.
            </h2>

            <p className="max-w-xl text-sm sm:text-base leading-relaxed text-muted-foreground">
              Swipe through selected projects built with the same product-first approach used across the full portfolio.
            </p>
          </div>

          <a
            href="/portfolio"
            className="group inline-flex w-fit items-center gap-2 rounded-full border border-border bg-background px-4 py-2 text-sm font-medium text-foreground transition-all hover:border-foreground/20 hover:bg-muted"
          >
            View all projects
            <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
          </a>
        </div>

        {loading ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="animate-pulse overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="aspect-video bg-muted/60" />
                <div className="space-y-3 p-5">
                  <div className="h-3 w-16 rounded bg-muted" />
                  <div className="h-6 w-3/4 rounded bg-muted" />
                  <div className="h-12 w-full rounded bg-muted" />
                  <div className="flex gap-2">
                    <div className="h-6 w-16 rounded-full bg-muted" />
                    <div className="h-6 w-16 rounded-full bg-muted" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="rounded-3xl border border-dashed border-border/70 bg-muted/20 px-6 py-16 text-center">
            <p className="text-sm text-muted-foreground">No featured projects yet.</p>
          </div>
        ) : (
          <div className="relative">
            <Carousel
              opts={{ align: 'start', loop: projects.length > 3 }}
              className="w-full"
            >
              <CarouselContent className="-ml-0 sm:-ml-2">
                {projects.map((project) => {
                  const hasLiveLink = project.link && project.link !== '#';

                  return (
                    <CarouselItem
                      key={project.id}
                      className="pl-0 sm:pl-2 basis-full md:basis-1/2 xl:basis-1/3"
                    >
                      <article className="group flex h-full flex-col rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-1 transition-all duration-300 border-2 border-primary/30 bg-primary/[0.02] shadow-md shadow-primary/10">
                        <div
                          className="relative aspect-video overflow-hidden bg-muted cursor-zoom-in"
                          role="button"
                          tabIndex={0}
                          aria-label={`Open gallery for ${project.title}`}
                          onClick={() => openGallery(project)}
                          onKeyDown={(e) => {
                            if (e.key === 'Enter' || e.key === ' ') {
                              e.preventDefault();
                              openGallery(project);
                            }
                          }}
                        >
                          {project.image && (
                            <img
                              src={project.image}
                              alt={project.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                          <div className="absolute top-3 left-3 flex gap-1.5">
                            <Badge className="text-xs border backdrop-blur-sm bg-emerald-500/10 text-emerald-700 border-emerald-500/20">
                              Live
                            </Badge>
                            <Badge className="text-xs bg-amber-400/90 text-amber-900 border-none backdrop-blur-sm gap-1">
                              <Star className="w-2.5 h-2.5 fill-amber-900" />
                              Featured
                            </Badge>
                          </div>

                          {hasLiveLink && (
                            <a
                              href={project.link}
                              target="_blank"
                              rel="noopener noreferrer"
                              aria-label={`Open ${project.title}`}
                              className="absolute top-3 right-3 inline-flex h-8 w-8 items-center justify-center rounded-full bg-black/40 text-white hover:bg-black/55 transition-colors"
                              onClick={(e) => e.stopPropagation()}
                            >
                              <ArrowUpRight className="w-4 h-4" />
                            </a>
                          )}
                        </div>

                        <div className="flex flex-col flex-1 p-5 space-y-3">
                          <h3 className="text-base font-semibold leading-snug line-clamp-1 group-hover:text-primary transition-colors">
                            {project.title}
                          </h3>

                          <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed flex-1">
                            {project.description}
                          </p>

                          <div className="flex flex-wrap gap-1">
                            {project.tags.slice(0, 3).map((tag) => (
                              <Badge key={tag} variant="secondary" className="text-[10px] rounded-full px-2">
                                {tag}
                              </Badge>
                            ))}
                            {project.tags.length > 3 && (
                              <Badge variant="secondary" className="text-[10px] rounded-full px-2 text-muted-foreground">
                                +{project.tags.length - 3}
                              </Badge>
                            )}
                          </div>

                          {(hasLiveLink || project.github) && (
                            <div className="flex gap-2 pt-1">
                              {hasLiveLink && (
                                <a
                                  href={project.link}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 inline-flex items-center justify-center gap-1.5 h-8 rounded-lg bg-primary text-primary-foreground text-xs font-medium hover:opacity-90 transition-opacity"
                                >
                                  <ExternalLink className="w-3 h-3" />
                                  Demo
                                </a>
                              )}

                              {project.github && (
                                <a
                                  href={project.github}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="flex-1 inline-flex items-center justify-center gap-1.5 h-8 rounded-lg border border-border text-xs font-medium hover:bg-secondary transition-colors"
                                >
                                  <Github className="w-3 h-3" />
                                  Code
                                </a>
                              )}
                            </div>
                          )}
                        </div>
                      </article>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>

              <CarouselPrevious className="-left-2 sm:-left-4 lg:-left-5 h-10 w-10 bg-background border-border" />
              <CarouselNext className="-right-2 sm:-right-4 lg:-right-5 h-10 w-10 bg-background border-border" />
            </Carousel>
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturedProjects;
