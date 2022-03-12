import React, { Component } from "react";
import { connect } from "react-redux";
import { IconButton, Typography, Grid, withStyles } from "@material-ui/core";
import Typical from "react-typical";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

/*IMAGENES*/
import BSA from "./img/bsa.svg";
import DIGITEL from "./img/digitel.svg";
import SERVI from "./img/servingca.svg";
import PORTAFOLIOS from "./img/portafolios1.jpg";
import PORTAFOLIOS2 from "./img/portafolios2.jpg";

/*ANIMACION*/
import Flip from "react-reveal/Flip";
import Fade from 'react-reveal/Fade';
import Slide from "react-reveal/Slide";

/*ACCIONES*/

/*CONSTANTES*/
import { styles } from "./constants";

class Conectate extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*FUNCIONES*/

  render() {
    const { classes } = this.props;

    return (
      <Grid container>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container className={classes.fondo1}>
            <Grid item xs={12} className={classes.small}>
              <Typography variant="h4" style={{ display: "flex" }}>
                <div style={{ color: "#4884cc" }}>&#8213;&#160;</div>
                <Flip>
                  <strong> Clientes </strong>
                  <br />
                <br />
                </Flip>
              </Typography>
            </Grid>

            
              <Grid container style={{ justifyContent: "center", marginTop: "15vh" }}>
                <Grid item xs={3}>
                  <img src={BSA} width="100" />
                </Grid>

                <Grid item xs={4}>
                  <img src={DIGITEL} width="100" />
                </Grid>

                <Grid item xs={4}>
                  <img src={SERVI} width="100" />
                </Grid>
              </Grid>
           
            <Grid item xs={12} className={classes.title2}>
              <Typography variant="h3">Proyectos actuales <br/> <br/> </Typography>
              <Typography variant="h5">
                Desde proyectos cortos, claramente definidos y temporales hasta
                colaboraciones a largo plazo con clientes para los que seguimos
                colaborando durante años
                <br />
                <br />
              </Typography>
            </Grid>

            <Grid  item xs={12}>
              <div align="left"  style={{ padding: 50}}  >

              <img src={PORTAFOLIOS}   className={classes.porta}  />
              </div> 
            </Grid>
            <Grid  item xs={12}>
              <div  align="right"  style={{ padding: 50, marginTop: "-10vh", }}  >
              <img src={PORTAFOLIOS2} className={classes.porta} />

              </div>
            </Grid>
            
            <Grid item xs={12}  style={{ textAlign: "center" }}   >
              <Fade right >
              <Typography variant="h2" className={classes.subtext}   >
               !Mundo KMG!
              </Typography>

              </Fade>
            </Grid>

          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container className={classes.fondo}>
            <Grid item xs={0} md={2}></Grid>
            <Grid item xs={12} md={10} className={classes.title1}>
              <Slide top>
                <Typography variant="h2" className={classes.text}>
                  Conectate a una
                </Typography>
              </Slide>
              <Slide top>
                <Typography variant="h2" className={classes.text}>
                  experiencia digital!
                </Typography>
              </Slide>
              <br />
              <Typography variant="h4" className={classes.correo}>
                corporacion@kmg.com.ve
              </Typography>
            </Grid>

            <Grid item xs={12} className={classes.kmg}>
              <Typography variant="h7">
                © 2021 - Corporación KMG, c.a. | Políticas de privacidad
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const conectate = withStyles(styles, { withTheme: true })(Conectate);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(conectate);
