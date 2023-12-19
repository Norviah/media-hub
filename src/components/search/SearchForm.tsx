'use client';

import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Label } from '@/components/ui/Label';
import { SearchIcon } from 'lucide-react';

import { useRouter } from 'next/navigation';
import { useState } from 'react';

export function SearchForm({ placeholder }: { placeholder: string | undefined }): JSX.Element {
  const [inputValue, setInputValue] = useState('');
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    router.push(`/search?q=${encodeURIComponent(inputValue)}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex gap-4">
        <Label className="sr-only" htmlFor="query">
          Query
        </Label>

        <div className="relative w-full max-w-md">
          <Input
            className="pr-12"
            id="query"
            placeholder={placeholder}
            type="text"
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            className="absolute inset-y-0 right-0 flex h-10 w-12 items-center justify-center"
            variant="ghost"
            type="submit"
            disabled={inputValue.length === 0}
          >
            <SearchIcon />
          </Button>
        </div>
      </div>
    </form>
  );
}
