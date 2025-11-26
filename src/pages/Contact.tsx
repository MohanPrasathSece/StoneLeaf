import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { MapPin, Mail, Phone, Clock, Send, MessageSquare } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    // Create mailto link with form data
    const subject = encodeURIComponent('Consultation Booking');
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    window.location.href = `mailto:stoneleaf@studio.com?subject=${subject}&body=${body}`;

    toast({
      title: 'Opening email client...',
      description: 'Your default email application will open with your message.',
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section - Consistent with Other Pages */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up opacity-0">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Let's start a conversation about your vision. We're here to answer questions,
            discuss projects, and schedule consultations.
          </p>
        </div>
      </section>

      {/* Main Content - Split Screen Design */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          {/* Left: Contact Form - Floating Card */}
          <div className="order-2 lg:order-1">
            <div className="sticky top-32">
              <div className="bg-card/50 backdrop-blur-lg p-10 rounded-3xl shadow-2xl border border-border/50">
                <h2 className="text-3xl font-serif font-semibold mb-4 flex items-center gap- 3">
                  <Send size={28} className="text-primary" />
                  Book a Consultation
                </h2>
                <p className="text-muted-foreground mb-8">
                  Fill out the form below and we'll get back to you within 24 hours.
                </p>

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-2 text-foreground/80">
                      Your Name *
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-background/50 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all placeholder:text-muted-foreground/50"
                      placeholder="John Doe"
                    />
                  </div>

                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2 text-foreground/80">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full px-5 py-4 bg-background/50 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all placeholder:text-muted-foreground/50"
                      placeholder="john@example.com"
                    />
                  </div>

                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2 text-foreground/80">
                      Tell Us About Your Project *
                    </label>
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full px-5 py-4 bg-background/50 border-2 border-border rounded-xl focus:border-primary focus:outline-none transition-all resize-none placeholder:text-muted-foreground/50"
                      placeholder="I'm interested in..."
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full flex items-center justify-center gap-3 px-8 py-5 bg-primary text-primary-foreground rounded-xl hover:bg-primary/90 transition-all text-base font-semibold shadow-lg hover:shadow-xl hover:-translate-y-1"
                  >
                    <Send size={20} />
                    <span>Send Message</span>
                  </button>
                </form>
              </div>
            </div>
          </div>

          {/* Right: Contact Info Cards */}
          <div className="order-1 lg:order-2 space-y-6">
            <h2 className="text-3xl font-serif font-semibold mb-8">Get In Touch</h2>

            {/* Email Card */}
            <a
              href="mailto:stoneleaf@studio.com"
              className="group block bg-gradient-to-br from-card to-card/50 p-6 rounded-2xl border border-border hover:border-primary transition-all hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Mail size={24} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wide">Email</p>
                  <p className="text-lg font-medium group-hover:text-primary transition-colors">
                    stoneleaf@studio.com
                  </p>
                </div>
              </div>
            </a>

            {/* Phone Card */}
            <a
              href="tel:9025421149"
              className="group block bg-gradient-to-br from-card to-card/50 p-6 rounded-2xl border border-border hover:border-primary transition-all hover:shadow-xl"
            >
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <Phone size={24} className="text-primary group-hover:text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wide">Phone</p>
                  <p className="text-lg font-medium group-hover:text-primary transition-colors">
                    902-542-1149
                  </p>
                </div>
              </div>
            </a>

            {/* Location Card */}
            <div className="bg-gradient-to-br from-card to-card/50 p-6 rounded-2xl border border-border">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <MapPin size={24} className="text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1 uppercase tracking-wide">Location</p>
                  <p className="text-lg font-medium">
                    RS Puram, Coimbatore
                  </p>
                </div>
              </div>
            </div>

            {/* Hours Card */}
            <div className="bg-gradient-to-br from-primary/10 to-secondary/10 p-6 rounded-2xl border border-primary/20">
              <div className="flex items-start gap-4">
                <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center flex-shrink-0">
                  <Clock size={24} className="text-primary-foreground" />
                </div>
                <div>
                  <p className="text-sm text-primary font-medium mb-3 uppercase tracking-wide">Studio Hours</p>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between gap-8">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="font-medium">9:00 AM - 6:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="font-medium">10:00 AM - 4:00 PM</span>
                    </div>
                    <div className="flex justify-between gap-8">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="font-medium">By Appointment</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - Full Width with Color */}
      <section className="px-6 lg:px-12 pb-24">
        <div className="max-w-7xl mx-auto">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl h-[500px]">
            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent z-10 pointer-events-none" />
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.5892883426844!2d76.95444407507491!3d10.996256389168686!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba85bc43a0e2e0d%3A0x3e1f3b0a0f3b0a0e!2sRS%20Puram%2C%20Coimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1732596000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Location - RS Puram, Coimbatore"
            />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;
