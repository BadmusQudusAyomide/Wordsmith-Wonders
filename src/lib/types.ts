import type { LucideIcon } from 'lucide-react';

export type Content = {
  id: number;
  categorySlug: string;
  text: string;
  author?: string;
  tags: string[];
  length: 'short' | 'medium' | 'long';
  popularity: number;
};

export type Category = {
  name: string;
  slug: string;
  description: string;
  icon: LucideIcon;
};
