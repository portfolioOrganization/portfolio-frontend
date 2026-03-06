import { TrendingUp, Award, Users, Code } from 'lucide-react';

const Stats = () => {
  const stats = [
    {
      icon: Code,
      value: '20+',
      label: 'Projects Completed',
      color: 'text-primary'
    },
    {
      icon: Users,
      value: '10+',
      label: 'Happy Clients',
      color: 'text-accent'
    },
    {
      icon: Award,
      value: '3+',
      label: 'Years Experience',
      color: 'text-primary'
    }
  ];

  return (
    <div className="py-16 bg-foreground/[0.02] border-b border-border/50">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 lg:grid-cols-3 gap-4">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="group relative p-6 rounded-2xl bg-background/50 backdrop-blur-sm border border-border/50 hover:border-foreground/20 transition-all duration-300 hover:shadow-lg"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2">
                      {stat.label}
                    </p>
                    <p className="text-4xl font-bold text-foreground">
                      {stat.value}
                    </p>
                  </div>
                  <div className={`p-3 rounded-lg bg-foreground/5 ${stat.color} group-hover:scale-110 transition-transform`}>
                    <Icon className="w-6 h-6" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default Stats;
