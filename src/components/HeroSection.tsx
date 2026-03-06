import { Github, Linkedin, Mail, ArrowRight, Sparkles } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <div className="relative min-h-screen flex items-center overflow-hidden pt-32">
      {/* Animated background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl -translate-y-1/2 animate-pulse"></div>
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl translate-y-1/2 animate-pulse" style={{ animationDelay: '1s' }}></div>
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
      </div>

      <div className="relative max-w-7xl mx-auto px-6 w-full">
        <div className="text-center space-y-10">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4 hover:bg-primary/20 transition-all cursor-default border border-primary/20 hover:scale-105">
            <Sparkles className="w-4 h-4 mr-2" />
            Welcome to my portfolio
          </div>

          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold leading-tight tracking-tight">
              <span className="block text-foreground">Hey, I'm</span>
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-gradient">
                Djilali
              </span>
            </h1>

            {/* Subtitle */}
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl text-muted-foreground mb-6">
                Full-Stack Developer & DevOps Engineer
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                I build{' '}
                <span className="text-primary font-semibold">scalable web applications</span> and{' '}
                <span className="text-accent font-semibold">robust DevOps solutions</span> that drive
                business growth. 
              </p>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
            <Button asChild size="lg" className="group px-8">
              <a href="/portfolio" className="flex items-center gap-2">
                View My Work
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>

            <Button variant="outline" size="lg" asChild className="px-8">
              <a href="/contact">Get in Touch</a>
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex justify-center gap-4 pt-8">
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-primary/10 hover:text-primary transition-all group"
            >
              <a
                href="https://github.com/DJDERNANE"
                aria-label="GitHub"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-primary/10 hover:text-primary transition-all"
            >
              <a
                href="https://www.linkedin.com/in/djilali-dernane-8b1984218/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              asChild
              className="hover:bg-primary/10 hover:text-primary transition-all"
            >
              <a href="mailto:djilali.dernane.contact@gmail.com" aria-label="Email">
                <Mail className="w-5 h-5" />
              </a>
            </Button>
          </div>

          {/* Scroll Indicator */}
          <div className="flex justify-center pt-8">
            <div className="flex flex-col items-center gap-2 text-muted-foreground">
              <p className="text-sm">Scroll to explore</p>
              <div className="animate-bounce">
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;