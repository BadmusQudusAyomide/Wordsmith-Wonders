'use client';

import { useFavorites } from '@/hooks/use-favorites';
import { allContent } from '@/lib/content';
import { QuoteList } from '@/components/shared/QuoteList';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function FavoritesPage() {
  const { favoriteIds } = useFavorites();
  const favoriteContent = allContent.filter((item) => favoriteIds.includes(item.id));

  return (
    <div className="container mx-auto px-4 py-8">
       <div className="mb-8">
         <Breadcrumbs items={[{ label: 'Favorites' }]} />
      </div>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">My Favorite Quotes</h1>
        <p className="mt-2 text-lg text-muted-foreground">Your personal collection of saved words.</p>
      </header>
      {favoriteContent.length > 0 ? (
        <QuoteList items={favoriteContent} />
      ) : (
        <div className="text-center py-16 border-2 border-dashed rounded-lg">
          <h3 className="text-xl font-semibold">Your favorites list is empty.</h3>
          <p className="text-muted-foreground mt-2 mb-4">Click the heart icon on any quote to save it here.</p>
          <Button asChild>
            <Link href="/search">Start Exploring</Link>
          </Button>
        </div>
      )}
    </div>
  );
}
