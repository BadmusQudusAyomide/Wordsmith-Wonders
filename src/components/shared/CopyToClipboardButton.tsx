'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Clipboard, Check } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '@/components/ui/tooltip';
import { useToast } from '@/hooks/use-toast';

interface CopyToClipboardButtonProps {
  textToCopy: string;
}

export function CopyToClipboardButton({ textToCopy }: CopyToClipboardButtonProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(textToCopy);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy text: ', err);
      toast({
        title: 'Copy Failed',
        description: 'Could not copy text to clipboard.',
        variant: 'destructive',
      });
    }
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