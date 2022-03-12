import React, { Component } from "react";
import { connect } from "react-redux";
import { styles } from "./constants";
import {
  Button,
  Typography,
  Grid,
  IconButton,
  withStyles,
} from "@material-ui/core";

import Toolbar from "@material-ui/core/Toolbar";

import MUNDO from "./img/mundo.png";

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
      <>
      <Grid  container >

      <Grid item xs={12}>
          <Toolbar>
            <Grid container>
              <Grid item xs={2} sm={2} md={1} lg={1} className={classes.iconLogo}   >
                <i class="icon-logo"  />
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
            </Grid>
          </Toolbar>
        </Grid>

        {/* Iconos Flotantes */}
        <Grid item xs={12}  sm={5} md={5}    >
          <Grid container alignContent="center">
            <Grid item xs={0} style={{ marginTop: "55vh", position: "fixed" }}>
              <Grid>
                <IconButton className={classes.icons}>
                  <a
                    href="https://api.whatsapp.com/send?phone=573004736726"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      class="icon-whatsapp"
                      style={{ color: "#aeb0b3", fontSize: 20 }}
                    />
                  </a>
                </IconButton>
              </Grid>

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
              <Grid>
                <IconButton className={classes.icons}>
                  <a
                    href="https://www.linkedin.com/company/corporacion-kmg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      class="icon-linkedin"
                      style={{ color: "#aeb0b3", fontSize: 20 }}
                    />
                  </a>
                </IconButton>
              </Grid>
              <Grid>
                <IconButton className={classes.icons}>
                  <a
                    href="https://twitter.com/CorporacionKmg/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i
                      class="icon-twitter"
                      style={{ color: "#aeb0b3", fontSize: 20 }}
                    />
                  </a>
                </IconButton>
              </Grid>



            </Grid>
                  



            <Grid item xs={2} />
            <Grid item xs={10}>
              <Grid container className={classes.marginText}>
                <Grid item xs={12}>
                  <Typography className={classes.typographyCover}>
                      Experiencia
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.typographyCover}>
                      tecnológica
                  </Typography>
                </Grid>
                <Grid item xs={12} style={{ marginTop: -10 }}>
                  <Typography className={classes.typography}>
                      soluciones que impulsan el
                  </Typography>
                </Grid>
                <Grid item xs={12}>
                  <Typography className={classes.typography}>
                      crecimiento de nuestros clientes
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>

{/* Triangulo azul */}
        <Grid item xs={12} sm={7} md={7}  className={classes.rightFondo}   >
          <Grid container >
          </Grid>
        </Grid>

        <Grid item xs={0} sm={5} md={5} style={{ marginTop: "-100vh" }}></Grid>
        <Grid item xs={12} sm={6} md={6}   style={{ height: "100vh",  marginTop: "-90vh"  }}>   
        <img src={MUNDO}  alt=""  className={classes.mundoAzul} />
        </Grid>

        </Grid>

        

        

         
       
      </>
    );
  }
}

const header = withStyles(styles, { withTheme: true })(Header);
function mapStateToProps(state) {
  return {};
}

export default connect(mapStateToProps, {})(header);
