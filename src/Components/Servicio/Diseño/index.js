import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography, Grid, withStyles } from "@material-ui/core";

import icono3 from "./img/icono 3.png";
import imagen6 from "./img/6.png";

/*ACCIONES*/

/*CONSTANTES*/
import { styles } from "./constants";

class Diseño extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*FUNCIONES*/

  render() {
    const { classes } = this.props;

    return (
      <Grid container>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid container>


            <Grid item xs={12} sm={12} md={12} lg={12}>
              <img src={icono3} alt="" className={classes.icono3} />
            </Grid>

            <Grid item xs={12} sm={12} md={12} lg={12}>
              <Grid container >
                <Grid item xs={12} sm={12} md={12} lg={12}>
                  <Typography className={classes.titleDiseño}>
                    Diseño Gráfico
                  </Typography>
                  <Typography className={classes.titleDiseño2}>
                    Posicionamiento Web
                  </Typography>
                  <Typography className={classes.sub}  >
                    Mediante una serie de optimizaciones, con técnicas SEO,
                    hacemos que cada cliente logre posicionar su sitio web en
                    los primeros resultados de los buscadores, al igual, creamos
                    tu marca de principio a fin
                  </Typography>
                </Grid>
              </Grid>
            </Grid>

            
          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src={imagen6} alt="" className={classes.imagen6} />
        </Grid>


      </Grid>
    );
  }
}

const diseño = withStyles(styles, { withTheme: true })(Diseño);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(diseño);
