import React, { Component } from "react";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { styles } from "./constants";
import { ThumbDownSharp } from "@material-ui/icons";
import {
  Button,
  Typography,
  Grid,
  withStyles,
  IconButton,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import UNO from "./img/01.png";
import DOS from "./img/02.png";
import TRES from "./img/03.png";
import CUATRO from "./img/04.png";
import CINCO from "./img/05.png";
import ilutracion1 from "./img/ilustracion1.png";
import ilustracion2 from "./img/ilustracion2.png";
import ilustracion3 from "./img/ilustracion3.png";
import ilustracion4 from "./img/ilustracion4.png";
import ilustracion5 from "./img/ilustracion5.png";
/*Animations */
import Fade from "react-reveal/Fade";

/*ACCIONES*/

/*CONSTANTES*/

class Mosaico extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*FUNCIONES*/

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.contenedor}>
        <Grid item xs={12} className={classes.mainTitle}>
          <Typography variant="h6" style={{  display: 'flex' }}  >
          <div style={{ color: '#4884cc' }}>&#8213;&#160;</div><strong> Nuestro Beneficios</strong>
          </Typography>
        </Grid>

        <Grid container style={{ marginTop: "8vh" }}>
          <Grid item xs={1}></Grid>
          <Grid  item xs={12} sm={12} md={5} lg={5}  style={{ marginRight: "1%" }}>
            <Fade left>
              <div style={{ background: "#999999" }}>
                <img src={UNO}   alt="" width= "30%" />

                <Typography variant="h3" style={{ color: "#0e0345", padding: "5% 0% 0% 5%" }} >
                  <strong> Respaldo y Garantía </strong>
                </Typography>
                <Typography variant="h5"  style={{ color: "white", padding: "5% 10% 5% 5%" }}>
                  Nos aseguramos de que la velocidad, la seguridad y la facilidad de uso del producto sean óptimas.
                </Typography>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={5} sm={5} lg={5} className={classes.ilustracion}>
            <Fade right>
              <img
                src={ilutracion1}
                style={{ padding: "5% 0% 10% 0%" }}
                width="100%"
                alt=""
              />
            </Fade>
          </Grid>
        </Grid>

        <Grid container style={{ marginTop: "8vh" }}>
          <Grid item xs={5} sm={5} lg={5} className={classes.ilustracion}>
            <Fade right>
              <img     src={ilustracion2}  style={{ padding: "5% 0% 10% 20%" }}  width="100%"  alt=""  />
            </Fade>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid  item  xs={12} sm={12} md={5}  lg={5}  style={{ marginRight: "1%" }} >
            <Fade left>
              <div style={{ background: "#4884cc" }}>
                <img src={DOS} alt="" width= "30%" />
                <Typography variant="h3"   style={{ color: "#0e0345", padding: "5% 0% 0% 5%" }}  >
                  <strong> Respaldo y Garantía </strong>
                </Typography>
                <Typography  variant="h5"  style={{ color: "white", padding: "5% 10% 5% 5%" }}  >
                  Nos aseguramos de que la velocidad, la seguridad y la
                  facilidad de uso del producto sean óptimas.
                </Typography>
              </div>
            </Fade>
          </Grid>
        </Grid>

        <Grid container style={{ marginTop: "8vh" }}>
          <Grid item xs={1}></Grid>
          <Grid   item  xs={12}  sm={12} md={5} lg={5} style={{ marginRight: "1%" }}  >
            <Fade left>
              <div style={{ background: "#999999" }}>
                <img src={TRES} alt="" width= "30%" />

                <Typography  variant="h3" style={{ color: "#0e0345", padding: "5% 0% 0% 5%" }}  >
                  <strong>Mejor experiencia de usuarios</strong>
                </Typography>
                <Typography variant="h5"  style={{ color: "white", padding: "5% 10% 5% 5%" }}  >
                 Trabajamos en equipo examinando cada detalle para mejorar la experiencia del cliente aumentado su excelencia operativa.
                </Typography>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={5} sm={5} lg={5} className={classes.ilustracion}>
            <Fade right>
              <img
                src={ilustracion3}
                style={{ padding: "5% 0% 10% 0%" }}
                width="100%"
                alt=""
              />
            </Fade>
          </Grid>
        </Grid>



        <Grid container style={{ marginTop: "8vh" }}>

        <Grid item xs={5} sm={5} lg={5} className={classes.ilustracion}>
            <Fade right>
              <img  src={ilustracion4}  style={{ padding: "5% 0% 10% 20%" }}    width="100%"   alt=""   />
            </Fade>
          </Grid>
          <Grid item xs={1}></Grid>
          <Grid   item  xs={12}  sm={12} md={5} lg={5} style={{ marginRight: "1%" }}  >
            <Fade left>
              <div style={{ background: "#4884cc" }}>
                <img src={CUATRO} alt="" width= "30%" />

                <Typography
                  variant="h3"
                  style={{ color: "#0e0345", padding: "5% 0% 0% 5%" }}
                >
                  <strong>Procesos más eficientes </strong>
                </Typography>
                <Typography
                  variant="h5"
                  style={{ color: "white", padding: "5% 10% 5% 5%" }}
                >
                  Nos enfocamos en la planificacion estrategica con sistemas personalizados y los equipos adecuados para crear eficientes.
                </Typography>
              </div>
            </Fade>
          </Grid>
     
        </Grid>


        <Grid container style={{ marginTop: "8vh" }}>
          <Grid item xs={1}></Grid>
          <Grid   item  xs={12}  sm={12} md={5} lg={5} style={{ marginRight: "1%" }}  >
            <Fade left>
              <div style={{ background: "#999999" }}>
                <img src={CINCO} alt="" width= "30%" />

                <Typography   variant="h3"    style={{ color: "#0e0345", padding: "5% 0% 0% 5%" }}   >
                  <strong>Aumento de la productividad</strong>
                </Typography>
                <Typography variant="h5" style={{ color: "white", padding: "5% 10% 5% 5%" }}  >
                  Adaptamos nuestras metodologías y estilos de comunicación con procesos mas rápidos y controlados para potenciar su negocio.
                </Typography>
              </div>
            </Fade>
          </Grid>
          <Grid item xs={5} sm={5} lg={5} className={classes.ilustracion}>
            <Fade right>
              <img
                src={ilustracion5}
                style={{ padding: "5% 0% 10% 0%" }}
                width="100%"
                alt=""
              />
            </Fade>
          </Grid>
        </Grid>





      </Grid>
    );
  }
}

const mosaico = withStyles(styles, { withTheme: true })(Mosaico);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(mosaico);
