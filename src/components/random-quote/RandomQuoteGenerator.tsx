'use client';

import { useState } from 'react';
import { generateRandomQuote } from '@/ai/flows/generate-random-quote';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Input } from '@/components/ui/input';
import { Card, CardContent } from '@/components/ui/card';
import { Skeleton } from '@/components/ui/skeleton';
import { QuoteCard } from '../shared/QuoteCard';
import { Alert, AlertDescription, AlertTitle } from '../ui/alert';
import { AlertCircle } from 'lucide-react';

export function RandomQuoteGenerator() {
  const [mood, setMood] = useState('');
  const [generatedQuote, setGeneratedQuote] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setGeneratedQuote(null);
    setError(null);
    try {
      const result = await generateRandomQuote({ mood });
      setGeneratedQuote(result.quote);
    } catch (err) {
      setError('Failed to generate a quote. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <Card className="mb-8">
        <CardContent className="p-6">
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <div className="flex-grow space-y-2">
              <Label htmlFor="mood-input">Enter a mood (optional)</Label>
              <Input
                id="mood-input"
                type="text"
                value={mood}
                onChange={(e) => setMood(e.target.value)}
                placeholder="e.g., happy, hopeful, reflective"
              />
            </div>
            <Button type="submit" disabled={isLoading} className="self-end">
              {isLoading ? 'Generating...' : 'Generate Quote'}
            </Button>
          </form>
        </CardContent>
      </Card>
      
      <div className="mt-8">
        {isLoading && (
            <Card>
                <CardContent className="p-6 space-y-4">
                    <Skeleton className="h-6 w-3/4" />
                    <Skeleton className="h-4 w-1/4" />
                </CardContent>
            </Card>
        )}

        {error && (
            <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>{error}</AlertDescription>
            </Alert>
        )}

        {generatedQuote && (
          <QuoteCard content={{
            id: Date.now(),
            text: generatedQuote,
            author: 'AI Generator',
            categorySlug: 'random',
            tags: mood ? [mood] : ['ai-generated'],
            length: 'short',
            popularity: 0
          }}/>
        )}
      </div>
    </div>
  );
}
