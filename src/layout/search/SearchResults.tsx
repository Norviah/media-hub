import Container from '@mui/material/Container';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/lab/LoadingButton';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';

import ProductFilterSidebar from './ProductFilterSidebar';
import ProductList from './ProductList';
import ProductSort from './ProductSort';

import SearchIcon from '@mui/icons-material/Search';

import { useState } from 'react';

import type { LoadingState, ResultState } from '@/types/layout/search/Result';
import type { FormEvent } from 'react';
import { InputBase } from '@mui/material';

export default function SearchResults(props: {
  filter: { open: boolean; to: (value: boolean) => void };
  result: ResultState | LoadingState | null;
  search: (query: string) => Promise<void>;
}): JSX.Element {
  const [searchQuery, setSearchQuery] = useState<string>('');

  const onSubmit = (event: FormEvent<HTMLFormElement>): void => {
    event.preventDefault();

    // get the value from the input
    const query = event.currentTarget.query.value;

    props.search(query);
  };

  return (
    <>
      <Container>
        <Typography variant="h4" sx={{ mb: 5 }}>
          {props.result?.query}
        </Typography>

        <Stack direction="row" sx={{ mb: 10 }}>
          <form onSubmit={(event: FormEvent<HTMLFormElement>): void => onSubmit(event)}>
            <TextField
              id="query"
              label="Search"
              variant="filled"
              placeholder="What would you like to search?"
              size="small"
              InputProps={{
                endAdornment: (
                  <Box>
                    <Button
                      type="submit"
                      sx={{
                        pr: 2,
                        pl: 2,
                      }}
                      startIcon={<SearchIcon />}
                    >
                      Search
                    </Button>
                  </Box>
                ),
              }}
            />
            {/* <Button
              aria-label="search"
              sx={{
                // height: 55,
                height: 38,
                borderRadius: '0 5px 5px 0',
                color: '#fff',
              }}
              color="primary"
              variant="contained"
              type="submit"
              startIcon={<SearchIcon />}
            >
              Search
            </Button> */}
          </form>
          <Box sx={{ flexGrow: 1 }} />
          <Stack direction="row" spacing={1} flexShrink={0} sx={{ my: 1 }}>
            <ProductFilterSidebar open={props.filter.open} to={props.filter.to} />
            <ProductSort />
          </Stack>
        </Stack>
        <ProductList items={props.result?.results ?? null} />
      </Container>
    </>
  );
}
