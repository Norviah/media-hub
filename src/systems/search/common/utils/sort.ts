export type SortOptionItem = {
  value: string;
  title: string;
  fullTitle: string;
};

export const defaultSortOption: SortOptionItem = {
  value: 'popularity.desc',
  title: 'Popularity',
  fullTitle: 'Popularity - Desc.',
};

export const movieSortOptions: SortOptionItem[] = [
  {
    value: 'original_title.asc',
    title: 'Original Title',
    fullTitle: 'Original Title - Asc.',
  },
  {
    value: 'popularity.asc',
    title: 'Popularity',
    fullTitle: 'Popularity - Asc.',
  },
  {
    value: 'revenue.asc',
    title: 'Revenue',
    fullTitle: 'Revenue - Asc.',
  },
  {
    value: 'primary_release_date.asc',
    title: 'Primary Release Date',
    fullTitle: 'Primary Release Date - Asc.',
  },
  {
    value: 'title.asc',
    title: 'Title',
    fullTitle: 'Title - Asc.',
  },
  {
    value: 'vote_average.asc',
    title: 'Vote Average',
    fullTitle: 'Vote Average - Asc.',
  },
  {
    value: 'vote_count.asc',
    title: 'Vote Count',
    fullTitle: 'Vote Count - Asc.',
  },
  {
    value: 'original_title.desc',
    title: 'Original Title',
    fullTitle: 'Original Title - Desc.',
  },
  defaultSortOption,
  {
    value: 'revenue.desc',
    title: 'Revenue',
    fullTitle: 'Revenue - Desc.',
  },
  {
    value: 'primary_release_date.desc',
    title: 'Primary Release Date',
    fullTitle: 'Primary Release Date - Desc.',
  },
  {
    value: 'title.desc',
    title: 'Title',
    fullTitle: 'Title - Desc.',
  },
  {
    value: 'vote_average.desc',
    title: 'Vote Average',
    fullTitle: 'Vote Average - Desc.',
  },
  {
    value: 'vote_count.desc',
    title: 'Vote Count',
    fullTitle: 'Vote Count - Desc.',
  },
];

export const movieSortOptionsGroup: { header: string; options: SortOptionItem[] }[] = [
  {
    header: 'Descending',
    options: movieSortOptions.slice(7),
  },
  {
    header: 'Ascending',
    options: movieSortOptions.slice(0, 7),
  },
];

export const tvSortOptions: SortOptionItem[] = [
  {
    value: 'first_air_date.asc',
    title: 'First Air Date',
    fullTitle: 'First Air Date - Asc.',
  },
  {
    value: 'name.asc',
    title: 'Name',
    fullTitle: 'Name - Asc.',
  },
  {
    value: 'original_name.asc',
    title: 'Original Name',
    fullTitle: 'Original Name - Asc.',
  },
  {
    value: 'popularity.asc',
    title: 'Popularity',
    fullTitle: 'Popularity - Asc.',
  },
  {
    value: 'vote_average.asc',
    title: 'Vote Average',
    fullTitle: 'Vote Average - Asc.',
  },
  {
    value: 'vote_count.asc',
    title: 'Vote Count',
    fullTitle: 'Vote Count - Asc.',
  },
  {
    value: 'first_air_date.desc',
    title: 'First Air Date',
    fullTitle: 'First Air Date - Desc.',
  },
  {
    value: 'name.desc',
    title: 'Name',
    fullTitle: 'Name - Desc.',
  },
  {
    value: 'original_name.desc',
    title: 'Original Name',
    fullTitle: 'Original Name - Desc.',
  },
  defaultSortOption,
  {
    value: 'vote_average.desc',
    title: 'Vote Average',
    fullTitle: 'Vote Average - Desc.',
  },
  {
    value: 'vote_count.desc',
    title: 'Vote Count',
    fullTitle: 'Vote Count - Desc.',
  },
];

export const tvSortOptionsGroup: { header: string; options: SortOptionItem[] }[] = [
  {
    header: 'Descending',
    options: tvSortOptions.slice(6),
  },
  {
    header: 'Ascending',
    options: tvSortOptions.slice(0, 6),
  },
];
