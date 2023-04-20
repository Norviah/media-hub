import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import withRouter from 'next/dist/client/with-router';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import { Link } from '@/components/Link';
import { SignUpForm } from '@/layout/auth';
import { getServerSession } from 'next-auth';
import { SessionContext } from 'next-auth/react';
import { Component } from 'react';
import { authOptions } from '../api/auth/[...nextauth]';

import type { GetServerSidePropsContext as ServerSideContext } from 'next';
import type { WithRouterProps } from 'next/dist/client/with-router';

interface AppState {
  showPassword: boolean;
  loading: boolean;
}

class SignUp extends Component<WithRouterProps, AppState> {
  public static noAppbar = true;

  /**
   *
   */
  public state: AppState = { showPassword: false, loading: false };

  /**
   *
   * @returns
   */
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

  public render() {
    return (
      <>
        <Container component="main" maxWidth="xs">
          <Box
            sx={{
              marginTop: 8,
              // display: 'flex',
              // flexDirection: 'column',
              alignItems: 'center',
            }}
          >
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
                Sign Up
              </Typography>
            </Box>
            <SignUpForm
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

            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link
                  href={{
                    pathname: '/auth/signin',
                    query: { callbackUrl: this.callbackUrl() },
                  }}
                  variant="body2"
                >
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
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

export default withRouter(SignUp);
