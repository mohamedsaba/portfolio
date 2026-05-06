import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import SignatureLogo from '../ui/SignatureLogo';

const navLinks = [
  { to: '/', label: 'Projects' },
  { to: '/about', label: 'About' },
  { to: '/blog', label: 'Articles' },
  { to: '/contact', label: 'Connect' },
];

const Header = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  return (
    <header
      className={`
        fixed top-0 left-0 right-0 z-50
        transition-all duration-500 ease-out
        ${scrolled
          ? 'bg-paper-bg/80 backdrop-blur-xl border-b border-paper-border/40 shadow-sm'
          : 'bg-transparent border-b border-transparent'
        }
      `}
    >
      <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link to="/" className="hover:opacity-80 transition-opacity duration-300">
          <SignatureLogo />
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-1">
          {navLinks.map(link => (
            <Link
              key={link.to}
              to={link.to}
              className={`
                relative px-4 py-2 rounded-lg text-sm font-medium tracking-tight
                transition-all duration-300
                ${location.pathname === link.to
                  ? 'text-paper-accent bg-paper-accent/10'
                  : 'text-paper-muted hover:text-paper-text hover:bg-paper-code'
                }
              `}
            >
              {link.label}
              {location.pathname === link.to && (
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-1 h-1 rounded-full bg-paper-accent" />
              )}
            </Link>
          ))}
        </nav>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-paper-code transition-colors text-paper-text"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-paper-bg/95 backdrop-blur-xl border-b border-paper-border px-6 pb-10 pt-4 mobile-nav-animate">
          <nav className="flex flex-col space-y-2">
            {navLinks.map((link, i) => (
              <Link
                key={link.to}
                to={link.to}
                className={`
                  px-6 py-4 rounded-2xl text-base font-medium tracking-tight transition-all duration-300
                  ${location.pathname === link.to
                    ? 'text-paper-accent bg-paper-accent/10 border border-paper-accent/20'
                    : 'text-paper-muted hover:text-paper-text hover:bg-paper-code border border-transparent'
                  }
                `}
                style={{ animationDelay: `${i * 0.05}s` }}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      )}

    </header>
  );
};

export default Header;
