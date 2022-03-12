export const styles = (theme) => ({

  title1: {
    // color: "#1b1464",
      marginTop: "15vh",
      textAlign: "center",
    [theme.breakpoints.up('lg')]:{
      fontSize: theme.spacing(7),
      color: "#0a2a4a"
    },
    [theme.breakpoints.down('md')]: {
      fontSize: theme.spacing(7),
      color: "#0a2a4a"
  },
  [theme.breakpoints.down('sm')]: {
      fontSize: theme.spacing(5),
      color: "#0a2a4a"
  },
    [theme.breakpoints.down('xs')]:{
      fontSize: theme.spacing(5),
      color: "#0a2a4a"
    },


  },
  text: {
    textAlign: "center",
  [theme.breakpoints.up('lg')]:{
        margin: theme.spacing(0, 22, 0, 22)
  },
  [theme.breakpoints.down('md')]:{
    margin: theme.spacing(0, 10, 0, 10)
  },
  [theme.breakpoints.down('sm')]:{
    margin: theme.spacing(0, 10, 0, 20)
  },
  [theme.breakpoints.down('xs')]:{
    margin: theme.spacing(3),
    fontSize: 10,
  },

  },

  imag: {
    objetFit: "cover",
    width: "100%",    
  },
  box1:{
    marginTop: "-55vh",
    background: 'linear-gradient(to right, #0e0345 98%, #4884cc 2%)',
    width: "350px", 
    height: "155px",
  },
  box2:{
    marginTop: "-30vh",
    width: "370px", 
    height: "175px",
    background: 'linear-gradient(to left, #0e0345 98%, #4884cc 2%)',
  },
  boxTitle1:{
    color: "white",
    textAlign: "right",
    marginRight: "4vh",
    marginTop:"4vh",
    fontSize: 19,
    marginLeft: "-40vh"
  },
  boxSubtitle1:{
    color: "white",
    fontSize: 13,
    textAlign: "right",
    marginRight: "4vh",
    marginTop:"2vh",
    
  },
  boxTitle2:{
    marginTop:"4vh",
    marginLeft: "4vh",
    textAlign: "left",
    color: "white",
    fontSize: 19,
  },
  boxSubtitle2:{
    color: "white",
    fontSize: 13,
    marginLeft: "4vh",
    marginTop:"2vh",
  }


});
