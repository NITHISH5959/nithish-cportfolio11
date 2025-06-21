
import { ArrowDown, Github, Linkedin, Mail } from 'lucide-react';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 bg-accent/10 rounded-full blur-2xl animate-float" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-5xl md:text-7xl font-bold tracking-tight mb-6 animate-fade-in">
            <span className="text-foreground">Nithish</span>
            <br />
            <span className="text-muted-foreground font-light">K P</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground mb-8 animate-slide-in-left font-light leading-relaxed">
            Frontend Developer • UI/UX Designer
            <br />
            Business-Driven Creator • Graphic Designer
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-12 animate-slide-in-right">
            <span className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
              React & Next.js
            </span>
            <span className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
              Figma & Adobe CC
            </span>
            <span className="px-4 py-2 bg-muted rounded-full text-sm font-medium">
              Business Strategy
            </span>
          </div>

          <div className="flex justify-center space-x-6 mb-16 animate-fade-in">
            <a
              href="mailto:nithish@example.com"
              className="p-3 bg-primary text-primary-foreground rounded-full hover:scale-110 transition-transform duration-200"
            >
              <Mail size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-muted hover:bg-muted/80 rounded-full hover:scale-110 transition-all duration-200"
            >
              <Github size={20} />
            </a>
            <a
              href="#"
              className="p-3 bg-muted hover:bg-muted/80 rounded-full hover:scale-110 transition-all duration-200"
            >
              <Linkedin size={20} />
            </a>
          </div>

          <a
            href="#about"
            className="inline-flex items-center space-x-2 text-muted-foreground hover:text-foreground transition-colors duration-200 animate-bounce"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
