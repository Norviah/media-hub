import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import withRouter from 'next/dist/client/with-router';

import GoogleIcon from '@mui/icons-material/Google';
import HomeIcon from '@mui/icons-material/Home';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { ThemeSelector } from '@/components/ThemeSelector';
import { getServerSession, Session } from 'next-auth';
import { signIn } from 'next-auth/react';
import { Component } from 'react';
import { toast } from 'react-toastify';
import { authOptions } from '../api/auth/[...nextauth]';

import type { GetServerSidePropsContext as ServerSideContext } from 'next';
import type { WithRouterProps } from 'next/dist/client/with-router';

/**
 * The `SignIn` component.
 *
 * This components represents the page that is shown when the user is attempting
 * to sign in. It displays various buttons representing the provides implemented
 * through `next-auth`.
 *
 * Additionally, this page is tied to `next-auth` in the `[...nextauth].ts`
 * file, it ensures that if the user tries to sign in, next-auth will redirect
 * the user to this page.
 */
class SignIn extends Component<WithRouterProps & { session?: Session | null }> {
  /**
   * Whether if the application's appbar should be rendered.
   */
  public static noAppbar = true;

  /**
   * A helper method that returns the callback URL.
   *
   * When the user is redirected to this page, a callback url may be provided
   * in the query parameter, as specified when calling in the `signIn` method
   * from next-auth.
   *
   * This method will read the callback url from the query parameter and return
   * it, returning the home page as the default.
   * @returns
   */
  public callbackUrl(): string {
    const { callbackUrl: callback } = this.props.router.query;

    return callback ? (Array.isArray(callback) ? callback[0] : callback) : '/';
  }

  /**
   * The component's lifecycle method, ensuring that the user is not
   * authenticated.
   *
   * `componentDidMount` is one of the lifecycle methods of a component, it is
   * invoked immediately after the component is mounted. We'll implement this
   * method to redirect the user to the home page if they are already
   * authenticated.
   */
  public componentDidMount(): void {
    if (this.props.session) {
      this.props.router.push('/');
    }
  }

  /**
   * The component's render method.
   *
   * Represents how the component will be rendered, the component will simply
   * provide the user with buttons for the supported providers.
   * @returns The JSX that represents the component.
   */
  public render() {
    const { error: queryError } = this.props.router.query;

    if (queryError) {
      toast.error(queryError, { toastId: 'signin-error' });
    }

    return (
      <>
        <Grid container justifyContent="flex-end" style={{ padding: 10 }}>
          <Grid item>
            <ThemeSelector />
            <IconButton onClick={() => this.props.router.push('/')}>
              <HomeIcon />
            </IconButton>
          </Grid>
        </Grid>
        <Container component="main" maxWidth="xs">
          <CssBaseline />
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign In
            </Typography>
            <Box component="form" sx={{ mt: 1 }}>
              <Button
                variant="contained"
                color="primary"
                startIcon={<GoogleIcon />}
                fullWidth
                onClick={() => signIn('google', { callbackUrl: this.callbackUrl() })}
              >
                Sign in with Google
              </Button>
            </Box>
          </Box>
        </Container>
      </>
    );
  }
}

/**
 * Constructs the props for the `SignIn` component.
 *
 * This method is used by Next.js to construct the props for the `SignIn`
 * component, it will call next-auth to retrieve the current active session.
 * @param context The context of the request.
 * @returns The props for the `SignIn` component.
 */
export async function getServerSideProps(context: ServerSideContext): Promise<Record<string, any>> {
  return {
    props: {
      session: await getServerSession(context.req, context.res, authOptions),
    },
  };
}

export default withRouter(SignIn);
