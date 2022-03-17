import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import MenuIcon from '@material-ui/icons/Menu';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Box, IconButton } from '@material-ui/core';

export default function Index() {
  const useStyles = makeStyles((theme) => ({
    icon: {
      marginRight: theme.spacing(2),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    heroButtons: {
      marginTop: theme.spacing(4),
    },
    cardGrid: {
      paddingTop: theme.spacing(8),
      paddingBottom: theme.spacing(8),
    },
    card: {
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
    },
    cardMedia: {
      paddingTop: '56.25%', // 16:9
    },
    cardContent: {
      flexGrow: 1,
    },
    footer: {
      backgroundColor: theme.palette.background.paper,
      padding: theme.spacing(6),
    },
  }));

  const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const classes = useStyles();

  return (
    <Container>
      {/* <AppBar position="relative">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>Madame Fleur Naturhandwerk</Typography>
        </Toolbar>
      </AppBar> */}
      <main>
      <div className={classes.heroContent}
      style={{
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'right bottom',
        boxShadow: 'inset 0 0 40px 20px #B49B83',
        backgroundImage: 'linear-gradient(to left, transparent, #B49B83)',
        backgroundImage: 'linear-gradient(transparent, #B49B83), linear-gradient(to left, transparent 75%, #B49B83), linear-gradient(to right, transparent, #B49B83), url(IMG-20200908-WA0018.jpg)',
      }}>
          <Box display="flex" justifyContent="flex-end">
            <Box display="flex" width="50%" justifyContent="center">
              <img src="/logo.png" style={{maxWidth:'420px'}} />
            </Box>
          </Box>
        {/* <div style={{
          content: '',
          position: 'absolute',
          zIndex: '-1',
          top: '0',
          bottom: '0',
          left: '0',
          right: '0',
          maxHeight: '752px',
          background: 'no-repeat url(IMG-20200908-WA0018.jpg) right bottom',
          opacity: '.3'
        }} /> */}
      </div>
      <Container className={classes.cardGrid} maxWidth="md">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="/IMG-20200909-WA0016.jpg"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">Handwerk</Typography>
                <Typography>Naturhandwerk</Typography>
              </CardContent>
            </Card> 
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="/IMG-20200909-WA0022.jpg"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">Veranstalltungen</Typography>
                <Typography>Aktivitäten, events...</Typography>
              </CardContent>
            </Card> 
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="/IMG-20200909-WA0007.jpg"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">Workshops</Typography>
                <Typography>Workshops</Typography>
              </CardContent>
            </Card> 
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="/IMG-20200908-WA0011.jpg"
                style={{backgroundPosition:'center top'}}
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">Über mich</Typography>
                <Typography>Biografie</Typography>
              </CardContent>
            </Card> 
          </Grid>

          <Grid item xs={12} sm={6} md={4}>
            <Card className={classes.card}>
              <CardMedia
                className={classes.cardMedia}
                image="/IMG-20200908-WA0016.jpg"
              />
              <CardContent className={classes.cardContent}>
                <Typography gutterBottom variant="h5" component="h2">Kontakt</Typography>
                <Typography>Kontakt</Typography>
              </CardContent>
            </Card> 
          </Grid>
        </Grid>
      </Container>
    </main>
    {/* <footer className={classes.footer}>
      <Typography variant="h6" align="center" gutterBottom>
        Footer
      </Typography>
      <Typography variant="subtitle1" align="center" color="textSecondary" component="p">
        Something here to give the footer a purpose!
      </Typography>
    </footer> */}
  </Container>
  );
}
