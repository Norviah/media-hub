// import Box from '@mui/material/Box';
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import Container from '@mui/material/Container';
// import Divider from '@mui/material/Divider';
// import Grid from '@mui/material/Grid';
// import Stack from '@mui/material/Stack';
// import Typography from '@mui/material/Typography';
// import Head from 'next/head';
// import Button from '@mui/material/Button';

// import { Component } from 'react';

// const CollectionCard = ({ name, itemNumber }) => {
//   return (
//     <Card
//       sx={{
//         minWidth: 250,
//         maxWidth: 350,
//       }}
//       onClick={() => {}}
//     >
//       <CardContent>
//         <Typography variant="h5" component="h2">
//           {name}
//         </Typography>
//         <Typography color="textSecondary">
//           {
//             'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris at viverra tellus. Curabitur eu velit quis diam ullamcorper volutpat. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Donec erat lectus, tincidunt eu semper nec, volutpat vel ex.'
//           }
//         </Typography>
//         <Stack direction="row" justifyContent="space-between" sx={{ mt: 2 }}>
//           <Typography variant="subtitle2" component="p">
//             {itemNumber} items
//           </Typography>
//           <Button variant="contained">Edit</Button>
//         </Stack>
//       </CardContent>
//     </Card>
//   );
// };

// export default class Collections extends Component {
//   public render(): JSX.Element {
//     return (
//       <>
//         <Head>
//           <title>Search</title>
//         </Head>

//         <Container>
//           <Typography variant="h4" sx={{ mb: 5 }}>
//             Collections
//           </Typography>
//           <Stack direction="row" sx={{ mb: 5 }} spacing={2}>
//             <CollectionCard name="To Watch" itemNumber="5" />
//             <CollectionCard name="Watched" itemNumber="5" />
//           </Stack>
//           {/* <Stack direction="row" sx={{ mb: 5 }}>
//             <Typography variant="h4">Custom Collections</Typography>
//             <Box sx={{ flexGrow: 1 }} />
//             <Button variant="contained">Create Collection</Button>
//           </Stack> */}
//           <Stack direction="row" sx={{ mb: 5 }} justifyContent="end">
//             <Button variant="contained">Create Collection</Button>
//           </Stack>
//           <Grid container spacing={3}>
//             {Array(20)
//               .fill(null)
//               .map(() => (
//                 <Grid item xs={12} sm={6} md={3}>
//                   <CollectionCard name="[name]" description="Movies to watch" itemNumber="5" />
//                 </Grid>
//               ))}
//           </Grid>
//         </Container>
//       </>
//     );
//   }
// }

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MediaCard = ({ title, imageUrl, imageHeight, content }) => {
  const styles = {
    card: {
      position: 'relative',
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${imageUrl})`,
      backgroundSize: 'cover',
      height: imageHeight || '300px',
    },
    content: {
      position: 'absolute',
      top: '50%',
      left: '0%',
      transform: 'translate(-50%, -50%)',
      textAlign: 'left',
      color: 'white',
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '16px',
    },
  };

  return (
    // <Card style={styles.card}>
    <Card style={{ objectFit: 'contain' }}>
      <CardMedia
        sx={{
          position: 'relative',
          backgroundColor: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.6) 100%)`,
          // backgroundSize: 'cover',
          // height: imageHeight || '300px',
          objectFit: 'cover',
          '@media (min-width:600px)': {
            height: 400,
          },

          '@media (min-width:900px)': {
            height: 600,
          },

          '@media (min-width:1200px)': {
            height: 600,
          },
        }}
        image={imageUrl}
      />
      {/* <Image
        width={1920}
        height={500}
        style={{
          width: '100%',
          // height: '450px',
          objectFit: 'cover',
          objectPosition: 'center',
          // position: 'relative',
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%)`,
          backgroundSize: 'cover',
        }}
        alt="daft punk"
        src="/assets/daft.jpeg"
      /> */}
      <CardContent
        sx={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          pl: 5,
          color: 'white',
        }}
      >
        <Typography variant="h1">Daft Punk</Typography>
      </CardContent>
    </Card>
  );
};

const ArtistPageBanner = () => {
  const bannerStyle = {
    backgroundImage:
      'url("https://www.themoviedb.org/t/p/w600_and_h900_bestv2/IGbeFv5Ji4W0x530JcSHiQpamY.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    height: '500px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: '#ffffff',
    textAlign: 'center',
    fontSize: '4rem',
    fontWeight: 'bold',
    textShadow: '2px 2px 4px #000000',
  };

  const buttonStyle = {
    // margin: '10px',
    // padding: '10px 20px',
    backgroundColor: '#1db954',
    color: '#ffffff',
    border: 'none',
    borderRadius: '30px',
    fontSize: '1.2rem',
    fontWeight: 'bold',
    cursor: 'pointer',
    boxShadow: '2px 2px 4px #000000',
  };

  return (
    <>
      {/* <Image
        width={1920}
        height={1080}
        style={{
          width: '100%',
          height: '450px',
          objectFit: 'cover',
          objectPosition: 'center',
        }}
        alt="daft punk"
        src="/assets/daft.jpeg"
      /> */}
      <MediaCard
        title="Daft Punk"
        imageUrl="https://www.themoviedb.org/t/p/original/yLsCwTslH4KjvA8SMny178SjKcD.jpg"
        imageHeight={500}
        // style={{ objectfit: 'cover' }}
        content={'content'}
      />
      <Box sx={{ p: 5 }}>
        <Typography p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque lacinia finibus
          elementum. Aliquam nec tempor metus. Praesent tempor euismod justo, sagittis accumsan
          turpis pharetra quis. Nulla vel dapibus nisl. Maecenas maximus quis magna sit amet
          maximus. Nulla sodales pulvinar diam nec viverra. Morbi sem risus, iaculis in dui maximus,
          auctor elementum metus. Aenean maximus magna non varius volutpat. Praesent nisl sem,
          viverra id dignissim in, finibus at nisi. Pellentesque pretium pulvinar mauris in blandit.
        </Typography>
      </Box>
    </>
  );
};

export default ArtistPageBanner;
