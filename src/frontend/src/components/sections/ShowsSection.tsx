import { Calendar, MapPin, ExternalLink } from 'lucide-react';
import { SectionChrome } from './SectionChrome';
import { artistContent } from '@/content/artistContent';

export function ShowsSection() {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  return (
    <SectionChrome id="shows" className="bg-muted/20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Shows
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Catch me live at these upcoming performances
          </p>

          {/* Upcoming Shows */}
          <div className="mb-16">
            <h3 className="font-serif text-2xl font-semibold mb-6 text-brand-gold">
              Upcoming Shows
            </h3>
            <div className="grid gap-4">
              {artistContent.shows.upcoming.map((show) => (
                <div
                  key={show.id}
                  className="group bg-card border border-border/50 rounded-lg p-6 hover:border-brand-gold/50 transition-all hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-3">
                        <Calendar className="w-5 h-5 text-brand-gold" />
                        <span className="font-semibold text-lg">
                          {formatDate(show.date)}
                        </span>
                      </div>
                      <h4 className="font-semibold text-xl mb-2">{show.venue}</h4>
                      <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className="w-4 h-4" />
                        <span>{show.city}</span>
                      </div>
                    </div>
                    <a
                      href={show.ticketUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-6 py-3 bg-brand-gold text-background font-semibold rounded-full hover:bg-brand-gold/90 transition-all flex items-center justify-center gap-2 whitespace-nowrap"
                    >
                      Get Tickets
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Past Shows */}
          <div>
            <h3 className="font-serif text-2xl font-semibold mb-6 text-muted-foreground">
              Past Shows
            </h3>
            <div className="grid gap-3">
              {artistContent.shows.past.map((show) => (
                <div
                  key={show.id}
                  className="bg-card/50 border border-border/30 rounded-lg p-5 opacity-75"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                    <div>
                      <div className="flex items-center gap-3 mb-2">
                        <Calendar className="w-4 h-4 text-muted-foreground" />
                        <span className="font-medium text-muted-foreground">
                          {formatDate(show.date)}
                        </span>
                      </div>
                      <h4 className="font-semibold text-lg mb-1">{show.venue}</h4>
                      <div className="flex items-center gap-2 text-sm text-muted-foreground">
                        <MapPin className="w-3 h-3" />
                        <span>{show.city}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionChrome>
  );
}
