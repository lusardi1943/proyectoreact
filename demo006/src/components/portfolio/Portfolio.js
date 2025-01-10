import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';

import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
  faNodeJs, 
  faAngular,
  faPhoenixFramework,
  faReact
} from '@fortawesome/free-brands-svg-icons'

const styles = {
  divGeneral: {
    background: '#efefef',
    color: "#000",
    padding: 40
  },
  heading: {
    marginTop: 20,
    marginBottom: 0
  },
  portFolio: {
      marginTop: 20,
      paddingLeft: 10,
      paddingRigth: 10,
      textShadow: '0px 0px 8px #000'
  },
  tituloProyecto: {
      fontSize: 20,
      color: '#000'
  },
  card: {
      marginTop: 25
  },
  borde: {
      border: '1px solid #ccc'
  }
};

const tileData = [
    {
        img: 'https://i.imgur.com/x0pgu7c.jpg',
        title: 'Login con Elixir y Phoenix Framework',
        stackUno: <FontAwesomeIcon icon={faPhoenixFramework} className="phoenix"/>,
    },
    {
        img: 'https://i.imgur.com/9esjpn1.jpg',
        title: 'Desafio almundo.com',
        stackUno: <FontAwesomeIcon icon={faNodeJs} className="nodejs stack"/>,
        stackDos: <FontAwesomeIcon icon={faAngular} className="angular stack"/>
    },
    {
        img: 'https://i.imgur.com/QgyTTio.jpg',
        title: 'Jwt Elixir - Frontend realizado con React',
        stackUno: <FontAwesomeIcon icon={faReact} className="react stack"/>
    },
    {
        img: 'https://i.imgur.com/vetMel5.jpg',
        title: 'Proyectos con Angular',
        stackUno: <FontAwesomeIcon icon={faNodeJs} className="nodejs stack"/>,
        stackDos: <FontAwesomeIcon icon={faAngular} className="angular stack"/>
    },
    {
        img: 'https://i.imgur.com/SdAJswX.jpg',
        title: 'Proyectos con React',
        stackUno: <FontAwesomeIcon icon={faReact} className="react stack"/>
    },
    {
        img: 'https://i.imgur.com/Y6kKfRg.jpg',
        title: 'Login y Firebase database',
        stackUno: <FontAwesomeIcon icon={faAngular} className="angular stack"/>
    }
 ];

function Portfolio(props) {
  const { classes } = props;
  return (
    <div className={classes.divGeneral}>
        <Grid container item xs={12} sm={6} lg={12} direction="row" justify="center" alignItems="center">
            <h1 className={classes.heading}>PORTFOLIO</h1>
        </Grid>
        <Grid container className={classes.portFolio} item xs={12} sm={6} lg={12}>
            {tileData.map(tile => (
                <Grid container item xs={12} sm={6} className={classes.portFolio} lg={6} key={tile.img} direction="row">
                    <Card className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                            component="img"
                            alt="Contemplative Reptile"
                            className={classes.media}
                            height="340"
                            image={tile.img}
                            title="Contemplative Reptile"
                            />
                            <CardContent className={classes.borde}>
                                <Typography variant="h5" component="h2" className={classes.tituloProyecto}>
                                    {tile.title} <span className="iconos">{tile.stackUno} {tile.stackDos}</span>
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/* <CardActions>
                            <Button size="small" color="primary">
                                Share
                            </Button>
                            <Button size="small" color="primary">
                                Learn More
                            </Button>
                        </CardActions> */}
                    </Card>
                </Grid>         
            ))}
        </Grid>
    </div>
  );
}

Portfolio.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Portfolio);