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

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { enqueueSnackbar } from 'notistack';
import { ThemeSelector } from '@/components/ThemeSelector';
import { StatusCodes } from 'http-status-codes';
import { signIn } from 'next-auth/react';
import { Component } from 'react';
import { API } from '@/structs/API';

interface AppState {
  showPassword: boolean;
}

export default class SignUp extends Component<unknown, AppState> {
  public static noAppbar = true;

  /**
   *
   */
  public state: AppState = { showPassword: false };

  public async handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const credentials = {
      email: data.get('email'),
      password: data.get('password'),
      name: data.get('username'),
    };

    const result = await API.Post('user/signup', {
      ...credentials,
      method: 'CREDENTIALS',
    });

    if (result.success && result.code === StatusCodes.CREATED) {
      enqueueSnackbar('Account created successfully', { variant: 'success' });
    } else if (result.code === StatusCodes.CONFLICT) {
      enqueueSnackbar('Account already exists.', { variant: 'error' });
    } else {
      enqueueSnackbar('Something went wrong, please try again.', { variant: 'error' });
    }

    if (result.success && result.code === StatusCodes.CREATED) {
      signIn('credentials', { ...credentials, callbackUrl: '/' });
    }
  }

  public render() {
    return (
      <>
        <Grid container justifyContent="flex-end" style={{ padding: 10 }}>
          <Grid item>
            <ThemeSelector />
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
                  <Link href="/auth/signin" variant="body2">
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
