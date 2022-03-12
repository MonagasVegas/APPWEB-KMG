export const styles = (theme) => ({

  
  titleHeader: {
    color: "white",
    fontSize: 10,
    textAlign: "left",
  },
  title: {
    color: "Black",
    textAlign: "left",
    marginTop: "20vh",
    padding: 20,
    [theme.breakpoints.down('sm')]: {
        fontSize: "40px",
    },
    [theme.breakpoints.up('md')]: {
        fontSize: "60px"

    },

  },
 

 

});
