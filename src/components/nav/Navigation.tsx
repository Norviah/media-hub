import Logo from '@/components/Logo';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';

import NavSection from './NavSection';

import { useResponsive } from '@/hooks/useResponsive';
import { useSession } from 'next-auth/react';

import * as constants from '@/util/constants';

export default function Navigation({ openNav, onCloseNav }) {
  const session = useSession();
  const isDesktop = useResponsive('up', 'lg');

  // useEffect(() => {
  //   if (openNav) {
  //     onCloseNav();
  //   }
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [pathname]);

  const renderContent = (
    <>
      <Box sx={{ px: 2.5, py: 3, display: 'inline-flex' }}>
        <Logo />
      </Box>
      <NavSection authenticated={session.status === 'authenticated'} />
    </>
  );

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: constants.SPACING.NAV },
      }}
    >
      {isDesktop ? (
        <Drawer
          variant="permanent"
          PaperProps={{
            sx: {
              width: constants.SPACING.NAV,
              bgcolor: 'background.default',
              borderRightStyle: 'dashed',
            },
          }}
        >
          {renderContent}
        </Drawer>
      ) : (
        <Drawer
          open={openNav}
          onClose={onCloseNav}
          ModalProps={{
            keepMounted: true,
          }}
          PaperProps={{
            sx: {
              width: constants.SPACING.NAV,
              bgcolor: 'background.default',
            },
          }}
        >
          {renderContent}
        </Drawer>
      )}
    </Box>
  );
}
