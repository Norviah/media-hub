import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

import { Skeleton } from '@mui/material';

export function ItemSkeleton(): JSX.Element {
  return (
    <Card>
      <Skeleton variant="rectangular" height={250} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          <Skeleton />
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          <Skeleton />
        </Typography>
      </CardContent>

      <CardActions sx={{ display: 'flex', justifyContent: 'flex-end', m: 1 }}>
        <Stack direction="row">
          <IconButton>
            <FavoriteIcon />
          </IconButton>
          <IconButton>
            <LibraryAddIcon />
          </IconButton>
        </Stack>
        <Box sx={{ flexGrow: 1 }} />
        <Skeleton variant="rectangular" width={100} height={36} />
      </CardActions>
    </Card>
  );
}
