


export const styles = (theme) => ({

 kmg:{
    [theme.breakpoints.down('sm')]: {
        width: "200px",
    },
    [theme.breakpoints.up('md')]: {
        width: "300px",
    },

 },
 text:{
     [theme.breakpoints.down('sm')]:{
       
        fontSize: "35px"

     },
 },
 mintext: {
     [theme.breakpoints.down('sm')]:{
         fontSize: "20px"
     }
 }



});
