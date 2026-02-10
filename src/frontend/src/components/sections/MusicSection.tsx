import { Music, ExternalLink, Headphones } from 'lucide-react';
import { SectionChrome } from './SectionChrome';
import { artistContent } from '@/content/artistContent';
import { Button } from '@/components/ui/button';

export function MusicSection() {
  const handleListenPageClick = () => {
    window.location.href = '/listen';
  };

  return (
    <SectionChrome id="music" className="bg-muted/20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Music
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Listen to my latest tracks and albums
          </p>

          <div className="grid gap-4">
            {artistContent.tracks.map((track) => (
              <div
                key={track.id}
                className="group bg-card border border-border/50 rounded-lg p-6 hover:border-brand-gold/50 transition-all hover:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 flex-1">
                    <div className="w-12 h-12 bg-brand-gold/10 rounded-lg flex items-center justify-center group-hover:bg-brand-gold/20 transition-colors">
                      <Music className="w-6 h-6 text-brand-gold" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-lg mb-1">{track.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {track.album} • {track.duration}
                      </p>
                    </div>
                  </div>
                  <a
                    href={track.spotifyUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 bg-brand-gold/10 text-brand-gold rounded-full hover:bg-brand-gold hover:text-background transition-all flex items-center gap-2 text-sm font-medium"
                  >
                    Listen
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          {/* Listen Page CTA */}
          <div className="mt-12 p-8 bg-gradient-to-br from-brand-gold/10 to-brand-gold/5 border border-brand-gold/20 rounded-2xl text-center">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold/20 rounded-full mb-4">
              <Headphones className="w-8 h-8 text-brand-gold" />
            </div>
            <h3 className="font-serif text-2xl font-bold mb-2">
              Listen with Embedded Players
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Experience the full collection with on-page playable tracks. No need to leave the site.
            </p>
            <Button
              onClick={handleListenPageClick}
              className="bg-brand-gold text-background hover:bg-brand-gold/90 font-semibold px-8 py-6 text-base rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Open Listen Page
              <Headphones className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="text-center mt-8">
            <a
              href={artistContent.social.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-background font-semibold rounded-full hover:bg-brand-gold/90 transition-all shadow-lg hover:shadow-xl"
            >
              View Full Discography
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </SectionChrome>
  );
}
