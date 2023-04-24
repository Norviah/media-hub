import SvgIcon from '@mui/material/SvgIcon';

import { styled } from '@mui/material/styles';

import type { Theme } from '@mui/material/styles';
import type { FlipIconProps } from '@/types/components/FlipIconProps';

/**
 * A component that flips an icon when active.
 *
 * `FlipIcon` can be implemented to present an icon that can be flipped, most
 * commonly a menu. The `active` property must be passed to the component to
 * represent the state of the icon, causing it to flip accordingly.
 *
 * This component can be implemented anywhere where an icon can be used.
 * @example
 * ```tsx
 * import { FlipIcon } from '@/components/FlipIcon';
 *
 * function Menu() {
 *   const [anchor, setAnchor] = useState<null | HTMLElement>(null);
 *
 *   const handleOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
 *     setAnchor(event.currentTarget);
 *   };
 *
 *   const handleClose = () => {
 *     setAnchor(null);
 *   };
 *
 *   return (
 *     <>
 *       <Button
 *         color="inherit"
 *         disableRipple
 *         onClick={handleOpen}
 *         endIcon={<FlipIcon icon={ExpandMoreIcon} active={Boolean(anchor)} />}
 *       >
 *         Menu
 *       </Button>
 *       <Menu
 *         keepMounted
 *         anchorEl={anchor}
 *         open={Boolean(anchor)}
 *         onClose={handleClose}
 *         anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
 *         transformOrigin={{ vertical: 'top', horizontal: 'right' }}
 *       >
 *         <MenuItem key={'item-1'} onClick={handleClose}>
 *           Menu Option 1
 *         </MenuItem>
 *         <MenuItem key={'item-2'} onClick={handleClose}>
 *           Menu Option 2
 *         </MenuItem>
 *       </Menu>
 *     </>
 *   );
 * }
 * ```
 *
 * The above is a simple example of how to use `FlipIcon` to represent the state
 * of a menu. Within the menu, `FlipIcon` is implemented as the `endIcon` of a
 * `Button` component.
 *
 * The menu's open state is passed to `FlipIcon`, allowing the icon to flip
 * accordingly.
 */
// export const FlipIcon = styled((props: FlipIconProps): JSX.Element => {
//   return <props.icon {...props} />;
// })((props: { active: boolean; theme: Theme }) => ({
//   transform: !props.active ? 'rotate(0deg)' : 'rotate(180deg)',
//   marginLeft: 'auto',
//   transition: props.theme.transitions.create('transform', {
//     duration: props.theme.transitions.duration.shortest,
//   }),
// }));

export const FlipIcon = styled(SvgIcon, {
  shouldForwardProp: (prop) => prop !== 'active',
})<FlipIconProps>(({ theme, active }) => ({
  transform: !active ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));
