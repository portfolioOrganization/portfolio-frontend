import { Github, Linkedin, Mail, MapPin, MessageCircle, Download, Briefcase, GraduationCap, Code2, User } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from 'react';
import { cn } from '@/lib/utils';

const experiences = [
  {
    company: 'ICOSNET',
    period: '07/2024 – Present',
    role: 'Development and Application Engineer',
    description: [
      'Develop and maintain web applications using various frameworks, ensuring optimal performance and scalability.',
      'Troubleshoot application issues, create technical documentation and monitor application performance.',
    ],
  },
  {
    company: 'LogiTrans',
    period: '06/2025',
    role: 'DevOps Trainer',
    description: [
      'Conduct comprehensive training sessions on DevOps practices, tools, and methodologies.',
      'Develop training materials, hands-on labs, and real-world scenarios for practical understanding.',
    ],
  },
  {
    company: 'Apollo Digital Solutions',
    period: '06/2024 – 07/2024',
    role: 'Fullstack Developer',
    description: [
      'Design and implement web applications with server-side logic, APIs, and responsive front-end interfaces.',
      'Manage databases, optimise performance and oversee deployment.',
    ],
  },
  {
    company: 'Remotely',
    period: '2023 – Present',
    role: 'Full-Stack Freelancer',
    description: [
      'Manage client communication, requirement gathering, and project scoping end-to-end.',
      'Design, develop and deliver high-quality work within deadlines with a focus on client satisfaction.',
    ],
  },
];

const education = [
  {
    degree: 'Engineer Degree in Network and Telecommunication Systems',
    school: 'ENSTICP – Algiers, Algeria',
    period: '2019 – 2024',
    description: 'Specialised in networks, cloud computing, telecommunications, and related technologies.',
  },
];

const skillGroups = [
  { label: 'Frontend',      skills: ['HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js'] },
  { label: 'Backend',       skills: ['Node.js', 'PHP', 'Laravel', 'Django', 'Express.js'] },
  { label: 'DevOps',        skills: ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'Linux'] },
  { label: 'Data & Tools',  skills: ['PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Git'] },
];

const sections = [
  { id: 'introduction', label: 'Introduction', icon: User },
  { id: 'experience',   label: 'Experience',   icon: Briefcase },
  { id: 'studies',      label: 'Studies',      icon: GraduationCap },
  { id: 'skills',       label: 'Skills',       icon: Code2 },
];

const CV = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      <style>{`
        @keyframes bounce-x {
          0%, 100% { transform: translateX(0); }
          50%       { transform: translateX(4px); }
        }
        .animate-bounce-x { animation: bounce-x 1.2s ease-in-out infinite; }
      `}</style>
      <div className="max-w-5xl mx-auto px-4 sm:px-6 pt-24 pb-20">

        {/* ── Profile card ────────────────────────────────────────────────── */}
        <div className="flex flex-col sm:flex-row gap-6 mb-10">

          {/* Avatar */}
          <div className="flex-shrink-0 flex flex-col items-center sm:items-start gap-3">
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-2xl overflow-hidden bg-muted ring-2 ring-border">
              <img src="/avatar.jpeg" alt="Profile" className="w-full h-full object-cover" />
            </div>
            {/* Languages — compact pills */}
            <div className="flex gap-1.5 flex-wrap justify-center sm:justify-start">
              {['EN', 'FR', 'AR'].map(l => (
                <span key={l} className="px-2 py-0.5 bg-muted rounded text-xs text-muted-foreground font-medium">{l}</span>
              ))}
            </div>
          </div>

          {/* Info */}
          <div className="flex-1 text-center sm:text-left">
            <h1 className="text-2xl sm:text-3xl font-bold tracking-tight">Dernane Djilali</h1>
            <p className="text-sm text-muted-foreground mt-1">Web Developer & DevOps Engineer</p>

            <div className="flex items-center gap-1.5 text-xs text-muted-foreground mt-2 justify-center sm:justify-start">
              <MapPin className="w-3.5 h-3.5" />
              <span>Algiers, Algeria</span>
            </div>

            {/* Action links */}
            <div className="mt-4 flex flex-wrap gap-2 justify-center sm:justify-start">
              <Button size="sm" className="gap-1.5 h-8 text-xs" onClick={() => setShowModal(true)}>
                <Download className="w-3.5 h-3.5" />
                Download CV
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5 h-8 text-xs" asChild>
                <a href="https://github.com/DJDERNANE" target="_blank" rel="noopener noreferrer">
                  <Github className="w-3.5 h-3.5" />
                  GitHub
                </a>
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5 h-8 text-xs" asChild>
                <a href="https://www.linkedin.com/in/djilali-dernane-8b1984218/" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="w-3.5 h-3.5" />
                  LinkedIn
                </a>
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5 h-8 text-xs" asChild>
                <a href="mailto:contact@dr-dev.tech">
                  <Mail className="w-3.5 h-3.5" />
                  Email
                </a>
              </Button>
              <Button variant="outline" size="sm" className="gap-1.5 h-8 text-xs" asChild>
                <a href="https://wa.me/213698764880" target="_blank" rel="noopener noreferrer">
                  <MessageCircle className="w-3.5 h-3.5" />
                  WhatsApp
                </a>
              </Button>
            </div>
          </div>
        </div>

        {/* ── Tab nav ─────────────────────────────────────────────────────── */}
        <div className="relative mb-8">
          <div className="flex gap-1 overflow-x-auto scrollbar-none -mx-4 px-4 sm:mx-0 sm:px-0 border-b border-border pb-0">
            {sections.map(({ id, label, icon: Icon }) => (
              <button
                key={id}
                onClick={() => setActiveSection(id)}
                className={cn(
                  'flex-shrink-0 flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium border-b-2 transition-colors whitespace-nowrap',
                  activeSection === id
                    ? 'border-primary text-foreground'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                )}
              >
                <Icon className="w-3.5 h-3.5" />
                {label}
              </button>
            ))}
          </div>
          {/* Swipe hint — only visible on small screens */}
          <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-10 bg-gradient-to-l from-background to-transparent sm:hidden" />
          <div className="flex items-center justify-end gap-1 mt-1 sm:hidden">
            <span className="text-[10px] text-muted-foreground/50">swipe</span>
            <svg xmlns="http://www.w3.org/2000/svg" className="w-3 h-3 text-muted-foreground/50 animate-bounce-x" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M13 6l6 6-6 6" />
            </svg>
          </div>
        </div>

        {/* ── Section content ─────────────────────────────────────────────── */}
        <div className="min-h-[400px]">

          {/* Introduction */}
          {activeSection === 'introduction' && (
            <div className="space-y-4 max-w-2xl">
              <h2 className="text-xl font-semibold">About Me</h2>
              <div className="space-y-3 text-sm text-muted-foreground leading-relaxed">
                <p>
                  I'm a Full-Stack Developer and DevOps Engineer with a passion for transforming complex problems into efficient, scalable web solutions. My work spans web development and interactive applications, ensuring seamless integration between design, development, and deployment.
                </p>
                <p>
                  I specialise in building robust applications across the entire stack while designing and managing CI/CD pipelines, automation, and infrastructure that power reliable and scalable systems.
                </p>
                <p>
                  I'm always exploring new technologies and best practices to improve performance, streamline development processes, and create impactful products that combine innovation with reliability.
                </p>
              </div>
            </div>
          )}

          {/* Experience */}
          {activeSection === 'experience' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Experience</h2>
              <div className="space-y-0">
                {experiences.map((exp, i) => (
                  <div key={i} className="relative pl-6 pb-8 last:pb-0">
                    {/* Timeline line */}
                    <div className="absolute left-0 top-2 bottom-0 w-px bg-border last:hidden" />
                    <div className="absolute left-[-3px] top-2 w-1.5 h-1.5 rounded-full bg-primary" />

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                      <div>
                        <h3 className="text-sm font-semibold">{exp.company}</h3>
                        <p className="text-xs text-primary">{exp.role}</p>
                      </div>
                      <span className="text-xs text-muted-foreground flex-shrink-0">{exp.period}</span>
                    </div>
                    <ul className="space-y-1.5">
                      {exp.description.map((item, j) => (
                        <li key={j} className="flex items-start gap-2 text-xs text-muted-foreground">
                          <span className="w-1 h-1 rounded-full bg-muted-foreground/40 mt-1.5 flex-shrink-0" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Studies */}
          {activeSection === 'studies' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Education</h2>
              <div className="space-y-0">
                {education.map((edu, i) => (
                  <div key={i} className="relative pl-6 pb-6 last:pb-0">
                    <div className="absolute left-0 top-2 bottom-0 w-px bg-border last:hidden" />
                    <div className="absolute left-[-3px] top-2 w-1.5 h-1.5 rounded-full bg-primary" />

                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-1.5">
                      <h3 className="text-sm font-semibold leading-snug max-w-sm">{edu.degree}</h3>
                      <span className="text-xs text-muted-foreground flex-shrink-0">{edu.period}</span>
                    </div>
                    <p className="text-xs text-primary mb-1">{edu.school}</p>
                    <p className="text-xs text-muted-foreground">{edu.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Skills */}
          {activeSection === 'skills' && (
            <div className="space-y-6">
              <h2 className="text-xl font-semibold">Technical Skills</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {skillGroups.map(group => (
                  <div key={group.label} className="space-y-2.5">
                    <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{group.label}</p>
                    <div className="flex flex-wrap gap-1.5">
                      {group.skills.map(skill => (
                        <span
                          key={skill}
                          className="px-2.5 py-1 bg-muted rounded-md text-xs font-medium text-foreground"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

        </div>
      </div>

      {/* CV Download Modal */}
      <Dialog open={showModal} onOpenChange={setShowModal}>
        <DialogContent className="sm:max-w-sm">
          <DialogHeader>
            <DialogTitle>Download CV</DialogTitle>
            <DialogDescription>Choose which language version you'd like to download.</DialogDescription>
          </DialogHeader>
          <div className="space-y-2 pt-1">
            <Button className="w-full gap-2" asChild>
              <a href="/cv-en.pdf" download="Dernane_Djilali_CV_English.pdf">
                <Download className="w-4 h-4" />
                English Version
              </a>
            </Button>
            <Button variant="outline" className="w-full gap-2" asChild>
              <a href="/cv-fr.pdf" download="Dernane_Djilali_CV_Francais.pdf">
                <Download className="w-4 h-4" />
                Version Française
              </a>
            </Button>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default CV;