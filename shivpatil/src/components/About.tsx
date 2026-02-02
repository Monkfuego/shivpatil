import { motion } from 'motion/react';
import profileImage from 'figma:asset/f680006ec9f4d749a529bce2f5e168e4cda197f8.png';
import { Sparkles, Film, Scissors, Wand2 } from 'lucide-react';

export function About() {
  const highlights = [
    {
      icon: Film,
      title: 'Storytelling',
      description: 'Crafting narratives that resonate with audiences'
    },
    {
      icon: Scissors,
      title: 'Smooth Transitions',
      description: 'Seamless cuts that maintain flow and rhythm'
    },
    {
      icon: Wand2,
      title: 'Visual Effects',
      description: 'Engaging effects that enhance the message'
    },
    {
      icon: Sparkles,
      title: 'Detail-Oriented',
      description: 'Meticulous attention to every frame'
    }
  ];

  return (
    <section id="about" className="py-24 bg-zinc-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl mb-4 bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto rounded-full"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="aspect-square rounded-2xl overflow-hidden border-4 border-teal-500/20 shadow-2xl shadow-teal-500/10">
              <img
                src={profileImage}
                alt="Shiv Patil"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-teal-500 to-amber-500 rounded-2xl -z-10 blur-xl opacity-50"></div>
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl sm:text-4xl mb-6 text-teal-400">
              Skilled, Detail-Oriented & Creative
            </h3>
            <p className="text-lg text-zinc-300 mb-6 leading-relaxed">
              I'm Shiv Patil, a passionate video editor with over 3 years of experience transforming raw footage into compelling visual stories. My approach combines technical precision with creative vision to deliver content that captivates and engages.
            </p>
            <p className="text-lg text-zinc-300 mb-8 leading-relaxed">
              Currently seeking new clients who value quality, creativity, and storytelling excellence. Whether it's cinematic productions, corporate videos, or social media content, I bring dedication and expertise to every project.
            </p>

            {/* Expertise Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={highlight.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="bg-zinc-800/50 border border-zinc-700 hover:border-teal-500/50 rounded-lg p-4 transition-all duration-300"
                >
                  <highlight.icon className="w-8 h-8 text-teal-400 mb-2" />
                  <h4 className="text-white mb-1">{highlight.title}</h4>
                  <p className="text-sm text-zinc-400">{highlight.description}</p>
                </motion.div>
              ))}
            </div>

            {/* Languages */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              viewport={{ once: true }}
              className="mt-8 bg-zinc-800/50 border border-zinc-700 rounded-lg p-6"
            >
              <h4 className="text-xl text-white mb-4 flex items-center gap-2">
                <span className="text-teal-400">💬</span> Languages
              </h4>
              <div className="flex flex-wrap gap-2">
                <span className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-amber-500/20 border border-teal-500/30 rounded-full text-sm text-zinc-200">
                  Kannada
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-amber-500/20 border border-teal-500/30 rounded-full text-sm text-zinc-200">
                  Hindi
                </span>
                <span className="px-4 py-2 bg-gradient-to-r from-teal-500/20 to-amber-500/20 border border-teal-500/30 rounded-full text-sm text-zinc-200">
                  English
                </span>
                <span className="px-4 py-2 bg-zinc-800/80 border border-zinc-600 rounded-full text-sm text-zinc-300">
                  Basic Marathi
                </span>
                <span className="px-4 py-2 bg-zinc-800/80 border border-zinc-600 rounded-full text-sm text-zinc-300">
                  Basic Telugu
                </span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}