
import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Picture Section */}
            <div className="order-2 lg:order-1 flex justify-center">
              <div className="relative">
                <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-primary/5 border-2 border-primary/20 flex items-center justify-center">
                  {/* Placeholder for profile picture */}
                  <div className="w-72 h-72 rounded-full bg-muted/50 flex items-center justify-center">
                    <span className="text-6xl text-muted-foreground">NKP</span>
                  </div>
                </div>
                {/* Floating elements for visual interest */}
                <div className="absolute -top-4 -right-4 w-8 h-8 bg-primary/20 rounded-full animate-float"></div>
                <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-primary/30 rounded-full animate-float" style={{ animationDelay: '1s' }}></div>
              </div>
            </div>

            {/* Content Section */}
            <div className="order-1 lg:order-2 text-center lg:text-left">
              <div className="space-y-6 animate-fade-in">
                <div>
                  <p className="text-primary font-medium tracking-wide mb-4">
                    Hello, I'm
                  </p>
                  <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
                    NITHISH K P
                  </h1>
                </div>

                <div className="space-y-2">
                  <h2 className="text-2xl md:text-3xl font-semibold text-muted-foreground">
                    Frontend Developer
                  </h2>
                  <h3 className="text-xl md:text-2xl text-muted-foreground">
                    UI/UX Designer • Business-Driven Creator • Graphic Designer
                  </h3>
                </div>

                <p className="text-lg text-muted-foreground max-w-2xl leading-relaxed">
                  Crafting exceptional digital experiences through thoughtful design and 
                  clean code. I blend creativity with functionality to create meaningful 
                  solutions that drive business growth.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start pt-6">
                  <Button size="lg" className="text-base px-8 py-3">
                    <a href="#contact" className="flex items-center">
                      Get In Touch
                    </a>
                  </Button>
                  <Button variant="outline" size="lg" className="text-base px-8 py-3">
                    <a href="#about" className="flex items-center">
                      Learn More
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
            <ArrowDown size={24} className="text-muted-foreground" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
