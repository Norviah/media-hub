'use client';

import type { SortOption } from 'tmdb-ts';

export type SortOptionItem = {
  value: SortOption;
  title: string;
  fullTitle: string;
};

export const defaultSortOption: SortOptionItem = {
  value: 'popularity.desc',
  title: 'Popularity',
  fullTitle: 'Popularity Descending',
};

export const sortOptions: SortOptionItem[] = [
  {
    value: 'popularity.asc',
    title: 'Popularity',
    fullTitle: 'Popularity Ascending',
  },
  {
    value: 'release_date.asc',
    title: 'Release Date',
    fullTitle: 'Release Date Ascending',
  },
  {
    value: 'revenue.asc',
    title: 'Revenue',
    fullTitle: 'Revenue Ascending',
  },
  {
    value: 'primary_release_date.asc',
    title: 'Primary Release Date',
    fullTitle: 'Primary Release Date Ascending',
  },
  {
    value: 'original_title.asc',
    title: 'Original Title',
    fullTitle: 'Original Title Ascending',
  },
  {
    value: 'vote_average.asc',
    title: 'Vote Average',
    fullTitle: 'Vote Average Ascending',
  },
  {
    value: 'vote_count.asc',
    title: 'Vote Count',
    fullTitle: 'Vote Count Ascending',
  },
  defaultSortOption,
  {
    value: 'release_date.desc',
    title: 'Release Date',
    fullTitle: 'Release Date Descending',
  },
  {
    value: 'revenue.desc',
    title: 'Revenue',
    fullTitle: 'Revenue Descending',
  },
  {
    value: 'primary_release_date.desc',
    title: 'Primary Release Date',
    fullTitle: 'Primary Release Date Descending',
  },
  {
    value: 'original_title.desc',
    title: 'Original Title',
    fullTitle: 'Original Title Descending',
  },
  {
    value: 'vote_average.desc',
    title: 'Vote Average',
    fullTitle: 'Vote Average Descending',
  },
  {
    value: 'vote_count.desc',
    title: 'Vote Count',
    fullTitle: 'Vote Count Descending',
  },
];

export const sortOptionsGroup: { header: string; options: SortOptionItem[] }[] = [
  {
    header: 'Descending',
    options: sortOptions.slice(7),
  },
  {
    header: 'Ascending',
    options: sortOptions.slice(0, 6),
  },
];
