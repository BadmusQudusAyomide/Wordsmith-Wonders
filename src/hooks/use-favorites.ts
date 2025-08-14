'use client';

import { useLocalStorage } from './use-local-storage';

export function useFavorites() {
  const [favoriteIds, setFavoriteIds] = useLocalStorage<number[]>('favorite_quotes', []);

  const isFavorite = (id: number) => favoriteIds.includes(id);

  const toggleFavorite = (id: number) => {
    setFavoriteIds((prevIds) => {
      if (prevIds.includes(id)) {
        return prevIds.filter((favId) => favId !== id);
      } else {
        return [...prevIds, id];
      }
    });
  };

  return { favoriteIds, isFavorite, toggleFavorite };
}
