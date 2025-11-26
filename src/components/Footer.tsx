import { Mail, Phone, MapPin, ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="relative bg-gradient-to-br from-card via-background to-card border-t border-border overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-secondary/10 rounded-full blur-3xl" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-12 py-20">
        {/* Main Content - Asymmetric Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">

          {/* Left: Brand Statement - Larger Section */}
          <div className="lg:col-span-5">
            <div className="relative">
              {/* Decorative Line */}
              <div className="absolute -left-4 top-0 w-1 h-24 bg-gradient-to-b from-primary to-transparent rounded-full" />

              <h3 className="text-4xl md:text-5xl font-serif font-bold mb-6 leading-tight">
                Stoneleaf<br />Studios
              </h3>
              <p className="text-muted-foreground text-base leading-relaxed mb-8 max-w-md">
                Creating timeless interiors with architectural precision. Where modern design meets natural elegance, transforming spaces into sophisticated sanctuaries.
              </p>

              {/* CTA Button */}
              <Link
                to="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-primary text-primary-foreground rounded-full hover:bg-primary/90 transition-all"
              >
                <span className="font-medium text-sm">Start Your Project</span>
              </Link>
            </div>
          </div>

          {/* Right: Contact & Links - Grid Layout */}
          <div className="lg:col-span-7 grid grid-cols-1 md:grid-cols-2 gap-12">

            {/* Contact Information */}
            <div>
              <h4 className="font-sans font-semibold mb-6 text-sm tracking-wider uppercase text-foreground/80">
                Get in Touch
              </h4>
              <div className="space-y-4">
                <a
                  href="mailto:stoneleaf@studio.com"
                  className="group flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Mail size={18} className="mt-0.5 text-primary" />
                  <span className="group-hover:underline">stoneleaf@studio.com</span>
                </a>
                <a
                  href="tel:9025421149"
                  className="group flex items-start gap-3 text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  <Phone size={18} className="mt-0.5 text-primary" />
                  <span className="group-hover:underline">902-542-1149</span>
                </a>
                <div className="flex items-start gap-3 text-sm text-muted-foreground">
                  <MapPin size={18} className="mt-0.5 text-primary shrink-0" />
                  <span>
                    RS Puram<br />
                    Coimbatore
                  </span>
                </div>
              </div>
            </div>

            {/* Studio Hours & Quick Links */}
            <div>
              <h4 className="font-sans font-semibold mb-6 text-sm tracking-wider uppercase text-foreground/80">
                Studio Hours
              </h4>
              <div className="space-y-2 text-sm text-muted-foreground mb-8">
                <p className="flex justify-between">
                  <span>Mon - Fri</span>
                  <span className="font-medium">9:00 - 18:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Saturday</span>
                  <span className="font-medium">10:00 - 16:00</span>
                </p>
                <p className="flex justify-between">
                  <span>Sunday</span>
                  <span className="font-medium">By Appointment</span>
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="text-center md:text-left">
              <p className="text-xs text-muted-foreground">
                © {currentYear} Stoneleaf Studios. Crafted with precision.
              </p>
              <p className="text-xs text-muted-foreground mt-1">
                Designed & Developed by{' '}
                <a
                  href="https://www.zyradigitals.info/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-primary hover:underline font-medium"
                >
                  Zyra Digitals
                </a>
              </p>
            </div>
            <div className="flex items-center gap-6 text-xs text-muted-foreground">
              <Link to="/about" className="hover:text-foreground transition-colors">About</Link>
              <Link to="/services" className="hover:text-foreground transition-colors">Services</Link>
              <Link to="/projects" className="hover:text-foreground transition-colors">Portfolio</Link>
              <Link to="/contact" className="hover:text-foreground transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
