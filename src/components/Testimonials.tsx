import { Star } from 'lucide-react';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Ahmed Hassan',
      role: 'CEO, Tech Startup',
      content: 'Djilali delivered exceptional work on our platform. His attention to detail and technical expertise transformed our vision into reality.',
      rating: 5,
      image: '👨‍💼'
    },
    {
      name: 'Sarah Johnson',
      role: 'Project Manager, Enterprise Co.',
      content: 'Outstanding DevOps implementation. The CI/CD pipelines he set up have reduced our deployment time significantly.',
      rating: 5,
      image: '👩‍💼'
    },
    {
      name: 'Mohamed Ali',
      role: 'CTO, Digital Agency',
      content: 'Professional, reliable, and highly skilled. I would definitely recommend him for any web development or DevOps project.',
      rating: 5,
      image: '👨‍💻'
    }
  ];

  return (
    <div className="py-20 bg-gradient-to-b from-background via-foreground/[0.02] to-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-primary to-accent rounded-full mx-auto mt-6"></div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative p-8 rounded-2xl bg-background border border-border/50 hover:border-primary/30 hover:shadow-xl hover:shadow-primary/10 transition-all duration-300"
            >
              {/* Decorative element */}
              <div className="absolute -top-4 right-6 text-5xl opacity-10">
                "
              </div>

              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array(testimonial.rating)
                  .fill(0)
                  .map((_, i) => (
                    <Star
                      key={i}
                      className="w-5 h-5 fill-accent text-accent"
                    />
                  ))}
              </div>

              {/* Quote */}
              <p className="text-muted-foreground mb-6 leading-relaxed italic">
                {testimonial.content}
              </p>

              {/* User Info */}
              <div className="flex items-center gap-4">
                <div className="text-4xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">
                    {testimonial.name}
                  </h4>
                  <p className="text-sm text-muted-foreground">
                    {testimonial.role}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
