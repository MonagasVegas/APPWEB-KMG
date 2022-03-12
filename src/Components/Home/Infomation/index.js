import React, { Component } from "react";
import { connect } from "react-redux";
import { Grid, 
    Typography,
    withStyles } from "@material-ui/core";



import { styles } from './constants';


import LOGO from './img/logoCompleto.png';


/*COMPONENTES*/


/*Animations*/
import Fade from 'react-reveal/Fade';

/*ACCIONES*/

/*CONSTANTES*/



class Information extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*FUNCIONES*/

  render() {

    const { classes } = this.props;

    return (
      <Grid container>
          <Fade left>
              <>
              <Grid container  justify="center"  style={{ marginTop: "30vh" }} >
                  <img  src={LOGO}   alt="" className={classes.kmg}      />
              </Grid>

              <Grid container alignItems="center"  style={{ padding: 50}}  > 

              <Grid item xs={12} style={{ textAlign: "center", color: "#0a2a4a" }}  >
              <Typography variant="h3" className={classes.text}  >Tu mejor aliado</Typography>

              </Grid>
              <Grid  item xs={12} style={{ textAlign: "center" }}   >
              <Typography variant="h5"  className={classes.mintext}  >
                Nuestros profesionales te ayudarán a definir el software que
                necesitas siguiento las mejores prácticas para garantizar la
                seguridad de los datos, un optimo performance y la mejor
                experiencia de usuario para tus clientes.
              </Typography>

              </Grid>
              </Grid>


              </>
          </Fade>
      
          
       
      </Grid>
    );
  }
}

const information = withStyles(styles, { withTheme: true })(Information);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(information);
