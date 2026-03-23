import { ArrowRight, Zap, Heart } from 'lucide-react';

const CTA = () => (
  <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-16 border-t border-border/60">
    <div className="max-w-5xl mx-auto">
      <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-10">

        {/* Left — big headline */}
        <div className="space-y-4 max-w-xl">
          <p className="text-xs uppercase tracking-widest text-muted-foreground/60 font-medium">Let's work together</p>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight">
            Ready to bring your{' '}
            <span className="bg-gradient-to-br from-primary to-primary/50 bg-clip-text text-transparent">
              vision to life?
            </span>
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed">
            Whether it's a new project, scaling your infrastructure, or improving what you already have — I'm here to help.
          </p>
        </div>

        {/* Right — action block */}
        <div className="flex flex-col gap-4 flex-shrink-0">
          <a
            href="/contact"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity group"
          >
            Get in Touch
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </a>
          <a
            href="/portfolio"
            className="inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-full border border-border text-sm font-medium text-foreground hover:bg-muted/50 transition-colors"
          >
            Explore Portfolio
          </a>

          {/* Trust signals */}
          <div className="flex items-center gap-4 pt-2 justify-center">
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
              <Zap className="w-3 h-3 text-primary" />
              Quick kickoff
            </span>
            <span className="w-px h-3 bg-border" />
            <span className="flex items-center gap-1.5 text-xs text-muted-foreground/60">
              <Heart className="w-3 h-3 text-primary" />
              Dedicated support
            </span>
          </div>
        </div>
      </div>

      {/* Availability badge */}
      <div className="mt-14 flex items-center gap-2">
        <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
        <span className="text-xs text-muted-foreground">Open for freelance projects</span>
      </div>
    </div>
  </section>
);

export default CTA;