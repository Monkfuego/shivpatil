export function AboutSection() {
  const skills = [
    "Storytelling Excellence",
    "Smooth Transitions",
    "Visual Effects",
    "Detail-Oriented Editing",
    "Creative Vision"
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="text-teal-400">Me</span>
            </h2>
            <div className="w-20 h-1 bg-teal-400 mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg leading-relaxed text-muted-foreground">
                I'm a skilled and detail-oriented video editor with a passion for transforming raw footage into compelling visual narratives. With 5 years of experience in the industry, I specialize in creating engaging content that resonates with audiences.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                My expertise lies in storytelling through seamless editing, smooth transitions, and captivating visual effects. I'm always looking for new creative challenges and exciting projects to collaborate on with clients who value quality and innovation.
              </p>
              
              <div className="pt-4">
                <h3 className="text-xl font-semibold mb-4 text-teal-400">Core Expertise</h3>
                <div className="flex flex-wrap gap-3">
                  {skills.map((skill, index) => (
                    <span 
                      key={index}
                      className="px-4 py-2 bg-teal-500/10 text-teal-400 rounded-full border border-teal-500/20 hover:bg-teal-500/20 transition-colors"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            
            <div className="relative">
              <div className="aspect-square bg-gradient-to-br from-teal-500/20 to-teal-500/5 rounded-3xl flex items-center justify-center border border-teal-500/10">
                <div className="w-32 h-32 bg-teal-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-16 h-16 text-teal-400" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8 5v14l11-7z"/>
                  </svg>
                </div>
              </div>
              <div className="absolute -top-6 -right-6 w-24 h-24 bg-teal-500/10 rounded-full blur-xl" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-500/5 rounded-full blur-lg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}