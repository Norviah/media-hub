import LoadingButton from '@mui/lab/LoadingButton';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import Container from '@mui/material/Container';
import Divider from '@mui/material/Divider';
import FormControlLabel from '@mui/material/FormControlLabel';
import Grid from '@mui/material/Grid';
import Icon from '@mui/material/Icon';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import withRouter from 'next/dist/client/with-router';
import Image from 'next/image';

import GoogleIcon from '@mui/icons-material/Google';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import * as colors from '@/theme/colors';

import { Link } from '@/components/Link';
import { Header } from '@/sections/auth';
import { Component } from 'react';

import type { WithRouterProps } from 'next/dist/client/with-router';

interface AppState {
  showPassword: boolean;
  loading: boolean;
}

class SignIn extends Component<WithRouterProps, AppState> {
  public static noAppbar = true;
  public state: AppState = {
    showPassword: false,
    loading: false,
  };

  public callbackUrl(): string {
    const { callbackUrl: callback } = this.props.router.query;

    return callback ? (Array.isArray(callback) ? callback[0] : callback) : '/';
  }

  public render() {
    return (
      <>
        <Header router={this.props.router} />
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
          <Stack useFlexGap spacing={2} sx={{ pt: 2 }}>
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
            <Button fullWidth size="large" variant="outlined">
              <GoogleIcon sx={{ color: colors.GOOGLE.RED, width: 22, height: 22 }} />
            </Button>
            <Button fullWidth size="large" variant="outlined">
              <TwitterIcon sx={{ color: colors.TWITTER.BLUE, width: 22, height: 22 }} />
            </Button>
            <Button fullWidth size="large" variant="outlined">
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

export default withRouter(SignIn);
