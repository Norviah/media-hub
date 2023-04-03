import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Link from '@mui/material/Link';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import withRouter from 'next/dist/client/with-router';
import NextLink from 'next/link';

import HomeIcon from '@mui/icons-material/Home';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { ThemeSelector } from '@/components/ThemeSelector';
import { authOptions } from '@/pages/api/auth/[...nextauth]';
import { StatusCodes } from 'http-status-codes';
import { getServerSession } from 'next-auth';
import { SessionContext, signIn } from 'next-auth/react';
import { Component } from 'react';
import { toast } from 'react-toastify';

import type { GetServerSidePropsContext as ServerSideContext } from 'next';
import type { WithRouterProps } from 'next/dist/client/with-router';

interface AppState {
  showPassword: boolean;
}

class SignUp extends Component<WithRouterProps, AppState> {
  public static noAppbar = true;

  /**
   *
   */
  public state: AppState = { showPassword: false };

  public static contextType = SessionContext;

  public context!: React.ContextType<typeof SessionContext>;

  public async handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const credentials = {
      email: data.get('email'),
      name: data.get('username'),
      password: data.get('password'),
    };

    const result = await fetch('/api/user/signup', {
      method: 'POST',
      body: JSON.stringify(credentials),
    });

    if (result.status === StatusCodes.CREATED) {
      toast.success('Account created successfully');
      signIn('credentials', { ...credentials, callbackUrl: '/' });
    } else if (result.status === StatusCodes.CONFLICT) {
      toast.error('Account already exists.');
    } else {
      toast.error('Something went wrong, please try again.');
    }
  }

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
        <Grid container justifyContent="flex-end" style={{ padding: 10 }}>
          <Grid item>
            <ThemeSelector />
            <IconButton onClick={() => this.props.router.push('/')}>
              <HomeIcon />
            </IconButton>
          </Grid>
        </Grid>
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
              Sign Up
            </Typography>
            <Box component="form" onSubmit={this.handleSubmit} sx={{ mt: 3 }}>
              <Grid container spacing={2}>
                <Grid item xs={12}>
                  <TextField required fullWidth id="username" label="Username" name="username" />
                </Grid>
                <Grid item xs={12}>
                  <TextField required fullWidth id="email" label="Email Address" name="email" />
                </Grid>
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type={this.state.showPassword ? 'text' : 'password'}
                    id="password"
                    InputProps={{
                      endAdornment: (
                        <>
                          <InputAdornment position="start">
                            <IconButton
                              edge="end"
                              onClick={() =>
                                this.setState({ showPassword: !this.state.showPassword })
                              }
                            >
                              {this.state.showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
                            </IconButton>
                          </InputAdornment>
                        </>
                      ),
                    }}
                  />
                </Grid>
              </Grid>
              <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
                Sign Up
              </Button>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link component={NextLink} href="/auth/signin" variant="body2">
                    Already have an account? Sign in
                  </Link>
                </Grid>
              </Grid>
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

export default withRouter(SignUp);
