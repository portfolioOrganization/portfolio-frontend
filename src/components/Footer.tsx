import { Link } from 'react-router-dom';
import { Github, Linkedin, Twitter, Mail, MessageCircle  } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: 'Home', path: '/' },
    { name: 'CV', path: '/cv' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Services', path: '/services' },
    { name: 'Blog', path: '/blog' },
    { name: 'Contact', path: '/contact' },
  ];

  const socialLinks = [
    { name: 'GitHub', icon: Github, url: 'https://github.com/DJDERNANE' },
    { name: 'LinkedIn', icon: Linkedin, url: 'https://www.linkedin.com/in/djilali-dernane-8b1984218/' },
    { name: 'WhatsApp', icon: MessageCircle , url: 'https://wa.me/213698764880' },
    { name: 'Email', icon: Mail, url: 'mailto:djilali.dernane.contact@gmail.com' },
  ];

  return (
    <footer className="bg-card border-t border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-primary">DevOps Pro</h3>
            <p className="text-muted-foreground">
              Web Developer & DevOps Engineer passionate about creating scalable solutions and automating workflows.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Quick Links</h3>
            <div className="grid grid-cols-2 gap-2">
              {quickLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Social Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold">Connect</h3>
            <div className="flex space-x-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg bg-secondary hover:bg-accent transition-colors"
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center">
          <p className="text-muted-foreground">
            © {currentYear} DevOps Pro. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;