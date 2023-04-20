import ListItemButton from '@mui/material/ListItemButton';

import { Link } from '@/components/Link';
import { styled } from '@mui/material/styles';

import type { ListItemButtonProps } from '@mui/material';

export const NavItem = styled((props: ListItemButtonProps & { href: string }) => (
  <ListItemButton LinkComponent={Link} disableGutters {...props} />
))(({ theme }) => ({
  ...theme.typography.body2,
  height: 48,
  position: 'relative',
  textTransform: 'capitalize',
  color: theme.palette.text.secondary,
  borderRadius: theme.shape.borderRadius,
}));

export default NavItem;
