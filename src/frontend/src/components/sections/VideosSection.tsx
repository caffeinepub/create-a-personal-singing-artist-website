import { SectionChrome } from './SectionChrome';
import { artistContent } from '@/content/artistContent';

export function VideosSection() {
  return (
    <SectionChrome id="videos" className="bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Videos
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Watch my latest performances and music videos
          </p>

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
                  <h3 className="font-semibold text-base line-clamp-2 group-hover:text-brand-gold transition-colors">
                    {video.title}
                  </h3>
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
