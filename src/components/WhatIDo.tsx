import { Code, Rocket, Users, CheckCircle, Wrench, Database } from 'lucide-react';

const WhatIDo = () => {
  const services = [
    {
      id: 1,
      icon: Code,
      title: 'Website Development',
      description: 'Custom web applications built with modern technologies like React, Next.js, and TypeScript.',
      features: [
        'Responsive web design',
        'Progressive Web Apps (PWA)',
        'E-commerce solutions',
        'API development & integration'
      ],
      color: 'from-primary/20 to-primary/5',
      borderColor: 'border-primary/20 hover:border-primary/40'
    },
    {
      id: 2,
      icon: Rocket,
      title: 'Website Deployment',
      description: 'Professional deployment services ensuring your applications are live, secure, and performant.',
      features: [
        'Cloud hosting setup',
        'Domain & SSL configuration',
        'CDN implementation',
        'Performance optimization'
      ],
      color: 'from-accent/20 to-accent/5',
      borderColor: 'border-accent/20 hover:border-accent/40'
    },
    {
      id: 3,
      icon: Database,
      title: 'DevOps & Automation',
      description: 'Streamline your development workflow with modern DevOps practices and automation.',
      features: [
        'CI/CD pipeline setup',
        'Docker containerization',
        'Deployment automation',
        'Monitoring & analytics setup'
      ],
      color: 'from-primary/20 to-primary/5',
      borderColor: 'border-primary/20 hover:border-primary/40'
    },
    {
      id: 4,
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support services to keep your applications running smoothly.',
      features: [
        'Bug fixes & patches',
        'Performance optimization',
        'Security updates',
        'Feature updates & enhancements'
      ],
      color: 'from-accent/20 to-accent/5',
      borderColor: 'border-accent/20 hover:border-accent/40'
    }
  ];

  return (
    <div className="py-24 bg-gradient-to-b from-background from-50% via-foreground/[0.02] to-background">
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Decorative elements */}
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-accent/10 rounded-full blur-3xl opacity-50"></div>

        <div className="text-center mb-20 relative">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What I Do
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Full-stack development and DevOps solutions tailored to your unique business needs. I combine technical expertise with strategic thinking to deliver results.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-8 relative">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={service.id}
                className={`group relative p-8 rounded-3xl bg-gradient-to-br ${service.color} border ${service.borderColor} transition-all duration-300 hover:shadow-xl overflow-hidden`}
              >
                {/* Animated gradient background on hover */}
                <div className="absolute inset-0 bg-gradient-to-r from-primary/0 via-primary/5 to-accent/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div className="relative">
                  {/* Icon Container */}
                  <div className="mb-6">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-foreground/5 group-hover:bg-foreground/10 group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-7 h-7 text-primary" />
                    </div>
                  </div>

                  {/* Title */}
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground mb-6 leading-relaxed">
                    {service.description}
                  </p>

                  {/* Features */}
                  <div className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-3">
                        <CheckCircle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground group-hover:text-foreground transition-colors">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Decorative corner element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-primary/10 transition-colors duration-300"></div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;