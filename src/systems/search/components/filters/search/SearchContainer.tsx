import { Header } from '@/components/ui/typography/Header';
import { SearchInput } from './SearchInput';

export function SearchContainer({
  query,
  ...props
}: { query: string | undefined } & React.HTMLProps<HTMLDivElement>): JSX.Element {
  return (
    <div {...props}>
      <Header type="h5">Search</Header>
      <SearchInput query={query} />
    </div>
  );
}
