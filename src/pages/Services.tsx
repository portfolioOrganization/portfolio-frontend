import { Code, Server, Cloud, Wrench, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    {
      icon: Code,
      title: 'Website Development',
      description: 'Custom web applications built with modern technologies like React, Next.js, and TypeScript.',
      features: [
        'Responsive web design',
        'Progressive Web Apps (PWA)',
        'E-commerce solutions',
        'Content Management Systems',
        'API development & integration'
      ],
      pricing: 'Starting at $2,500'
    },
    {
      icon: Cloud,
      title: 'Website Deployment',
      description: 'Professional deployment services ensuring your applications are live, secure, and performant.',
      features: [
        'Cloud hosting setup (AWS, GCP, Azure)',
        'Domain & SSL configuration',
        'CDN implementation',
        'Performance optimization',
        'Monitoring & analytics setup'
      ],
      pricing: 'Starting at $500'
    },
    {
      icon: Server,
      title: 'DevOps & Automation',
      description: 'Streamline your development workflow with modern DevOps practices and automation.',
      features: [
        'CI/CD pipeline setup',
        'Docker containerization',
        'Infrastructure as Code',
        'Automated testing',
        'Deployment automation'
      ],
      pricing: 'Starting at $1,500'
    },
    {
      icon: Shield,
      title: 'Cloud Infrastructure',
      description: 'Scalable and secure cloud infrastructure designed for your specific needs.',
      features: [
        'Architecture design & planning',
        'Multi-cloud strategies',
        'Load balancing & auto-scaling',
        'Security implementation',
        'Cost optimization'
      ],
      pricing: 'Starting at $2,000'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support to keep your applications running smoothly.',
      features: [
        '24/7 monitoring',
        'Regular updates & patches',
        'Performance optimization',
        'Backup & disaster recovery',
        'Technical support'
      ],
      pricing: 'Starting at $200/month'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Optimize your existing applications for better speed, SEO, and user experience.',
      features: [
        'Core Web Vitals optimization',
        'Database query optimization',
        'Caching strategies',
        'Image & asset optimization',
        'Mobile performance tuning'
      ],
      pricing: 'Starting at $800'
    }
  ];

  const processSteps = [
    {
      step: '01',
      title: 'Discovery & Planning',
      description: 'We start by understanding your requirements, goals, and technical needs through detailed consultation.',
    },
    {
      step: '02',
      title: 'Design & Architecture',
      description: 'Create a comprehensive plan and architecture that aligns with your business objectives.',
    },
    {
      step: '03',
      title: 'Development & Implementation',
      description: 'Build and implement the solution using best practices and modern technologies.',
    },
    {
      step: '04',
      title: 'Testing & Deployment',
      description: 'Thorough testing followed by seamless deployment to production environment.',
    },
    {
      step: '05',
      title: 'Maintenance & Support',
      description: 'Ongoing support and maintenance to ensure optimal performance and security.',
    },
  ];

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">My Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive web development and DevOps solutions to help your business thrive in the digital world.
          </p>
        </div>

        {/* Services Grid */}
        <section className="mb-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2 mb-6">
                      {service.features.map((feature, i) => (
                        <li key={i} className="text-sm flex items-start gap-2">
                          <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                          {feature}
                        </li>
                      ))}
                    </ul>
                    <div className="border-t pt-4">
                      <p className="text-lg font-semibold text-primary mb-3">{service.pricing}</p>
                      <Button asChild className="w-full">
                        <Link to="/contact">Get Quote</Link>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* Process Section */}
        <section className="mb-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">My Process</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              A structured approach to deliver exceptional results on every project.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
            {processSteps.map((process, index) => (
              <div key={index} className="text-center">
                <div className="relative mb-6">
                  <div className="w-16 h-16 mx-auto bg-primary/10 rounded-full flex items-center justify-center border-2 border-primary/20">
                    <span className="text-lg font-bold text-primary">{process.step}</span>
                  </div>
                  {index < processSteps.length - 1 && (
                    <div className="hidden md:block absolute top-8 left-full w-full h-0.5 bg-border -translate-x-8"></div>
                  )}
                </div>
                <h3 className="font-semibold text-lg mb-2">{process.title}</h3>
                <p className="text-sm text-muted-foreground">{process.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <section>
          <Card className="bg-gradient-to-r from-primary/10 to-accent/10 border-primary/20">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl font-bold mb-4">Ready to Start Your Project?</h2>
              <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                Let's discuss your requirements and create a solution that drives your business forward.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" className="text-lg">
                  <Link to="/contact">Get Started</Link>
                </Button>
                <Button asChild variant="outline" size="lg" className="text-lg">
                  <Link to="/portfolio">View Portfolio</Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </section>
      </div>
    </div>
  );
};

export default Services;