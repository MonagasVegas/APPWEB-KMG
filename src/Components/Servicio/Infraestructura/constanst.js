import fondoAzul from "./img/fondo1.jpg";

export const styles = (theme) => ({
  contenedorInfra: {
    backgroundImage: "url(" + fondoAzul + ")",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
    
  },
  icono2: {
    width: "125px",
    marginLeft: "40vh",
    marginTop: "10vh",
    [theme.breakpoints.down("xs")]: {
      // marginLeft: "26vh",
      // marginTop: "10vh",
      margin: theme.spacing(5, 10, 5, 10),
    },
  },
  imagen3: {
    // width:"100%",
    objetFit: "cover",
    width: "100%",
    
  },
  imagen2: {
    width: "50%",
    marginLeft: "20vh",
    [theme.breakpoints.down("xs")]: {
        margin: theme.spacing(0, 15, 0, 15),
        
      },
  },
  titulo: {
    textAlign: "left",
    color: "#fff",
    [theme.breakpoints.down("xs")]: {
      // marginLeft: "15vh",
      margin: theme.spacing(0, 5, 5, 5),
    },
  },

  title1: {
    fontSize: "30px",
    color: "white",
    marginTop: "-20vh",
    [theme.breakpoints.down("xs")]: {
        // marginLeft: "10vh",
        margin: theme.spacing(0, 5, 5, 5),
      },
  },
  title2: {
    fontSize: "30px",
    color: "white",
    [theme.breakpoints.down("xs")]: {
        margin: theme.spacing(-5, 5, 0, 5),
      },
  },
  paragraph: {
    fontSize: "15px",
    color: "white",
    marginTop: "-7vh",
    textAlign: "right",
    [theme.breakpoints.down("xs")]: {
        // marginLeft: "5vh",
        textAlign: "left",
        margin: theme.spacing(0, 5, 5, 5),
      },
  },
});
