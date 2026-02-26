import { ExternalLink } from 'lucide-react';
import { Button } from '@/components/ui/button';
const FeaturedProjects = () => {
    return (

        <div className="py-20 bg-background/50 backdrop-blur-sm border-y border-border/50">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                        Featured Projects
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        A collection of my recent work and achievements
                    </p>
                    <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6"></div>
                </div>

                <div className="space-y-20">
                    {/* Project 1 - EIPGBM */}
                    <div className="group relative">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1 space-y-6">
                                <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">
                                    Web Development
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                                    EIPGBM
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    A professional platform designed to showcase the company's services and expertise.
                                    Features a clean, responsive design with seamless language switching,
                                    ensuring an optimal user experience across all devices.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'TypeScript', 'Tailwind', 'i18n'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full hover:bg-accent/20 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <Button asChild variant="outline" className="group/btn hover:bg-primary hover:text-primary-foreground">
                                    <a href="#" className="flex items-center gap-2">
                                        View Project
                                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </a>
                                </Button>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-105 transition-transform duration-500"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop"
                                        alt="EIPGBM Platform"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Project 2 - DevOps */}
                    <div className="group relative">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-accent/10 to-primary/10 group-hover:shadow-2xl group-hover:shadow-accent/20 transition-all duration-500">
                                <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 group-hover:scale-105 transition-transform duration-500"></div>
                                <img
                                    src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=450&fit=crop"
                                    alt="DevOps Platform"
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                            </div>
                            <div className="space-y-6">
                                <div className="inline-flex items-center px-3 py-1 bg-accent/10 rounded-full text-sm font-medium text-accent">
                                    DevOps & Automation
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-accent transition-colors">
                                    DevOps Automation Suite
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    Automated CI/CD pipelines with Docker containerization, cloud deployment,
                                    and comprehensive monitoring solutions for enterprise-scale applications.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['Docker', 'Kubernetes', 'Jenkins', 'AWS', 'Terraform'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full hover:bg-primary/20 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <Button asChild variant="outline" className="group/btn hover:bg-accent hover:text-accent-foreground">
                                    <a href="#" className="flex items-center gap-2">
                                        View Project
                                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>

                    {/* Project 3 - Vacansea */}
                    <div className="group relative">
                        <div className="grid lg:grid-cols-2 gap-12 items-center">
                            <div className="order-2 lg:order-1 space-y-6">
                                <div className="inline-flex items-center px-3 py-1 bg-primary/10 rounded-full text-sm font-medium text-primary">
                                    Full-Stack Application
                                </div>
                                <h3 className="text-3xl md:text-4xl font-bold text-foreground group-hover:text-primary transition-colors">
                                    Vacansea Manager
                                </h3>
                                <p className="text-lg text-muted-foreground leading-relaxed">
                                    A comprehensive web application for hotel administrators to manage room reservations,
                                    availability, customer details, and payments with real-time analytics and reporting.
                                </p>
                                <div className="flex flex-wrap gap-2">
                                    {['React', 'Node.js', 'MongoDB', 'Chart.js', 'Stripe'].map((tech) => (
                                        <span key={tech} className="px-3 py-1 bg-accent/10 text-accent text-sm rounded-full hover:bg-accent/20 transition-colors">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                                <Button asChild variant="outline" className="group/btn hover:bg-primary hover:text-primary-foreground">
                                    <a href="#" className="flex items-center gap-2">
                                        View Project
                                        <ExternalLink className="w-4 h-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />
                                    </a>
                                </Button>
                            </div>
                            <div className="order-1 lg:order-2">
                                <div className="relative aspect-video rounded-2xl overflow-hidden bg-gradient-to-br from-primary/10 to-accent/10 group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500">
                                    <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-accent/20 group-hover:scale-105 transition-transform duration-500"></div>
                                    <img
                                        src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop"
                                        alt="Vacansea Manager"
                                        className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default FeaturedProjects;