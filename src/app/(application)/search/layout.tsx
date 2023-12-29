import { SearchForm } from '@/systems/search/components/filters/SearchForm';
import type { LayoutProps } from '@/types/components/LayoutProps';

export default function SearchPage({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <SearchForm />
      {children}
    </>
  );
}
