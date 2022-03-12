import fondo2 from './img/fondo2.jpg';

export const styles = (theme) => ({

    contenedorInfra:{
      backgroundImage: 'url(' + fondo2 + ')',
      backgroundSize: '100% 90%',
      backgroundRepeat: 'no-repeat',

      [theme.breakpoints.down('xs')]: {
        backgroundSize: '100% 100%',
    },
    },

  imagen: {
    objetFit: "cover",
    width: "100%",
    marginTop: '5vh'
   
  },
  imagen7: {
    objetFit: "cover",
    width: "90%",
    [theme.breakpoints.down('xs')]:{
     // margin: theme.spacing(0, 10, 0, 0),
      padding: 15,
    },
  },

  icono: {
    width: "125px",
    marginTop: "15vh",
    [theme.breakpoints.down('xs')]: {
     // marginLeft: "30vh",
      margin: theme.spacing(5, 10, 5, 10),
  },
  },
  icono2:{
    width: "125px",
    marginTop: "-15vh",
    marginLeft: "-5vh",
    [theme.breakpoints.down('xs')]: {
      // marginLeft: "15vh",
      // marginTop: "10vh",
      margin: theme.spacing(5, 10, 5, 10),
  },

  },
  title:{
    fontSize: "30px",
    color: "white",
    textAlign: "left",
    marginLeft: "-10vh",
    [theme.breakpoints.down('xs')]: {
      //marginLeft: "10vh",
      // padding: 60,
      // textAlign: "center",
      // fontSize: 35,
      margin: theme.spacing(0, 10, 0, 10),
      
  },
  },
  title2:{
    fontSize: "30px",
    color: "white",
    textAlign: "left",
    marginLeft: "-10vh",
    marginTop: -20,
    [theme.breakpoints.down('xs')]: {
      marginLeft: "10vh",
      
  },
  },
  subtitle:{
    color: "white",
    textAlign: "right",
    marginLeft: "-30vh",
    [theme.breakpoints.down('xs')]: {
       marginLeft: "10vh",
      //margin: theme.spacing(0, 2, 0, 2),
      textAlign: "justify",
  },
},
title3:{
  fontSize: "30px",
    color: "white",
    textAlign: "left",
    marginLeft: "-15vh",
    marginTop: 20,
    [theme.breakpoints.down('xs')]: {
      marginLeft: "5vh",
      
  },
},
subtitle2:{
  color: "white",
  textAlign: "justify",
  marginLeft: "-5vh",
  [theme.breakpoints.down('xs')]: {
    marginLeft: "1vh",
    textAlign: "justify",
    
},
  
},

  


});
