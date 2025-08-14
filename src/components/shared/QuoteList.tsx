import type { Content } from '@/lib/types';
import { QuoteCard } from './QuoteCard';

interface QuoteListProps {
  items: Content[];
}

export function QuoteList({ items }: QuoteListProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-16">
        <p className="text-muted-foreground text-lg">No content found.</p>
        <p>Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {items.map((item) => (
        <QuoteCard key={item.id} content={item} />
      ))}
    </div>
  );
}
