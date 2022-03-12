import footer from "./img/footer.jpg";

export const styles = (theme) => ({
  fondo1:{
    height: "100%",

  },
  fondo: {
    backgroundImage: "url(" + footer + ")",
    width: "100%",
    objectFit: "cover",
    height: "100vh",
  },

  botones: {
    color: "white",
    fontSize: 10,
  },
  title1: {
    color: "white",
    marginTop: "30vh",
    [theme.breakpoints.down("xs")]: {
      padding: 50,
    },
  },

  text: {
    [theme.breakpoints.down("sm")]: {
      fontSize: 30,
      textAlign: "center",
    },
  },
  correo: {
    color: "white",
    textAlign: "left",
    textDecoration: "underline",

    [theme.breakpoints.down("xs")]: {
      fontSize: 20,
      textAlign: "center",
    },
  },
  iconos: {
    textAlign: "left",
    marginLeft: 20,
    marginTop: 10,
    fontSize: 20,
    color: "white",
  },
  chat: {
    width: 50,
    backgroundColor: "#11a3e6",
    marginTop: -100,
  },

  kmg: {
    color: "white",
    textAlign: "center",
    marginTop: "20vh",
    [theme.breakpoints.down("xs")]: {
      fontSize: 18,
      textAlign: "center",
    },
  },
  title2: {
    color: "#1b1464",
    textAlign: "center",
    marginTop: "15vh",
    [theme.breakpoints.down("xs")]: {
      padding: 50,
    },
  },
  small: {
    color: "#1b1464",
    textAlign: "left",
    marginLeft: "10vh",
    marginTop: "10vh",
    [theme.breakpoints.down("xs")]: {
      marginTop: "35vh",
    },
  },
  porta:{
    [theme.breakpoints.down('sm')]: {
      width: "200px",
  },
  [theme.breakpoints.up('md')]: {
      width: "400px",
  },
  },
  subtext: {
    [theme.breakpoints.down('sm')]:{
        fontSize: "20px"
    }
}



});
