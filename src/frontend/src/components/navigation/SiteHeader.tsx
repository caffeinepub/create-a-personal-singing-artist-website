import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { SiInstagram, SiFacebook, SiYoutube, SiSpotify } from 'react-icons/si';
import { artistContent } from '@/content/artistContent';

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    // Check if we're on the home page
    const isHomePage = window.location.pathname === '/';
    
    if (!isHomePage) {
      // Navigate to home page first, then scroll
      window.location.href = `/#${id}`;
    } else {
      // Already on home page, just scroll
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    }
    setIsMenuOpen(false);
  };

  const navigateToListen = () => {
    window.location.href = '/listen';
    setIsMenuOpen(false);
  };

  const navLinks = [
    { id: 'home', label: 'Home', type: 'section' },
    { id: 'about', label: 'About', type: 'section' },
    { id: 'biography', label: 'Biography', type: 'section' },
    { id: 'music', label: 'Music', type: 'section' },
    { id: 'listen', label: 'Listen', type: 'page' },
    { id: 'videos', label: 'Videos', type: 'section' },
    { id: 'shows', label: 'Shows', type: 'section' },
    { id: 'contact', label: 'Contact', type: 'section' }
  ];

  const handleNavClick = (link: typeof navLinks[0]) => {
    if (link.type === 'page') {
      navigateToListen();
    } else {
      scrollToSection(link.id);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="flex items-center space-x-3 group"
          >
            <img
              src="/assets/generated/artist-wordmark.dim_1200x300.png"
              alt={artistContent.name}
              className="h-10 w-auto object-contain transition-opacity group-hover:opacity-80"
            />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => handleNavClick(link)}
                className="text-sm font-medium text-foreground/80 hover:text-brand-gold transition-colors relative group"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-gold transition-all group-hover:w-full" />
              </button>
            ))}
          </nav>

          {/* Social Links - Desktop */}
          <div className="hidden md:flex items-center space-x-4">
            <a
              href={artistContent.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-brand-gold transition-colors"
              aria-label="Instagram"
            >
              <SiInstagram className="w-5 h-5" />
            </a>
            <a
              href={artistContent.social.facebook}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-brand-gold transition-colors"
              aria-label="Facebook"
            >
              <SiFacebook className="w-5 h-5" />
            </a>
            <a
              href={artistContent.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-brand-gold transition-colors"
              aria-label="YouTube"
            >
              <SiYoutube className="w-5 h-5" />
            </a>
            <a
              href={artistContent.social.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="text-foreground/60 hover:text-brand-gold transition-colors"
              aria-label="Spotify"
            >
              <SiSpotify className="w-5 h-5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden text-foreground p-2"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden py-6 border-t border-border/50">
            <nav className="flex flex-col space-y-4">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className="text-left text-lg font-medium text-foreground/80 hover:text-brand-gold transition-colors px-2"
                >
                  {link.label}
                </button>
              ))}
            </nav>
            <div className="flex items-center space-x-6 mt-6 px-2">
              <a
                href={artistContent.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-brand-gold transition-colors"
                aria-label="Instagram"
              >
                <SiInstagram className="w-6 h-6" />
              </a>
              <a
                href={artistContent.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-brand-gold transition-colors"
                aria-label="Facebook"
              >
                <SiFacebook className="w-6 h-6" />
              </a>
              <a
                href={artistContent.social.youtube}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-brand-gold transition-colors"
                aria-label="YouTube"
              >
                <SiYoutube className="w-6 h-6" />
              </a>
              <a
                href={artistContent.social.spotify}
                target="_blank"
                rel="noopener noreferrer"
                className="text-foreground/60 hover:text-brand-gold transition-colors"
                aria-label="Spotify"
              >
                <SiSpotify className="w-6 h-6" />
              </a>
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
