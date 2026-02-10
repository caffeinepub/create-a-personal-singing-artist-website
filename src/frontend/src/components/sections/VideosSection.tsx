import { SectionChrome } from './SectionChrome';
import { artistContent } from '@/content/artistContent';
import { ExternalLink, Youtube } from 'lucide-react';

export function VideosSection() {
  return (
    <SectionChrome id="videos" className="bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Videos
          </h2>
          <p className="text-center text-muted-foreground mb-8 text-lg">
            Watch my latest performances and music videos
          </p>

          {/* YouTube Channel Callout */}
          <div className="flex justify-center mb-12">
            <a
              href="https://youtu.be/X6QUk9-Qw1c?si=h4FpM3omCMSQQiSA"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-6 py-3 bg-brand-gold/10 border-2 border-brand-gold text-brand-gold font-semibold rounded-full hover:bg-brand-gold/20 transition-all group"
            >
              <Youtube className="w-5 h-5" />
              <span>JensyPragya</span>
              <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {artistContent.videos.map((video) => (
              <div
                key={video.id}
                className="group bg-card border border-border/50 rounded-lg overflow-hidden hover:border-brand-gold/50 transition-all hover:shadow-lg"
              >
                <div className="relative aspect-video bg-muted">
                  <iframe
                    src={`https://www.youtube.com/embed/${video.youtubeId}`}
                    title={video.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                </div>
                <div className="p-4">
                  <h3 className="font-semibold text-base line-clamp-2 group-hover:text-brand-gold transition-colors mb-3">
                    {video.title}
                  </h3>
                  <a
                    href={`https://www.youtube.com/watch?v=${video.youtubeId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-brand-gold hover:text-brand-gold/80 transition-colors font-medium"
                  >
                    Watch on YouTube
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <a
              href={artistContent.social.youtube}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-8 py-4 bg-transparent border-2 border-brand-gold text-brand-gold font-semibold rounded-full hover:bg-brand-gold/10 transition-all"
            >
              View All Videos on YouTube
            </a>
          </div>
        </div>
      </div>
    </SectionChrome>
  );
}
