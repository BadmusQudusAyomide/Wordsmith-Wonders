'use client';

import { useEffect, useState } from 'react';
import { getQuoteOfTheDay } from '@/lib/content';
import { QuoteCard } from '@/components/shared/QuoteCard';
import { Star } from 'lucide-react';
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from '@/components/ui/dialog';

export function QuoteOfTheDay() {
  const [isOpen, setIsOpen] = useState(false);
  const quote = getQuoteOfTheDay();

  useEffect(() => {
    // Open the dialog after a short delay when the component mounts
    const timer = setTimeout(() => {
      setIsOpen(true);
    }, 500);
    return () => clearTimeout(timer);
  }, []);

  if (!quote) return null;

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="flex items-center justify-center gap-4 mb-4">
            <Star className="w-8 h-8 text-primary" />
            <span className="text-3xl font-bold text-center font-headline">Quote of the Day</span>
            <Star className="w-8 h-8 text-primary" />
          </DialogTitle>
        </DialogHeader>
        <QuoteCard content={quote} />
      </DialogContent>
    </Dialog>
  );
}
