import { useState } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, MessageCircle, Send, ArrowUpRight } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

const contactInfo = [
  { icon: Mail,    label: 'Email',    value: 'contact@dr-dev.tech', href: 'mailto:contact@dr-dev.tech' },
  { icon: Phone,   label: 'Phone',    value: '+213 698 764 880',                  href: 'tel:+213698764880' },
  { icon: MapPin,  label: 'Location', value: 'Remote / Algeria',                  href: null },
];

const socialLinks = [
  { icon: Github,        name: 'GitHub',    url: 'https://github.com/DJDERNANE',                            handle: '@DJDERNANE' },
  { icon: Linkedin,      name: 'LinkedIn',  url: 'https://www.linkedin.com/in/djilali-dernane-8b1984218/', handle: 'djilali-dernane' },
  { icon: MessageCircle, name: 'WhatsApp',  url: 'https://wa.me/213698764880',                              handle: '+213 698 764 880' },
];

const serviceTypes = [
  { label: 'Website Development',  value: 'website_development' },
  { label: 'Website Deployment',   value: 'website_deployment' },
  { label: 'DevOps & Automation',  value: 'devops_automation' },
  { label: 'Maintenance & Support',value: 'maintenance_support' },
  { label: 'Other',                value: 'other' },
];

const emptyForm = { name: '', email: '', object: '', service_type: '', message: '' };

const Contact = () => {
  const [formData, setFormData] = useState(emptyForm);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error('Please fill in all required fields.');
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      toast.error('Please enter a valid email address.');
      return;
    }
    setIsSubmitting(true);
    try {
      const res = await fetch(`${import.meta.env.VITE_API_URL}/contacts`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();
      if (!res.ok || !data.success) throw new Error(data.message || 'Failed to send');
      toast.success(data.message || "Message sent! I'll get back to you soon.");
      setFormData(emptyForm);
    } catch (err: any) {
      toast.error(err.message || 'Failed to send message. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16 pt-24 pb-24">

        {/* Page header */}
        <div className="mb-16">
          <div className="flex items-center gap-4 mb-6">
            <span className="text-xs uppercase tracking-widest text-muted-foreground/60 font-medium">Contact</span>
            <div className="h-px w-12 bg-border/60" />
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold tracking-tight leading-tight mb-4">
            Let's work<br />
            <span className="bg-gradient-to-br from-primary to-primary/50 bg-clip-text text-transparent">together</span>
          </h1>
          <p className="text-base text-muted-foreground max-w-md leading-relaxed">
            Have a project in mind? Fill out the form and I'll get back to you within 24 hours.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1fr_340px] gap-10 lg:gap-16 items-start">

          {/* ── Form ─────────────────────────────────────────────────────── */}
          <form onSubmit={handleSubmit} className="space-y-5">

            {/* Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label htmlFor="name" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Name <span className="text-primary">*</span>
                </label>
                <Input
                  id="name" name="name" type="text"
                  value={formData.name} onChange={handleChange}
                  placeholder="Your full name"
                  className="h-10 text-sm bg-muted/30 border-border/60 focus:border-primary"
                  required
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="email" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                  Email <span className="text-primary">*</span>
                </label>
                <Input
                  id="email" name="email" type="email"
                  value={formData.email} onChange={handleChange}
                  placeholder="your@email.com"
                  className="h-10 text-sm bg-muted/30 border-border/60 focus:border-primary"
                  required
                />
              </div>
            </div>

            {/* Subject */}
            <div className="space-y-1.5">
              <label htmlFor="object" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Subject <span className="text-primary">*</span>
              </label>
              <Input
                id="object" name="object" type="text"
                value={formData.object} onChange={handleChange}
                placeholder="What's this about?"
                className="h-10 text-sm bg-muted/30 border-border/60 focus:border-primary"
                required
              />
            </div>

            {/* Service type */}
            <div className="space-y-1.5">
              <label htmlFor="service_type" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Service Type
              </label>
              <select
                id="service_type" name="service_type"
                value={formData.service_type} onChange={handleChange}
                className="w-full h-10 px-3 text-sm rounded-md border border-border/60 bg-muted/30 text-foreground focus:outline-none focus:ring-1 focus:ring-primary focus:border-primary"
              >
                <option value="">Select a service…</option>
                {serviceTypes.map(s => (
                  <option key={s.value} value={s.value}>{s.label}</option>
                ))}
              </select>
            </div>

            {/* Message */}
            <div className="space-y-1.5">
              <label htmlFor="message" className="text-xs font-medium text-muted-foreground uppercase tracking-wider">
                Message <span className="text-primary">*</span>
              </label>
              <Textarea
                id="message" name="message"
                value={formData.message} onChange={handleChange}
                placeholder="Tell me about your project, requirements, timeline, and budget…"
                rows={6}
                className="text-sm bg-muted/30 border-border/60 focus:border-primary resize-none"
                required
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-primary text-primary-foreground text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? (
                <>
                  <div className="w-3.5 h-3.5 border-2 border-primary-foreground/30 border-t-primary-foreground rounded-full animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="w-3.5 h-3.5" />
                  Send Message
                </>
              )}
            </button>
          </form>

          {/* ── Sidebar ──────────────────────────────────────────────────── */}
          <aside className="space-y-8">

            {/* Availability */}
            <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-muted/40 border border-border/60">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse flex-shrink-0" />
              <span className="text-sm text-muted-foreground">Available for new projects</span>
            </div>

            {/* Contact info */}
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-muted-foreground/50 font-medium mb-3">Direct Contact</p>
              {contactInfo.map(({ icon: Icon, label, value, href }) => {
                const inner = (
                  <div className="flex items-center gap-3 py-2.5 group/item">
                    <div className="w-8 h-8 rounded-lg bg-muted/60 flex items-center justify-center flex-shrink-0 group-hover/item:bg-primary/10 transition-colors">
                      <Icon className="w-3.5 h-3.5 text-muted-foreground group-hover/item:text-primary transition-colors" />
                    </div>
                    <div className="min-w-0">
                      <p className="text-[10px] text-muted-foreground/50 uppercase tracking-wider">{label}</p>
                      <p className="text-sm font-medium text-foreground truncate">{value}</p>
                    </div>
                    {href && <ArrowUpRight className="w-3 h-3 text-muted-foreground/30 ml-auto flex-shrink-0 opacity-0 group-hover/item:opacity-100 transition-opacity" />}
                  </div>
                );
                return href ? (
                  <a key={label} href={href} target={href.startsWith('http') ? '_blank' : undefined} rel={href.startsWith('http') ? 'noopener noreferrer' : undefined} className="block">
                    {inner}
                  </a>
                ) : (
                  <div key={label}>{inner}</div>
                );
              })}
            </div>

            {/* Divider */}
            <div className="h-px bg-border/60" />

            {/* Social */}
            <div className="space-y-1">
              <p className="text-xs uppercase tracking-widest text-muted-foreground/50 font-medium mb-3">Social</p>
              {socialLinks.map(({ icon: Icon, name, url, handle }) => (
                <a
                  key={name}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 py-2.5 group/social"
                >
                  <div className="w-8 h-8 rounded-lg bg-muted/60 flex items-center justify-center flex-shrink-0 group-hover/social:bg-primary/10 transition-colors">
                    <Icon className="w-3.5 h-3.5 text-muted-foreground group-hover/social:text-primary transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <p className="text-[10px] text-muted-foreground/50 uppercase tracking-wider">{name}</p>
                    <p className="text-sm font-medium text-foreground truncate">{handle}</p>
                  </div>
                  <ArrowUpRight className="w-3 h-3 text-muted-foreground/30 ml-auto flex-shrink-0 opacity-0 group-hover/social:opacity-100 transition-opacity" />
                </a>
              ))}
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
};

export default Contact;