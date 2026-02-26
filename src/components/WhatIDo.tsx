import {  Code, Rocket, Users, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
const WhatIDo = () => {
    return (
         <div className="py-20 bg-gradient-to-br from-accent/5 to-primary/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              What I Do
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Full-stack development and DevOps solutions tailored to your needs
            </p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Web Development */}
            <div className="group p-8 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Web Development</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Modern, responsive web applications built with React, Next.js, and cutting-edge technologies.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  React & Next.js Applications
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  TypeScript Development
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Responsive Design
                </li>
              </ul>
            </div>

            {/* DevOps */}
            <div className="group p-8 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-accent/30 hover:shadow-xl hover:shadow-accent/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-accent/20 to-accent/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Rocket className="w-8 h-8 text-accent" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">DevOps & Cloud</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Automated deployment pipelines, containerization, and cloud infrastructure management.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  CI/CD Pipelines
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  Docker & Kubernetes
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-accent" />
                  AWS & Cloud Services
                </li>
              </ul>
            </div>

            {/* Consulting */}
            <div className="group p-8 bg-background/50 backdrop-blur-sm rounded-2xl border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300">
              <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-primary/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                <Users className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Technical Consulting</h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                Strategic guidance on technology choices, architecture decisions, and best practices.
              </p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Architecture Planning
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Performance Optimization
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="w-4 h-4 text-primary" />
                  Team Training
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    )
}
    export default WhatIDo;