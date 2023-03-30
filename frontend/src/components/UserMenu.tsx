import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Link from 'next/link';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

import type { Session } from 'next-auth';

/**
 * The component that represents the logged in state.
 *
 * `SignOut` is the component that will be rendered when the user is signed in,
 * the component will present the user with options related to their account,
 * such as logging out, going to profile settings, etc.
 * @param props The properties of the component.
 */
function SignOut(props: { handleClose: () => void; session: Session }) {
  return (
    <>
      <Box
        sx={{
          py: 1.5,
          px: 2,
        }}
      >
        <Typography variant="overline">{props.session.user?.name}</Typography>
        <Typography color="text.secondary" variant="body2">
          {props.session.user?.email}
        </Typography>
      </Box>
      <Divider />
      <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1,
          },
        }}
      >
        <Link href="/settings" style={{ textDecoration: 'none', color: 'inherit' }}>
          <MenuItem onClick={props.handleClose}>Settings</MenuItem>
        </Link>
        <MenuItem onClick={() => signOut({ callbackUrl: '/' })}>Log Out</MenuItem>
      </MenuList>
    </>
  );
}

/**
 * The component that represents the sign in state.
 *
 * `SignIn` is the component that will be rendered when the user is not signed
 * in. The component will populate the menu with a single option, which will
 * allow the user to sign in.
 *
 * The application implements the `next-auth` package for authentication, so we
 * will be using the provided `signIn` function to initiate the process.
 * @param props The properties of the component.
 */
function SignIn(props: { redirect: string | undefined }) {
  return (
    <>
      <MenuList
        disablePadding
        dense
        sx={{
          p: '8px',
          '& > *': {
            borderRadius: 1,
          },
        }}
      >
        <MenuItem onClick={() => signIn(undefined, { callbackUrl: props.redirect ?? '/' })}>
          Signin
        </MenuItem>
      </MenuList>
    </>
  );
}

/**
 * The component that represents the user menu.
 *
 * `UserMenu` is the menu that lies within the bar for the application, this
 * menu will provide the user with options regarding their account, such as
 * going to profile settings, logging out, etc.
 * @param props The properties of the component.
 */
export function UserMenu(props: { redirect?: string }): JSX.Element {
  // Similarly to the `ThemeToggler` component, we will be using the `Menu`
  // component from the Material UI library, which will allow us to provide the
  // user with a menu of options to choose from.

  // Due to this, we'll again be implementing the component's state to reference
  // the element to anchor the menu to.
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  /**
   * Handles the click event of the anchored element.
   *
   * As this function implements the `Menu` component, an anchor element is
   * required to be provided to the component, which will be the element that
   * the menu will be anchored to.
   *
   * `handleClick` will set the anchor element to the element that was clicked,
   * which will re-render the component, allowing the menu to be rendered.
   * @param event The click event of the element.
   */
  function handleClick(event: React.MouseEvent<HTMLElement>) {
    setAnchorEl(event.currentTarget);
  }

  /**
   * Handles the closing of the menu.
   *
   * `handleClose` will set the anchor element to `null`, which will re-render
   * the component, allowing the menu to be closed.
   */
  function handleClose() {
    setAnchorEl(null);
  }

  const session = useSession();

  return (
    <>
      <IconButton onClick={handleClick}>
        {session.data?.user ? (
          <Avatar src={session.data.user.image ?? undefined}>
            {session.data.user?.name?.charAt(0)}
          </Avatar>
        ) : (
          <PersonIcon />
        )}
      </IconButton>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'bottom',
        }}
        onClose={handleClose}
        open={Boolean(anchorEl)}
        PaperProps={{ sx: { width: 200 } }}
      >
        {session.data?.user ? (
          <SignOut handleClose={handleClose} session={session.data} />
        ) : (
          <SignIn redirect={props.redirect} />
        )}
      </Popover>
    </>
  );
}
