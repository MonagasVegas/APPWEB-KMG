import React, { Component } from "react";
import { connect } from "react-redux";
import Carousel from 'react-bootstrap/Carousel';
import { styles } from "./constants";
import {
  Button,
  Typography,
  Grid,
  withStyles,
  IconButton,
} from "@material-ui/core";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";



//import icono1 from "./img/icono 1.png";

/*ACCIONES*/

/*CONSTANTES*/

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {

      items: [
        {    id: 1,
             img: <i class='icon-service4'  style={{color: "white", fontSize: 150, }}/>,
             title:   <a  style={{color: "#4884cc",  marginLeft: "7vh"}} > Fabrica de Software </a>
           
        },
        {
             id: 2,
             img: < i class='icon-service5'  style={{color: "white", fontSize: 150, marginLeft: "10vh"}}/>,
             title:  <a  style={{color: "#4884cc", }} > Comercialización de Infraestructura Tecnológica </a>
        },
        {
             id: 3,
             img: <i class='icon-service1' style={{color: "white", fontSize: 150 , marginLeft: "10vh"}}/>,
             title:  <a  style={{color: "#4884cc", }} > Administración Delegado - Continuidad Operativa </a>
        },
        {
             id: 4,
             img: <i class='icon-service7' style={{color: "white", fontSize: 150, marginLeft: "5vh"}}/>,
             title:  <a  style={{color: "#4884cc", }} > Diseño Gráfico y Posicionamiento Web </a>
        },
        {
             id: 5,
             img: <i class='icon-service3' style={{color: "white", fontSize: 150 , marginLeft: "5vh"}}/>,
             title:  <a  style={{color: "#4884cc", marginLeft: "11vh"  }} > Experiencia al Cliente </a> 
        },
        {
             id: 6,
             img: <i class='icon-service2' style={{color: "white", fontSize: 150, }}/>,
             title: <a  style={{color: "#4884cc", marginLeft: "2vh"}}  > Proyectos y Consultoría TI </a> 
        },
        {
             id: 7,
             img: <i class='icon-service6' style={{color: "white", fontSize: 150, marginLeft: "7vh"}} />,
             title: <a  style={{color: "#4884cc", }}  > RPA - Automatización Robótica de Procesos </a> ,
             
        }
      ],






    };


  }

  /*FUNCIONES*/

 












  render() {
    const { classes } = this.props;



    return (
      <Grid container spacing={1} className={classes.base}>
        <Grid item xs={12} sm={12} md={12} lg={12}>
          <AppBar position="static" className={classes.base}>
            <Toolbar>
              <Grid item xs={2} sm={2} md={1} lg={1}>
                <i class="icon-logo" />
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
          <Typography variant="h2" className={classes.title1}>
            Servicios
          </Typography>
        </Grid>

        {/* <Grid item xs={5} sm={5} md={5} lg={5} />
        <Grid item xs={4} sm={4} md={4} lg={4}  >

          <Grid container alignContent="center" style={{ marginTop: '30vh' }}> 

          <Carousel   className={classes.carousel} >
            {this.state.items.map(item =>

            <div key={item.id}   >
              {item.img } 
              <br/>
              {item.title}
            </div>
          
            )}

          </Carousel>

          </Grid>

        </Grid>
        <Grid item xs={3} sm={3} md={3} lg={3} /> */}


<Grid container >
          <Grid item xs={1}></Grid>
          <Grid item xs={10}>
            <Carousel>
              <Carousel.Item interval={3000}>
                < i class='icon-service4'  style={{  color: "white", fontSize: 150, marginLeft: "45vh" }}/>
                
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                < i class='icon-service5'     style={{color: "white",   fontSize: 140, marginLeft: "50vh"   }}/>
              </Carousel.Item>
              <Carousel.Item  interval={3000} >
                <i class='icon-service1'  style={{color: "white",   fontSize: 140 , marginLeft: "50vh" }}/>
              </Carousel.Item>
              <Carousel.Item interval={3000}   >
                <i class='icon-service7' style={{color: "white",    fontSize: 140, marginLeft: "50vh"   }}/>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <i class='icon-service3' style={{color: "white", fontSize: 140, marginLeft: "50vh"  }}/>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
                <i class='icon-service2' style={{color: "white", fontSize: 140, marginLeft: "50vh" }}/>
              </Carousel.Item>
              <Carousel.Item interval={3000}>
             
                <i class='icon-service6' style={{color: "white", fontSize: 140,  marginLeft: "50vh" }} />
              </Carousel.Item>
             </Carousel>
          </Grid>
        </Grid>


{/* Iconos Flotantes */}
<Grid item xs={12}  sm={12} md={12} lg={12}  >
          <Grid container alignContent="center">
            <Grid item xs={0} style={{  position: "fixed" }}>
              <Grid>
                <IconButton className={classes.icons}>
                  <a
                    href="https://api.whatsapp.com/send?phone=573004736726"   target="_blank" rel="noopener noreferrer"   >
                    <i class="icon-whatsapp"  style={{ color: "#aeb0b3", fontSize: 25 }}  />
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
                    <i    class="icon-instagram" style={{ color: "#aeb0b3", fontSize: 25 }}   />
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
                    <i  class="icon-linkedin"    style={{ color: "#aeb0b3", fontSize: 25 }}   />
                  </a>
                </IconButton>
              </Grid>
              <br />
              <Grid>
                <IconButton className={classes.icons}>
                  <a   href="https://twitter.com/CorporacionKmg/"   target="_blank"   rel="noopener noreferrer"  >
                    <i   class="icon-twitter"  style={{ color: "#aeb0b3", fontSize: 25 }}  />
                  </a>
                </IconButton>
              </Grid>
            </Grid>
          </Grid>
        </Grid>


        <Grid item xs={10} sm={10} md={10} lg={10}></Grid>

        <Grid item xs={2} sm={2} md={2} lg={2}>
          <IconButton className={classes.chat}>
            <i class="icon-chat" style={{ color: "white" }} />
          </IconButton>
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




