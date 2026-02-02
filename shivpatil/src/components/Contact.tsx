import { motion } from 'motion/react';
import { Mail, MessageSquare, User, Send, Phone, MapPin } from 'lucide-react';
import { useState } from 'react';

export function Contact() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    address: '',
    pinCode: '',
    message: ''
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const res = await fetch('https://shivmil.vercel.app/api/mailsend', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });

      if (!res.ok) {
        throw new Error('Failed to send message');
      }

      setIsSubmitted(true);

      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({
          fullName: '',
          email: '',
          phoneNumber: '',
          address: '',
          pinCode: '',
          message: ''
        });
      }, 3000);
    } catch (err) {
      console.error(err);
      setError('Something went wrong. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
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
              {/* Full Name */}
              <div>
                <label className="block text-sm text-zinc-300 mb-2">
                  Your Name
                </label>
                <div className="relative">
                  <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type="text"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-teal-500 rounded-lg pl-12 pr-4 py-3 text-white outline-none"
                    placeholder="John Doe"
                  />
                </div>
              </div>

              {/* Email */}
              <div>
                <label className="block text-sm text-zinc-300 mb-2">
                  Email Address
                </label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-teal-500 rounded-lg pl-12 pr-4 py-3 text-white outline-none"
                    placeholder="john@example.com"
                  />
                </div>
              </div>

              {/* Phone */}
              <div>
                <label className="block text-sm text-zinc-300 mb-2">
                  Phone Number
                </label>
                <div className="relative">
                  <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-zinc-500" />
                  <input
                    type="tel"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleChange}
                    required
                    className="w-full bg-zinc-900/50 border border-zinc-700 focus:border-teal-500 rounded-lg pl-12 pr-4 py-3 text-white outline-none"
                    placeholder="+91 9XXXXXXXXX"
                  />
                </div>
              </div>

              {/* Address */}
              <div>
                <input
                  type="text"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none"
                  placeholder="Address"
                />
              </div>

              {/* Pin Code */}
              <div>
                <input
                  type="text"
                  name="pinCode"
                  value={formData.pinCode}
                  onChange={handleChange}
                  className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg px-4 py-3 text-white outline-none"
                  placeholder="PIN Code"
                />
              </div>

              {/* Message */}
              <div>
                <label className="block text-sm text-zinc-300 mb-2">
                  Your Message
                </label>
                <div className="relative">
                  <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-zinc-500" />
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={6}
                    className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg pl-12 pr-4 py-3 text-white outline-none resize-none"
                    placeholder="Tell me about your project..."
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-400 text-sm">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-teal-500 to-amber-500 text-white py-4 rounded-lg transition-all flex items-center justify-center gap-2 disabled:opacity-60"
              >
                <Send className="w-5 h-5" />
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          )}
        </motion.div>
      </div>
    </section>
  );
}
