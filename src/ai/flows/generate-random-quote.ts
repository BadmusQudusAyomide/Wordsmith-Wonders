 'use server';

/**
 * @fileOverview A flow to generate a random quote for inspiration or emotional support.
 *
 * - generateRandomQuote - A function that generates a random quote.
 * - GenerateRandomQuoteInput - The input type for the generateRandomQuote function.
 * - GenerateRandomQuoteOutput - The return type for the generateRandomQuote function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const GenerateRandomQuoteInputSchema = z.object({
  mood: z
    .string()
    .optional()
    .describe('The mood or emotion for the quote.'),
});
export type GenerateRandomQuoteInput = z.infer<typeof GenerateRandomQuoteInputSchema>;

const GenerateRandomQuoteOutputSchema = z.object({
  quote: z.string().describe('The generated random quote.'),
});
export type GenerateRandomQuoteOutput = z.infer<typeof GenerateRandomQuoteOutputSchema>;

export async function generateRandomQuote(input: GenerateRandomQuoteInput): Promise<GenerateRandomQuoteOutput> {
  return generateRandomQuoteFlow(input);
}

const prompt = ai.definePrompt({
  name: 'generateRandomQuotePrompt',
  input: {schema: GenerateRandomQuoteInputSchema},
  output: {schema: GenerateRandomQuoteOutputSchema},
  prompt: `You are a quote generator that provides inspiration and emotional support.  Generate a random quote based on the specified mood, if provided.  Otherwise, generate a general quote.

Mood: {{mood}}`,
});

const generateRandomQuoteFlow = ai.defineFlow(
  {
    name: 'generateRandomQuoteFlow',
    inputSchema: GenerateRandomQuoteInputSchema,
    outputSchema: GenerateRandomQuoteOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
