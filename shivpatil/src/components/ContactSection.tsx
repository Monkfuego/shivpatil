import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { Label } from "./ui/label";

export function ContactSection() {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-muted/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's <span className="text-teal-400">Connect</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Ready to bring your vision to life? Let's discuss your next video project
          </p>
          <div className="w-20 h-1 bg-teal-400 mx-auto mt-6 rounded-full" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
          {/* Contact Info */}
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Get In Touch</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                I'm always excited to work on new projects and collaborate with creative minds. 
                Whether you need a quick social media edit or a full cinematic production, 
                let's discuss how I can help bring your story to life.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-muted-foreground">dexter@videoeditor.com</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-muted-foreground">+1 (555) 123-4567</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 bg-teal-500/10 rounded-xl flex items-center justify-center">
                  <svg className="w-6 h-6 text-teal-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <p className="font-medium">Response Time</p>
                  <p className="text-muted-foreground">Usually within 24 hours</p>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-card p-8 rounded-2xl border border-border/50">
            <form className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="firstName">First Name</Label>
                  <Input 
                    id="firstName" 
                    placeholder="John"
                    className="bg-input-background border-border/50 focus:border-teal-500"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="lastName">Last Name</Label>
                  <Input 
                    id="lastName" 
                    placeholder="Doe"
                    className="bg-input-background border-border/50 focus:border-teal-500"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input 
                  id="email" 
                  type="email" 
                  placeholder="john@example.com"
                  className="bg-input-background border-border/50 focus:border-teal-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="project">Project Type</Label>
                <Input 
                  id="project" 
                  placeholder="e.g., Corporate Video, Wedding, Social Media"
                  className="bg-input-background border-border/50 focus:border-teal-500"
                />
              </div>

              <div className="space-y-2">
                <Label htmlFor="message">Project Details</Label>
                <Textarea 
                  id="message" 
                  placeholder="Tell me about your project, timeline, and vision..."
                  rows={5}
                  className="bg-input-background border-border/50 focus:border-teal-500 resize-none"
                />
              </div>

              <Button 
                type="submit" 
                className="w-full bg-teal-500 hover:bg-teal-600 text-white py-3 text-lg rounded-xl"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}