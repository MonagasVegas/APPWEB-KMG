export const styles = (theme) => ({

    base: {
        background: "#371888",
        boxShadow: "none",
        objectFit: 'cover',
        width: '100%',
        height: "150%",
    },
    titleHeader:{
        color: "white",
        fontSize: 10
    },
    title1: {
        color: "white",
        textAlign: "center",
    },
 
    icons: {
        [theme.breakpoints.down("sm")]: {
          marginLeft: 0,
        },
        [theme.breakpoints.up("md")]: {
          marginLeft: 20,
          marginTop: "-50vh",
          fontSize: 55,
        },
      },
    chat:{
        width: 50,
        backgroundColor: "#11a3e6", 
        marginTop: "10vh",
        marginLeft: "10vh",
        position: "fixed",
    },
    carousel:{
        position: "absolute",
        height: "400px",
        width: "510px",
        margin: "auto",
        left: 0,
        right: 0,
        top: 200,
        bottom: 0,
    },

   

})