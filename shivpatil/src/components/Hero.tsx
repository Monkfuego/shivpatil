import { motion } from 'motion/react';
import { Play } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Animated background gradient */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-teal-500 rounded-full blur-[128px] animate-pulse"></div>
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-amber-500 rounded-full blur-[128px] animate-pulse delay-700"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Title Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 bg-teal-500/10 border border-teal-500/30 rounded-full mb-8"
          >
            <Play className="w-4 h-4 text-teal-400" />
            <span className="text-sm text-teal-300 tracking-wide">Video Editor – 3+ Years of Experience</span>
          </motion.div>

          {/* Main Name */}
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl mb-6 tracking-tight"
          >
            <span className="block bg-gradient-to-r from-teal-400 via-amber-300 to-teal-400 bg-clip-text text-transparent">
              Shiv Patil
            </span>
          </motion.h1>

          {/* Tagline */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            className="text-xl sm:text-2xl md:text-3xl text-zinc-300 max-w-3xl mx-auto mb-12 leading-relaxed"
          >
            Turning raw footage into captivating stories.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          >
            <a
              href="#portfolio"
              className="px-8 py-4 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-lg transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:scale-105"
            >
              View My Work
            </a>
            <a
              href="#contact"
              className="px-8 py-4 bg-zinc-800/50 hover:bg-zinc-700/50 text-white border border-zinc-700 hover:border-amber-500 rounded-lg transition-all duration-300"
            >
              Get In Touch
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <div className="w-6 h-10 border-2 border-teal-500/30 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-teal-400 rounded-full"
          />
        </div>
      </motion.div>
    </section>
  );
}
