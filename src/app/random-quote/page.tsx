import { RandomQuoteGenerator } from '@/components/random-quote/RandomQuoteGenerator';
import { Breadcrumbs } from '@/components/shared/Breadcrumbs';

export const metadata = {
  title: 'Random Quote Generator | Wordsmith Wonders',
  description: 'Generate a unique, AI-powered quote for any mood or occasion.',
};

export default function RandomQuotePage() {
  return (
    <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
            <Breadcrumbs items={[{ label: 'Random Quote Generator' }]} />
        </div>
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold font-headline">Random Quote Generator</h1>
        <p className="mt-2 text-lg text-muted-foreground">Feeling stuck? Let our AI generate a unique quote for you.</p>
      </header>
      <RandomQuoteGenerator />
    </div>
  );
}
