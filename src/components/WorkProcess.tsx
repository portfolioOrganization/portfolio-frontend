import {  Code, Lightbulb, Zap, Shield } from 'lucide-react';

const  WorkProcess = () => {
    return (
        <div className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              My Work Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A structured approach that ensures quality results and smooth collaboration from start to finish
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {/* Step 1 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform border-4 border-primary/20">
                  <Lightbulb className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  1
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Discovery & Planning</h3>
              <p className="text-muted-foreground leading-relaxed">
                We start by understanding your goals, requirements, and vision. I analyze your needs and create a detailed project roadmap.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform border-4 border-accent/20">
                  <Code className="w-10 h-10 text-accent" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  2
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Design & Development</h3>
              <p className="text-muted-foreground leading-relaxed">
                Creating mockups and prototypes, then building your solution using best practices and modern technologies.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-primary/20 to-primary/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform border-4 border-primary/20">
                  <Shield className="w-10 h-10 text-primary" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  3
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Testing & Refinement</h3>
              <p className="text-muted-foreground leading-relaxed">
                Comprehensive testing, performance optimization, and iterative improvements based on feedback.
              </p>
            </div>

            {/* Step 4 */}
            <div className="text-center group">
              <div className="relative mb-8">
                <div className="w-20 h-20 bg-gradient-to-br from-accent/20 to-accent/10 rounded-full flex items-center justify-center mx-auto group-hover:scale-110 transition-transform border-4 border-accent/20">
                  <Zap className="w-10 h-10 text-accent" />
                </div>
                <div className="absolute -top-2 -right-2 w-8 h-8 bg-accent text-accent-foreground rounded-full flex items-center justify-center text-sm font-bold">
                  4
                </div>
              </div>
              <h3 className="text-xl font-bold text-foreground mb-4">Launch & Support</h3>
              <p className="text-muted-foreground leading-relaxed">
                Smooth deployment to production with ongoing support, maintenance, and future enhancements.
              </p>
            </div>
          </div>
        </div>
      </div>
    )
}
export default WorkProcess;