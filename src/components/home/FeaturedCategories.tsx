import Link from 'next/link';
import { categories } from '@/lib/categories';
import { Card, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { ArrowRight } from 'lucide-react';

export function FeaturedCategories() {
  return (
    <section>
      <h2 className="text-3xl font-bold text-center mb-8 font-headline">Explore Our Collections</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {categories.slice(0, 8).map((category) => (
          <Link href={`/category/${category.slug}`} key={category.slug}>
            <Card className="group h-full flex flex-col hover:border-primary hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
              <CardHeader className="flex-grow">
                <div className="flex items-center gap-4 mb-2">
                  <div className="p-3 bg-accent/20 rounded-lg">
                    <category.icon className="w-6 h-6 text-accent" />
                  </div>
                  <CardTitle className="text-lg font-semibold">{category.name}</CardTitle>
                </div>
                <CardDescription>{category.description}</CardDescription>
              </CardHeader>
              <div className="p-6 pt-0">
                  <span className="text-sm font-semibold text-primary flex items-center gap-2">
                    View Collection <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </span>
              </div>
            </Card>
          </Link>
        ))}
      </div>
    </section>
  );
}
