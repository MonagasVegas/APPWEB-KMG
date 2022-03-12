import React, { Component } from "react";
import { connect } from "react-redux";
import ReactCSSTransitionGroup from "react-addons-css-transition-group";
import { styles } from "./constants";
import { ThumbDownSharp } from "@material-ui/icons";
import {
  Button,
  Typography,
  Grid,
  withStyles,
  IconButton,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";

import dialogo from "./img/dialogo.png";

/*ACCIONES*/

/*CONSTANTES*/

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  /*FUNCIONES*/

  render() {
    const { classes } = this.props;

    return (
      <Grid container spacing={1} className={classes.base}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <AppBar
            position="static"
            style={{ background: "#1b1464", boxShadow: "none" }}
          >
            <Toolbar>
              <Grid item xs={2} sm={2} md={1} lg={1}>
                <i class="icon-logo" style={{ color: "white" }} />
              </Grid>
              <Grid item xs={10} sm={10} md={11} lg={11}>
                <Grid container>
                  <Grid item xs={2} sm={6} md={7} lg={7}></Grid>

                  <Grid item xs={2} sm={1} md={1} lg={1}>
                    <Button className={classes.titleHeader}> Inicio </Button>
                  </Grid>

                  <Grid item xs={2} sm={1} md={1} lg={1}>
                    <Button className={classes.titleHeader}> Nosotros</Button>
                  </Grid>

                  <Grid item xs={2} sm={1} md={1} lg={1}>
                    <Button className={classes.titleHeader}> Servicio</Button>
                  </Grid>

                  <Grid item xs={2} sm={1} md={1} lg={1}>
                    <Button className={classes.titleHeader}> Clientes </Button>
                  </Grid>

                  <Grid item xs={2} sm={1} md={1} lg={1}>
                    <Button
                      className={classes.titleHeader}
                      style={{ borderRadius: "70px", border: "1px solid #fff" }}
                    >
                      Contacto
                    </Button>
                  </Grid>
                </Grid>
              </Grid>
            </Toolbar>
          </AppBar>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12}>
          <Typography variant="h3" className={classes.title}>
            Un equipo apasionado
            <br />
            impulsado por <strong className={classes.word}>novedosas</strong>
            <br />
            soluciones digitales
          </Typography>
        </Grid>

        <Grid item xs={12} sm={12} md={12} lg={12} className={classes.minTitle}>
          <Typography variant="h6"  style={{display: 'flex'}}>
            <div style={{ color: '#4884cc' }}>&#8213;&#160;</div> <strong> Nuestro Equipo </strong>
          </Typography>
        </Grid>

        <Grid item xs={12}>
          <Grid container>
            <Grid item xs={12}>
              <img src={dialogo} className={classes.dialog} />
            </Grid>

            <Grid item xs={12}>
              <IconButton className={classes.chat}>
                <i class="icon-chat" style={{ color: "white" }} />
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

{/* 
        Iconos flotantes */}
       <Grid item xs={12}  sm={12} md={12} lg={12}  >
          <Grid container alignContent="center">
            <Grid item xs={0} style={{  position: "fixed" }}>
              <Grid>
                <IconButton className={classes.icons}>
                  <a
                    href="https://api.whatsapp.com/send?phone=573004736726"   target="_blank" rel="noopener noreferrer"   >
                    <i class="icon-whatsapp"  style={{ color: "#aeb0b3", fontSize: 20 }}  />
                  </a>
                </IconButton>
              </Grid>
              <br />

              <Grid>
                <IconButton className={classes.icons}>
                  <a
                    href="https://www.instagram.com/corporacionkmg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      class="icon-instagram"
                      style={{ color: "#aeb0b3", fontSize: 20 }}
                    />
                  </a>
                </IconButton>
              </Grid>
              <br />
              <Grid>
                <IconButton className={classes.icons}>
                  <a
                    href="https://www.linkedin.com/company/corporacion-kmg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i  class="icon-linkedin"    style={{ color: "#aeb0b3", fontSize: 20 }}   />
                  </a>
                </IconButton>
              </Grid>
              <br />
              <Grid>
                <IconButton className={classes.icons}>
                  <a   href="https://twitter.com/CorporacionKmg/"   target="_blank"   rel="noopener noreferrer"  >
                    <i   class="icon-twitter"  style={{ color: "#aeb0b3", fontSize: 20 }}  />
                  </a>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>





   
      </Grid>
    );
  }
}

const header = withStyles(styles, { withTheme: true })(Header);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(header);
