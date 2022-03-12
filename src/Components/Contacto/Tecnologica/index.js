import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography, Grid, withStyles, IconButton } from "@material-ui/core";
import imagenCentral from "./img/imagenCentral.jpg";

/*ANIMACIONES*/
import Fade from "react-reveal/Fade";

/*ACCIONES*/

/*CONSTANTES*/
import { styles } from "./constants";

class Tecnologia extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*FUNCIONES*/

  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={12}>
          <Typography variant="h2" className={classes.title1}>
            <strong> EXPERIENCIA TECNOLOGICA</strong>
          </Typography>
        </Grid>

        <Grid item xs={12} className={classes.text}>
          <Typography variant="h6">
            Innova más allá de la idea que has puesto en marcha!
            <br />
            <br />
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.text}>
          <Typography variant="h5">
            Contamos con un equipo de profesionales especialistas en cada una de
            las etapas del ciclo de vida de las plataformas tecnologicas, que
            abarcan desde la consultoria en la infraestructura tecnologica;
            concepcion, diseño y desarollo de una nueva aplicacion hasta el
            soporte en la continuidad operativa de plataformas productivas.
            Nuestro fin es crear una experiencia excepcional y entregar
            resultados a medida para todos las necesidades de la audiencia.
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <img src={imagenCentral} alt="" width="100%" />
        </Grid>

        <Grid container>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Fade right> 
            <Grid container>
              <Grid item xs={12} sm={12} md={5} lg={5} />
              <Grid item xs={12} sm={12} md={5} lg={5} className={classes.box1}>
                <Typography className={classes.boxTitle1}>
                  <strong style={{ color: "#4884cc" }}>Poder</strong>{" "}
                  <strong>para tu empresa</strong>
                </Typography>
                <Typography className={classes.boxSubtitle1}>
                  Construimos las bases tecnológicas para que nuestros clientes
                  crezcan enfocados en sus áreas de trabajo.
                </Typography>
              </Grid>
              <Grid item xs={12} sm={12} md={2} lg={2} />
            </Grid>
            </Fade>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Fade left>
                <Grid container>
                  <Grid item xs={12} sm={12} md={2} lg={2} />
                  <Grid
                    item
                    xs={12}
                    sm={12}
                    md={5}
                    lg={5}
                    className={classes.box2}
                  >
                    <Typography className={classes.boxTitle2}>
                      <strong>Tecnologia de punta y</strong>
                      <br />
                      <strong style={{ color: "#4884cc" }}>soluciones</strong>
                      <strong>adecuadas</strong>
                    </Typography>
                    <Typography className={classes.boxSubtitle2}>
                      Desarrollamos para hacer los procesos mas amigables y dar
                      a nuestros clientes la satisfaccion de tener en su empresa
                      un servicio de calidad.
                    </Typography>
                  </Grid>
                  <Grid item xs={12} sm={12} md={5} lg={5} />
                </Grid>
              </Fade>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const tecnologia = withStyles(styles, { withTheme: true })(Tecnologia);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(tecnologia);
