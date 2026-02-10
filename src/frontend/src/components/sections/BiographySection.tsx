import { SectionChrome } from './SectionChrome';
import { artistContent } from '@/content/artistContent';

export function BiographySection() {
  return (
    <SectionChrome id="biography" className="bg-muted/20">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4">
              {artistContent.biography.title}
            </h2>
            <div className="w-24 h-1 bg-brand-gold mx-auto"></div>
          </div>

          {/* Narrative */}
          <div className="mb-20">
            <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-6">
              {artistContent.biography.narrative.split('\n\n').map((paragraph, index) => (
                <p key={index} className="text-lg leading-relaxed first-letter:text-5xl first-letter:font-serif first-letter:font-bold first-letter:text-brand-gold first-letter:float-left first-letter:mr-3 first-letter:mt-1">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>

          {/* Milestones Timeline */}
          <div>
            <h3 className="font-serif text-3xl font-bold mb-12 text-center">
              Career <span className="text-brand-gold">Milestones</span>
            </h3>
            <div className="space-y-8">
              {artistContent.biography.milestones.map((milestone, index) => (
                <div
                  key={index}
                  className="relative pl-8 md:pl-12 border-l-2 border-brand-gold/30 pb-8 last:pb-0 group hover:border-brand-gold transition-colors"
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-0 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-brand-gold ring-4 ring-background group-hover:scale-125 transition-transform"></div>
                  
                  {/* Content */}
                  <div className="bg-background/50 backdrop-blur-sm rounded-lg p-6 border border-border/50 group-hover:border-brand-gold/50 transition-colors">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-3">
                      <span className="text-2xl font-serif font-bold text-brand-gold mb-2 md:mb-0">
                        {milestone.year}
                      </span>
                      <h4 className="text-xl font-semibold text-foreground">
                        {milestone.title}
                      </h4>
                    </div>
                    <p className="text-foreground/70 leading-relaxed">
                      {milestone.description}
                    </p>
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
