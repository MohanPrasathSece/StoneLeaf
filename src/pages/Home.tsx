import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import heroImage from '@/assets/hero-interior.jpg';
import project1 from '@/assets/modern serenity/project-1.jpg';
import project2 from '@/assets/industrial_kitchen/project-2.jpg';
import project3 from '@/assets/project-3.jpg';
import project4 from '@/assets/project-4.jpg';

const Home = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const testimonials = [
    {
      name: 'Priya Sharma',
      role: 'Residential Client',
      initial: 'P',
      text: 'Stoneleaf transformed our home into a sanctuary. Their attention to detail and understanding of our lifestyle created spaces that truly feel like us.',
    },
    {
      name: 'Arjun Patel',
      role: 'Commercial Project',
      initial: 'A',
      text: 'The team\'s architectural precision and creative vision exceeded our expectations. Our office now inspires productivity and creativity.',
    },
    {
      name: 'Ananya Reddy',
      role: 'Renovation Project',
      initial: 'A',
      text: 'From concept to completion, the process was seamless. They listened, understood, and delivered a design that enhances our daily living.',
    },
    {
      name: 'Rohan Desai',
      role: 'Villa Design',
      initial: 'R',
      text: 'Working with Stoneleaf was an absolute pleasure. They brought our vision to life with impeccable craftsmanship and creative solutions.',
    },
    {
      name: 'Kavya Iyer',
      role: 'Interior Redesign',
      initial: 'K',
      text: 'The transformation of our space exceeded all expectations. Every detail was carefully considered, resulting in a home we absolutely love.',
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src={heroImage}
            alt="Interior Design"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
        </div>

        <div className="relative z-10 text-center px-6 max-w-4xl mx-auto animate-fade-in-up opacity-0">
          <h1 className="text-5xl md:text-7xl font-serif font-bold text-white mb-6 leading-tight">
            Timeless Design,<br />Architectural Precision
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            Creating sophisticated interiors that inspire and endure
          </p>
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 px-8 py-4 bg-white text-foreground hover:bg-white/90 transition-all text-sm tracking-wide"
          >
            Explore Our Work
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 lg:px-12 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-8">
            Our Philosophy
          </h2>
          <p className="text-lg text-muted-foreground leading-relaxed">
            We believe that exceptional spaces emerge from the thoughtful intersection of architecture
            and interior design. Every project begins with understanding your vision, lifestyle, and
            aspirations. Through meticulous planning and creative exploration, we craft environments that
            balance beauty with function, permanence with flexibility, and sophistication with warmth.
          </p>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">Featured Projects</h2>
          <p className="text-lg text-muted-foreground max-w-2xl">
            A curated selection of our recent work, showcasing diverse approaches to
            residential and commercial spaces.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            { image: project1, title: 'Modern Minimalist Residence', category: 'Residential' },
            { image: project2, title: 'Industrial Loft Conversion', category: 'Residential' },
            { image: project3, title: 'Contemporary Office Space', category: 'Commercial' },
            { image: project4, title: 'Coastal Villa Retreat', category: 'Residential' },
          ].map((project, index) => (
            <Link
              key={project.title}
              to="/projects"
              className={`group relative aspect-[4/3] overflow-hidden hover-lift opacity-0 animate-fade-in-up animate-delay-${index * 100}`}
            >
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex flex-col justify-end p-8">
                <p className="text-xs text-white/80 tracking-widest uppercase mb-2">
                  {project.category}
                </p>
                <h3 className="text-2xl font-serif font-semibold text-white">
                  {project.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>

        {/* Brand Logos Infinite Scroll */}
        <div className="mt-20 overflow-hidden bg-white py-12 rounded-2xl">
          <div className="relative">
            <div className="flex animate-scroll-fast">
              {/* First set of logos */}
              <div className="flex items-center gap-20 px-12 shrink-0">
                <img src="https://logo.clearbit.com/shopify.com" alt="Shopify" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/stripe.com" alt="Stripe" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/slack.com" alt="Slack" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/figma.com" alt="Figma" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/notion.so" alt="Notion" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/asana.com" alt="Asana" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/trello.com" alt="Trello" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/mailchimp.com" alt="Mailchimp" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/zendesk.com" alt="Zendesk" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/hubspot.com" alt="HubSpot" className="h-16 object-contain grayscale" />
              </div>
              {/* Duplicate set for seamless loop */}
              <div className="flex items-center gap-20 px-12 shrink-0">
                <img src="https://logo.clearbit.com/shopify.com" alt="Shopify" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/stripe.com" alt="Stripe" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/slack.com" alt="Slack" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/figma.com" alt="Figma" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/notion.so" alt="Notion" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/asana.com" alt="Asana" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/trello.com" alt="Trello" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/mailchimp.com" alt="Mailchimp" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/zendesk.com" alt="Zendesk" className="h-16 object-contain grayscale" />
                <img src="https://logo.clearbit.com/hubspot.com" alt="HubSpot" className="h-16 object-contain grayscale" />
              </div>
            </div>
          </div>
        </div>

        {/* Testimonials Section - Card Design with Clickable Carousel */}
        <div className="mt-32">
          <div className="max-w-4xl mx-auto">
            {/* Testimonial Card */}
            <div className="relative">
              <div className="bg-white rounded-3xl shadow-2xl p-12 md:p-16 text-center">
                {/* Quote Icon */}
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-8">
                  <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M6 17h3l2-4V7H5v6h3zm8 0h3l2-4V7h-6v6h3z" />
                  </svg>
                </div>

                {/* Testimonial Text */}
                <p className="text-lg md:text-xl leading-relaxed text-foreground/80 mb-10 font-light">
                  "{testimonials[activeTestimonial].text}"
                </p>

                {/* Author Info */}
                <div className="flex items-center justify-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-serif font-semibold text-lg">
                    {testimonials[activeTestimonial].initial}
                  </div>
                  <div className="text-left">
                    <p className="font-semibold text-foreground">{testimonials[activeTestimonial].name}</p>
                    <p className="text-sm text-muted-foreground">{testimonials[activeTestimonial].role}</p>
                  </div>
                </div>

                {/* Clickable Carousel Dots */}
                <div className="flex items-center justify-center gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveTestimonial(index)}
                      className={`h-2 rounded-full transition-all cursor-pointer hover:opacity-80 ${index === activeTestimonial
                          ? 'w-8 bg-primary'
                          : 'w-2 bg-muted-foreground/30'
                        }`}
                      aria-label={`View testimonial ${index + 1}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-16">
          <Link
            to="/projects"
            className="inline-flex items-center gap-2 hover:gap-3 transition-all text-sm tracking-wide hover:text-foreground/70"
          >
            See All Projects
            <ArrowRight size={16} />
          </Link>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-32 px-6 lg:px-12 bg-card text-center">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Start Your Project
          </h2>
          <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
            Let's collaborate to create a space that reflects your vision and enhances your life.
            Book a consultation to begin the journey.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-10 py-5 bg-primary text-primary-foreground hover:bg-primary/90 transition-all text-sm tracking-wide"
          >
            Book a Consultation
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
