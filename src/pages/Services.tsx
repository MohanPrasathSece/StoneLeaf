import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import { Home, Building2, Wrench, Box, Palette, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import serviceInterior from '@/assets/service-interior-design.jpg';
import serviceArchitecture from '@/assets/service-architecture.jpg';
import serviceRenovation from '@/assets/service-renovation.jpg';
import service3D from '@/assets/service-3d-visualization.jpg';
import serviceMaterial from '@/assets/service-material-curation.jpg';

const Services = () => {
  const services = [
    {
      icon: Home,
      title: 'Interior Design',
      description:
        'Complete interior design services from concept to completion. We create cohesive, functional spaces that reflect your aesthetic vision while maximizing comfort and usability.',
      features: ['Space Planning', 'Material Selection', 'Custom Furniture Design', 'Lighting Design'],
      image: serviceInterior,
    },
    {
      icon: Building2,
      title: 'Architecture & Space Planning',
      description:
        'Comprehensive architectural services including new construction, additions, and structural modifications. Our designs harmonize form and function with environmental context.',
      features: [
        'Architectural Design',
        'Site Analysis',
        'Building Permits',
        'Construction Documentation',
      ],
      image: serviceArchitecture,
    },
    {
      icon: Wrench,
      title: 'Renovation & Remodeling',
      description:
        'Transform existing spaces with thoughtful renovations. From kitchens and bathrooms to full home remodels, we breathe new life into every project while respecting original architecture.',
      features: [
        'Kitchen Remodeling',
        'Bathroom Renovations',
        'Historic Preservation',
        'Structural Updates',
      ],
      image: serviceRenovation,
    },
    {
      icon: Box,
      title: '3D Visualization',
      description:
        'Photorealistic renderings and virtual walkthroughs bring your project to life before construction begins. Experience and refine every detail in stunning 3D clarity.',
      features: [
        'Photorealistic Renderings',
        'Virtual Walkthroughs',
        'Material Visualization',
        'Design Iterations',
      ],
      image: service3D,
    },
    {
      icon: Palette,
      title: 'Material & Furniture Curation',
      description:
        'Expert sourcing and selection of premium materials, finishes, and furnishings. We curate every element to ensure cohesion, quality, and timeless appeal.',
      features: [
        'Custom Furniture Sourcing',
        'Material Library Access',
        'Artisan Partnerships',
        'Sustainable Options',
      ],
      image: serviceMaterial,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up opacity-0">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">Our Services</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Comprehensive design and architectural services tailored to bring your vision to life
            with precision and sophistication.
          </p>
        </div>
      </section>

      {/* Services Grid - Each with Unique Design */}
      <section className="pb-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="space-y-24">
          {/* Service 1: Interior Design - Gradient Overlay */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center opacity-0 animate-fade-in-up">
            <div className="space-y-6">
              <div className="w-16 h-16 flex items-center justify-center bg-gradient-to-br from-primary to-secondary text-foreground group hover:scale-110 transition-all duration-300">
                <Home size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-4">{services[0].title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {services[0].description}
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="relative aspect-[4/3] overflow-hidden image-zoom-container hover-lift group">
                <img
                  src={services[0].image}
                  alt={services[0].title}
                  className="w-full h-full object-cover image-zoom"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="bg-card p-8 card-hover">
                <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-6">
                  Key Services
                </h3>
                <ul className="space-y-4">
                  {services[0].features.map((feature) => (
                    <li key={feature} className="flex items-start gap-3 group">
                      <ArrowRight size={18} className="mt-1 flex-shrink-0 transition-transform group-hover:translate-x-1" />
                      <span className="text-base">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Service 2: Architecture - Diagonal Split */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center opacity-0 animate-fade-in-up animate-delay-100">
            <div className="space-y-6 lg:order-2">
              <div className="w-16 h-16 flex items-center justify-center border-2 border-foreground bg-background hover:bg-foreground group transition-all duration-300 hover:rotate-45">
                <Building2 size={32} strokeWidth={1.5} className="group-hover:text-background group-hover:rotate-[-45deg] transition-all" />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-4">{services[1].title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {services[1].description}
                </p>
              </div>
            </div>
            <div className="space-y-6 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden hover-lift">
                <div className="absolute inset-0 bg-gradient-to-br from-accent/30 to-transparent z-10 pointer-events-none" />
                <img
                  src={services[1].image}
                  alt={services[1].title}
                  className="w-full h-full object-cover transition-transform duration-700 hover:scale-110"
                />
              </div>
              <div className="border-l-4 border-foreground pl-6 py-4 hover:border-primary transition-colors duration-300">
                <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
                  Key Services
                </h3>
                <ul className="space-y-3">
                  {services[1].features.map((feature) => (
                    <li key={feature} className="text-base text-foreground hover:text-primary transition-colors">
                      • {feature}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Service 3: Renovation - Before/After Style */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center opacity-0 animate-fade-in-up animate-delay-200">
            <div className="space-y-6">
              <div className="w-16 h-16 flex items-center justify-center rounded-full bg-foreground text-background hover:shadow-2xl transition-shadow duration-300">
                <Wrench size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-4">{services[2].title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {services[2].description}
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="aspect-square overflow-hidden hover-scale">
                  <img
                    src={services[2].image}
                    alt={services[2].title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-square overflow-hidden hover-scale">
                  <img
                    src={services[2].image}
                    alt={`${services[2].title} detail`}
                    className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity"
                  />
                </div>
              </div>
              <div className="bg-gradient-to-r from-card to-background p-8 shadow-lg">
                <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-6">
                  Key Services
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  {services[2].features.map((feature) => (
                    <div key={feature} className="flex items-center gap-2 group">
                      <div className="w-2 h-2 bg-foreground group-hover:bg-primary transition-colors" />
                      <span className="text-sm">{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Service 4: 3D Visualization - Glassmorphism */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center opacity-0 animate-fade-in-up animate-delay-300">
            <div className="space-y-6 lg:order-2">
              <div className="w-16 h-16 flex items-center justify-center backdrop-blur-lg bg-foreground/10 border border-foreground/20 hover:bg-foreground/20 transition-all duration-300">
                <Box size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-4">{services[3].title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {services[3].description}
                </p>
              </div>
            </div>
            <div className="space-y-6 lg:order-1">
              <div className="relative aspect-[4/3] overflow-hidden rounded-lg">
                <img
                  src={services[3].image}
                  alt={services[3].title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-8 backdrop-blur-md bg-background/30">
                  <h3 className="text-sm tracking-widest uppercase text-foreground mb-4">
                    Key Services
                  </h3>
                  <ul className="grid grid-cols-2 gap-2">
                    {services[3].features.map((feature) => (
                      <li key={feature} className="text-sm text-foreground/90">
                        ✓ {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Service 5: Material Curation - Gallery Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center opacity-0 animate-fade-in-up animate-delay-400">
            <div className="space-y-6">
              <div className="w-16 h-16 flex items-center justify-center border-4 border-double border-foreground hover:border-primary transition-colors duration-300">
                <Palette size={32} strokeWidth={1.5} />
              </div>
              <div>
                <h2 className="text-3xl font-serif font-semibold mb-4">{services[4].title}</h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {services[4].description}
                </p>
              </div>
            </div>
            <div className="space-y-6">
              <div className="grid grid-cols-3 gap-2">
                {[1, 2, 3, 4, 5, 6].map((i) => (
                  <div key={i} className="aspect-square overflow-hidden hover-lift">
                    <img
                      src={services[4].image}
                      alt={`Material ${i}`}
                      className="w-full h-full object-cover opacity-90 hover:opacity-100 transition-opacity"
                      style={{ filter: `hue-rotate(${i * 20}deg)` }}
                    />
                  </div>
                ))}
              </div>
              <div className="bg-card p-6 border-2 border-border">
                <h3 className="text-sm tracking-widest uppercase text-muted-foreground mb-4">
                  Key Services
                </h3>
                <ul className="space-y-2">
                  {services[4].features.map((feature, idx) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <span className="text-xs font-bold text-muted-foreground">0{idx + 1}</span>
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 px-6 lg:px-12 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-16">
            Our Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: '01',
                title: 'Consultation',
                description: 'Initial meeting to understand your vision, needs, and project scope.',
              },
              {
                step: '02',
                title: 'Concept Development',
                description: 'Creating design concepts, mood boards, and preliminary plans.',
              },
              {
                step: '03',
                title: 'Design Refinement',
                description: 'Detailed drawings, material selection, and 3D visualizations.',
              },
              {
                step: '04',
                title: 'Implementation',
                description: 'Project management, coordination, and final installation.',
              },
            ].map((phase, index) => (
              <div
                key={phase.step}
                className={`text-center opacity-0 animate-fade-in-up animate-delay-${index * 100} hover-lift`}
              >
                <div className="text-4xl font-serif font-bold text-muted-foreground/30 mb-4">
                  {phase.step}
                </div>
                <h3 className="text-xl font-serif font-medium mb-3">{phase.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{phase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-6">
            Let's Discuss Your Project
          </h2>
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
            Every great project begins with a conversation. Book a consultation to explore
            how we can bring your vision to life.
          </p>
          <Link
            to="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background text-sm tracking-wide btn-hover"
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

export default Services;