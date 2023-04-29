import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';

import { Skeleton } from '@mui/material';

export default function MediaSkeleton(): JSX.Element {
  return (
    <Card>
      <CardMedia sx={{ height: 300 }}>
        <Skeleton variant="rectangular" sx={{ height: 300 }} />
      </CardMedia>

      <Box sx={{ p: 1.5 }}>
        <Stack spacing={2}>
          <Box>
            <Typography variant="subtitle2" noWrap>
              <Skeleton />
            </Typography>
            <Typography variant="subtitle2" sx={{ color: 'text.secondary' }} noWrap>
              <Skeleton />
            </Typography>
          </Box>

          <Stack direction="row">
            <>
              <IconButton>
                <FavoriteIcon />
              </IconButton>
              <IconButton>
                <LibraryAddIcon />
              </IconButton>
            </>
            <Box sx={{ flexGrow: 1 }} />
            <Button variant="text">Details</Button>
          </Stack>
        </Stack>
      </Box>
    </Card>
  );
}
