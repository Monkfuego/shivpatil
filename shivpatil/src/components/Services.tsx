import { motion } from 'motion/react';
import { Film, Palette, Sparkles, Volume2 } from 'lucide-react';

const services = [
  {
    icon: Film,
    title: 'Video Editing',
    description: 'Professional editing services for all types of content - from cinematic films to social media clips. I handle everything from basic cuts to complex multi-camera sequences.',
    features: ['Multi-cam editing', 'Pacing & rhythm', 'Story structure', 'Final delivery in any format']
  },
  {
    icon: Palette,
    title: 'Color Grading',
    description: 'Transform your footage with professional color correction and grading. Create the perfect mood and aesthetic that aligns with your vision and brand identity.',
    features: ['Color correction', 'Cinematic looks', 'LUT creation', 'Consistent branding']
  },
  {
    icon: Sparkles,
    title: 'Motion Graphics',
    description: 'Eye-catching motion graphics and animations that enhance your message. From simple lower thirds to complex animated sequences and title designs.',
    features: ['Titles & lower thirds', '2D/3D animations', 'Logo animations', 'Visual effects']
  },
  {
    icon: Volume2,
    title: 'Sound Design',
    description: 'Complete audio post-production including mixing, sound effects, and music editing. Ensuring your video sounds as good as it looks.',
    features: ['Audio mixing', 'Sound effects', 'Music editing', 'Noise reduction']
  }
];

export function Services() {
  return (
    <section id="services" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl mb-4 bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
            Services
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Comprehensive video production services tailored to your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-zinc-800/50 border border-zinc-700 hover:border-teal-500/50 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:shadow-teal-500/10"
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-gradient-to-br from-teal-500 to-amber-500 rounded-xl flex items-center justify-center mb-6 shadow-lg shadow-teal-500/20">
                <service.icon className="w-8 h-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-2xl sm:text-3xl text-white mb-4">
                {service.title}
              </h3>
              <p className="text-zinc-300 mb-6 leading-relaxed">
                {service.description}
              </p>

              {/* Features */}
              <ul className="space-y-2">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-center text-zinc-400">
                    <span className="w-1.5 h-1.5 bg-teal-400 rounded-full mr-3"></span>
                    {feature}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
