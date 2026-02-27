import { Lightbulb, Code, Shield, Zap, ArrowRight } from 'lucide-react';

const WorkProcess = () => {
  const steps = [
    {
      id: 1,
      icon: Lightbulb,
      title: 'Discovery & Planning',
      description: 'Understanding your goals, requirements, and vision. I analyze your needs and create a detailed project roadmap with clear milestones and deliverables.',
      color: 'from-primary/20 to-primary/5'
    },
    {
      id: 2,
      icon: Code,
      title: 'Design & Development',
      description: 'Creating mockups and prototypes, then building your solution using best practices, modern technologies, and clean, maintainable code.',
      color: 'from-accent/20 to-accent/5'
    },
    {
      id: 3,
      icon: Shield,
      title: 'Testing & Refinement',
      description: 'Comprehensive testing for functionality, performance, and security. Iterative improvements based on feedback to ensure excellence.',
      color: 'from-primary/20 to-primary/5'
    },
    {
      id: 4,
      icon: Zap,
      title: 'Launch & Support',
      description: 'Smooth deployment to production with monitoring setup. Ongoing support, maintenance, and future enhancements to keep your solution running optimally.',
      color: 'from-accent/20 to-accent/5'
    }
  ];

  return (
    <div className="py-24 bg-background relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-1/2 left-0 right-0 h-1/2 bg-gradient-to-b from-foreground/[0.02] to-transparent pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-6 relative">
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            My Work Process
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A structured, transparent approach that ensures quality results and smooth collaboration from start to finish
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6"></div>
        </div>

        {/* Timeline */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isLast = index === steps.length - 1;

            return (
              <div key={step.id} className="relative group">
                {/* Connector line (desktop) */}
                {!isLast && (
                  <div className="hidden lg:block absolute top-20 left-[calc(100%+16px)] w-8 h-0.5 bg-gradient-to-r from-primary/40 to-transparent group-hover:from-primary/60 transition-all"></div>
                )}

                {/* Card */}
                <div className="h-full relative">
                  {/* Step number - floating badge */}
                  <div className="absolute -top-4 -left-4 w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center text-white font-bold text-sm shadow-lg group-hover:scale-110 transition-transform">
                    {step.id}
                  </div>

                  {/* Card content */}
                  <div className={`h-full p-8 rounded-3xl bg-gradient-to-br ${step.color} border border-foreground/10 group-hover:border-foreground/20 transition-all duration-300 hover:shadow-xl hover:shadow-foreground/5`}>
                    {/* Icon */}
                    <div className="mb-6">
                      <div className="inline-flex items-center justify-center w-12 h-12 rounded-2xl bg-foreground/10 group-hover:bg-foreground/15 group-hover:scale-110 transition-all duration-300">
                        <Icon className="w-6 h-6 text-foreground" />
                      </div>
                    </div>

                    {/* Content */}
                    <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                      {step.title}
                    </h3>

                    <p className="text-muted-foreground leading-relaxed text-sm">
                      {step.description}
                    </p>

                    {/* Arrow indicator */}
                    {!isLast && (
                      <div className="hidden md:block lg:hidden absolute -bottom-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white group-hover:scale-110 transition-transform">
                        <ArrowRight className="w-4 h-4 rotate-90" />
                      </div>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="mt-20 text-center p-8 rounded-3xl bg-gradient-to-r from-foreground/5 via-foreground/[0.02] to-foreground/5 border border-foreground/10">
          <p className="text-lg text-muted-foreground mb-2">
            Ready to start your project?
          </p>
          <a
            href="/contact"
            className="inline-flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all"
          >
            Let's get started
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default WorkProcess;