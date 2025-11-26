import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { NavLink } from './NavLink';

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/services', label: 'Services' },
    { to: '/projects', label: 'Projects' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <NavLink to="/" className="text-2xl font-serif font-semibold tracking-tight">
            Stoneleaf Studios
          </NavLink>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.to;
              return (
                <NavLink
                  key={link.to}
                  to={link.to}
                  className={`text-sm tracking-wide transition-colors relative ${isActive
                    ? 'text-foreground after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary'
                    : 'text-foreground/70 hover:text-foreground'
                    }`}
                >
                  {link.label}
                </NavLink>
              );
            })}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay - Styled Like Reference Image */}
      {isOpen && (
        <div className="fixed inset-0 z-40 md:hidden">
          {/* Backdrop */}
          <div className="fixed inset-0 bg-black/50" onClick={() => setIsOpen(false)} />

          {/* Menu Panel with Transparency */}
          <div className="fixed inset-x-4 top-24 bottom-auto bg-background/95 backdrop-blur-xl rounded-3xl shadow-2xl animate-fade-in-fast max-w-md mx-auto border border-border/20">
            {/* Colored Handle Bar */}
            <div className="w-16 h-1 bg-primary rounded-full mx-auto mt-4" />

            {/* Menu Items */}
            <nav className="p-4 pt-6 pb-6">
              {navLinks.map((link) => {
                const isActive = location.pathname === link.to;
                return (
                  <NavLink
                    key={link.to}
                    to={link.to}
                    className={`flex items-center justify-between py-4 px-5 rounded-xl mb-2 transition-all ${isActive
                      ? 'bg-primary/10 text-primary font-medium'
                      : 'text-foreground/70 hover:bg-muted'
                      }`}
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{link.label}</span>
                    <svg
                      className={`w-4 h-4 ${isActive ? 'text-primary' : 'text-muted-foreground'}`}
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </NavLink>
                );
              })}
            </nav>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navigation;
