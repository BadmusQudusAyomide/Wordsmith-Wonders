'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Clipboard, Check } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';

interface CopyToClipboardButtonProps {
  textToCopy: string;
}

export function CopyToClipboardButton({ textToCopy }: CopyToClipboardButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(textToCopy);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <TooltipProvider>
        <Tooltip>
            <TooltipTrigger asChild>
                <Button variant="ghost" size="icon" onClick={handleCopy}>
                    {copied ? (
                        <Check className="h-4 w-4 text-green-500" />
                    ) : (
                        <Clipboard className="h-4 w-4" />
                    )}
                    <span className="sr-only">Copy to clipboard</span>
                </Button>
            </TooltipTrigger>
            <TooltipContent>
                <p>{copied ? 'Copied!' : 'Copy'}</p>
            </TooltipContent>
        </Tooltip>
    </TooltipProvider>
  );
}
