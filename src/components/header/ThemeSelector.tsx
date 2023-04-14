import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import Popover from '@mui/material/Popover';
import Stack from '@mui/material/Stack';

import { systemColorScheme } from '@/util/theme';
import { useTheme } from '@/hooks/useTheme';
import { useState } from 'react';

import type { IconButtonProps } from '@mui/material/IconButton';
import type { SvgIconProps } from '@mui/material/SvgIcon';
import type { ThemePresets, Themes } from '@/types/theme';

/**
 * The theme toggler component.
 *
 * `ThemeToggler` acts as the theme manager for the application, allowing the
 * user to change the theme of the application. The component provides the user
 * with a menu of the following options:
 * - `Light Mode`
 * - `Dark Mode`
 * - `System`
 *
 * As the component implements the `useTheme` hook, changing the theme of the
 * application will reflect the change within the state of the base component,
 * forcing the application to re-render.
 *
 * This component can be used anywhere within the application.
 */
export function ThemeSelector(props?: {
  button?: IconButtonProps;
  icon?: SvgIconProps;
}): JSX.Element {
  // To create the theme selector, we will be using the `Menu` component from
  // the Material UI library, which will allow us to provide the user with a
  // meny of options to choose from.

  // In order to use the `Menu` component, we will need to provide it an anchor
  // element, which will be the element that the menu will be anchored to. We
  // will set the anchor element within the state of the component, and will
  // provide the `Menu` component with the anchor element as a prop.
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  // Additionally, we will implement our custom context, which represents
  // information regarding the theme of the application. Our implementation of
  // the `_app` component provides the theme context to all components within
  // the application, thus, we can then use the `useTheme` hook to access the
  // context.

  // By using the `useTheme` hook, we have access to the current theme of the
  // application along with a function to change the theme of the application.
  const prefers = useTheme();

  // Represents the current theme of the application retrieved from the
  // `useTheme` hook, which is specified from the `_app` component.
  const theme: Themes = prefers.theme === 'system' ? systemColorScheme() : prefers.theme;

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

  /**
   * Changes the application's theme.
   *
   * `handleThemeChange` is called whenever a user selects an option from the
   * provided menu. The function will call the `setTheme` method, which was
   * provided by the `_app` component, which will change the theme of the entire
   * application. The function will then close the menu.
   * @param theme The theme to change the application to.
   */
  function handleThemeChange(theme: ThemePresets) {
    handleClose();
    prefers.setTheme(theme);
  }

  return (
    <>
      <IconButton onClick={handleClick} {...props?.button}>
        {theme === 'light' ? <LightModeIcon {...props?.icon} /> : <DarkModeIcon {...props?.icon} />}
      </IconButton>
      <Popover
        open={Boolean(anchorEl)}
        anchorEl={anchorEl}
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
        <Stack sx={{ p: 1 }} spacing={1}>
          <MenuItem onClick={() => handleThemeChange('light')} selected={prefers.theme === 'light'}>
            <LightModeIcon fontSize="small" />
            <Typography variant="body2" sx={{ pl: 1 }}>
              Light Mode
            </Typography>
          </MenuItem>
          <MenuItem onClick={() => handleThemeChange('dark')} selected={prefers.theme === 'dark'}>
            <DarkModeIcon fontSize="small" />
            <Typography variant="body2" sx={{ pl: 1 }}>
              Dark Mode
            </Typography>
          </MenuItem>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />

        <MenuItem
          onClick={() => handleThemeChange('system')}
          selected={prefers.theme === 'system'}
          sx={{ m: 1 }}
        >
          System
        </MenuItem>
      </Popover>
    </>
  );
}
