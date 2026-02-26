import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Code, Rocket, Users, CheckCircle, Lightbulb, Zap, Shield, Clock, MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import WhatIDo from '@/components/WhatIDo';
import WorkProcess from '@/components/WorkProcess';
import CTA from '@/components/CTA';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5">
      
      <HeroSection />

      <FeaturedProjects />

      <WhatIDo />
      
      <WorkProcess />

      <CTA />
      
    </div>
  );
};

export default Home;