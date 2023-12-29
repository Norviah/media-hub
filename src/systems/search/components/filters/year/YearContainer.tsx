import { Header } from '@/components/ui/typography/Header';
import { Year } from './Year';

export function YearContainer({ ...props }: React.HTMLProps<HTMLDivElement>): JSX.Element {
  return (
    <div {...props}>
      <Header type="h5">Year</Header>
      <Year />
    </div>
  );
}
