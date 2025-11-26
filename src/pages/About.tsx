import Navigation from '@/components/Navigation';
import Footer from '@/components/Footer';
import studioImage from '@/assets/studio-office.jpg';
import { Award, Users, Layers } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Layers,
      title: 'Timeless Design',
      description: 'We create spaces that transcend trends, focusing on enduring beauty and functional elegance.',
    },
    {
      icon: Users,
      title: 'Collaborative Process',
      description: 'Your vision guides our expertise. Every project is a partnership built on trust and communication.',
    },
    {
      icon: Award,
      title: 'Architectural Precision',
      description: 'Meticulous attention to detail ensures every element serves both form and function perfectly.',
    },
  ];

  const awards = [
    { year: '2024', title: 'Best Interior Design Studio', organization: 'Design Excellence Awards' },
    { year: '2023', title: 'Residential Design of the Year', organization: 'Architecture Digest' },
    { year: '2022', title: 'Innovation in Spatial Planning', organization: 'Interior Design Association' },
    { year: '2021', title: 'Sustainability in Design', organization: 'Green Building Council' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
        <div className="text-center mb-16 animate-fade-in-up opacity-0">
          <h1 className="text-5xl md:text-6xl font-serif font-bold mb-6">
            About Stoneleaf Studios
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            A design studio dedicated to crafting sophisticated interiors and
            architectural spaces that inspire and endure.
          </p>
        </div>
      </section>

      {/* Studio Image */}
      <section className="px-6 lg:px-12 max-w-7xl mx-auto mb-24">
        <div className="aspect-[16/9] overflow-hidden animate-scale-in opacity-0 animate-delay-200">
          <img
            src={studioImage}
            alt="Stoneleaf Studios Office"
            className="w-full h-full object-cover"
          />
        </div>
      </section>

      {/* Philosophy */}
      <section className="py-24 px-6 lg:px-12 bg-card">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold mb-8">
            Our Philosophy
          </h2>
          <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
            <p>
              Founded on the principle that exceptional design requires both artistic vision
              and technical mastery, Stoneleaf Studios has been transforming spaces for over
              a decade. We believe that architecture and interior design are inseparable—each
              informing and elevating the other.
            </p>
            <p>
              Our approach is rooted in minimalism, not as an aesthetic choice, but as a
              philosophy: every element must earn its place through purpose and beauty.
              We seek balance between structure and warmth, between permanence and flexibility.
            </p>
            <p>
              Working with natural materials, sophisticated color palettes, and thoughtful
              spatial planning, we create environments that enhance daily life while
              maintaining timeless appeal.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-16">
          Core Values
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {values.map((value, index) => (
            <div
              key={value.title}
              className={`group text-center opacity-0 animate-fade-in-up animate-delay-${index * 100} transition-all hover:-translate-y-2`}
            >
              <div className="w-16 h-16 mx-auto mb-6 flex items-center justify-center border-2 border-foreground group-hover:border-primary group-hover:scale-110 transition-all">
                <value.icon size={28} strokeWidth={1.5} className="group-hover:text-primary transition-colors" />
              </div>
              <h3 className="text-xl font-serif font-medium mb-4 group-hover:text-primary transition-colors">{value.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{value.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="py-24 px-6 lg:px-12 bg-card">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-8">
            Our Team
          </h2>
          <p className="text-center text-muted-foreground text-lg mb-16 max-w-2xl mx-auto">
            A collective of architects, interior designers, and craftspeople united by
            a passion for creating exceptional spaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: 'Priya Sharma',
                role: 'Principal Architect',
                bio: 'With over 15 years of experience, Priya leads our architectural vision with precision and creativity.',
              },
              {
                name: 'Arjun Menon',
                role: 'Lead Interior Designer',
                bio: 'Arjun brings a refined aesthetic sensibility and expertise in material curation to every project.',
              },
              {
                name: 'Kavya Iyer',
                role: 'Senior Designer',
                bio: 'Kavya specializes in spatial planning and 3D visualization, bringing concepts to life with clarity.',
              },
            ].map((member, index) => (
              <div
                key={member.name}
                className={`group bg-background p-8 opacity-0 animate-fade-in-up animate-delay-${index * 100} transition-all hover:shadow-xl hover:-translate-y-2 hover:bg-background/80`}
              >
                <h3 className="text-xl font-serif font-medium mb-2 group-hover:text-primary transition-colors">{member.name}</h3>
                <p className="text-sm text-muted-foreground tracking-wide uppercase mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Awards & Recognition - Zigzag Timeline */}
      <section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto relative">
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-center mb-20">
          Awards & Recognition
        </h2>

        {/* Vertical Timeline Line */}
        <div className="absolute left-1/2 top-48 bottom-0 w-1 bg-gradient-to-b from-primary via-secondary to-transparent hidden lg:block transform -translate-x-1/2" />

        <div className="space-y-16">
          {awards.map((award, index) => {
            const isLeft = index % 2 === 0;
            return (
              <div
                key={award.title}
                className={`flex flex-col lg:flex-row items-center gap-8 ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  } opacity-0 animate-fade-in-up animate-delay-${index * 100}`}
              >
                {/* Content Card */}
                <div className={`flex-1 ${isLeft ? 'lg:text-right' : 'lg:text-left'}`}>
                  <div
                    className={`inline-block bg-card p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 ${index === 0 ? 'border-2 border-primary' : ''
                      } ${index === 1 ? 'rounded-tl-none' : ''} ${index === 2 ? 'rounded-br-none' : ''
                      } ${index === 3 ? 'rounded-bl-none rounded-tr-3xl' : ''}`}
                  >
                    <h3 className="text-2xl font-serif font-semibold mb-2 text-foreground">
                      {award.title}
                    </h3>
                    <p className="text-sm text-primary font-medium mb-2 tracking-wide">
                      {award.organization}
                    </p>
                    {index === 0 && (
                      <span className="inline-block px-3 py-1 bg-primary text-primary-foreground text-xs rounded-full mt-2">
                        Latest
                      </span>
                    )}
                  </div>
                </div>

                {/* Year Badge - Center */}
                <div className="relative flex-shrink-0">
                  <div
                    className={`w-24 h-24 rounded-full flex items-center justify-center font-serif font-bold text-2xl shadow-xl ${index === 0
                      ? 'bg-primary text-primary-foreground'
                      : index === 1
                        ? 'bg-secondary text-secondary-foreground border-4 border-primary'
                        : index === 2
                          ? 'bg-gradient-to-br from-primary to-secondary text-primary-foreground'
                          : 'bg-card border-4 border-primary text-primary'
                      }`}
                  >
                    {award.year}
                  </div>
                  {/* Decorative dots */}
                  <div className={`absolute -top-2 -right-2 w-4 h-4 rounded-full bg-primary ${index % 2 === 0 ? 'animate-pulse' : ''}`} />
                </div>

                {/* Spacer for alignment */}
                <div className="flex-1 hidden lg:block" />
              </div>
            );
          })}
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default About;
