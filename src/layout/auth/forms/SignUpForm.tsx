import LoadingButton from '@mui/lab/LoadingButton';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { API } from '@/structs/API';
import { Toast } from '@/structs/Toast';
import { StatusCodes } from 'http-status-codes';
import { signIn } from 'next-auth/react';
import { useForm } from 'react-hook-form';

import * as regex from '@/util/regex';
import * as constants from '../util/constants';

import type { FormProps } from '@/types/layout/auth/FormProps';
import type { SignUpFormData } from '../types/SignUpFormData';

export default function SignUpForm(props: FormProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignUpFormData>();

  async function onSubmit(data: SignUpFormData): Promise<void> {
    props.loading.set(true);

    const result = await API.Post({ endpoint: '/api/user/signup', data });

    props.loading.set(false);

    if (result.status === StatusCodes.CREATED) {
      Toast.Success({ message: 'Account created successfully' });
      signIn('credentials', { ...data, callbackUrl: props.callbackUrl });
    } else if (result.status === StatusCodes.CONFLICT) {
      Toast.Error({ message: 'Account already exists.' });
    } else {
      Toast.Error({ message: 'Something went wrong, please try again.' });
    }
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Stack useFlexGap spacing={2} sx={{ pt: 2 }}>
        <TextField
          required
          fullWidth
          id="username"
          label="Username"
          error={errors.username ? true : false}
          helperText={errors.username ? (errors.username.message as string) : undefined}
          {...register('username', {
            required: {
              value: true,
              message: constants.ERRORS.FORM.REQUIRED,
            },
            pattern: {
              value: regex.FORM.USERNAME,
              message: constants.ERRORS.FORM.USERNAME.PATTERN,
            },
            minLength: {
              value: constants.USERNAME.MIN_LENGTH,
              message: constants.ERRORS.FORM.USERNAME.MIN_LENGTH,
            },
            maxLength: {
              value: constants.USERNAME.MAX_LENGTH,
              message: constants.ERRORS.FORM.USERNAME.MAX_LENGTH,
            },
          })}
        />
        <TextField
          required
          fullWidth
          id="email"
          label="Email Address"
          autoComplete="email"
          error={errors.email ? true : false}
          helperText={errors.email ? (errors.email.message as string) : undefined}
          {...register('email', {
            required: {
              value: true,
              message: constants.ERRORS.FORM.REQUIRED,
            },
            pattern: {
              value: regex.FORM.EMAIL,
              message: constants.ERRORS.FORM.EMAIL.PATTERN,
            },
          })}
        />
        <TextField
          required
          fullWidth
          label="Password"
          type={props.password.show ? 'text' : 'password'}
          id="password"
          autoComplete="current-password"
          error={errors.password ? true : false}
          helperText={errors.password ? (errors.password.message as string) : undefined}
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
            required: {
              value: true,
              message: constants.ERRORS.FORM.REQUIRED,
            },
            minLength: {
              value: constants.PASSWORD.MIN_LENGTH,
              message: constants.ERRORS.FORM.PASSWORD.MIN_LENGTH,
            },
            pattern: {
              value: regex.FORM.PASSWORD,
              message: constants.ERRORS.FORM.PASSWORD.PATTERN,
            },
          })}
        />
      </Stack>
      <LoadingButton
        type="submit"
        fullWidth
        variant="contained"
        sx={{ mt: 5, mb: 2 }}
        loading={props.loading.value}
      >
        Sign In
      </LoadingButton>
    </form>
  );
}
