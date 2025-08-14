import Link from 'next/link';
import { PenSquare } from 'lucide-react';
import { NewsletterForm } from './NewsletterForm';

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-start">
             <Link href="/" className="flex items-center gap-2 mb-4">
                <PenSquare className="h-7 w-7 text-primary" />
                <span className="text-xl font-bold tracking-tight font-headline">
                  Wordsmith Wonders
                </span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">Your library of feelings for every occasion. Find the perfect words to express yourself.</p>
          </div>
          
          <div className="md:justify-self-center">
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><Link href="/search" className="hover:text-primary transition-colors">Search</Link></li>
              <li><Link href="/random-quote" className="hover:text-primary transition-colors">Random Quote</Link></li>
              <li><Link href="/favorites" className="hover:text-primary transition-colors">My Favorites</Link></li>
              <li><Link href="/contact" className="hover:text-primary transition-colors">Contact Us</Link></li>
            </ul>
          </div>
          
          <div className="md:justify-self-end">
             <h3 className="text-lg font-semibold mb-4">Stay Connected</h3>
             <p className="text-sm text-muted-foreground mb-4">Sign up for our newsletter to receive daily inspiration.</p>
             <NewsletterForm />
          </div>
        </div>
        <div className="mt-8 border-t border-border pt-6 text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Wordsmith Wonders. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
