import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
const CTA = () => {
    return (
        <div className="py-20 bg-gradient-to-r from-primary/10 via-background to-accent/10 relative overflow-hidden">
            <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
            <div className="relative max-w-4xl mx-auto text-center px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
                    Ready to Start Your Next Project?
                </h2>
                <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                    Let's discuss your ideas and create something extraordinary together. I'm here to help bring your vision to life.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                    <Button asChild size="lg" className="group hover:scale-105 transition-transform">
                        <a href="/contact" className="flex items-center gap-2">
                            Get In Touch
                            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                        </a>
                    </Button>
                    <Button variant="outline" size="lg" asChild className="hover:bg-accent/10">
                        <a href="/projects">View All Projects</a>
                    </Button>
                </div>
            </div>
        </div>
    )
}
export default CTA;