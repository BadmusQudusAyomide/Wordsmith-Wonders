'use client';

import { Button } from '@/components/ui/button';
import { Share2, Twitter, Facebook, Linkedin, Mail } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import type { Content } from '@/lib/types';

interface ShareButtonProps {
  content: Content;
}

export function ShareButton({ content }: ShareButtonProps) {
  const shareText = `"${content.text}" ${content.author ? `- ${content.author}` : ''}`;
  const pageUrl = typeof window !== 'undefined' ? window.location.href : '';

  const twitterUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(pageUrl)}`;
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}&quote=${encodeURIComponent(shareText)}`;
  const linkedinUrl = `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(pageUrl)}&title=${encodeURIComponent('A quote from Wordsmith Wonders')}&summary=${encodeURIComponent(shareText)}`;
  const emailUrl = `mailto:?subject=${encodeURIComponent('Check out this quote!')}&body=${encodeURIComponent(shareText + '\n\n' + pageUrl)}`;


  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" size="icon">
          <Share2 className="h-4 w-4" />
          <span className="sr-only">Share</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem asChild>
            <a href={twitterUrl} target="_blank" rel="noopener noreferrer">
                <Twitter className="mr-2 h-4 w-4" />
                <span>Twitter</span>
            </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
            <a href={facebookUrl} target="_blank" rel="noopener noreferrer">
                <Facebook className="mr-2 h-4 w-4" />
                <span>Facebook</span>
            </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
            <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
                <Linkedin className="mr-2 h-4 w-4" />
                <span>LinkedIn</span>
            </a>
        </DropdownMenuItem>
        <DropdownMenuItem asChild>
            <a href={emailUrl} target="_blank" rel="noopener noreferrer">
                <Mail className="mr-2 h-4 w-4" />
                <span>Email</span>
            </a>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
