import { motion } from 'motion/react';
import { Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Rohit Singh',
    role: 'Content Creator',
    company: 'Instagram',
    quote: 'Shiv transformed our corporate videos into compelling stories that truly resonated with our audience. His attention to detail and creative vision exceeded our expectations.',
    rating: 5
  },
  {
    id: 2,
    name: 'James Rodriguez',
    role: 'Wedding Couple',
    company: 'Personal Client',
    quote: 'Our wedding video is absolutely stunning! Shiv captured every emotional moment perfectly. We watch it all the time and it brings tears to our eyes every single time.',
    rating: 5
  },
  {
    id: 3,
    name: 'Foreign Tadka',
    role: 'Content Creator',
    company: 'Social Media Influencer',
    quote: 'Working with Shiv has been a game-changer for my content. The editing is crisp, transitions are smooth, and he always delivers on time. Highly recommended!',
    rating: 5
  },
  {
    id: 4,
    name: 'Michael Thompson',
    role: 'CEO',
    company: 'StartupHub',
    quote: 'Incredible work on our product launch video. Shiv understood our brand perfectly and delivered a video that helped us achieve 200% more engagement than expected.',
    rating: 3
  },
  {
    id: 5,
    name: 'Lisa Anderson',
    role: 'Film Producer',
    company: 'Indie Films Co.',
    quote: 'Shiv\'s color grading skills are exceptional. He brought our indie film to life with a cinematic look that rivals major productions. A true professional.',
    rating: 4
  },
  {
    id: 6,
    name: 'Amyth',
    role: 'Music Artist',
    company: 'Independent Musician',
    quote: 'My music video turned out amazing! Shiv synced everything perfectly to the beat and added effects that enhanced the overall vibe. Will definitely work together again.',
    rating: 5
  }
];

export function Testimonials() {
  return (
    <section id="testimonials" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl mb-4 bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent">
            Testimonials
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            What my clients say about working with me
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-zinc-800/50 border border-zinc-700 hover:border-amber-500/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-amber-500/10"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                ))}
              </div>

              {/* Quote */}
              <p className="text-zinc-300 mb-6 leading-relaxed italic">
                "{testimonial.quote}"
              </p>

              {/* Author */}
              <div className="border-t border-zinc-700 pt-4">
                <p className="text-white">{testimonial.name}</p>
                <p className="text-sm text-zinc-400">{testimonial.role}</p>
                <p className="text-sm text-teal-400">{testimonial.company}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}