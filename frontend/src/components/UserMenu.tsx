import PersonIcon from '@mui/icons-material/Person';
import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import MenuList from '@mui/material/MenuList';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Link from '@/components/Link';
import Button from '@mui/material/Button';

import { signIn, signOut, useSession } from 'next-auth/react';
import { useState } from 'react';

import type { Session } from 'next-auth';

/**
 * The user menu.
 *
 * This component represents the actual implementation of the user menu, which
 * will be rendered within the application's appbar if the user is signed in.
 * @param props The properties of the component.
 * @returns The user menu.
 */
function Menu(props: { redirect: string; session: Session }): JSX.Element {
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

  return (
    <>
      <IconButton onClick={handleClick}>
        {props.session.user ? (
          <Avatar src={props.session.user.image ?? undefined}>
            {props.session.user?.name?.charAt(0)}
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
        <Box
          sx={{
            py: 1.5,
            px: 3,
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
            <MenuItem onClick={handleClose}>Settings</MenuItem>
          </Link>
          <MenuItem onClick={() => signOut({ callbackUrl: props.redirect })}>Sign Out</MenuItem>
        </MenuList>
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
export function UserMenu(props: { redirect: string }): JSX.Element {
  const session = useSession();

  return session.data ? (
    <Menu redirect={props.redirect} session={session.data} />
  ) : (
    <Button
      color="inherit"
      onClick={() => signIn('google', { callbackUrl: props.redirect }, { prompt: 'login' })}
    >
      Sign In
    </Button>
  );
}
