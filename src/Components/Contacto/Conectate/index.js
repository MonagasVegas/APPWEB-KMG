import React, { Component } from "react";
import { connect } from "react-redux";
import { IconButton, Typography, Grid, withStyles } from "@material-ui/core";
import Typical from "react-typical";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

import itbc from "./img/itbc.svg";
import tecbound from "./img/tecbound.svg";
import code from "./img/code.svg";



/*ANIMACION*/
import Flip from 'react-reveal/Flip';
import Slide from 'react-reveal/Slide';

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
          <Grid container className={classes.fondoPunto}>
            
            <Grid item xs={12}  className={classes.small} >
              <Typography variant="h6" style={{display: 'flex'}}   >
                <div style={{ color: '#4884cc' }}>&#8213;&#160;</div><Flip>  <strong> Aliados Comerciales  </strong></Flip>
                
              </Typography>
            </Grid>

            <Grid item xs={12} className={classes.title2} >
              <Typography variant="h5" >
                ¡Marcamos la diferencia!
                <br />Y nuestros aliados lo confirman.
              </Typography>
            </Grid>
          
            <Grid item  xs={4}>
              <img src={itbc} width="100"  />
            </Grid>

            <Grid item  xs={4}  >
              <img src={code}  width="100"    />
            </Grid>

            <Grid item  xs={4} >
              <img src={tecbound} width="100"   />
            </Grid>
         
          </Grid>



        </Grid>




        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Grid container className={classes.fondo}>

            <Grid   item xs={0} md={2}></Grid>
            <Grid  item xs={12}md={10} className={classes.title1}  >
              <Slide top>
            <Typography variant="h2" className={classes.text}>
                Conectate a una 
              </Typography    >

              </Slide>
              <Slide top>
              <Typography variant="h2" className={classes.text}   >
              experiencia digital!
              </Typography>
              </Slide>
              <br />
              <Typography variant="h4" className={classes.correo}>
                corporacion@kmg.com.ve
              </Typography>

            </Grid>

            <Grid item xs={12} className={classes.kmg}>
              <Typography  variant="h7"  >   
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
