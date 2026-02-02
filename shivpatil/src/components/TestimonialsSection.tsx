import { ImageWithFallback } from "./figma/ImageWithFallback";

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Amyth",
      role: "Client",
      company: "101 subscribers",
      quote: "Extremely talented guy highly professional. Does too many things: editing, colour grading, lyrical video. He has done a music lyrical video I liked it too much. I am looking forward to do more videos with him.",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Foreign Tadka",
      role: "Client",
      company: "15.2K subscribers",
      quote: "I've worked with Shiv Patil as my video editor, and the experience has been very smooth. He understands YouTube pacing, retention, and clean editing really well. Very cooperative, open to feedback, and delivers work on time. If you're looking for a reliable editor who understands creators' needs, I would definitely recommend him.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b129?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Rohit Singh Lazy",
      role: "Client",
      company: "16 subscribers",
      quote: "Exceptional editing for talking-head content. Shiv Patil knows how to keep viewers hooked. The cuts were sharp, pacing was perfect, and the flow felt natural and engaging throughout. Shiv enhanced the delivery without over-editing: clean jump cuts, subtle zooms, smooth captions, and balanced audio made the video feel polished and professional.",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    },
    {
      name: "Shiv Patil",
      role: "Client",
      company: "Self Review",
      quote: "Absolutely cinematic. Shiv Patil doesn't just edit videos, he crafts experiences. The pacing, sound design, color grading, and emotional flow were on another level. Every cut felt intentional, every frame told a story. The video had a polished, film-like quality that elevated the entire concept. Shiv clearly understands cinematic storytelling, not just software.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Client <span className="text-teal-400">Testimonials</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Don't just take my word for it - hear what my clients have to say
          </p>
          <div className="w-20 h-1 bg-teal-400 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card p-8 rounded-2xl border border-border/50 hover:border-teal-500/30 transition-all duration-300 hover:scale-105 group relative"
            >
              {/* Quote icon */}
              <div className="absolute -top-4 left-8">
                <div className="w-8 h-8 bg-teal-500 rounded-full flex items-center justify-center">
                  <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-10zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z"/>
                  </svg>
                </div>
              </div>

              <div className="pt-4 mb-6">
                <p className="text-muted-foreground italic leading-relaxed">
                  "{testimonial.quote}"
                </p>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center overflow-hidden">
                  <ImageWithFallback
                    src={testimonial.avatar}
                    alt={testimonial.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  <p className="text-sm text-teal-400">{testimonial.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}