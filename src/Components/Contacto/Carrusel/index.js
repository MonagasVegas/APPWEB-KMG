import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography, Grid, withStyles } from "@material-ui/core";
import Carousel from 'react-bootstrap/Carousel';
import "bootstrap/dist/css/bootstrap.min.css";

import imagen1 from "./img/imagen1.jpg";
import imagen2 from "./img/imagen2.jpg";
import imagen3 from "./img/imagen3.jpg";
import imagen4 from "./img/imagen4.jpg";
import imagen5 from "./img/imagen5.jpg";

/*ACCIONES*/

/*CONSTANTES*/
import { styles } from "./constants";

class Carrusel extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*FUNCIONES*/

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.contenedorGray}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container>
            <Grid item xs={12} className={classes.title}>
              <Typography variant="h6" style={{ display: "flex" }}>
                <div style={{ color: "#4884cc" }}>&#8213;&#160;</div>
                <strong> Nuestro Equipo </strong>
              </Typography>
            </Grid>

            <Grid item xs={12} className={classes.sub}>
              <Typography variant="h5">
                Especialistas que escucharan atentamente tus espectativas, para
                proporcionar las mas eficientes soluciones tecnologicas.
                <br />
                <strong>¿Lo necesitas? ¡Lo desarrollamos!</strong>
              </Typography>
              <br />
              <br />
            </Grid>
          </Grid>
        </Grid>

        <Grid container direction="row"  style={{ padding: '5% 0% 10% 0%' }} >
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Carousel>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src={imagen1}
                  alt="First slide"
                  style={{ height: "70vh", objectFit: "cover" }}
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src={imagen2}
                  alt="Second slide"
                  style={{ height: "70vh", objectFit: "cover" }}
                />
              </Carousel.Item>
              <Carousel.Item  interval={3000} >
                <img 
                className="d-block w-100"
                src={imagen3} 
                alt="Third slide"
                style={{ height: "70vh", objectFit: "cover" }}/>
              </Carousel.Item>
              <Carousel.Item interval={3000}   >
                <img
                  className="d-block w-100"
                  src={imagen4}
                  alt="Third slide"
                  style={{ height: "70vh", objectFit: "cover" }}
                />
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <img
                  className="d-block w-100"
                  src={imagen5}
                  alt="Third slide"
                  style={{ height: "70vh", objectFit: "cover" }}
                />
              </Carousel.Item>
             </Carousel>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const carrusel = withStyles(styles, { withTheme: true })(Carrusel);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(carrusel);
