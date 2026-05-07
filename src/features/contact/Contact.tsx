import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Calendar, Linkedin, Github, Send, MessageSquare } from 'lucide-react';
import SEO from '../../shared/components/ui/SEO';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.8, ease: [0.16, 1, 0.3, 1] }
  })
};

const Contact = () => {
  return (
    <div className="pt-24 sm:pt-32 pb-16 sm:pb-24 px-6 max-w-6xl mx-auto">
      <SEO
        title="Connect"
        description="Have a project in mind or looking for a backend engineer? Get in touch with Mohamed Saba."
      />
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
        {/* Left: Contact Info */}
        <motion.div 
          initial="hidden"
          animate="visible"
          className="lg:col-span-5 space-y-16"
        >
          <motion.div variants={fadeUp} custom={0}>
            <span className="text-paper-accent text-xs font-bold uppercase tracking-[0.3em] mb-6 block">Connect</span>
            <h1 className="text-6xl lg:text-8xl font-serif text-paper-text tracking-tightest leading-[0.9] mb-10">
              Let's work <br /> <span className="italic">together</span>.
            </h1>
            <p className="text-xl text-paper-muted leading-relaxed max-w-md font-serif">
              Have a project in mind? Looking for a backend engineer? Drop me a message — I'll get back to you within 24 hours.
            </p>
          </motion.div>

          <motion.div variants={fadeUp} custom={1} className="space-y-6">
            <a 
              href="mailto:mohamedsabawork@gmail.com"
              className="group flex items-center p-8 bg-paper-code border border-paper-border rounded-[2.5rem] hover:border-paper-accent/40 hover:shadow-2xl transition-all duration-500"
            >
              <div className="p-5 bg-paper-accent rounded-2xl text-paper-bg group-hover:scale-110 transition-transform">
                <Mail size={28} />
              </div>
              <div className="ml-8 overflow-hidden">
                <div className="text-[10px] uppercase tracking-[0.2em] text-paper-muted mb-2 font-bold">Inquiries</div>
                <div className="text-xl font-bold text-paper-text tracking-tight truncate">mohamedsabawork@gmail.com</div>
              </div>
            </a>

            <a 
              href="/resume.docx"
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-center p-8 bg-[#0C0F05] border border-paper-border rounded-[2.5rem] hover:border-paper-warm/40 hover:shadow-2xl transition-all duration-500"
            >
              <div className="p-5 bg-paper-warm rounded-2xl text-paper-bg group-hover:scale-110 transition-transform">
                <Calendar size={28} />
              </div>
              <div className="ml-8 overflow-hidden">
                <div className="text-[10px] uppercase tracking-[0.2em] text-paper-muted mb-2 font-bold">Download CV</div>
                <div className="text-xl font-bold text-paper-text tracking-tight">Mohamed Sabea Resume</div>
              </div>
            </a>
          </motion.div>

          <motion.div variants={fadeUp} custom={2} className="flex items-center space-x-6 px-4">
            <a href="https://linkedin.com/in/mohamedsabea" className="text-paper-muted hover:text-paper-accent transition-all hover:scale-110">
              <Linkedin size={24} />
            </a>
            <a href="https://github.com/mohamedsaba" className="text-paper-muted hover:text-paper-accent transition-all hover:scale-110">
              <Github size={24} />
            </a>
            <div className="h-px w-16 bg-paper-border/40" />
            <span className="text-[10px] uppercase tracking-[0.3em] text-paper-muted font-bold">Socials</span>
          </motion.div>
        </motion.div>

        {/* Right: Contact Form */}
        <motion.div 
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          custom={0.2}
          className="lg:col-span-7 bg-paper-surface border border-paper-border rounded-[3.5rem] p-10 md:p-16 shadow-2xl relative overflow-hidden"
        >
          {/* Form Header */}
          <div className="flex items-center space-x-4 mb-12">
            <div className="p-2 bg-paper-accent/10 rounded-lg">
              <MessageSquare size={20} className="text-paper-accent" />
            </div>
            <h3 className="text-2xl font-serif text-paper-text">Project Inquiry</h3>
          </div>

          <form action="https://formspree.io/f/mqkazpjr" method="POST" className="space-y-10 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-paper-muted font-bold ml-1">Full Name</label>
                <input 
                  type="text" 
                  name="name"
                  placeholder="John Doe"
                  className="w-full bg-paper-bg border border-paper-border rounded-2xl px-6 py-5 text-paper-text placeholder:text-paper-muted/20 focus:outline-none focus:border-paper-accent transition-all focus:ring-1 focus:ring-paper-accent/20"
                  required 
                />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] uppercase tracking-[0.2em] text-paper-muted font-bold ml-1">Email Address</label>
                <input 
                  type="email" 
                  name="email"
                  placeholder="john@company.com"
                  className="w-full bg-paper-bg border border-paper-border rounded-2xl px-6 py-5 text-paper-text placeholder:text-paper-muted/20 focus:outline-none focus:border-paper-accent transition-all focus:ring-1 focus:ring-paper-accent/20"
                  required 
                />
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] text-paper-muted font-bold ml-1">Subject</label>
              <div className="relative">
                <select 
                  name="subject"
                  className="w-full bg-paper-bg border border-paper-border rounded-2xl px-6 py-5 text-paper-text focus:outline-none focus:border-paper-accent transition-all appearance-none focus:ring-1 focus:ring-paper-accent/20"
                >
                  <option>API / Backend Development</option>
                  <option>Consulting / Code Review</option>
                  <option>Full-time Opportunity</option>
                  <option>General / Other</option>
                </select>
                <div className="absolute right-6 top-1/2 -translate-y-1/2 pointer-events-none text-paper-muted/40">
                  <svg width="12" height="8" viewBox="0 0 12 8" fill="none"><path d="M1 1L6 6L11 1" stroke="currentColor" strokeWidth="2" /></svg>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <label className="text-[10px] uppercase tracking-[0.2em] text-paper-muted font-bold ml-1">Your Message</label>
              <textarea 
                name="message"
                rows={6}
                placeholder="Tell me about your project — what you're building, where you're stuck, and how I can help."
                className="w-full bg-paper-bg border border-paper-border rounded-2xl px-6 py-5 text-paper-text placeholder:text-paper-muted/20 focus:outline-none focus:border-paper-accent transition-all resize-none focus:ring-1 focus:ring-paper-accent/20"
                required
              />
            </div>

            <button 
              type="submit"
              className="w-full bg-paper-accent text-paper-bg py-6 rounded-2xl font-bold tracking-tight shadow-xl shadow-paper-accent/10 hover:shadow-paper-accent/30 transition-all duration-500 flex items-center justify-center space-x-3 group"
            >
              <Send size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
              <span>Send Inquiry</span>
            </button>
          </form>

          {/* Decorative visuals */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-paper-accent/5 rounded-full blur-[100px] pointer-events-none -mr-40 -mt-40" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-paper-warm/5 rounded-full blur-[100px] pointer-events-none -ml-40 -mb-40" />
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
