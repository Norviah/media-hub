import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import ValidationErrors from '../util/ValidationErrors';

import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';

import { StatusCodes } from 'http-status-codes';
import { useForm } from 'react-hook-form';
import { API } from '@/structs/API';

import * as regex from '@/util/regex';

import type { FormProps } from '@/types/layout/auth/FormProps';
import { Toast } from '@/structs/Toast';
import { signIn } from 'next-auth/react';

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

export default function SignUpForm(props: FormProps): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  async function onSubmit(data: {
    email: string;
    password: string;
    username: string;
  }): Promise<void> {
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
          helperText={errors.username ? findError(errors.username.type, 'username') : ''}
          {...register('username', { required: true, pattern: regex.FORM.USERNAME })}
        />
        <TextField
          required
          fullWidth
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
