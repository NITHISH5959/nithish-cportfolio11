
import { Code, Palette, TrendingUp, Layers } from 'lucide-react';

const AboutSection = () => {
  const skills = [
    {
      icon: Code,
      title: 'Frontend Development',
      description: 'Building responsive, performant web applications with modern frameworks and technologies.',
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Creating intuitive, user-centered designs that deliver exceptional digital experiences.',
    },
    {
      icon: TrendingUp,
      title: 'Business Strategy',
      description: 'Bridging the gap between design and business goals with data-driven solutions.',
    },
    {
      icon: Layers,
      title: 'Graphic Design',
      description: 'Crafting visual identities and brand experiences that communicate effectively.',
    },
  ];

  return (
    <section id="about" className="py-24 bg-muted/30">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            About Me
          </h2>
          
          <div className="text-center mb-16 animate-slide-in-left">
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed mb-8">
              I'm a passionate designer and developer who believes in creating digital experiences 
              that not only look beautiful but also drive business results. With a unique blend of 
              technical expertise and creative vision, I help brands tell their stories through 
              compelling design and seamless functionality.
            </p>
            <p className="text-lg text-muted-foreground leading-relaxed">
              My approach combines user-centered design principles with modern development practices, 
              ensuring every project delivers both aesthetic excellence and measurable impact.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {skills.map((skill, index) => (
              <div
                key={skill.title}
                className="p-6 bg-background rounded-xl border border-border hover:shadow-lg transition-all duration-300 animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
                    <skill.icon size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold mb-2">{skill.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{skill.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
