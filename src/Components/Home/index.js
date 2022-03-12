import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, withStyles } from "@material-ui/core";

import { styles } from './constants';

/*COMPONENTES*/
import Appbar from '../Appbar';
import Conectate from './Conectate';
import Header from './Header';
import Ensamblado from './Ensamblado';
import Information from './Infomation';
import Focus from './Focus';


/*Animations*/
import Fade from 'react-reveal/Fade';

/*ACCIONES*/

/*CONSTANTES*/



class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*FUNCIONES*/

  render() {
    return (
      <Grid container>
       {/* // <Appbar /> */}
          <Header />
          <Information />
          <Ensamblado />
          <Focus />
          <Conectate />
          
          
       
      </Grid>
    );
  }
}

const home = withStyles(styles, { withTheme: true })(Home);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(home);
