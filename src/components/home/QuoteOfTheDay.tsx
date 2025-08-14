import { getQuoteOfTheDay } from '@/lib/content';
import { QuoteCard } from '@/components/shared/QuoteCard';
import { Star } from 'lucide-react';

export function QuoteOfTheDay() {
  const quote = getQuoteOfTheDay();
  if (!quote) return null;

  return (
    <section className="bg-secondary/70 dark:bg-secondary/40 rounded-lg p-8 md:p-12">
      <div className="flex justify-center items-center gap-4 mb-8">
          <Star className="w-8 h-8 text-primary" />
          <h2 className="text-3xl font-bold text-center font-headline">Quote of the Day</h2>
          <Star className="w-8 h-8 text-primary" />
      </div>
      <div className="max-w-2xl mx-auto">
        <QuoteCard content={quote} />
      </div>
    </section>
  );
}
