import Box from '@mui/material/Box';
import LayoutContainer from './layout/LabelContainer';
import IconStyle from './styles/IconStyle';

import { useTheme } from '@mui/material/styles';

import type { LabelProps } from '@/types/components/label';

/**
 * Creates a small box within a container for labeling purposes.
 *
 * `Label` is a simple UI component that can be used to add a label to any
 * container. The component creates a small box within the specified container,
 * the location of which can be defined using the `spacing` prop.
 * @param props
 * @returns
 * @example
 * ```tsx
 * import Box from '@mui/material/Box';
 * import Card from '@mui/material/Card';
 * import CardContent from '@mui/material/CardContent';
 * import CardMedia from '@mui/material/CardMedia';
 * import Typography from '@mui/material/Typography';
 *
 * import { Label } from '@/components/label';
 *
 * export default function Page(): JSX.Element {
 *   return (
 *     <Box sx={{ p: 2 }}>
 *       <Card sx={{ width: 350 }}>
 *         <Label
 *           color="info"
 *           variant="filled"
 *           text="Sample Text"
 *           spacing={{
 *             top: 16,
 *             right: 16,
 *           }}
 *         />
 *         <CardMedia
 *           sx={{ height: 200 }}
 *           image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/IGbeFv5Ji4W0x530JcSHiQpamY.jpg"
 *           title="green iguana"
 *         />
 *         <CardContent>
 *           <Typography gutterBottom variant="h5" component="div">
 *             Title
 *           </Typography>
 *           <Typography variant="body2" color="text.secondary">
 *             Lorem ipsum dolor sit amet, consectetur adipiscing elit.
 *             Nulla non purus risus. Sed ut dignissim erat. Nam consequat
 *             ullamcorper consequat.
 *           </Typography>
 *         </CardContent>
 *       </Card>
 *     </Box>
 *   );
 * }
 * ```
 *
 * In this example, we are creating a card and defining a `Label` component to
 * be rendered within the top-right corner of the card.
 */
export default function Label(props: LabelProps): JSX.Element {
  const theme = useTheme();

  return (
    <LayoutContainer
      component="span"
      sx={{
        ...(props.icons?.start && { pl: 0.75 }),
        ...(props.icons?.end && { pr: 0.75 }),
        ...props.sx,
      }}
      theme={theme}
      {...props}
    >
      {props.icons?.start && <Box sx={{ mr: 0.75, ...IconStyle }}>{<props.icons.start />}</Box>}
      {typeof props.data === 'string' ? props.data : <Box sx={IconStyle}>{<props.data />}</Box>}
      {props.icons?.end && <Box sx={{ ml: 0.75, ...IconStyle }}>{<props.icons.end />}</Box>}
    </LayoutContainer>
  );
}
