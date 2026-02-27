import { Code, Server, Cloud, Wrench, Shield, Zap } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import WorkProcess from '@/components/WorkProcess';

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
      // pricing: 'Starting at $2,500'
    },
    {
      icon: Cloud,
      title: 'Website Deployment',
      description: 'Professional deployment services ensuring your applications are live, secure, and performant.',
      features: [
        'Cloud hosting setup',
        'Domain & SSL configuration',
        'CDN implementation',
        'Performance optimization',
        
      ],
      // pricing: 'Starting at $500'
    },
    {
      icon: Server,
      title: 'DevOps & Automation',
      description: 'Streamline your development workflow with modern DevOps practices and automation.',
      features: [
        'CI/CD pipeline setup',
        'Docker containerization',
        'Deployment automation',
        'Monitoring & analytics setup'
      ],
      // pricing: 'Starting at $1,500'
    },
    {
      icon: Wrench,
      title: 'Maintenance & Support',
      description: 'Ongoing maintenance and support services to keep your applications running smoothly.',
      features: [
        'Bug fixes & patches',
        'Performance optimization',
        'Security updates',
        'Technical support 24/7',
        'Feature updates & enhancements'
      ],
      // pricing: 'Starting at $800/month'
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
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col">
                  <CardHeader>
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    <CardTitle className="text-xl mb-2">{service.title}</CardTitle>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardHeader>
                  <CardContent className="flex flex-col flex-1">
                    <ul className="space-y-2 mb-6 flex-1">
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


          <WorkProcess />

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