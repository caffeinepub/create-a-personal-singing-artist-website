import { SectionChrome } from './SectionChrome';
import { ContactForm } from '../contact/ContactForm';

export function ContactSection() {
  return (
    <SectionChrome id="contact" className="bg-background">
      <div className="container mx-auto px-4 py-20">
        <div className="max-w-2xl mx-auto">
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-center">
            Get in Touch
          </h2>
          <p className="text-center text-muted-foreground mb-12 text-lg">
            Have a question or want to book me for an event? Send me a message and I'll get back to you soon.
          </p>
          <ContactForm />
        </div>
      </div>
    </SectionChrome>
  );
}
