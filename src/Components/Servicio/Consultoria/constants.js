export const styles = (theme) => ({

  menu:{
    position: "fixed",
    marginLeft: "-2vh",
    marginTop: "-100vh",
    float: "right",

  },

  iconos: {
    textAlign: "left",
    marginLeft: 20,
    marginTop: 150,
    fontSize: 20,
    color: "#4884cc",
   
    [theme.breakpoints.down('xs')]: {
        marginLeft: 10,
       
        
    },
  },
  imag: {

    
    width: "45%",
    marginLeft: "45vh",
    marginTop: "40vh",


    [theme.breakpoints.down('xs')]: {
        width: "85%",
        marginLeft: "7vh"
        
    },
  },
  imagePurple: {
    width:"125px",
    marginLeft: "30vh",
    [theme.breakpoints.down("xs")]: {
      margin: theme.spacing(5, 15, 5, 15),
      
    },
  },
  imageBlue: {
  
    objetFit: "cover",
    width: "100%",
  },
  contenedorSoftware: {
    marginLeft: "-20vh",
    [theme.breakpoints.down('xs')]: {
      marginLeft: "-5vh",
      
      
  },
  },
  list:{
    marginTop: "-50vh",
    marginLeft: "1vh",
    fontSize: 10,

  },
  IT:{
   
    [theme.breakpoints.up('md')]:{
      marginTop: "-17vh",
      fontSize: 40,
    },
    [theme.breakpoints.down('xs')]:{
      marginTop: "-12vh",
      fontSize: 40,
    },

  },
  parrafo:{
    fontSize: 19,
    [theme.breakpoints.up('md')]:{
      margin: theme.spacing(-5, 5, 0, 5),
    },
   
  },
  title:{
    textAlign: "center",
    fontSize: 40,
    padding: 20,

  },
  sub:{
    fontSize: 19, 
    textAlign: "right",
    [theme.breakpoints.down('xs')]:{
      margin: theme.spacing(0, 5, 0, 5),
      textAlign: "center"
    },

  },
});
