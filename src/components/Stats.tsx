import { Code, Users, Award } from 'lucide-react';

const stats = [
  { icon: Code,  value: '20+', label: 'Projects Completed' },
  { icon: Users, value: '10+', label: 'Happy Clients' },
  { icon: Award, value: '3+',  label: 'Years Experience' },
];

const Stats = () => (
  <section className="border-y border-border/60 bg-muted/20">
    <div className="max-w-5xl mx-auto px-5 sm:px-8 lg:px-16">
      <div className="grid grid-cols-3 divide-x divide-border/60">
        {stats.map(({ icon: Icon, value, label }) => (
          <div key={label} className="flex flex-col sm:flex-row sm:items-center gap-3 px-5 py-6 sm:py-8">
            <Icon className="w-4 h-4 text-primary flex-shrink-0" />
            <div>
              <p className="text-2xl sm:text-3xl font-bold text-foreground leading-none">{value}</p>
              <p className="text-xs text-muted-foreground mt-1">{label}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

export default Stats;