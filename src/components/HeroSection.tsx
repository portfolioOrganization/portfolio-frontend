import { Github, Linkedin, Mail, ArrowRight, MessageCircle } from 'lucide-react';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-center px-5 sm:px-8 lg:px-16 pt-24 pb-16 overflow-hidden">

      {/* Grain texture overlay */}
      <div className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{ backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`, backgroundSize: '200px' }} />

      {/* Soft glow */}
      <div className="pointer-events-none absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/8 rounded-full blur-[120px]" />

      <div className="relative max-w-5xl mx-auto w-full">

        {/* Status pill */}
        <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-border bg-muted/40 text-xs text-muted-foreground mb-10 backdrop-blur-sm">
          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
          Available for new projects
        </div>

        {/* Main heading — editorial large type */}
        <h1 className="text-[clamp(3rem,10vw,7rem)] font-bold leading-[0.95] tracking-tight mb-8">
          <span className="block text-foreground">Hey, I'm</span>
          <span className="block bg-gradient-to-br from-primary via-primary/80 to-primary/50 bg-clip-text text-transparent">
            Djilali
          </span>
        </h1>

        {/* Role + description in a two-column layout on desktop */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:gap-16 mb-12">
          <div className="sm:w-64 flex-shrink-0 mb-4 sm:mb-0">
            <p className="text-base font-medium text-foreground/70 border-l-2 border-primary pl-4 leading-snug">
              Full-Stack Developer<br />& DevOps Engineer
            </p>
          </div>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-lg">
            I build scalable web applications and robust DevOps solutions — from first commit to production, end to end.
          </p>
        </div>

        {/* CTA row */}
        <div className="flex flex-wrap items-center gap-3 mb-14">
          <a
            href="/portfolio"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity group"
          >
            View My Work
            <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
          >
            Get in Touch
          </a>
        </div>

        {/* Divider + social row */}
        <div className="flex items-center gap-6 pt-2 border-t border-border/50">
          <span className="text-xs text-muted-foreground/50 uppercase tracking-widest">Find me</span>
          <div className="flex items-center gap-3">
            {[
              { href: 'https://github.com/DJDERNANE', icon: Github, label: 'GitHub' },
              { href: 'https://www.linkedin.com/in/djilali-dernane-8b1984218/', icon: Linkedin, label: 'LinkedIn' },
              { href: 'mailto:contact@dr-dev.tech', icon: Mail, label: 'Email' },
              { href: 'https://wa.me/213698764880', icon: MessageCircle, label: 'WhatsApp' },
            ].map(({ href, icon: Icon, label }) => (
              <a
                key={label}
                href={href}
                aria-label={label}
                target={href.startsWith('http') ? '_blank' : undefined}
                rel={href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="w-8 h-8 flex items-center justify-center rounded-lg border border-border/60 text-muted-foreground hover:text-foreground hover:border-border hover:bg-muted/50 transition-all"
              >
                <Icon className="w-3.5 h-3.5" />
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator — bottom right */}
      <div className="absolute bottom-8 right-8 hidden sm:flex flex-col items-center gap-1.5 text-muted-foreground/40">
        <span className="text-[10px] uppercase tracking-widest rotate-90 origin-center translate-x-3">Scroll</span>
        <div className="w-px h-10 bg-gradient-to-b from-muted-foreground/30 to-transparent" />
      </div>
    </section>
  );
};

export default HeroSection;