import fondo1 from "./img/fondo1.jpg";

export const styles = (theme) => ({
  base: {
    backgroundImage: "url(" + fondo1 + ")",
    //boxShadow: "none",
    // objectFit: 'cover',
    // width: '100%',
    height: "90vh",
    backgroundSize: "100% 100%",
    backgroundRepeat: "no-repeat",
  },
  titleHeader: {
    color: "white",
    fontSize: 10,
  },
  title: {
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
      marginTop: "-50vh",
      fontSize: 45,
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
  dialog: {
    width: "10%",
    [theme.breakpoints.up("lg")]: {
      margin: theme.spacing(0, 55, 0, 55),
    },
    [theme.breakpoints.down("md")]: {
      margin: theme.spacing(0, 85, 0, 85),
      width: "20%",
    },
    [theme.breakpoints.down("sm")]: {
      margin: theme.spacing(0, 10, 0, 20),
    },
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(5),
      width: "50%",
    },
  },
});
