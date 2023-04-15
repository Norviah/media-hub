import LoadingButton from '@mui/lab/LoadingButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import withRouter from 'next/dist/client/with-router';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { Link } from '@/components/Link';
import { Component } from 'react';

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
            <Stack useFlexGap spacing={2} sx={{ pt: 2 }}>
              <TextField required fullWidth id="username" label="Username" name="username" />
              <TextField
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
              <TextField
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
            </Stack>
            <LoadingButton
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 5, mb: 2 }}
              loading={this.state.loading}
            >
              Sign In
            </LoadingButton>
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

export default withRouter(SignUp);
