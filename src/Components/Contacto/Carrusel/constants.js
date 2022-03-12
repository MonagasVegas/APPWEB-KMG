
export const styles = (theme) => ({

contenedorGray:{
   
       background: "#dfdee3",
        objectFit: 'cover',
        width: '100%',
        height: 800
       
},
title:{
        color: "#1b1464",
    textAlign: "left",
    marginLeft:"10vh",
    marginTop: "10vh"

},
sub:{
        textAlign:"center",
        marginTop: "10vh",
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











});
