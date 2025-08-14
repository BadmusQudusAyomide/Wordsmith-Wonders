import { Hero } from '@/components/home/Hero';
import { FeaturedCategories } from '@/components/home/FeaturedCategories';
import { TrendingContent } from '@/components/home/TrendingContent';
import { QuoteOfTheDay } from '@/components/home/QuoteOfTheDay';

export default function Home() {
  return (
    <div className="flex flex-col">
      <Hero />
      <QuoteOfTheDay />
      <div className="container mx-auto px-4 py-12 md:py-20">
        <div className="space-y-16 md:space-y-24">
          <FeaturedCategories />
          <TrendingContent />
        </div>
      </div>
    </div>
  );
}
