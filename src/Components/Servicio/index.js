import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, withStyles } from "@material-ui/core";

/*COMPONENTES*/
import Header from "./Header/index";
import Consultoria from "./Consultoria/index";
import Infraestructura from "./Infraestructura/index";
import Diseño from "./Diseño";
import Automatizacion from "./Automatizacion";
import Conectate from "./Conectate";

/*ACCIONES*/

/*CONSTANTES*/
import { styles } from "./constants";

class Servicio extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*FUNCIONES*/

  render() {
    return (
      <Grid container >
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Header />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Consultoria />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Infraestructura />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Diseño />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Automatizacion />
        </Grid>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Conectate />
        </Grid>
      </Grid>
    );
  }
}

const servicio = withStyles(styles, { withTheme: true })(Servicio);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(servicio);
