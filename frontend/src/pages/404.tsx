import Link from 'next/link';
import Grid from '@mui/material/Grid';

import { withRouter } from 'next/router';
import { Box, Button, Typography } from '@mui/material';
import { Component } from 'react';

import type { WithRouterProps } from 'next/dist/client/with-router';

/**
 * The 404 page.
 *
 * This component represents the 404 page, which is shown when a user tries to
 * access a page that does not exist.
 * @see https://nextjs.org/docs/advanced-features/custom-error-page#404-page
 */
class Error extends Component<WithRouterProps> {
  /**
   * Determines if the application's appbar should be rendered.
   */
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
        <Typography variant="h4" align="center">
          404: Page Not Found
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
