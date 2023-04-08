import Link from '@/components/Link';

import { Box, Button, Typography } from '@mui/material';
import { Component } from 'react';

export default class Error extends Component {
  public static noAppbar = true;

  public render(): JSX.Element {
    return (
      <Box
        display="flex"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        minHeight="100vh"
      >
        <Typography variant="h5" align="center">
          An unknown error occurred.
        </Typography>
        <br />
        <Button component={Link} href="/" variant="contained" color="primary" size="small">
          Go to home page
        </Button>
      </Box>
    );
  }
}
