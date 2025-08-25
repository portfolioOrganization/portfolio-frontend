import { Calendar, MapPin, Award, Code2, Server, Database } from 'lucide-react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const CV = () => {
  const skills = {
    'Frontend': ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React', 'Next.js', 'Vue.js', 'Tailwind CSS'],
    'Backend': ['PHP', 'Laravel', 'Node.js', 'Python', 'MySQL', 'PostgreSQL', 'MongoDB', 'Redis'],
    'DevOps': ['Docker', 'Kubernetes', 'CI/CD', 'Jenkins', 'GitHub Actions', 'AWS', 'Google Cloud', 'Terraform'],
    'Tools': ['Git', 'Linux', 'Nginx', 'Apache', 'Monitoring', 'Logging', 'Security', 'Performance Optimization']
  };

  const experience = [
    {
      title: 'Senior DevOps Engineer',
      company: 'Tech Solutions Inc.',
      location: 'Remote',
      period: '2022 - Present',
      description: [
        'Led infrastructure automation initiatives reducing deployment time by 70%',
        'Implemented CI/CD pipelines for 15+ microservices using Docker and Kubernetes',
        'Managed cloud infrastructure on AWS serving 1M+ daily users',
        'Mentored junior developers on DevOps best practices'
      ]
    },
    {
      title: 'Full Stack Developer',
      company: 'Digital Agency Pro',
      location: 'New York, NY',
      period: '2020 - 2022',
      description: [
        'Developed 20+ responsive web applications using React and Laravel',
        'Optimized application performance resulting in 40% faster load times',
        'Collaborated with design teams to implement pixel-perfect UIs',
        'Integrated third-party APIs and payment gateways'
      ]
    },
    {
      title: 'Web Developer',
      company: 'StartupXYZ',
      location: 'San Francisco, CA',
      period: '2018 - 2020',
      description: [
        'Built and maintained company website and internal tools',
        'Implemented responsive designs for mobile-first approach',
        'Set up monitoring and logging systems for production applications',
        'Worked with cross-functional teams in Agile environment'
      ]
    }
  ];

  const education = [
    {
      degree: 'Bachelor of Science in Computer Science',
      school: 'University of Technology',
      period: '2014 - 2018',
      achievements: ['Graduated Summa Cum Laude', 'Dean\'s List for 6 semesters']
    }
  ];

  const certifications = [
    'AWS Certified Solutions Architect',
    'Docker Certified Associate',
    'Kubernetes Administrator (CKA)',
    'Google Cloud Professional DevOps Engineer'
  ];

  return (
    <div className="pt-20 pb-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">Curriculum Vitae</h1>
          <p className="text-xl text-muted-foreground">
            Web Developer & DevOps Engineer
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left Column */}
          <div className="space-y-6">
            {/* Skills */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Code2 className="h-5 w-5" />
                  Technical Skills
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {Object.entries(skills).map(([category, skillList]) => (
                  <div key={category}>
                    <h4 className="font-semibold mb-2 text-primary">{category}</h4>
                    <div className="flex flex-wrap gap-2">
                      {skillList.map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            {/* Certifications */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Award className="h-5 w-5" />
                  Certifications
                </CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {certifications.map((cert, index) => (
                    <li key={index} className="text-sm flex items-start gap-2">
                      <div className="w-2 h-2 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                      {cert}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>

          {/* Right Column */}
          <div className="lg:col-span-2 space-y-6">
            {/* Experience */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Server className="h-5 w-5" />
                  Professional Experience
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="relative">
                      {index !== experience.length - 1 && (
                        <div className="absolute left-4 top-8 bottom-0 w-0.5 bg-border"></div>
                      )}
                      <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                          <div className="w-3 h-3 bg-primary rounded-full"></div>
                        </div>
                        <div className="flex-1">
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                            <h3 className="font-semibold text-lg">{exp.title}</h3>
                            <div className="flex items-center gap-2 text-sm text-muted-foreground">
                              <Calendar className="h-4 w-4" />
                              {exp.period}
                            </div>
                          </div>
                          <div className="flex items-center gap-2 text-muted-foreground mb-3">
                            <span className="font-medium">{exp.company}</span>
                            <span>•</span>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-3 w-3" />
                              {exp.location}
                            </div>
                          </div>
                          <ul className="space-y-1">
                            {exp.description.map((item, i) => (
                              <li key={i} className="text-sm flex items-start gap-2">
                                <div className="w-1.5 h-1.5 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Education */}
            <Card>
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Database className="h-5 w-5" />
                  Education
                </CardTitle>
              </CardHeader>
              <CardContent>
                {education.map((edu, index) => (
                  <div key={index} className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-3 h-3 bg-accent rounded-full"></div>
                    </div>
                    <div className="flex-1">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                        <h3 className="font-semibold">{edu.degree}</h3>
                        <div className="flex items-center gap-2 text-sm text-muted-foreground">
                          <Calendar className="h-4 w-4" />
                          {edu.period}
                        </div>
                      </div>
                      <p className="text-muted-foreground mb-2">{edu.school}</p>
                      <ul className="space-y-1">
                        {edu.achievements.map((achievement, i) => (
                          <li key={i} className="text-sm flex items-start gap-2">
                            <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CV;