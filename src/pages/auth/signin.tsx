import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import withRouter from 'next/dist/client/with-router';
import Image from 'next/image';

import GoogleIcon from '@mui/icons-material/Google';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';

import * as colors from '@/theme/colors';

import { SignInForm, AuthErrors } from '@/layout/auth';
import { Link } from '@/components/Link';
import { Toast } from '@/structs/Toast';
import { getServerSession } from 'next-auth';
import { SessionContext, signIn } from 'next-auth/react';
import { Component } from 'react';
import { authOptions } from '../api/auth/[...nextauth]';

import type { GetServerSidePropsContext as ServerSideContext } from 'next';
import type { WithRouterProps } from 'next/dist/client/with-router';

interface AppState {
  showPassword: boolean;
  loading: boolean;
}

class SignIn extends Component<WithRouterProps & { error?: keyof typeof AuthErrors }, AppState> {
  public static noAppbar = true;
  public state: AppState = {
    showPassword: false,
    loading: false,
  };

  public static contextType = SessionContext;

  public context!: React.ContextType<typeof SessionContext>;

  public callbackUrl(): string {
    const { callbackUrl: callback } = this.props.router.query;

    return callback ? (Array.isArray(callback) ? callback[0] : callback) : '/';
  }

  public signInWithProvider(provider: string): void {
    this.setState({ loading: true });
    signIn(provider, { callbackUrl: this.callbackUrl() });
  }

  /**
   *
   */
  public componentDidMount(): void {
    if (this.context?.status === 'authenticated') {
      this.props.router.push('/');
    }

    if (this.props.error) {
      Toast.Error({ message: AuthErrors[this.props.error] });
    }
  }

  public render() {
    return (
      <>
        <Container component="main" maxWidth="xs">
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
          </Box>
          <SignInForm
            callbackUrl={this.callbackUrl()}
            password={{
              show: this.state.showPassword,
              set: (show: boolean) => this.setState({ showPassword: show }),
            }}
            loading={{
              value: this.state.loading,
              set: (loading: boolean) => this.setState({ loading: loading }),
            }}
          />
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link
                href={{
                  pathname: '/auth/signup',
                  query: { callbackUrl: this.callbackUrl() },
                }}
                variant="body2"
              >
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
          <Divider sx={{ pt: 2, pb: 2 }}>OR</Divider>
          <Stack direction="row" spacing={2}>
            <Button
              fullWidth
              size="large"
              variant="outlined"
              onClick={() => this.signInWithProvider('google')}
              disabled={this.state.loading}
            >
              <GoogleIcon sx={{ color: colors.GOOGLE.RED, width: 22, height: 22 }} />
            </Button>
            <Button fullWidth size="large" variant="outlined" disabled={this.state.loading}>
              <TwitterIcon sx={{ color: colors.TWITTER.BLUE, width: 22, height: 22 }} />
            </Button>
            <Button
              fullWidth
              size="large"
              variant="outlined"
              onClick={() => this.signInWithProvider('discord')}
              disabled={this.state.loading}
            >
              <Icon>
                <Image src="/assets/icons/discord.svg" alt="Discord" width={22} height={22} />
              </Icon>
            </Button>
          </Stack>
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
export async function getServerSideProps(context: ServerSideContext): Promise<{
  props: { session: any; error: keyof typeof AuthErrors | null };
}> {
  const error = Array.isArray(context.query.error) ? context.query.error[0] : context.query.error;

  return {
    props: {
      session: await getServerSession(context.req, context.res, authOptions),
      error: (AuthErrors[error as keyof typeof AuthErrors] ? error : null) as
        | keyof typeof AuthErrors
        | null,
    },
  };
}

export default withRouter(SignIn);
