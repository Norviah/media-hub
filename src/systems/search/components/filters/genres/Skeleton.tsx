import { SpinnerIcon } from '@/components/icons/Spinner';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/Popover';
import { ChevronsUpDown } from 'lucide-react';

import { buttonVariants } from '@/components/ui/Button';
import { cn } from '@/utils/cn';

export function GenresSkeleton(): JSX.Element {
  return (
    <Popover>
      <PopoverTrigger asChild>
        <div
          className={cn(
            buttonVariants({ variant: 'outline' }),
            'h-9 w-[7rem] justify-between border-none bg-card shadow-lg hover:bg-transparent focus:outline-none'
          )}
        >
          <span className="opacity-50">Genres</span>
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </div>
      </PopoverTrigger>
      <PopoverContent className="flex h-72 w-[7rem] items-center justify-center p-0">
        <SpinnerIcon />
      </PopoverContent>
    </Popover>
  );
}
