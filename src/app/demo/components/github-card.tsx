import { ChevronDownIcon, CircleIcon, PlusIcon, StarIcon } from 'lucide-react';

import { Button } from '@/components/ui/Button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/Card';
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from '@/components/ui/DropdownMenu';
import { Separator } from '@/components/ui/Separator';

export function DemoGithub() {
  return (
    <Card>
      <CardHeader className='grid grid-cols-[1fr_110px] items-start gap-4 space-y-0'>
        <div className='space-y-1'>
          <CardTitle>shadcn/ui</CardTitle>
          <CardDescription>
            Beautifully designed components that you can copy and paste into your apps. Accessible.
            Customizable. Open Source.
          </CardDescription>
        </div>
        <div className='flex items-center space-x-1 rounded-md bg-secondary text-secondary-foreground border border-border'>
          <Button variant='secondary' className='px-3 shadow-none border-none'>
            <StarIcon className='mr-2 h-4 w-4' />
            Star
          </Button>
          {/* <Separator orientation='vertical' className='h-[20px]' /> */}
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant='secondary' className='px-2 shadow-none border-none'>
                <ChevronDownIcon className='h-4 w-4 text-secondary-foreground' />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align='end' alignOffset={-5} className='w-[200px]' forceMount>
              <DropdownMenuLabel>Suggested Lists</DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuCheckboxItem checked>Future Ideas</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>My Stack</DropdownMenuCheckboxItem>
              <DropdownMenuCheckboxItem>Inspiration</DropdownMenuCheckboxItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <PlusIcon className='mr-2 h-4 w-4' /> Create List
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </CardHeader>
      <CardContent>
        <div className='flex space-x-4 text-card-foreground-light text-sm'>
          <div className='flex items-center'>
            <CircleIcon className='h-3 w-3 fill-nord-blue text-nord-blue' />
            TypeScript
          </div>
          <div className='flex items-center'>
            <StarIcon className='mr-1 h-3 w-3' />
            20k
          </div>
          <div>Updated April 2023</div>
        </div>
      </CardContent>
    </Card>
  );
}