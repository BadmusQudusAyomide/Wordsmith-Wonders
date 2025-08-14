'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Menu, PenSquare } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { useState } from 'react';

const navLinks = [
  { href: '/search', label: 'Search' },
  { href: '/random-quote', label: 'Random Quote' },
  { href: '/favorites', label: 'Favorites' },
  { href: '/contact', label: 'Contact' },
];

export function Header() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2" onClick={() => setIsOpen(false)}>
          <PenSquare className="h-7 w-7 text-primary" />
          <span className="text-xl font-bold tracking-tight text-foreground font-headline">
            Wordsmith Wonders
          </span>
        </Link>

        <nav className="hidden md:flex items-center gap-2">
          {navLinks.map((link) => (
            <Button asChild variant="ghost" key={link.href}>
              <Link
                href={link.href}
                className={cn(
                  'text-muted-foreground transition-colors hover:text-foreground',
                  pathname === link.href && 'text-foreground'
                )}
              >
                {link.label}
              </Link>
            </Button>
          ))}
        </nav>

        <div className="md:hidden">
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <div className="p-4">
                <Link href="/" className="flex items-center gap-2 mb-8" onClick={() => setIsOpen(false)}>
                  <PenSquare className="h-6 w-6 text-primary" />
                  <span className="text-lg font-bold">Wordsmith Wonders</span>
                </Link>
                <nav className="flex flex-col gap-4">
                  {navLinks.map((link) => (
                    <Link
                      key={link.href}
                      href={link.href}
                      onClick={() => setIsOpen(false)}
                      className={cn(
                        'text-lg text-muted-foreground',
                        pathname === link.href && 'text-foreground'
                      )}
                    >
                      {link.label}
                    </Link>
                  ))}
                </nav>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
