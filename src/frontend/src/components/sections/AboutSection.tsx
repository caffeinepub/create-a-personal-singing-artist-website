import { SectionChrome } from './SectionChrome';
import { artistContent } from '@/content/artistContent';

export function AboutSection() {
  return (
    <SectionChrome id="about" className="bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-8 text-center">
            About <span className="text-brand-gold">{artistContent.name}</span>
          </h2>
          <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-6">
            {artistContent.bio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-lg leading-relaxed">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </SectionChrome>
  );
}
