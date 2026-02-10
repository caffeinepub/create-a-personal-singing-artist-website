import { useState } from 'react';
import { Loader2, CheckCircle2, AlertCircle } from 'lucide-react';
import { useSubmitContactMessage } from '@/hooks/useQueries';
import { useActor } from '@/hooks/useActor';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const { actor, isFetching: actorLoading } = useActor();
  const submitMutation = useSubmitContactMessage();

  const isActorReady = !!actor && !actorLoading;

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      return;
    }

    if (!isActorReady) {
      return;
    }

    submitMutation.mutate(
      {
        author: formData.name,
        email: formData.email,
        content: formData.message
      },
      {
        onSuccess: () => {
          setShowSuccess(true);
          setFormData({ name: '', email: '', message: '' });
          setTimeout(() => setShowSuccess(false), 5000);
        }
      }
    );
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <div className="bg-card border border-border/50 rounded-lg p-8 shadow-lg">
      {showSuccess ? (
        <div className="text-center py-12">
          <CheckCircle2 className="w-16 h-16 text-brand-gold mx-auto mb-4" />
          <h3 className="text-2xl font-semibold mb-2">Message Sent!</h3>
          <p className="text-muted-foreground mb-6">
            Thank you for reaching out. I'll get back to you as soon as possible.
          </p>
          <button
            onClick={() => setShowSuccess(false)}
            className="px-6 py-2 bg-brand-gold text-background font-semibold rounded-full hover:bg-brand-gold/90 transition-all"
          >
            Send Another Message
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={!isActorReady}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={!isActorReady}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="your.email@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message *
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={6}
              disabled={!isActorReady}
              className="w-full px-4 py-3 bg-background border border-border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all resize-none disabled:opacity-50 disabled:cursor-not-allowed"
              placeholder="Tell me about your inquiry..."
            />
          </div>

          {actorLoading && (
            <div className="flex items-center gap-2 text-muted-foreground bg-muted/30 px-4 py-3 rounded-lg">
              <Loader2 className="w-5 h-5 animate-spin flex-shrink-0" />
              <p className="text-sm">
                Connecting to the network...
              </p>
            </div>
          )}

          {!isActorReady && !actorLoading && (
            <div className="flex items-center gap-2 text-warning bg-warning/10 px-4 py-3 rounded-lg">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">
                Unable to connect. Please refresh the page or try again later.
              </p>
            </div>
          )}

          {submitMutation.isError && (
            <div className="flex items-center gap-2 text-destructive bg-destructive/10 px-4 py-3 rounded-lg">
              <AlertCircle className="w-5 h-5 flex-shrink-0" />
              <p className="text-sm">
                {submitMutation.error instanceof Error 
                  ? submitMutation.error.message 
                  : 'Failed to send message. Please try again or contact me directly via social media.'}
              </p>
            </div>
          )}

          <button
            type="submit"
            disabled={!isActorReady || submitMutation.isPending}
            className="w-full px-8 py-4 bg-brand-gold text-background font-semibold rounded-full hover:bg-brand-gold/90 transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
          >
            {submitMutation.isPending ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Sending...
              </>
            ) : (
              'Send Message'
            )}
          </button>
        </form>
      )}
    </div>
  );
}
