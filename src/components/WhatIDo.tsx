import { Code, Rocket, Database, Wrench, CheckCircle } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Website Development',
    description: 'Custom web applications built with React, Next.js, Laravel and TypeScript — responsive, accessible, and built to scale.',
    features: ['Responsive web design', 'E-commerce solutions', 'API development & integration'],
  },
  {
    icon: Rocket,
    title: 'Website Deployment',
    description: 'Professional deployment ensuring your applications are live, secure, and fast from day one.',
    features: ['Cloud hosting setup', 'Domain & SSL configuration', 'Performance optimisation'],
  },
  {
    icon: Database,
    title: 'DevOps & Automation',
    description: 'Streamline your development workflow with modern CI/CD, containerisation and infrastructure automation.',
    features: ['CI/CD pipeline setup', 'Docker & Kubernetes', 'Monitoring & logging'],
  },
  {
    icon: Wrench,
    title: 'Maintenance & Support',
    description: 'Ongoing maintenance to keep your applications healthy, up to date, and performing at their best.',
    features: ['Bug fixes & patches', 'Performance tuning', 'Feature updates'],
  },
];

const WhatIDo = () => (
  <section className="py-24 sm:py-32 px-5 sm:px-8 lg:px-16 bg-muted/20 border-y border-border/60">
    <div className="max-w-5xl mx-auto">

      {/* Section label */}
      <div className="flex items-center gap-4 mb-16">
        <span className="text-xs uppercase tracking-widest text-muted-foreground/60 font-medium">Services</span>
        <div className="h-px flex-1 bg-border/60 max-w-[60px]" />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-px bg-border/40 rounded-2xl overflow-hidden">
        {services.map(({ icon: Icon, title, description, features }, i) => (
          <div
            key={title}
            className="bg-background p-7 sm:p-8 group hover:bg-muted/30 transition-colors"
          >
            <div className="flex items-start justify-between mb-5">
              <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/15 transition-colors">
                <Icon className="w-4.5 h-4.5 text-primary" style={{ width: 18, height: 18 }} />
              </div>
              <span className="text-xs font-mono text-muted-foreground/30">{String(i + 1).padStart(2, '0')}</span>
            </div>

            <h3 className="text-base font-semibold text-foreground mb-2">{title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5">{description}</p>

            <ul className="space-y-2">
              {features.map(f => (
                <li key={f} className="flex items-center gap-2 text-xs text-muted-foreground">
                  <CheckCircle className="w-3.5 h-3.5 text-primary flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default WhatIDo;