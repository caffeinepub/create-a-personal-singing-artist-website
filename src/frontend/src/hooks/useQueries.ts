import { useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';

interface SubmitMessageParams {
  author: string;
  email: string;
  content: string;
}

export function useSubmitContactMessage() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async ({ author, email, content }: SubmitMessageParams) => {
      if (!actor) {
        throw new Error('Connection not available. Please wait a moment and try again.');
      }
      try {
        return await actor.submitMessage(author, email, content);
      } catch (error) {
        if (error instanceof Error) {
          throw new Error(`Failed to send message: ${error.message}`);
        }
        throw new Error('Failed to send message. Please try again.');
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['messages'] });
    }
  });
}
