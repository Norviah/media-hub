import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

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

      <CardContent>
        <Skeleton />
      </CardContent>
    </Card>
  );
}
