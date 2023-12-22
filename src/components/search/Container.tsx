import { SearchForm } from './SearchForm';

export function SearchContainer(props: {
  children?: React.ReactNode;
  placeholder?: string;
  header?: React.ReactNode;
}): JSX.Element {
  return (
    <>
      <div className="mb-4 flex justify-between">
        <SearchForm placeholder={props.placeholder ?? 'Search for something!'} />
        {props.header}
      </div>
      {props.children}
    </>
  );
}
