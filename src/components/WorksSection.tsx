
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ExternalLink, Github } from 'lucide-react';

const WorksSection = () => {
  const projects = [
    {
      title: "E-Commerce Dashboard",
      description: "A modern admin dashboard for managing online stores with real-time analytics and inventory management.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
      technologies: ["React", "TypeScript", "Tailwind CSS", "Chart.js"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Task Management App",
      description: "Intuitive project management tool with drag-and-drop functionality and team collaboration features.",
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Restaurant Website",
      description: "Elegant restaurant website with online reservation system and interactive menu showcase.",
      image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=600&h=400&fit=crop",
      technologies: ["HTML", "CSS", "JavaScript", "PHP"],
      liveLink: "#",
      githubLink: "#"
    },
    {
      title: "Weather App",
      description: "Clean and responsive weather application with location-based forecasts and beautiful animations.",
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=600&h=400&fit=crop",
      technologies: ["React", "Weather API", "CSS Animations"],
      liveLink: "#",
      githubLink: "#"
    }
  ];

  return (
    <section id="works" className="py-24 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 animate-fade-in">
            My Works
          </h2>

          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 animate-fade-in">
                <div className="overflow-hidden rounded-t-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl font-semibold">{project.title}</CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, techIndex) => (
                      <span 
                        key={techIndex}
                        className="px-2 py-1 bg-primary/10 text-primary text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-3">
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <ExternalLink size={16} />
                      Live Demo
                    </Button>
                    <Button variant="outline" size="sm" className="flex items-center gap-2">
                      <Github size={16} />
                      Code
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorksSection;
