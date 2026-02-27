import { Github, Linkedin, Mail, ArrowRight, ExternalLink, Code, Rocket, Users, CheckCircle, Lightbulb, Zap, Shield, Play, Sparkles, TrendingUp } from 'lucide-react';
import { Button } from '@/components/ui/button';
import HeroSection from '@/components/HeroSection';
import FeaturedProjects from '@/components/FeaturedProjects';
import WhatIDo from '@/components/WhatIDo';
import WorkProcess from '@/components/WorkProcess';
import CTA from '@/components/CTA';
import Stats from '@/components/Stats';
import Testimonials from '@/components/Testimonials';

const Home = () => {
  return (
    <div className="min-h-screen bg-background ">
      
      <HeroSection />

      <Stats />

      <FeaturedProjects />

      <WhatIDo />
      
      <WorkProcess />

      <Testimonials />

      <CTA />
      
    </div>
  );
};

export default Home;