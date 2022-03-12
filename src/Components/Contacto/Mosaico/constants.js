export const styles = (theme) => ({
  contenedor: {
    background: "#dfdee3",
    objectFit: "cover",
    width: "100%",
  },
  mainTitle: {
    color: "#1b1464",
    textAlign: "left",
    marginLeft: "10vh",
    marginTop: "10vh",
    display: 'flex'
  },


  ilustracion:{
    
    [theme.breakpoints.down('xs')]: {
        margin: theme.spacing(0, 0, 0, 10),
    },

  },
});
