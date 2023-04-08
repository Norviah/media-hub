import Link from '@/components/Link';
import Grid from '@mui/material/Grid';

import { withRouter } from 'next/router';
import { Box, Button, Typography } from '@mui/material';
import { Component } from 'react';

import type { WithRouterProps } from 'next/dist/client/with-router';

/**
 * The error page.
 *
 * This component represents the page that is shown when an error occurs during
 * authentication. If an error occurs, `next-auth` will redirect the user to
 * this page with the error message under the `error` query parameter.
 */
export class Error extends Component<WithRouterProps> {
  /**
   * Determines if the application's appbar should be rendered.
   */
  public static noAppbar = true;

  /**
   * The component's render method.
   *
   * The component will simply display the error message and provide the user
   * with a way to go back to the previous page or to the home page.
   */
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
          Error: {this.props.router.query.error ?? 'Unknown Error'}
        </Typography>
        <br />
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button
              variant="contained"
              color="primary"
              size="small"
              onClick={() => this.props.router.back()}
            >
              Go Back
            </Button>
          </Grid>
          <Grid item>
            <Button component={Link} href="/" variant="contained" color="secondary" size="small">
              Go to home page
            </Button>
          </Grid>
        </Grid>
      </Box>
    );
  }
}

export default withRouter(Error);
