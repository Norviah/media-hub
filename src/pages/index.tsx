import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import CircularProgress from '@mui/material/CircularProgress';
import Collapse from '@mui/material/Collapse';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import Paper from '@mui/material/Paper';
import Rating from '@mui/material/Rating';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Tooltip from '@mui/material/Tooltip';
import Typography from '@mui/material/Typography';
import React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';

import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FavoriteIcon from '@mui/icons-material/Favorite';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import ShareIcon from '@mui/icons-material/Share';

import { Link } from '@/components/Link';
import { THEME } from '@/theme/palette';
import { styled } from '@mui/material/styles';

import type { IconButtonProps } from '@mui/material/IconButton';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest,
  }),
}));

function createData(name: string, calories: number, fat: number, carbs: number, protein: number) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

const MyCard = () => {
  return (
    <Card sx={{ width: 350 }}>
      <CardMedia
        style={{
          height: 0,
          paddingTop: '150%',
          position: 'relative',
        }}
        image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/IGbeFv5Ji4W0x530JcSHiQpamY.jpg"
      >
        <div
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
            background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.7))',
          }}
        />
        <CardContent
          style={{
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            color: 'white',
            padding: 16,
          }}
        >
          <Typography variant="h5">The Title Goes Here</Typography>
          <Typography variant="subtitle1">Subtitle</Typography>
        </CardContent>
      </CardMedia>
    </Card>
  );
};

const MyCard2 = () => {
  const [expanded, setExpanded] = React.useState(false);
  const [liked, setLiked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ width: 350 }}>
      <Link href="/movie/123">
        <CardMedia
          style={{
            height: 0,
            paddingTop: '150%',
            position: 'relative',
          }}
          sx={{
            ':hover': {
              filter: 'brightness(80%)',
              transition: 'all .1s',
            },
          }}
          image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/n30CBH4BoN5Z34tCpOWIPGJYOaS.jpg"
        >
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              top: 0,
              background: 'linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.8))',
            }}
          />
          <CardContent
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              right: 0,
              padding: 16,
              color: 'white',
            }}
          >
            <Typography variant="h5">Made In Abyss</Typography>
          </CardContent>
        </CardMedia>
      </Link>
      <CardActions disableSpacing>
        <div style={{ position: 'relative' }}>
          <IconButton
            aria-label="add to favorites"
            onClick={async () => {
              setLoading(true);
              await new Promise((resolve) => setTimeout(resolve, 1500));
              setLiked(!liked);
              setLoading(false);
              enqueueSnackbar(
                `${!liked ? 'Added' : 'Removed'} 'Made In Abyss' ${
                  !liked ? 'to' : 'from'
                } your favorites`,
                {
                  variant: 'success',
                }
              );
            }}
            disabled={loading}
          >
            {loading ? (
              <CircularProgress
                style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  marginTop: -12,
                  marginLeft: -12,
                }}
                size={24}
              />
            ) : null}
            <FavoriteIcon
              style={{
                color: loading ? THEME.BLACK.MEDIUM : liked ? THEME.RED.MAIN : undefined,
              }}
            />
          </IconButton>
        </div>
        {/* <LoadingButton
          startIcon={<FavoriteIcon />}
          loading={loading}
          onClick={async () => {
            setLoading(true);
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setLiked(!liked);
            setLoading(false);
          }}
        /> */}
        <IconButton aria-label="share">
          <LibraryAddIcon />
        </IconButton>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography variant="h6">Overview</Typography>
          <Typography paragraph sx={{ color: 'text.secondary' }}>
            ousei Arima was a genius pianist until his mother's sudden death took away his ability
            to play. Each day was dull for Kousei. But, then he meets a violinist named Kaori
            Miyazono who has an eccentric playing style. Can the heartfelt sounds of the girl's
            violin lead the boy to play the piano again?
          </Typography>
          <Button variant="contained" color="primary">
            More
          </Button>
        </CardContent>
      </Collapse>
    </Card>
  );

  // return (
  //   <Card sx={{ maxWidth: 345 }}>
  //     <CardHeader
  //       avatar={
  //         <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
  //           R
  //         </Avatar>
  //       }
  //       action={
  //         <IconButton aria-label="settings">
  //           <MoreVertIcon />
  //         </IconButton>
  //       }
  //       title="Shrimp and Chorizo Paella"
  //       subheader="September 14, 2016"
  //     />
  //     <CardMedia
  //       component="img"
  //       height="194"
  //       image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/IGbeFv5Ji4W0x530JcSHiQpamY.jpg"
  //       alt="Paella dish"
  //     />
  //     <CardContent>
  //       <Typography variant="body2" color="text.secondary">
  //         This impressive paella is a perfect party dish and a fun meal to cook together with your
  //         guests. Add 1 cup of frozen peas along with the mussels, if you like.
  //       </Typography>
  //     </CardContent>
  //     <CardActions disableSpacing>
  //       <IconButton aria-label="add to favorites">
  //         <FavoriteIcon />
  //       </IconButton>
  //       <IconButton aria-label="share">
  //         <ShareIcon />
  //       </IconButton>
  //       <ExpandMore
  //         expand={expanded}
  //         onClick={handleExpandClick}
  //         aria-expanded={expanded}
  //         aria-label="show more"
  //       >
  //         <ExpandMoreIcon />
  //       </ExpandMore>
  //     </CardActions>
  //     <Collapse in={expanded} timeout="auto" unmountOnExit>
  //       <CardContent>
  //         <Typography paragraph>Method:</Typography>
  //         <Typography paragraph>
  //           Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
  //           minutes.
  //         </Typography>
  //         <Typography paragraph>
  //           Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
  //           heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
  //           browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
  //           and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
  //           pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
  //           saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
  //         </Typography>
  //         <Typography paragraph>
  //           Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
  //           without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
  //           medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
  //           again without stirring, until mussels have opened and rice is just tender, 5 to 7
  //           minutes more. (Discard any mussels that don&apos;t open.)
  //         </Typography>
  //         <Typography>
  //           Set aside off of the heat to let rest for 10 minutes, and then serve.
  //         </Typography>
  //       </CardContent>
  //     </Collapse>
  //   </Card>
  // );
};

import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';

export function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];

import Backdrop from '@mui/material/Backdrop';
import { Fab, Stack, Tab, Tabs } from '@mui/material';
import { enqueueSnackbar } from 'notistack';
import { bgGradient, hideScrollbarX, hideScrollbarY } from '@/util/css';

function SimpleBackdrop() {
  const [open, setOpen] = React.useState(false);
  const handleClose = () => {
    setOpen(false);
  };
  const handleOpen = () => {
    setOpen(true);
  };

  return (
    <div>
      <Button onClick={handleOpen}>Show backdrop</Button>
      <Backdrop
        sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
        open={open}
        onClick={handleClose}
      >
        <CircularProgress color="inherit" />
      </Backdrop>
    </div>
  );
}

export function ColorTabs() {
  const [value, setValue] = React.useState('one');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example"
      >
        <Tab value="one" label="Item One" disableRipple />
        <Tab value="two" label="Item Two" disableRipple />
        <Tab value="three" label="Item Three" disableRipple />
      </Tabs>
    </Box>
  );
}

export default function MediaCard() {
  const [liked, setLiked] = React.useState(false);
  const [loading, setLoading] = React.useState(false);

  async function handle(): Promise<void> {
    setLoading(true);

    await new Promise((resolve) => setTimeout(resolve, 2000));

    setLoading(false);
    setLiked(!liked);
  }

  return (
    <>
      <Box>
        <Box sx={{ p: 2 }}>
          <Typography variant="h3" component="div" gutterBottom>
            Media Card
          </Typography>
        </Box>
        <Box sx={{ p: 2 }}>
          <Card sx={{ width: 350 }}>
            <CardMedia
              sx={{ height: 200 }}
              image="https://www.themoviedb.org/t/p/w600_and_h900_bestv2/IGbeFv5Ji4W0x530JcSHiQpamY.jpg"
              title="green iguana"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                Your Lie In April
              </Typography>
              <Typography variant="body2" color="text.secondary">
                Lizards are a widespread group of squamate reptiles, with over 6,000 species,
                ranging across all continents except Antarctica
              </Typography>
            </CardContent>
            <Divider />

            <CardActions style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <IconButton style={{ marginRight: 'auto' }} onClick={() => setLiked(!liked)}>
                <FavoriteIcon style={{ color: liked ? THEME.RED.MAIN : undefined }} />
              </IconButton>
              <IconButton>
                <ShareIcon />
              </IconButton>
              <IconButton>
                <ShareIcon />
              </IconButton>
            </CardActions>
          </Card>
        </Box>
        <Box sx={{ p: 2 }}>
          <MyCard />
        </Box>
        <Box sx={{ p: 2 }}>
          <MyCard2 />
        </Box>
        <Box sx={{ p: 2 }}>
          <Card>
            <BasicTable />
          </Card>
        </Box>
        <Box sx={{ p: 2 }}>
          <ComboBox />
        </Box>
        <Grid container sx={{ p: 2 }}>
          <Stack direction={'row'} spacing={1}>
            <Button variant="contained">1</Button>
            <Button color="secondary" variant="contained">
              1
            </Button>
            <Button color="error" variant="contained">
              2
            </Button>
            <Button color="warning" variant="contained">
              4
            </Button>
            <Button color="info" variant="contained">
              4
            </Button>
            <Button color="success" variant="contained">
              5
            </Button>
          </Stack>
        </Grid>
        <Box sx={{ p: 2 }}>
          <Button
            variant="contained"
            onClick={() => {
              enqueueSnackbar('default');
              enqueueSnackbar('error', { variant: 'error' });
              enqueueSnackbar('warning', { variant: 'warning' });
              enqueueSnackbar('info', { variant: 'info' });
              enqueueSnackbar('success', { variant: 'success' });
            }}
          >
            Alert
          </Button>
        </Box>
        <Box sx={{ p: 2 }}>
          <Button variant="text">1</Button>
        </Box>
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
            p: 2,
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <TextField id="filled-basic" label="Filled" variant="filled" />
          <TextField id="standard-basic" label="Standard" variant="standard" />
        </Box>
        <Box sx={{ width: 500 }}>
          <Grid container justifyContent="center">
            <Grid item>
              <Tooltip title="Add" placement="top-start">
                <Button>top-start</Button>
              </Tooltip>
              <Tooltip title="Add" placement="top">
                <Button>top</Button>
              </Tooltip>
              <Tooltip title="Add" placement="top-end">
                <Button>top-end</Button>
              </Tooltip>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item xs={6}>
              <Tooltip title="Add" placement="left-start">
                <Button>left-start</Button>
              </Tooltip>
              <br />
              <Tooltip title="Add" placement="left">
                <Button>left</Button>
              </Tooltip>
              <br />
              <Tooltip title="Add" placement="left-end">
                <Button>left-end</Button>
              </Tooltip>
            </Grid>
            <Grid item container xs={6} alignItems="flex-end" direction="column">
              <Grid item>
                <Tooltip title="Add" placement="right-start">
                  <Button>right-start</Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Add" placement="right">
                  <Button>right</Button>
                </Tooltip>
              </Grid>
              <Grid item>
                <Tooltip title="Add" placement="right-end">
                  <Button>right-end</Button>
                </Tooltip>
              </Grid>
            </Grid>
          </Grid>
          <Grid container justifyContent="center">
            <Grid item>
              <Tooltip title="Add" placement="bottom-start">
                <Button>bottom-start</Button>
              </Tooltip>
              <Tooltip title="Add" placement="bottom">
                <Button>bottom</Button>
              </Tooltip>
              <Tooltip title="Add" placement="bottom-end">
                <Button>bottom-end</Button>
              </Tooltip>
            </Grid>
          </Grid>
          <Tooltip title="Add" arrow>
            <Button>Arrow</Button>
          </Tooltip>
        </Box>
        <SimpleBackdrop />
        <Rating name="ds" />
        <Fab
          color="primary"
          aria-label="add"
          style={{
            position: 'fixed',
            bottom: '20px',
            right: '20px',
          }}
          size="large"
        >
          <FavoriteIcon />
        </Fab>
        <ColorTabs />
      </Box>
    </>
  );
}
