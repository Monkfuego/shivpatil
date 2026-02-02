import { Hero } from './components/Hero';
import { About } from './components/About';
import { Portfolio } from './components/Portfolio';
import { Services } from './components/Services';
import { Testimonials } from './components/Testimonials';
import { Contact } from './components/Contact';

export default function App() {
  return (
    <div className="bg-zinc-950 text-zinc-100 min-h-screen">
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonials />
      <Contact />
      
      {/* Footer */}
      <footer className="bg-zinc-950 border-t border-zinc-800 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-zinc-400">
          <p>&copy; 2026 Shiv Patil. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
