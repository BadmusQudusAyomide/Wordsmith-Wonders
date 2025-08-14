import { SearchBar } from '@/components/shared/SearchBar';

export function Hero() {
  return (
    <div className="relative bg-secondary py-20 md:py-32">
       <div 
        className="absolute inset-0 bg-grid-slate-100 [mask-image:linear-gradient(to_bottom,white,transparent)] dark:bg-grid-slate-700/40"
        style={{
            backgroundSize: '40px 40px',
            backgroundImage: 'linear-gradient(to right, hsl(var(--border)) 1px, transparent 1px), linear-gradient(to bottom, hsl(var(--border)) 1px, transparent 1px)',
        }}
        ></div>
      <div className="container mx-auto px-4 text-center relative z-10">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 font-headline tracking-tight text-primary-foreground">
          Find the Perfect Words for Any Moment
        </h1>
        <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Your ultimate library of wishes, quotes, and messages for every life occasion. Express yourself beautifully.
        </p>
        <div className="max-w-2xl mx-auto">
            <SearchBar />
        </div>
      </div>
    </div>
  );
}
