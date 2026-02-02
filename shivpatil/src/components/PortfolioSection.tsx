import { ImageWithFallback } from "./figma/ImageWithFallback";

export function PortfolioSection() {
  const projects = [
    {
      id: 1,
      title: "Cinematic Short Film",
      category: "Cinematic",
      thumbnail: "https://images.unsplash.com/photo-1489824904134-891ab64532f1?w=400&h=300&fit=crop",
      description: "Dramatic storytelling with cinematic color grading"
    },
    {
      id: 2,
      title: "Corporate Brand Video",
      category: "Corporate",
      thumbnail: "https://images.unsplash.com/photo-1556761175-b413da4baf72?w=400&h=300&fit=crop",
      description: "Professional brand presentation with motion graphics"
    },
    {
      id: 3,
      title: "Wedding Highlights",
      category: "Event Highlights",
      thumbnail: "https://images.unsplash.com/photo-1519741497674-611481863552?w=400&h=300&fit=crop",
      description: "Emotional wedding day story with smooth transitions"
    },
    {
      id: 4,
      title: "Social Media Campaign",
      category: "Social Media",
      thumbnail: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=300&fit=crop",
      description: "Engaging short-form content for social platforms"
    },
    {
      id: 5,
      title: "Music Video",
      category: "Cinematic",
      thumbnail: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=400&h=300&fit=crop",
      description: "Creative visual effects synchronized with music"
    },
    {
      id: 6,
      title: "Product Showcase",
      category: "Corporate",
      thumbnail: "https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=300&fit=crop",
      description: "Dynamic product presentation with macro details"
    }
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-teal-400">Portfolio</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            A showcase of my recent video editing projects across different genres and styles
          </p>
          <div className="w-20 h-1 bg-teal-400 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div 
              key={project.id} 
              className="group relative bg-card rounded-2xl overflow-hidden border border-border/50 hover:border-teal-500/30 transition-all duration-300 hover:scale-105"
            >
              <div className="relative aspect-video overflow-hidden">
                <ImageWithFallback
                  src={project.thumbnail}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute inset-0 bg-teal-500/0 group-hover:bg-teal-500/10 transition-colors duration-300" />
                
                {/* Play button overlay */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <div className="w-16 h-16 bg-teal-500/80 rounded-full flex items-center justify-center backdrop-blur-sm">
                    <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M8 5v14l11-7z"/>
                    </svg>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 bg-teal-500/10 text-teal-400 rounded-full text-sm mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground">{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}