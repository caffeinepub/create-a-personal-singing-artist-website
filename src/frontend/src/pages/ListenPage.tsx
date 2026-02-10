import { Music, ArrowLeft } from 'lucide-react';
import { artistContent } from '@/content/artistContent';
import { Button } from '@/components/ui/button';

export default function ListenPage() {
  const handleBack = () => {
    window.history.back();
  };

  return (
    <div className="min-h-screen pt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="max-w-4xl mx-auto">
          {/* Back button */}
          <Button
            variant="ghost"
            onClick={handleBack}
            className="mb-8 -ml-2"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>

          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-brand-gold/10 rounded-full mb-6">
              <Music className="w-8 h-8 text-brand-gold" />
            </div>
            <h1 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              Listen
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the full collection of tracks with embedded players. Listen directly here without leaving the page.
            </p>
          </div>

          {/* Track list with embedded players */}
          <div className="space-y-8">
            {artistContent.listenTracks.map((track) => (
              <div
                key={track.id}
                className="bg-card border border-border/50 rounded-lg p-6 hover:border-brand-gold/30 transition-all"
              >
                <div className="mb-4">
                  <h3 className="font-semibold text-xl mb-1">{track.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {track.album}
                    {track.notes && ` • ${track.notes}`}
                  </p>
                </div>
                
                {/* Embedded player */}
                <div className="relative w-full" style={{ paddingBottom: '80px' }}>
                  <iframe
                    src={track.embedUrl}
                    width="100%"
                    height="80"
                    frameBorder="0"
                    allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
                    loading="lazy"
                    title={`${track.title} - ${track.album}`}
                    className="rounded-md"
                  />
                </div>
              </div>
            ))}
          </div>

          {/* Call to action */}
          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">
              Want to explore more?
            </p>
            <a
              href={artistContent.social.spotify}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-brand-gold text-background font-semibold rounded-full hover:bg-brand-gold/90 transition-all shadow-lg hover:shadow-xl"
            >
              Open on Spotify
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
