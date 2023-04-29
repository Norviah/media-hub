import SearchResults from '@/layout/search/SearchResults';
import withRouter from 'next/dist/client/with-router';

import { API } from '@/structs/API';
import { parameter } from '@/util/parameter';
import { Component } from 'react';

import { Title } from '@/components/Title';
import { SearchResult } from '@/types/api/search/SearchResult';
import type { LoadingState, ResultState } from '@/types/layout/search/Result';
import type { WithRouterProps } from 'next/dist/client/with-router';

interface State {
  filter: boolean;
  results: ResultState | LoadingState | null;
}

export class Search extends Component<WithRouterProps, State> {
  /**
   * The component's initial state.
   */
  public state: State = { filter: false, results: null };

  public async componentDidMount(): Promise<void> {
    const query = parameter(this.props.router, 'query');

    if (query) {
      await this.search(query);
    }
  }

  /**
   *
   */
  public async search(query: string): Promise<void> {
    this.props.router.push(`/search?query=${query}`);
    this.setState({
      results: {
        query,
        results: null,
      },
    });

    const results = await API.Get<SearchResult>({
      endpoint: `/api/search/multi?query=${query}&page=1`,
    });

    if (!results.ok) {
      return;
    }

    this.setState({
      results: {
        query,
        ...results.data,
        // results: results.data.results,
        // page,
        // totalPages: results.data.total_pages,
      },
    });
  }

  public async update(): Promise<void> {
    console.log('update');
  }

  /**
   * The component's render method.
   */
  public render(): JSX.Element {
    const { results } = this.state;

    return (
      <>
        <Title title="Search" />
        {results ? (
          <SearchResults
            result={results}
            filter={{
              open: this.state.filter,
              to: (value: boolean) => {
                this.setState({ filter: value });
              },
            }}
            search={(query: string) => this.search(query)}
          />
        ) : (
          <div>Search</div>
        )}
      </>
    );
  }
}

export default withRouter(Search);
