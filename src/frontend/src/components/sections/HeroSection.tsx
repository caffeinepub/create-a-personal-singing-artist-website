import { ArrowRight } from 'lucide-react';
import { artistContent } from '@/content/artistContent';

export function HeroSection() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/assets/generated/singing-hero-bg.dim_1920x1080.png"
          alt="Hero background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <h1 className="font-serif text-5xl md:text-7xl lg:text-8xl font-bold mb-6 text-foreground">
          {artistContent.name}
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-foreground/80 mb-8 font-light tracking-wide">
          {artistContent.tagline}
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-12">
          <button
            onClick={() => scrollToSection('shows')}
            className="group px-8 py-4 bg-brand-gold text-background font-semibold rounded-full hover:bg-brand-gold/90 transition-all shadow-lg hover:shadow-xl flex items-center gap-2"
          >
            View Upcoming Shows
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => scrollToSection('contact')}
            className="px-8 py-4 bg-transparent border-2 border-brand-gold text-brand-gold font-semibold rounded-full hover:bg-brand-gold/10 transition-all"
          >
            Get in Touch
          </button>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce">
        <div className="w-6 h-10 border-2 border-brand-gold/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-brand-gold/50 rounded-full" />
        </div>
      </div>
    </section>
  );
}
