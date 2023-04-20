import account from '@/components/_mock/account';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Button from '@mui/lab/LoadingButton';
import NotificationsPopover from './NotificationsPopover';

import { Link } from '@/components/Link';
import { signOut, useSession } from 'next-auth/react';
import { alpha } from '@mui/material/styles';
import { useState } from 'react';

import type { Session } from 'next-auth';

function Menu(props: { redirect: string; session: Session }): JSX.Element {
  const [open, setOpen] = useState(null);

  const handleOpen = (event) => {
    setOpen(event.currentTarget);
  };

  const handleClose = () => {
    setOpen(null);
  };

  return (
    <>
      <IconButton
        onClick={handleOpen}
        sx={{
          p: 0,
          ...(open && {
            '&:before': {
              zIndex: 1,
              content: "''",
              width: '100%',
              height: '100%',
              borderRadius: '50%',
              position: 'absolute',
              bgcolor: (theme) => alpha(theme.palette.grey[900], 0.6),
            },
          }),
        }}
      >
        <Avatar
          src={props.session.user?.image ?? undefined}
          alt="photoURL"
          sx={{
            width: 45,
            height: 45,
          }}
        >
          {props.session.user?.name[0]}
        </Avatar>
      </IconButton>

      <Popover
        open={Boolean(open)}
        anchorEl={open}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{ vertical: 'top', horizontal: 'right' }}
        PaperProps={{
          sx: {
            p: 0,
            mt: 1.5,
            ml: 0.75,
            width: 180,
            '& .MuiMenuItem-root': {
              typography: 'body2',
              borderRadius: 0.75,
            },
          },
        }}
      >
        <Box sx={{ my: 1.5, px: 2.5 }}>
          <Typography variant="subtitle2" noWrap>
            {props.session.user?.name}
          </Typography>
          <Typography variant="body2" sx={{ color: 'text.secondary' }} noWrap>
            {props.session.user?.email}
          </Typography>
        </Box>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <Stack sx={{ p: 1 }}>
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem
          onClick={() => {
            handleClose();
            signOut({ callbackUrl: props.redirect });
          }}
          sx={{ m: 1 }}
        >
          Logout
        </MenuItem>
      </Popover>
    </>
  );
}

/**
 * The user menu.
 *
 * This component lies within the application's appbar, and will provide the
 * user with a menu of options regarding their account, such as signing out,
 * going to settings, etc.
 *
 * If the user is not signed in, the component instead will present the user a
 * button to sign in.
 * @param props The properties of the component.
 */
export default function UserMenu(props: { redirect: string }): JSX.Element {
  const session = useSession();

  const [disabled, setDisabled] = useState(false);

  return session.data ? (
    <>
      {/* <NotificationsPopover /> */}
      <Menu redirect={props.redirect} session={session.data} />
    </>
  ) : (
    <Button
      LinkComponent={Link}
      color="inherit"
      href={`/auth/signin?callbackUrl=${props.redirect}`}
      onClick={() => {
        setDisabled(true);
      }}
      loading={disabled}
    >
      Sign In
    </Button>
  );
}
