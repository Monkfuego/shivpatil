export function ServicesSection() {
  const services = [
    {
      title: "Video Editing",
      description: "Professional editing with attention to pacing, storytelling, and visual flow. Transform raw footage into polished, engaging content.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
        </svg>
      )
    },
    {
      title: "Color Grading",
      description: "Professional color correction and grading to enhance mood, atmosphere, and visual consistency across your entire project.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zM21 5a2 2 0 00-2-2h-4a2 2 0 00-2 2v12a4 4 0 004 4h4a2 2 0 002-2V5z" />
        </svg>
      )
    },
    {
      title: "Motion Graphics",
      description: "Eye-catching animations, title sequences, and graphic elements that enhance your video's visual appeal and professionalism.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      )
    },
    {
      title: "Sound Design",
      description: "Audio editing, mixing, and enhancement including background music selection, sound effects, and audio synchronization.",
      icon: (
        <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
        </svg>
      )
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-muted/10 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="text-teal-400">Services</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Comprehensive video editing solutions tailored to bring your vision to life
          </p>
          <div className="w-20 h-1 bg-teal-400 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {services.map((service, index) => (
            <div 
              key={index}
              className="p-8 bg-card rounded-2xl border border-border/50 hover:border-teal-500/30 transition-all duration-300 hover:scale-105 group"
            >
              <div className="flex items-start space-x-4">
                <div className="flex-shrink-0 w-16 h-16 bg-teal-500/10 rounded-xl flex items-center justify-center text-teal-400 group-hover:bg-teal-500/20 transition-colors duration-300">
                  {service.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}