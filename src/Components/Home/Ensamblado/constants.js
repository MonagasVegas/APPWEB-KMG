import Engranaje from './img/engranaje3.png'

export const styles = (theme) => ({

  container: {
    backgroundImage: "url(" + Engranaje + ")",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    height: 1900,
    
  },
  title:{
    [theme.breakpoints.down('sm')]: {
      fontSize: "40px",
      textAlign: "center",
  },
  [theme.breakpoints.up('md')]: {
      fontSize: "65px"
  },
  },
  lapto:{
    marginTop:"-55vh",
    marginLeft: "60vh",
    width:"60%",
    objectFit:"cover",
  },
  boxData: {
    backgroundColor: "#1a237e",
    color: "white",
    [theme.breakpoints.down('sm')]: {    
        padding: 40,
        marginLeft: 0,
        marginTop: 0,
        textAlign:"center"
    },
    [theme.breakpoints.up('md')]: {
        paddingTop: 20,
        paddingRight: 60,
        paddingBottom: 40,
        width: 400,
        marginLeft: "20vh",
         marginTop: "-5vh"
    }
},
img:{
  objectFit: 'cover',
  width: '60%',
  [theme.breakpoints.down('sm')]: {    
    width: '90%',
    objectFit: 'cover',
},

}

  
});
