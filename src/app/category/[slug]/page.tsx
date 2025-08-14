import { notFound } from 'next/navigation';
import { getCategoryBySlug } from '@/lib/categories';
import { getContentByCategory } from '@/lib/content';
import { QuoteList } from '@/components/shared/QuoteList';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';

export async function generateStaticParams() {
  const { categories } = await import('@/lib/categories');
  return categories.map((category) => ({ slug: category.slug }));
}

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    return { title: 'Category not found' };
  }

  return {
    title: `${category.name} | Wordsmith Wonders`,
    description: category.description,
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategoryBySlug(params.slug);

  if (!category) {
    notFound();
  }

  const content = getContentByCategory(params.slug);

  return (
    <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
            <Breadcrumbs items={[{ label: 'Categories', href: '/' }, { label: category.name }]} />
        </div>
      <header className="text-center mb-12">
        <div className="inline-block p-4 bg-accent/20 rounded-lg mb-4">
          <category.icon className="w-12 h-12 text-accent" />
        </div>
        <h1 className="text-4xl font-bold font-headline">{category.name}</h1>
        <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">{category.description}</p>
      </header>
      <QuoteList items={content} />
    </div>
  );
}
