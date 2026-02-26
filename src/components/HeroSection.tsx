import { Github, Linkedin, Mail, ArrowRight, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const HeroSection = () => {
  return (
      <div className="relative pt-20 pb-32 overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-10 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse delay-1000"></div>

        <div className="relative max-w-7xl mx-auto px-6 py-12">
          <div className="text-center space-y-8">
            {/* Animated greeting */}
            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-sm font-medium text-primary mb-4 hover:bg-primary/20 transition-colors cursor-default">
              👋 Hello, I'm a Djilali
            </div>

            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
              <span className="bg-gradient-to-r from-primary via-primary to-accent bg-clip-text text-transparent animate-gradient">
                Web Developer
              </span>
              <br />
              <span className="text-foreground">& DevOps Engineer</span>
            </h1>

            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Passionate about designing and building{' '}
              <span className="text-primary font-semibold">scalable</span>,{' '}
              <span className="text-accent font-semibold">user-friendly</span> web applications
              with modern technologies and best practices.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-8">
              <Button asChild size="lg" className="group hover:scale-105 transition-transform">
                <a href="#about" className="flex items-center gap-2">
                  About me
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </a>
              </Button>

              <div className="flex gap-3">
                <Button variant="outline" size="icon" asChild className="hover:bg-primary/10 hover:scale-110 transition-all">
                  <a href="https://github.com/DJDERNANE" aria-label="GitHub" target="_blank" rel="noopener noreferrer">
                    <Github className="w-5 h-5" />
                  </a>
                </Button>
                <Button variant="outline" size="icon" asChild className="hover:bg-primary/10 hover:scale-110 transition-all">
                  <a href="https://www.linkedin.com/in/djilali-dernane-8b1984218/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
                    <Linkedin className="w-5 h-5" />
                  </a>
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:bg-primary/10 hover:scale-110 transition-all"
                >
                  <a
                    href="mailto:djilali.dernane.contact@gmail.com"
                    aria-label="Email"
                  >
                    <Mail className="w-5 h-5" />
                  </a>
                </Button>

                {/* WhatsApp Button */}
                <Button
                  variant="outline"
                  size="icon"
                  asChild
                  className="hover:bg-green-100 hover:scale-110 transition-all"
                >
                  <a
                    href="https://wa.me/213698764880" // replace with your WhatsApp number (without + or 0)
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
  );
}

export default HeroSection;