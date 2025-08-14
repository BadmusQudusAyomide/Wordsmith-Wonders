'use client';

import { useSearchParams } from 'next/navigation';
import { useState, useMemo } from 'react';
import { allContent } from '@/lib/content';
import { categories } from '@/lib/categories';
import { SearchBar } from '@/components/shared/SearchBar';
import { QuoteList } from '@/components/shared/QuoteList';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';

const allTags = [...new Set(allContent.flatMap(c => c.tags))];

export default function SearchPage() {
  const searchParams = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedTag, setSelectedTag] = useState('all');
  const [selectedLength, setSelectedLength] = useState('all');

  const filteredContent = useMemo(() => {
    return allContent.filter(item => {
      const queryMatch = query.trim() === '' || 
        item.text.toLowerCase().includes(query.toLowerCase()) || 
        (item.author && item.author.toLowerCase().includes(query.toLowerCase()));
      
      const categoryMatch = selectedCategory === 'all' || item.categorySlug === selectedCategory;
      const tagMatch = selectedTag === 'all' || item.tags.includes(selectedTag);
      const lengthMatch = selectedLength === 'all' || item.length === selectedLength;

      return queryMatch && categoryMatch && tagMatch && lengthMatch;
    });
  }, [query, selectedCategory, selectedTag, selectedLength]);

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8">
        <Breadcrumbs items={[{ label: 'Search' }]} />
      </div>
      <header className="text-center mb-8">
        <h1 className="text-4xl font-bold font-headline">Search Our Collection</h1>
        <p className="mt-2 text-lg text-muted-foreground">Find the perfect message for any occasion.</p>
      </header>
      <div className="mb-8">
        <SearchBar initialQuery={query} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        <aside className="lg:col-span-1">
          <Card>
            <CardHeader>
              <CardTitle>Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-2">
                <Label htmlFor="category-filter">Category</Label>
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger id="category-filter">
                    <SelectValue placeholder="Select a category" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    {categories.map(cat => (
                      <SelectItem key={cat.slug} value={cat.slug}>{cat.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="tag-filter">Mood / Tag</Label>
                <Select value={selectedTag} onValueChange={setSelectedTag}>
                  <SelectTrigger id="tag-filter">
                    <SelectValue placeholder="Select a tag" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Tags</SelectItem>
                    {allTags.map(tag => (
                      <SelectItem key={tag} value={tag} className="capitalize">{tag}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label htmlFor="length-filter">Length</Label>
                <Select value={selectedLength} onValueChange={setSelectedLength}>
                  <SelectTrigger id="length-filter">
                    <SelectValue placeholder="Select a length" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Lengths</SelectItem>
                    <SelectItem value="short">Short</SelectItem>
                    <SelectItem value="medium">Medium</SelectItem>
                    <SelectItem value="long">Long</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </CardContent>
          </Card>
        </aside>

        <main className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-4">{filteredContent.length} Results Found</h2>
            <QuoteList items={filteredContent} />
        </main>
      </div>
    </div>
  );
}
