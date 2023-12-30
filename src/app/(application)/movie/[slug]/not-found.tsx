import Link from 'next/link';
import { Header } from '@/components/ui/typography/Header';

export default function NotFound(): JSX.Element {
  return (
    <div>
      <Header type="h2">Oops!</Header>
      We couldn&apos;t find the movie you were looking for, perhaps look for another one{' '}
      <Link className="font-bold underline underline-offset-4" href="/search/movie">
        here
      </Link>{' '}
      instead?
    </div>
  );
}
