import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, withStyles } from "@material-ui/core";

/*COMPONENTES*/
import Header from "./Header";
import Conectate from "./Conectate";
import Carrusel from "./Carrusel";
import Tecnologia from "./Tecnologica";
import Mosaico from "./Mosaico";
/*ACCIONES*/

/*CONSTANTES*/
import { styles } from "./constants";


class Contacto extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*FUNCIONES*/

  render() {
    return (
      <Grid container>
        <Header />
        <Tecnologia />
        <Mosaico />
        <Carrusel />
        <Conectate />
      </Grid>
    );
  }
}

const contacto = withStyles(styles, { withTheme: true })(Contacto);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(contacto);
