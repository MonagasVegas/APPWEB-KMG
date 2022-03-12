import React, { Component } from "react";
import { connect } from "react-redux";
import { Typography, Grid, withStyles } from "@material-ui/core";

import icono2 from "./img/icono 2.png";
import imagen3 from "./img/3.png";
import imagen2 from "./img/2.gif";

/*ACCIONES*/

/*CONSTANTES*/
import { styles } from "./constanst";

class Infraestructura extends Component {
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
          <Grid container    >
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <img src={icono2} alt="" width="130" className={classes.icono2} />
            </Grid>

           < Grid item sm={2} sm={2} md={2} lg={2} />
            <Grid item xs={10} sm={10} md={10} lg={10}>
              <Typography variant="h4" className={classes.titulo} >
                Comercialización de Infraestructura Tecnológica
              </Typography>
            </Grid>

            <Grid item sm={2} sm={2} md={2} lg={2} />

            <Grid item xs={10} sm={10} md={10} lg={10}> 
            <Typography  className={classes.titulo}   >
                Somos proveedores de hardware a nivel nacional,
                damos asesoria en cuanto a la adquisición de equipos  de computación y herramientas
              </Typography>
            </Grid>



          </Grid>
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src={imagen3} alt="" className={classes.imagen3} />
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <img src={imagen2} alt="" className={classes.imagen2} />
        </Grid>
        <Grid item xs={12} sm={12} md={4} lg={4} />
        <Grid item xs={12} sm={12} md={7} lg={7}>
          <Typography className={classes.title1}    >
            Administración Delegada
          </Typography>
          <Typography  className={classes.title2}   >
            Continuidad Operativa
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12} md={1} lg={1} />



        <Grid item xs={3} sm={3} md={3} lg={3} />
        <Grid item xs={12} sm={12} md={7} lg={7}    >
          <Typography className={classes.paragraph}>
            Nos encargamos de organizar y administrar los recursos, de forma tal
            que cada proyecto cierre de acuerdo al alcance, tiempo y costos
            planteados en su inicio.
          </Typography>
        </Grid>
        <Grid item xs={2} sm={2} md={2} lg={2} style={{marginTop: '5vh',}}   />
      </Grid>
    );
  }
}

const infraestructura = withStyles(styles, { withTheme: true })(
  Infraestructura
);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(infraestructura);
