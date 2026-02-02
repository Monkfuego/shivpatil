import { motion } from 'motion/react';
import { Mail, MessageSquare, User, Send, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, this would send the data to a backend
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
    setTimeout(() => {
      setIsSubmitted(false);
      setFormData({ name: '', email: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="py-24 bg-zinc-900">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-5xl sm:text-6xl md:text-7xl mb-4 bg-gradient-to-r from-teal-400 to-amber-400 bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-teal-500 to-amber-500 mx-auto rounded-full mb-6"></div>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Have a project in mind? Let's create something amazing together
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-zinc-800/50 border border-zinc-700 rounded-2xl p-8 md:p-12"
        >
          {isSubmitted ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="text-center py-12"
            >
              <div className="w-20 h-20 bg-gradient-to-br from-teal-500 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Send className="w-10 h-10 text-white" />
              </div>
              <h3 className="text-3xl text-white mb-4">Message Sent!</h3>
              <p className="text-zinc-300">
                Thank you for reaching out. I'll get back to you as soon as possible.
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Name Input */}
              <div>
                <label htmlFor="name" className="block text-sm text-zinc-300 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-teal-500 rounded-lg pl-12 pr-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors duration-300"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email Input */}
              <div>
                <label htmlFor="email" className="block text-sm text-zinc-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-teal-500 rounded-lg pl-12 pr-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors duration-300"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Message Textarea */}
              <div>
                <label htmlFor="message" className="block text-sm text-zinc-300 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-zinc-500" />
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-teal-500 rounded-lg pl-12 pr-4 py-3 text-white placeholder-zinc-500 outline-none transition-colors duration-300 resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-teal-500 to-amber-500 hover:from-teal-600 hover:to-amber-600 text-white py-4 rounded-lg transition-all duration-300 shadow-lg shadow-teal-500/20 hover:shadow-teal-500/40 hover:scale-[1.02] flex items-center justify-center gap-2"
              >
                <Send className="w-5 h-5" />
                Send Message
              </button>
            </form>
          )}
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-12"
        >
          <p className="text-zinc-400 mb-6 text-center">Or reach out directly:</p>
          
          <div className="grid md:grid-cols-3 gap-6">
            {/* Email */}
            <a
              href="mailto:shivpatilfusion940@gmail.com"
              className="flex flex-col items-center gap-3 bg-zinc-800/50 border border-zinc-700 hover:border-teal-500/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-amber-500 rounded-full flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <p className="text-sm text-zinc-400 mb-1">Email</p>
                <p className="text-teal-400 hover:text-teal-300 transition-colors">
                  shivpatilfusion940@gmail.com
                </p>
              </div>
            </a>

            {/* Phone */}
            <a
              href="tel:+917337710665"
              className="flex flex-col items-center gap-3 bg-zinc-800/50 border border-zinc-700 hover:border-teal-500/50 rounded-xl p-6 transition-all duration-300 hover:shadow-lg hover:shadow-teal-500/10"
            >
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-amber-500 rounded-full flex items-center justify-center">
                <Phone className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <p className="text-sm text-zinc-400 mb-1">Phone</p>
                <p className="text-teal-400 hover:text-teal-300 transition-colors">
                  +91 7337710665
                </p>
              </div>
            </a>

            {/* Location */}
            <div className="flex flex-col items-center gap-3 bg-zinc-800/50 border border-zinc-700 rounded-xl p-6">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-500 to-amber-500 rounded-full flex items-center justify-center">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <div className="text-center">
                <p className="text-sm text-zinc-400 mb-1">Location</p>
                <p className="text-zinc-300">
                  Humnabad, Bidar<br />Karnataka
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}