'use client';

import { useTheme } from 'next-themes';

import { Button } from '@/components/ui/Button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { Separator } from '@/components/ui/Separator';

import { SunIcon, MoonIcon, LaptopIcon } from 'lucide-react';

export function ThemeSelector(): JSX.Element {
  const { setTheme, theme } = useTheme();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          variant="ghost"
          className={'h-9 rounded-[0.5rem] text-sm text-muted-foreground'}
          size="sm"
        >
          <SunIcon className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <MoonIcon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="w-32 min-w-[32px] p-2">
        <DropdownMenuItem
          onClick={() => setTheme('light')}
          className="mb-1"
          active={theme === 'light'}
        >
          <SunIcon className="mr-2 h-4 w-4" />
          <span>Light</span>
        </DropdownMenuItem>
        <DropdownMenuItem
          onClick={() => setTheme('dark')}
          className="mb-1 mt-1"
          active={theme === 'dark'}
        >
          <MoonIcon className="mr-2 h-4 w-4" />
          <span>Dark</span>
        </DropdownMenuItem>
        <Separator className="w-full" />
        <DropdownMenuItem
          onClick={() => setTheme('system')}
          className="mt-1"
          active={theme === 'system'}
        >
          <LaptopIcon className="mr-2 h-4 w-4" />
          <span>System</span>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
