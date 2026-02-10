import { SectionChrome } from './SectionChrome';
import { artistContent } from '@/content/artistContent';

export function AboutSection() {
  return (
    <SectionChrome id="about" className="bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-12 text-center">
            About <span className="text-brand-gold">{artistContent.name}</span>
          </h2>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Photo */}
            <div className="order-2 lg:order-1">
              <div className="relative">
                <img
                  src="/assets/uploads/IMG_20251223_133615~2-6.jpg"
                  alt="Portrait photo of JensyPragya, emerging Pop and K-pop artist"
                  className="w-full h-auto rounded-2xl shadow-2xl object-cover"
                />
                <div className="absolute inset-0 rounded-2xl ring-1 ring-brand-gold/20 pointer-events-none" />
              </div>
            </div>

            {/* Bio Text */}
            <div className="order-1 lg:order-2">
              <div className="prose prose-lg max-w-none text-foreground/80 leading-relaxed space-y-6">
                {artistContent.bio.split('\n\n').map((paragraph, index) => (
                  <p key={index} className="text-lg leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </SectionChrome>
  );
}
