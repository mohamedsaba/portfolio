import { Github, Linkedin, Mail, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import avatar from '../../../assets/images/avatar.jpg';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-paper-surface border-t border-paper-border">
      {/* Top accent line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-paper-accent/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8">
          {/* Brand */}
          <div className="md:col-span-1">
            <div className="flex items-center space-x-4 mb-4">
              <div className="w-10 h-10 rounded-xl overflow-hidden border border-paper-accent/20">
                <img src={avatar} alt="Mohamed Saba" className="w-full h-full object-cover" />
              </div>
              <div className="font-serif text-2xl text-paper-text" style={{ letterSpacing: '-0.04em' }}>
                Mohamed <span className="text-paper-accent italic">Saba</span>
              </div>
            </div>
            <p className="text-sm text-paper-muted leading-relaxed max-w-xs">
              Building resilient distributed systems and open-source infrastructure for the Node.js ecosystem.
            </p>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-paper-muted mb-4">Navigate</h4>
            <nav className="flex flex-col space-y-2.5">
              {[
                { href: '/', label: 'Projects' },
                { href: '/about', label: 'About' },
                { href: '/blog', label: 'Articles' },
                { href: '/contact', label: 'Connect' },
              ].map(link => (
                <Link
                  key={link.href}
                  to={link.href}
                  className="text-sm text-paper-text/60 hover:text-paper-accent transition-colors duration-200 w-fit"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Social */}
          <div className="md:col-span-1">
            <h4 className="text-xs font-bold uppercase tracking-[0.2em] text-paper-muted mb-4">Connect</h4>
            <div className="flex flex-col space-y-2.5">
              <a
                href="https://github.com/mohamedsaba"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-sm text-paper-text/60 hover:text-paper-accent transition-colors duration-200"
              >
                <Github size={16} />
                <span>GitHub</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="https://linkedin.com/in/mohamedsabea"
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center space-x-2 text-sm text-paper-text/60 hover:text-paper-accent transition-colors duration-200"
              >
                <Linkedin size={16} />
                <span>LinkedIn</span>
                <ArrowUpRight size={12} className="opacity-0 group-hover:opacity-100 transition-opacity" />
              </a>
              <a
                href="mailto:mohamedsabawork@gmail.com"
                className="group flex items-center space-x-2 text-sm text-paper-text/60 hover:text-paper-accent transition-colors duration-200"
              >
                <Mail size={16} />
                <span>mohamedsabawork@gmail.com</span>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="mt-16 pt-8 border-t border-paper-border/50 flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <span className="text-xs text-paper-muted/60">
            © {currentYear} Mohamed Saba. Crafted with intention.
          </span>
          <span className="text-xs text-paper-muted/40 font-mono">
            Built with React · Vite · Tailwind
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
