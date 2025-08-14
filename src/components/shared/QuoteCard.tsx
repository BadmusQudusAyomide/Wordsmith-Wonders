import type { Content } from '@/lib/types';
import { Card, CardContent } from '@/components/ui/card';
import { CopyToClipboardButton } from './CopyToClipboardButton';
import { FavoriteButton } from './FavoriteButton';
import { ShareButton } from './ShareButton';
import { Badge } from '../ui/badge';
import { getCategoryBySlug } from '@/lib/categories';

interface QuoteCardProps {
  content: Content;
}

export function QuoteCard({ content }: QuoteCardProps) {
  const category = getCategoryBySlug(content.categorySlug);

  return (
    <Card className="flex flex-col h-full overflow-hidden">
      <CardContent className="p-6 flex-grow flex flex-col">
        <blockquote className="flex-grow">
          <p className="text-lg md:text-xl leading-relaxed whitespace-pre-wrap">
            "{content.text}"
          </p>
        </blockquote>
        {content.author && (
          <footer className="mt-4 text-sm text-muted-foreground">
            — {content.author}
          </footer>
        )}
      </CardContent>
      <div className="bg-secondary/50 px-6 py-3 flex items-center justify-between flex-wrap gap-2">
         <div className="flex items-center gap-2 flex-wrap">
            {category && (
                <Badge variant="secondary" className="capitalize">{category.name}</Badge>
            )}
            {content.tags.slice(0, 2).map(tag => (
                <Badge key={tag} variant="outline" className="capitalize">{tag}</Badge>
            ))}
        </div>
        <div className="flex items-center gap-1">
          <CopyToClipboardButton textToCopy={content.text} />
          <FavoriteButton contentId={content.id} />
          <ShareButton content={content} />
        </div>
      </div>
    </Card>
  );
}
