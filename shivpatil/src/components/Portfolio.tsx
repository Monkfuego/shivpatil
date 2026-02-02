import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';
import { Play } from 'lucide-react';

const projects = [
  {
    id: 1,
    title: 'Instagram Reel',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1769596722541-40dedee6789d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NzAwNDY1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Engaging vertical content with smooth transitions',
    link: 'https://www.instagram.com/reel/DN3SxScQqG4/'
  },
  {
    id: 2,
    title: 'Creative Edit',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1758553026412-bc1da0ebd366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2UlMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzcwMDQ2NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Dynamic video with visual effects and color grading',
    link: 'https://www.instagram.com/reel/DH-dl_Wy0to/'
  },
  {
    id: 3,
    title: 'Visual Story',
    category: 'Cinematic',
    image: 'https://images.unsplash.com/photo-1638961862991-bd7ee1c9ecfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3Njk5NDU2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Captivating narrative with cinematic editing',
    link: 'https://www.instagram.com/reel/DH0WprjxGyT/'
  },
  {
    id: 4,
    title: 'Content Creation',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1769596722541-40dedee6789d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NzAwNDY1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'High-energy content optimized for social platforms',
    link: 'https://www.instagram.com/reel/DHLZPyKyKi4/'
  },
  {
    id: 5,
    title: 'Motion Graphics',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1758553026412-bc1da0ebd366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2UlMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzcwMDQ2NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Creative editing with motion graphics elements',
    link: 'https://www.instagram.com/reel/DHI0Sy8SkgF/'
  },
  {
    id: 6,
    title: 'Video Project',
    category: 'Cinematic',
    image: 'https://images.unsplash.com/photo-1638961862991-bd7ee1c9ecfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3Njk5NDU2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Professional video editing with storytelling focus',
    link: 'https://www.instagram.com/reel/DB0wEiKyl5d/'
  },
  {
    id: 7,
    title: 'Brand Content',
    category: 'Social Media',
    image: 'https://images.unsplash.com/photo-1769596722541-40dedee6789d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzb2NpYWwlMjBtZWRpYSUyMGNvbnRlbnQlMjBjcmVhdGlvbnxlbnwxfHx8fDE3NzAwNDY1Nzd8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Engaging brand story with smooth pacing',
    link: 'https://www.instagram.com/reel/DA9H2p3SaUY/'
  },
  {
    id: 8,
    title: 'Creative Reel',
    category: 'Creative',
    image: 'https://images.unsplash.com/photo-1758553026412-bc1da0ebd366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx2aWRlbyUyMGVkaXRpbmclMjB3b3Jrc3BhY2UlMjBjaW5lbWF0aWN8ZW58MXx8fHwxNzcwMDQ2NTc2fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Innovative editing techniques and visual effects',
    link: 'https://www.instagram.com/reel/DA6hsVAS0BR/'
  },
  {
    id: 9,
    title: 'YouTube Project',
    category: 'Cinematic',
    image: 'https://images.unsplash.com/photo-1638961862991-bd7ee1c9ecfc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaW5lbWF0aWMlMjBmaWxtJTIwcHJvZHVjdGlvbnxlbnwxfHx8fDE3Njk5NDU2NTN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    description: 'Professional cinematic edit with full production quality',
    link: 'https://youtu.be/cdhpAg26XfM'
  }
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 bg-zinc-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl mb-4 bg-gradient-to-r from-amber-400 to-teal-400 bg-clip-text text-transparent">
            Portfolio
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-amber-500 to-teal-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            A showcase of my recent work across different styles and formats
          </p>
        </motion.div>

        {/* Portfolio Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.a
              key={project.id}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="group relative aspect-video rounded-xl overflow-hidden cursor-pointer block"
            >
              {/* Image */}
              <ImageWithFallback
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Gradient Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300"></div>

              {/* Play Button Overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="w-16 h-16 bg-teal-500 rounded-full flex items-center justify-center shadow-lg shadow-teal-500/50">
                  <Play className="w-8 h-8 text-white ml-1" fill="white" />
                </div>
              </div>

              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <span className="inline-block px-3 py-1 bg-teal-500/20 border border-teal-500/40 rounded-full text-xs text-teal-300 mb-2">
                  {project.category}
                </span>
                <h3 className="text-xl text-white mb-1">
                  {project.title}
                </h3>
                <p className="text-sm text-zinc-300">{project.description}</p>
              </div>

              {/* Hover Border Effect */}
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-500/50 rounded-xl transition-colors duration-300"></div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}