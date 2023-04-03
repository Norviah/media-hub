import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import LoadingButton from '@mui/lab/LoadingButton';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import withRouter from 'next/dist/client/with-router';
import NextLink from 'next/link';
import React from 'react';

import GoogleIcon from '@mui/icons-material/Google';
import HomeIcon from '@mui/icons-material/Home';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { ThemeSelector } from '@/components/ThemeSelector';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { getServerSession } from 'next-auth';
import { SessionContext, signIn } from 'next-auth/react';
import { Component } from 'react';
import { toast } from 'react-toastify';

import type { SignInResponse } from 'next-auth/react';
import type { GetServerSidePropsContext as ServerSideContext } from 'next';
import type { Session } from 'next-auth';
import type { WithRouterProps } from 'next/dist/client/with-router';

const ERROR_CODES: Record<string, string> = {
  CredentialsSignin: 'Invalid credentials.',
};

interface AppState {
  showPassword: boolean;
  loading: boolean;
}

class SignIn extends Component<WithRouterProps & { session?: Session | null }, AppState> {
  public static noAppbar = true;
  public state: AppState = { showPassword: false, loading: false };

  public callbackUrl(): string {
    const { callbackUrl: callback } = this.props.router.query;

    return callback ? (Array.isArray(callback) ? callback[0] : callback) : '/';
  }

  public static contextType = SessionContext;

  public context!: React.ContextType<typeof SessionContext>;

  /**
   *
   */
  public componentDidMount(): void {
    if (this.context?.status === 'authenticated') {
      this.props.router.push('/');
    }
  }

  public async handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    this.setState({ loading: true });
    event.preventDefault();

    const data = new FormData(event.currentTarget);

    try {
      const result = (await signIn('credentials', {
        email: data.get('email'),
        password: data.get('password'),
        callbackUrl: this.callbackUrl(),
        redirect: false,
      })) as SignInResponse;

      if (result?.error) {
        toast.error(ERROR_CODES[result.error] ?? result.error ?? 'An unknown error occurred', {
          toastId: 'signin-error',
        });
      }

      if (result.ok) {
        toast.success('Signed in.', {
          toastId: 'signin-success',
        });
        this.props.router.push(result.url ?? this.callbackUrl() ?? '/');
      }
    } catch (error) {
      toast.error('An unknown error occurred. Please try again later.', {
        toastId: 'signin-error',
      });
    }

    this.setState({ loading: false });
  }

  public render() {
    const { error: queryError } = this.props.router.query;

    if (queryError) {
      toast.error('Invalid credentials.');
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
              Sign in
            </Typography>
            <Box component="form" onSubmit={(event) => this.handleSubmit(event)} sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={this.state.showPassword ? 'text' : 'password'}
                id="password"
                autoComplete="current-password"
                InputProps={{
                  endAdornment: (
                    <>
                      <InputAdornment position="start">
                        <IconButton
                          edge="end"
                          onClick={() => this.setState({ showPassword: !this.state.showPassword })}
                        >
                          {this.state.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                        </IconButton>
                      </InputAdornment>
                    </>
                  ),
                }}
              />
              <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Remember me"
              />
              <LoadingButton
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 2 }}
                loading={this.state.loading}
              >
                Sign In
              </LoadingButton>
              <Grid container>
                <Grid item xs>
                  <Link component={NextLink} href="#" variant="body2">
                    Forgot password?
                  </Link>
                </Grid>
                <Grid item>
                  <Link component={NextLink} href="/auth/signup" variant="body2">
                    {"Don't have an account? Sign Up"}
                  </Link>
                </Grid>
              </Grid>
              <Divider style={{ marginTop: 10, marginBottom: 10 }}>OR</Divider>
              <Button
                variant="contained"
                color="primary"
                startIcon={<GoogleIcon />}
                fullWidth
                onClick={() => signIn('google', { callbackUrl: this.callbackUrl() })}
                disabled={this.state.loading}
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
 *
 * @param context
 * @returns
 */
export async function getServerSideProps(context: ServerSideContext): Promise<Record<string, any>> {
  return {
    props: {
      session: await getServerSession(context.req, context.res, authOptions),
    },
  };
}

export default withRouter(SignIn);
