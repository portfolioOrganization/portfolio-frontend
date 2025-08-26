import { Code, Server, Zap } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="min-h-screen flex flex-col items-center justify-center px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <div className="space-y-6">
            <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
              Web Developer & DevOps Engineer
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Hi, I'm a Web Developer & DevOps Engineer passionate about 
              designing and building scalable, user-friendly web applications.
            </p>
          </div>
        </div>
        
        {/* Projects Preview */}
        <div className="w-full max-w-6xl mx-auto mt-24 space-y-16">
          <div className="relative group cursor-pointer">
            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Code className="w-16 h-16 text-primary mx-auto" />
                  <h3 className="text-2xl font-semibold">E-Commerce Platform</h3>
                  <p className="text-muted-foreground max-w-md">
                    A full-featured e-commerce solution with payment integration, 
                    inventory management, and real-time analytics.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer">
            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-accent/20 to-primary/20 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Server className="w-16 h-16 text-accent mx-auto" />
                  <h3 className="text-2xl font-semibold">DevOps Automation Suite</h3>
                  <p className="text-muted-foreground max-w-md">
                    Automated CI/CD pipelines with Docker containerization, 
                    cloud deployment, and monitoring solutions.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative group cursor-pointer">
            <div className="bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300">
              <div className="aspect-video bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                <div className="text-center space-y-4">
                  <Zap className="w-16 h-16 text-primary mx-auto" />
                  <h3 className="text-2xl font-semibold">Real-time Dashboard</h3>
                  <p className="text-muted-foreground max-w-md">
                    Modern analytics dashboard with real-time data visualization, 
                    responsive design, and interactive charts.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;