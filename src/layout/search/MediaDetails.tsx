import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const MediaCard = (props: { title: string; imageUrl: string; imageHeight: string }) => {
  const styles = {
    card: {
      position: 'relative',
      backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.5) 100%), url(${props.imageUrl})`,
      backgroundSize: 'cover',
      height: props.imageHeight || '300px',
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
        image={props.imageUrl}
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
        imageHeight={'500'}
        // style={{ objectfit: 'cover' }}
      />
      <Box sx={{ p: 5 }}>
        <Typography paragraph>
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
