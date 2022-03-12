import fondo from "./img/fondo.png";

export const styles = (theme) => ({
  rightFondo: {
    height: "100vh",
    marginTop: "-10vh",
    [theme.breakpoints.down("xs")]: {
      backgroundColor: "white",
      marginTop: "-100vh",
      zIndex: -5,
    },
    [theme.breakpoints.down("md")]: {
      backgroundImage: "url(" + fondo + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left bottom",
    },
    [theme.breakpoints.up("md")]: {
      backgroundImage: "url(" + fondo + ")",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundPosition: "left bottom",
    },

   
  },
  titleHeader: {
    color: "white",
    fontSize: 10,
    textAlign: "left",
    [theme.breakpoints.down("xs")]: {
      fontSize: 5,
    },
  },
  iconLogo:{
    color: "#33aadb", 
    fontSize: 25,
    [theme.breakpoints.down("xs")]: {
      fontSize: 15,
    },
  },

  minTitle: {
    color: "white",
    textAlign: "left",
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(0, 22, 0, 22),
    },
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0, 10, 0, 10),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 10, 0, 20),
    },
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(3),
    },
  },
 
  icons: {
    [theme.breakpoints.down("sm")]: {
      marginLeft: 0,
    },
    [theme.breakpoints.up("md")]: {
      marginLeft: 20,
      marginBottom: 10,
      width: 45,
    },
  },
  chat: {
    width: 50,
    backgroundColor: "#11a3e6",
    position: "fixed",

    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(0, 95, 0, 95),
    },
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0, 95, 0, 95),
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 30, 0, 30),
    },
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(-5, 30, 0, 30),
    },
  },
  word: {
    color: "#4884cc",
    textAlign: "left",
    textDecoration: "underline",
  },
  mundoAzul: {
    objectFit: "cover",
    width: "100%",
    marginTop: 20,
    [theme.breakpoints.down("xs")]: {
      marginTop: "35vh",
    },
  },
  typographyCover: {
    marginTop: "-30px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "40px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "60px",
    },
  },
  typography: {
    marginTop: "0px",
    [theme.breakpoints.down("sm")]: {
      fontSize: "15px",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: "30px",
    },
  },
  marginText: {
    [theme.breakpoints.down("sm")]: {
      marginTop: "60vh",
    },
    [theme.breakpoints.up("md")]: {
      marginTop: "20vh",
    },
  },
});
