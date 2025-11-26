import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { NavLink } from './NavLink';
import { Menu, X } from 'lucide-react';

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
                  className={`text-sm font-sans tracking-wide transition-all hover:text-foreground/70 relative pb-1 ${isActive ? 'font-semibold after:absolute after:bottom-0 after:left-0 after:right-0 after:h-0.5 after:bg-primary after:rounded-full' : ''
                    }`}
                >
                  {link.label}
                </NavLink>
              );
            })}
            <a
              href="mailto:stoneleaf@studio.com?subject=Consultation%20Booking"
              className="px-6 py-2.5 bg-foreground text-background text-sm tracking-wide transition-all hover:bg-foreground/90"
            >
              Book Consultation
            </a>
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

        {/* Mobile Navigation - Elegant Overlay */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/20 backdrop-blur-sm md:hidden animate-fade-in-fast"
              onClick={() => setIsOpen(false)}
            />

            {/* Menu Container */}
            <div className="fixed inset-x-0 top-20 md:hidden animate-slide-down z-50 px-4">
              <div className="bg-background rounded-3xl shadow-2xl overflow-hidden max-w-md mx-auto">
                {/* Decorative Header Line */}
                <div className="h-1 w-24 bg-foreground/20 mx-auto mt-6 rounded-full" />

                {/* Menu Items */}
                <div className="p-6 space-y-2">
                  {navLinks.map((link) => {
                    const isActive = location.pathname === link.to;
                    return (
                      <NavLink
                        key={link.to}
                        to={link.to}
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center justify-between px-5 py-4 rounded-2xl text-base font-sans tracking-wide transition-all ${isActive
                          ? 'bg-foreground/5 text-foreground font-medium'
                          : 'text-foreground/70 hover:bg-foreground/5 hover:text-foreground'
                          }`}
                      >
                        <span>{link.label}</span>
                        <svg
                          className="w-5 h-5 text-foreground/30"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </NavLink>
                    );
                  })}
                </div>

                {/* Bottom spacing */}
                <div className="pb-6" />
              </div>
            </div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
