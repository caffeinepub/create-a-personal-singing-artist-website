import { SiInstagram, SiFacebook, SiYoutube, SiSpotify } from 'react-icons/si';
import { Heart } from 'lucide-react';
import { artistContent } from '@/content/artistContent';

export function SiteFooter() {
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
  };

  const navigateToListen = () => {
    window.location.href = '/listen';
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

  const appIdentifier = encodeURIComponent(
    typeof window !== 'undefined' ? window.location.hostname : 'jensypragya-music'
  );

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <img
              src="/assets/generated/artist-wordmark.dim_1200x300.png"
              alt={artistContent.name}
              className="h-10 w-auto object-contain mb-4"
            />
            <p className="text-sm text-muted-foreground max-w-xs">
              {artistContent.tagline}
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Quick Links</h3>
            <nav className="flex flex-col space-y-2">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNavClick(link)}
                  className="text-sm text-muted-foreground hover:text-brand-gold transition-colors text-left"
                >
                  {link.label}
                </button>
              ))}
            </nav>
          </div>

          {/* Social & Newsletter */}
          <div>
            <h3 className="font-serif text-lg font-semibold mb-4">Connect</h3>
            <div className="flex items-center space-x-4 mb-4">
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
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/50 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} {artistContent.name}. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-brand-crimson fill-brand-crimson" /> using{' '}
            <a
              href={`https://caffeine.ai/?utm_source=Caffeine-footer&utm_medium=referral&utm_content=${appIdentifier}`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-brand-gold hover:underline"
            >
              caffeine.ai
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
