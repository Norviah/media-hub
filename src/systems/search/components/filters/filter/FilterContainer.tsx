import { Header } from '@/components/ui/typography/Header';
import { Filter } from './Filter';

export function FilterContainer(props: React.HTMLProps<HTMLDivElement>): JSX.Element {
  return (
    <div {...props}>
      <Header type="h5">Filter</Header>
      <Filter />
    </div>
  );
}
