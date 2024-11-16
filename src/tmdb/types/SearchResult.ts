export type SearchResult<T extends { id: number }> = {
  page: number;
  results: T[];
  total_pages: number;
  total_results: number;
};
