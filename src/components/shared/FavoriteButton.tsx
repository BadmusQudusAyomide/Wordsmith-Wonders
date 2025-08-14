'use client';

import { useFavorites } from '@/hooks/use-favorites';
import { Button } from '@/components/ui/button';
import { Heart } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface FavoriteButtonProps {
  contentId: number;
}

export function FavoriteButton({ contentId }: FavoriteButtonProps) {
  const { isFavorite, toggleFavorite } = useFavorites();
  const favorited = isFavorite(contentId);

  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={() => toggleFavorite(contentId)}>
                    <Heart
                        className={`h-4 w-4 ${
                        favorited ? 'text-red-500 fill-current' : 'text-gray-500'
                        }`}
                    />
                    <span className="sr-only">Favorite</span>
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{favorited ? 'Unfavorite' : 'Favorite'}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>

  );
}
