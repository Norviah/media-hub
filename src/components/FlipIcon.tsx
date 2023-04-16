import { styled } from '@mui/material/styles';

import type { Theme } from '@mui/material/styles';
import type { FlipIconProps } from '@/types/components/FlipIconProps';

export const FlipIcon = styled((props: FlipIconProps) => {
  const { icon: Icon, ...other } = props;
  return <Icon {...other} />;
})((props: { open: boolean; theme: Theme }) => ({
  transform: !props.open ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: props.theme.transitions.create('transform', {
    duration: props.theme.transitions.duration.shortest,
  }),
}));
