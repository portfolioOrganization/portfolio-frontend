import { ArrowRight, Heart, Zap } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CTA = () => {
  return (
    <div className="py-24 bg-background relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 -translate-x-1/2 opacity-50"></div>
        <div className="absolute top-1/2 right-0 w-96 h-96 bg-accent/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 opacity-50"></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="relative max-w-4xl mx-auto px-6">
        {/* Main CTA Card */}
        <div className="group relative p-12 md:p-16 rounded-3xl bg-gradient-to-br from-foreground/5 to-foreground/[0.02] border border-foreground/10 hover:border-primary/30 transition-all duration-300">
          {/* Decorative accent */}
          <div className="absolute -top-8 left-1/2 -translate-x-1/2 w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-2xl"></div>

          <div className="text-center space-y-8">
            {/* Headline */}
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Ready to Bring Your
                <span className="block bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent">
                  Vision to Life?
                </span>
              </h2>

              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                Let's collaborate and create something extraordinary. Whether it's a new project, scaling your infrastructure, or enhancing your current solution, I'm here to help.
              </p>
            </div>

            {/* Benefits */}
            <div className="flex flex-col md:flex-row gap-6 justify-center items-center pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-primary" />
                Quick project kickoff
              </div>
              <div className="hidden md:block w-px h-4 bg-foreground/10"></div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Heart className="w-4 h-4 text-accent" />
                Dedicated support
              </div>
              <div className="hidden md:block w-px h-4 bg-foreground/10"></div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <Zap className="w-4 h-4 text-primary" />
                Proven expertise
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button asChild size="lg" className="group/btn px-8 md:px-10">
                <a href="/contact" className="flex items-center gap-2">
                  Get in Touch Today
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </a>
              </Button>

              <Button variant="outline" size="lg" asChild className="px-8 md:px-10">
                <a href="/projects" className="flex items-center gap-2">
                  Explore Portfolio
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* Secondary CTA */}
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-4">
            Available for freelance projects. Let's build something amazing together!
          </p>
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-foreground/5 rounded-full text-sm font-medium text-foreground border border-foreground/10">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            Open for new projects
          </div>
        </div>
      </div>
    </div>
  );
};

export default CTA;