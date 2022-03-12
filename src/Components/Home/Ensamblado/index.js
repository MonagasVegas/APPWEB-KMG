import React, { Component } from "react";
import { connect } from "react-redux";
import { styles } from "./constants";
import {
  Button,
  Typography,
  Grid,
  IconButton,
  withStyles,
} from "@material-ui/core";

import ENGRANAJE from "./img/engranaje3.png";

import laptop from "./img/laptop.png";
import group from "./img/group.jpg";

import Fade from "react-reveal/Fade";
/*ACCIONES*/

/*CONSTANTES*/

class Ensamblado extends Component {
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
          <Grid container className={classes.container}>
            <Grid item xs={12} sm={1} />
            <Grid item xs={12} sm={10}>
              <Fade left cascade>
                <Grid container style={{ padding: 40 }}>
                  <Grid
                    item
                    xs={12}
                    style={{ marginTop: "25vh", color: "#1a237e" }}
                  >
                    <Typography className={classes.title}>
                      Ensamblamos tu proyecto
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <img src={laptop} alt="" className={classes.lapto} />
                  </Grid>
                </Grid>
              </Fade>
            </Grid>
            <Grid item xs={12} sm={1} />



            <Grid container  justify="center"   >
              <img src={group}   alt="" className={classes.img}   />
            </Grid>


            <Grid item xs={12} sm={12}>
              <div className={classes.boxData}>
                <Typography style={{ textAlign: "right", fontSize: 25 }}>
                  <i>
                    Somos un equipo creciente de personas motivadas con
                    innovación en el núcleo
                  </i>
                </Typography>
                <Typography style={{ textAlign: "right", fontSize: 25 }}>
                  <spam style={{ color: "#61dafb" }}>&#8213;&#160;</spam>
                  Nosotros
                </Typography>
                <Typography style={{ textAlign: "right", fontSize: 15 }}>
                  Creatividad, dedicación y un proceso
                </Typography>
                <Typography style={{ textAlign: "right", fontSize: 15 }}>
                  estructurado
                </Typography>
              </div>
            </Grid>

 

          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const ensamblado = withStyles(styles, { withTheme: true })(Ensamblado);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(ensamblado);
