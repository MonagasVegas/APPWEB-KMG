import React, { Component } from "react";
import { connect } from "react-redux";
import {
  Typography,
  Grid,
  withStyles,
  IconButton,
} from "@material-ui/core";

import uno from "./img/1.png";
import icono1 from "./img/icono 1.png";
import icono4 from "./img/4.png";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

/*ACCIONES*/

/*CONSTANTES*/
import { styles } from "./constants";

class Consultoria extends Component {
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
          <img src={uno} alt=""  className={classes.imag}/>
        </Grid>

        <Grid item xs={10} sm={10} md={10} lg={10}></Grid>
        <Grid item xs={2} sm={2} md={2} lg={2}  >
        <List  className={classes.menu}      >
            <ListItem button   alignItems="center" style={{     textAlign: 'left'}} >
              <ListItemText>Inicio</ListItemText>
            </ListItem>

            <ListItem button  alignItems="center" style={{     textAlign: 'left'}}>
              <ListItemText>Nosotros</ListItemText>
            </ListItem>

            <ListItem button  alignItems="center" style={{ textAlign: 'left'}}>
              <ListItemText>Servicios</ListItemText>
            </ListItem>

            <ListItem button   alignItems="center" style={{   textAlign: 'left'}}>
              <ListItemText>Clientes</ListItemText>
            </ListItem>

            <ListItem button   alignItems="center" style={{   textAlign: 'left'}}>
              <ListItemText>Contacto</ListItemText>
            </ListItem>
          </List>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>

          <Grid container  alignItems="center"  style={{ padding: 20}} >
            <Grid  item xs={2} sm={2} md={2} lg={2}  /> 

            <Grid item xs={10} sm={10} md={10} lg={10}   >
              <Typography className={classes.IT}>Proyectos y Consultoria TI</Typography>
            </Grid>

            <Grid  item xs={2} sm={2} md={2} lg={2}  /> 

            <Grid item xs={10} sm={10} md={10} lg={10}  >
              <Typography className={classes.parrafo}>
              Basada en nuestra experiencia en el área, ofrecemos   asesoramiento para que nuestros clientes implementen soluciones
                tecnologicas y optimicen tus procesos de negocio.
                 </Typography>

            </Grid>
          </Grid>
        </Grid>




        

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <br />
          <br />
          <br />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <img src={icono4} alt="" width="430" className={classes.imageBlue} />
        </Grid>

        <Grid item xs={12} sm={12} md={6} lg={6}>
          <Grid container className={classes.contenedorSoftware}>
            <Grid item xs={12} sm={12} md={12} lg={12}>
              <img src={icono1}  alt=""  width="130"  className={classes.imagePurple}
              />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}    >
              <Typography  className={classes.title}  >
                Fabrica de Software
              </Typography>
              <Typography   className={classes.sub}  >
                Diseñamos y construimos sistemas informaticos  de calidad, atendiendo a las necesidades y
                especificaciones de tu empresa, generando una  experiencia satisfactoria para el usuario y una
                y una sencilla implementación
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

const consultoria = withStyles(styles, { withTheme: true })(Consultoria);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(consultoria);
