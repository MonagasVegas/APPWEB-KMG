export const styles = (theme) => ({
  imagen6: {
    objetFit: "cover",
    width: "100%",
    marginTop: "5vh"
  },
  titleDiseño: {
    fontSize: "30px",
    textAlign: "left",
    color: "#4884cc",
    marginLeft: '20vh',
    [theme.breakpoints.down('xs')]:{
      
      margin: theme.spacing(0, 10, 0, 10),

    }
  },
  titleDiseño2:{
    fontSize: "30px",
    textAlign: "left",
    color: "#4884cc",
    marginTop: -20,
    marginLeft: '20vh',
    [theme.breakpoints.down('xs')]:{
      
      margin: theme.spacing(0, 10, 0, 10),

    }

  },
  sub:{
    color: "#1b1464",
    textAlign: "left",
    marginRight: "10vh",
    marginLeft: '20vh',
    [theme.breakpoints.down('xs')]:{
      
      margin: theme.spacing(0, 10, 0, 10),
      textAlign: "justify"

    }

  },
  icono3:{
    width:"125px",
    marginLeft: '20vh',
    marginTop: "10vh",
  },

});
