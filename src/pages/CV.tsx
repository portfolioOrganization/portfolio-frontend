import { Github, Linkedin, Mail, MapPin, MessageCircle, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useState } from 'react';

const CV = () => {
  const [activeSection, setActiveSection] = useState('introduction');
  const [showCVDownloadModal, setShowCVDownloadModal] = useState(false);

  const sections = [
    { id: 'introduction', label: 'Introduction' },
    { id: 'experience', label: 'Clients & Experiences' },
    { id: 'studies', label: 'Studies' },
    { id: 'skills', label: 'Technical skills' }
  ];

  const experiences = [
    {
      company: 'ICOSNET',
      period: '07/2024 - Present',
      role: 'Development and Application Engineer',
      description: [
        'Develop, and maintain web applications using various frameworks, ensuring optimal performance and scalability.',
        'Troubleshooting application issues, creating technical documentation and monitoring application performance.'
      ]
    },
     {
      company: 'LogiTrans',
      period: '06/2025 ',
      role: 'DevOps Trainer',
      description: [
        'Conduct comprehensive training sessions on DevOps practices, tools, and methodologies to enhance team capabilities.',
        'Develop training materials, hands-on labs, and real-world scenarios to ensure practical understanding and application of DevOps concepts.'
      ]
    },
    {
      company: 'Apollo Digital Solutions',
      period: '06/2024 - 07/2024', 
      role: 'Fullstack developer',
      description: [
        'Design and implement web applications by building server-side logic and APIs while creating responsive front-end interfaces.',
        'Managing databases, optimizing performance, overseeing deployment, and collaborating with cross-functional teams to deliver high-quality software solutions.'
      ]
    },
    {
      company: 'Remotely',
      period: '2023 - present',
      role: 'Full stack developer freelancer',
      description: [
        'Manage all aspects of my projects, including client communication, requirement gathering, and project scoping.',
        'Design, develop, and deliver high-quality work within deadlines while maintaining a strong focus on client satisfaction.'
      ]
    }
  ];

  const education = [
    {
      degree: 'Engineer Degree in Network and Telecommunication Systems',
      school: 'ENSTICP - Algiers, Algeria',
      period: '2019 - 2024',
      description: 'Specialized in networks, telecommunication,  cloud computing, telecommunications, and related technologies.'
    }
  ];

  const skills = [
    'HTML/CSS', 'JavaScript', 'TypeScript', 'React', 'Next.js', 
    'Node.js', 'PHP', 'Laravel', 'Python', 'Express.js',
    'Docker', 'Kubernetes',  'CI/CD',  'Jenkins',
    'PostgreSQL', 'MongoDB', 'Redis', 'MySQL', 'Git', 'Linux'
  ];

  return (
    <div className="min-h-screen pt-32 pb-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-12">
          {/* Left Sidebar */}
          <div className="lg:w-64 flex-shrink-0">
            <nav className="space-y-2 sticky top-32">
              {sections.map((section) => (
                <button
                  key={section.id}
                  onClick={() => setActiveSection(section.id)}
                  className={`block w-full text-left px-4 py-2 rounded-md transition-colors ${
                    activeSection === section.id
                      ? 'bg-muted text-foreground font-medium'
                      : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'
                  }`}
                >
                  {section.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Main Content */}
          <div className="flex-1">
            {/* Profile Header */}
            <div className="flex flex-col md:flex-row gap-8 mb-12">
              <div className="flex-shrink-0">
                <div className="w-48 h-48 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 overflow-hidden">
                  <img 
                    src="/avatar.jpeg" 
                    alt="Profile" 
                    className="w-full h-full object-cover"
                  />
                </div>
                
                <div className="mt-4 text-center">
                  <div className="flex items-center justify-center space-x-1 text-muted-foreground mb-3">
                    <MapPin className="w-4 h-4" />
                    <span>Africa/Algiers</span>
                  </div>
                  
                  <div className="flex justify-center space-x-2">
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">English</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">French</span>
                    <span className="px-3 py-1 bg-muted rounded-full text-sm">Arabic</span>
                  </div>
                </div>
              </div>

              <div className="flex-1">
                <h1 className="text-5xl font-bold mb-2">Dernane Djilali</h1>
                <p className="text-xl text-muted-foreground mb-6">Web Developer & DevOps Engineer</p>
                
                <div className="flex flex-wrap gap-4 mb-6">
                  <Button 
                    size="sm" 
                    onClick={() => setShowCVDownloadModal(true)}
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Download CV
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://github.com/DJDERNANE" target="_blank" rel="noopener noreferrer">
                      <Github className="w-4 h-4 mr-2" />
                      GitHub
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="https://www.linkedin.com/in/djilali-dernane-8b1984218/" target="_blank" rel="noopener noreferrer">
                      <Linkedin className="w-4 h-4 mr-2" />
                      LinkedIn
                    </a>
                  </Button>
                  <Button variant="outline" size="sm" asChild>
                    <a href="mailto:djilali.dernane.contact@gmail.com">
                      <Mail className="w-4 h-4 mr-2" />
                      Email
                    </a>
                  </Button>
                  {/* WhatsApp Button */}
                <Button
                  variant="outline"
                  size="sm"
                  asChild
               
                >
                  <a
                    href="https://wa.me/213698764880" // replace with your WhatsApp number (without + or 0)
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                  >
                    <MessageCircle className="w-5 h-5" />
                    Whatsapp
                  </a>
                </Button>
                </div>

                <p className="text-muted-foreground leading-relaxed">
                  I am an Algeria-based full-stack developer with a passion for transforming complex problems into efficient, scalable web solutions. 
                  My work spans web development, interactive applications, and the seamless integration of design and technology.
                </p>
              </div>
            </div>

            {/* Dynamic Content Based on Active Section */}
            {activeSection === 'introduction' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">Introduction</h2>
                <div className="prose prose-lg max-w-none">
                  <p className="text-muted-foreground leading-relaxed">
                    Welcome to my professional portfolio. I am a passionate Web Developer and DevOps Engineer with extensive experience 
                    in building modern, scalable web applications and implementing robust infrastructure solutions.
                  </p>
                  <p className="text-muted-foreground leading-relaxed">
                    My expertise spans across frontend and backend development, cloud technologies, and automation tools. 
                    I enjoy solving complex problems and creating efficient, user-friendly solutions that make a real impact.
                  </p>
                </div>
              </div>
            )}

            {activeSection === 'experience' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">Clients & Experiences</h2>
                <div className="space-y-8">
                  {experiences.map((exp, index) => (
                    <div key={index} className="border-b border-border pb-8 last:border-b-0">
                      <div className="flex justify-between items-start mb-4">
                        <div>
                          <h3 className="text-xl font-semibold">{exp.company}</h3>
                          <p className="text-accent">{exp.role}</p>
                        </div>
                        <span className="text-muted-foreground">{exp.period}</span>
                      </div>
                      <ul className="space-y-2">
                        {exp.description.map((item, i) => (
                          <li key={i} className="flex items-start">
                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                            <span className="text-muted-foreground">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'studies' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">Studies</h2>
                <div className="space-y-6">
                  {education.map((edu, index) => (
                    <div key={index} className="border-b border-border pb-6 last:border-b-0">
                      <div className="flex justify-between items-start mb-2">
                        <h3 className="text-xl font-semibold">{edu.degree}</h3>
                        <span className="text-muted-foreground">{edu.period}</span>
                      </div>
                      <p className="text-accent mb-2">{edu.school}</p>
                      <p className="text-muted-foreground">{edu.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeSection === 'skills' && (
              <div className="space-y-8">
                <h2 className="text-3xl font-bold">Technical Skills</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
                  {skills.map((skill, index) => (
                    <div key={index} className="px-3 py-2 bg-muted rounded-md text-center text-sm">
                      {skill}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* CV Download Modal */}
        <Dialog open={showCVDownloadModal} onOpenChange={setShowCVDownloadModal}>
          <DialogContent>
            <DialogHeader>
              <DialogTitle>Select CV Version</DialogTitle>
              <DialogDescription>Choose which language version you'd like to download</DialogDescription>
            </DialogHeader>
            <div className="space-y-3">
              <Button 
                className="w-full justify-center" 
                asChild
              >
                <a href="/cv-en.pdf" download="Dernane_Djilali_CV_English.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  English Version
                </a>
              </Button>
              <Button 
                className="w-full justify-center" 
                asChild
              >
                <a href="/cv-fr.pdf" download="Dernane_Djilali_CV_Francais.pdf">
                  <Download className="w-4 h-4 mr-2" />
                  Version Française
                </a>
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default CV;