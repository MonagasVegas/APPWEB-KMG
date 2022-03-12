import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography, Grid, withStyles } from "@material-ui/core";

import icono4 from "./img/icono 4.png";
import icono5 from "./img/icono 5.png";
import imagen5 from "./img/5.png";
import imagen7 from "./img/7.png";

/*ACCIONES*/

/*CONSTANTES*/

import { styles } from "./constants";

class Automatizacion extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*FUNCIONES*/

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.contenedorInfra}>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src={imagen5} alt="" className={classes.imagen} />
        </Grid>
        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid container>
            <Grid item xs={12} sm={12} md={12} lg={12} >
              <img src={icono4} alt="" className={classes.icono} />
            </Grid>
            <Grid item xs={10} sm={10} md={10} lg={10}>
              <Grid container className={classes.containerDiseño}>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography className={classes.title}>
                    {" "}
                    RPA- Automatización
                  </Typography>
                  <Typography className={classes.title2}>
                    {" "}
                    Robótica de Procesos
                  </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography className={classes.subtitle}>
                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit,
                    sed diam nonummy nibh euismod tincidunt ut laireet dolore
                    magna aliquam erat volutpat. Ut wisi enim ad minim veniam,
                    quis nostrud exerci tation ullamcorper
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={2} sm={2} md={2} lg={2} />
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          {" "}
          <br /> <br /> <br /> <br />{" "}
        </Grid>
        <Grid item xs={2} sm={2} md={1} lg={1}>
          {" "}
        </Grid>
        <Grid item xs={10} sm={10} md={11} lg={11}>
          <Grid container>
            <Grid item xs={12} sm={12} md={6} lg={6}>
              <img src={imagen7} alt="" className={classes.imagen7} />
            </Grid>

            <Grid item xs={12} sm={12} md={6} lg={6}>
              <Grid container>
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <img src={icono5} alt="" className={classes.icono2} />
                </Grid>

                <Grid item xs={10} sm={10} md={10} lg={10}>
                  <Grid container className={classes.containerDiseño}>
                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Typography className={classes.title3}>
                        Experiencia al Cliente
                      </Typography>
                    </Grid>

                    <Grid item xs={12} sm={12} md={12} lg={12}>
                      <Typography className={classes.subtitle2}>
                        Ofrecemos servicio de asistencia técnica local o remota,
                        en el momento requerido por cada cliente. Adiestramos al
                        personal en cuanto a manejo eficiente de software y
                        equipos de computación.
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={2} sm={2} md={2} lg={2} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const automatizacion = withStyles(styles, { withTheme: true })(Automatizacion);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(automatizacion);
