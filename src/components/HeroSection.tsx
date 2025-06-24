import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 pb-16">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Profile Picture Section */}
            <div className="order-2 lg:order-1 flex flex-col items-center">
              <div className="relative mb-6">
                <div className="w-80 h-80 rounded-full overflow-hidden border-4 border-white shadow-2xl">
                  <img 
                    src="/lovable-uploads/f350d624-03ea-4946-bff0-f65c381f3e2a.png" 
                    alt="Nithish Purushothaman Profile Picture"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              
              {/* Glossy Name Below Profile Picture */}
              <div className="text-center">
                <h2 className="text-3xl md:text-4xl font-bold text-foreground relative mb-2">
                  <span className="relative inline-block bg-gradient-to-r from-slate-900 via-slate-600 to-slate-900 bg-clip-text text-transparent">
                    Nithish Purushothaman
                    <div className="absolute inset-0 bg-gradient-to-r from-white/30 via-white/60 to-white/30 bg-clip-text text-transparent transform -skew-x-6 opacity-40"></div>
                  </span>
                </h2>
                <div className="h-0.5 w-24 mx-auto bg-gradient-to-r from-transparent via-primary to-transparent rounded-full"></div>
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

                <div className="flex justify-center lg:justify-start pt-6">
                  <Button size="lg" className="text-base px-8 py-3">
                    <a href="#contact" className="flex items-center">
                      Get In Touch
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
