import LoadingButton from '@mui/lab/LoadingButton';
import Checkbox from '@mui/material/Checkbox';
import FormControlLabel from '@mui/material/FormControlLabel';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import AuthErrors from '../util/AuthErrors';
import ValidationErrors from '../util/ValidationErrors';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';
import { Toast } from '@/structs/Toast';

import * as regex from '@/util/regex';

import type { FormProps } from '@/types/layout/auth/FormProps';
import type { SignInResponse } from 'next-auth/react';
import { useRouter } from 'next/router';

function findError(type: string, field: string): string | undefined {
  if (!ValidationErrors[type as keyof typeof ValidationErrors]) {
    return undefined;
  }

  //
  else if (typeof ValidationErrors[type] === 'function') {
    return ValidationErrors[type](field);
  }

  //
  else {
    return ValidationErrors[type][field];
  }
}

export default function SignInForm(props: FormProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const router = useRouter();

  async function onSubmit(data: { email: string; password: string }): Promise<void> {
    props.loading.set(true);

    try {
      const result = (await signIn('credentials', {
        email: data.email,
        password: data.password,
        callbackUrl: props.callbackUrl,
        redirect: false,
      })) as SignInResponse;

      if (result?.error) {
        Toast.Error({ message: AuthErrors[result?.error] });
      }

      if (result.ok) {
        Toast.Success({ message: 'Signed in.' });
        router.push(result.url ?? props.callbackUrl ?? '/');
        return;
      }
    } catch (error) {
      Toast.Error({ message: 'An unknown error occurred. Please try again later.' });
    }

    props.loading.set(false);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack useFlexGap spacing={2} sx={{ pt: 2 }}>
        <TextField
          fullWidth
          required
          id="email"
          label="Email Address"
          autoComplete="email"
          error={errors.email ? true : false}
          helperText={errors.email ? findError(errors.email.type, 'email') : ''}
          {...register('email', { required: true, pattern: regex.FORM.EMAIL })}
        />
        <TextField
          required
          fullWidth
          label="Password"
          type={props.password.show ? 'text' : 'password'}
          id="password"
          autoComplete="current-password"
          error={errors.password ? true : false}
          helperText={errors.password ? findError(errors.password.type, 'password') : ''}
          InputProps={{
            endAdornment: (
              <>
                <InputAdornment position="start">
                  <IconButton edge="end" onClick={() => props.password.set(!props.password.show)}>
                    {props.password.show ? <VisibilityOffIcon /> : <VisibilityIcon />}
                  </IconButton>
                </InputAdornment>
              </>
            ),
          }}
          {...register('password', {
            required: true,
            minLength: 8,
            pattern: regex.FORM.PASSWORD,
          })}
        />
      </Stack>
      {errors.exampleRequired && <span>This field is required</span>}
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 3, mb: 2 }}
        loading={props.loading.value}
      >
        Sign In
      </LoadingButton>
    </form>
  );
}
