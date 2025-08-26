import { Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-4xl mx-auto px-6">
        {/* Hero Section */}
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-6xl md:text-8xl font-bold text-foreground">
            Web Developer & DevOps Engineer
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
            Hi, I'm a Web Developer & DevOps Engineer passionate about 
            designing and building scalable, user-friendly web applications.
          </p>
          
          <Button asChild className="mt-8">
            <Link to="/cv">
              About me
            </Link>
          </Button>
        </div>

        {/* Featured Projects */}
        <div className="space-y-12">
          <div className="group">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=450&fit=crop" 
                alt="E-Commerce Platform" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">EIPGBM</h3>
            <p className="text-muted-foreground mb-4">
              A professional platform designed to showcase the company's services and expertise. 
              The website features a clean, responsive design with seamless language switching, 
              ensuring an optimal user experience across all devices.
            </p>
            <Link to="#" className="text-primary hover:underline">Take a look →</Link>
          </div>

          <div className="group">
            <div className="aspect-video bg-gradient-to-br from-accent/10 to-primary/10 rounded-2xl overflow-hidden mb-4 group-hover:from-accent/20 group-hover:to-primary/20 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1563013544-824ae1b704d3?w=800&h=450&fit=crop" 
                alt="DevOps Platform" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">DevOps Automation Suite</h3>
            <p className="text-muted-foreground mb-4">
              Automated CI/CD pipelines with Docker containerization, cloud deployment, 
              and comprehensive monitoring solutions for enterprise-scale applications.
            </p>
            <Link to="#" className="text-primary hover:underline">Take a look →</Link>
          </div>

          <div className="group">
            <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 rounded-2xl overflow-hidden mb-4 group-hover:from-primary/20 group-hover:to-accent/20 transition-all duration-300">
              <img 
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=450&fit=crop" 
                alt="Analytics Dashboard" 
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">Vacansea Manager</h3>
            <p className="text-muted-foreground mb-4">
              A full-featured web application for hotel administrators to manage room reservations, 
              availability, customer details, and payments with real-time analytics.
            </p>
            <Link to="#" className="text-primary hover:underline">Take a look →</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;