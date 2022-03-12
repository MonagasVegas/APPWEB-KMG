import React, { Component } from "react";
import { connect } from "react-redux";
import { IconButton, Typography, Grid, withStyles } from "@material-ui/core";
import Typical from "react-typical";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";

/*IMAGENES*/
import img from "./img/img.svg";
import BASE from "./img/base de luz.png";

/*ANIMACION*/
import Flip from "react-reveal/Flip";
import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";

/*ACCIONES*/

/*CONSTANTES*/
import { styles } from "./constants";

class Focus extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*FUNCIONES*/

  render() {
    const { classes } = this.props;

    return (
      <Grid container className={classes.fondo}>
        <Fade left>
          <Grid container style={{ padding: 50 }}>
            <Grid item xs={12}>
              <Typography className={classes.text}>ENFOCADOS</Typography>
            </Grid>

            <Grid item xs={12}>
              <Typography className={classes.text2}>EN TUS METAS</Typography>
            </Grid>
          </Grid>
        </Fade>

        <Grid container alignItems="center" style={{ padding: 50 }}>
          <Grid item xs={12} style={{ textAlign: "center" }}>
            <Typography variant="h4" className={classes.mintext}>
              Deposita tu confianza y el crecimiento de tu empresa en nuestra
            </Typography>
            <Typography variant="h4" className={classes.textColor}>
              Experiencia tecnológica
            </Typography>
          </Grid>
        </Grid>

        <Grid container justify="center" >
          
            <img src={img} alt="" width="15%"  style={{marginBottom: "-50vh"}} />
         
        </Grid>

        <Grid container justify="center" style={{ marginTop: "30vh" }}>
          <img src={BASE} className={classes.base} />
        </Grid>
      </Grid>
    );
  }
}

const focus = withStyles(styles, { withTheme: true })(Focus);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(focus);
