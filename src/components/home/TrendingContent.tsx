import { getTrendingContent } from '@/lib/content';
import { QuoteCard } from '@/components/shared/QuoteCard';
import { Button } from '../ui/button';
import Link from 'next/link';

export function TrendingContent() {
  const trending = getTrendingContent(4);

  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8 font-headline">Trending Now</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {trending.map((content) => (
          <QuoteCard key={content.id} content={content} />
        ))}
      </div>
      <div className="text-center mt-8">
        <Button asChild size="lg">
          <Link href="/search">Explore More</Link>
        </Button>
      </div>
    </section>
  );
}
