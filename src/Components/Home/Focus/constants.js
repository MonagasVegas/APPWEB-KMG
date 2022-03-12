export const styles = (theme) => ({
  fondo: {
    background: "#1b1464",
  },
  text: {
    color: "transparent",
    marginTop: 100,
    textAlign: "left",
    "-webkit-text-stroke": "2px white",
    [theme.breakpoints.down("sm")]: {
      fontSize: 40,
      textAlign: "center",
    },
    [theme.breakpoints.up("md")]: {
      fontSize: 100,
    },
  },
  text2: {
    color: "transparent",
    textAlign: "right",
    "-webkit-text-stroke": "2px white",
    marginBottom: 50,
    [theme.breakpoints.down("sm")]: {
        fontSize: 40,
        textAlign: "center",
      },
      [theme.breakpoints.up("md")]: {
        fontSize: 100,
      },
  },

  base: {
    [theme.breakpoints.down("sm")]: {
      width: "200px",
    },
    [theme.breakpoints.up("md")]: {
      width: "300px",
    },
  },
  mintext: {
    color: "white",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
  textColor: {
    color: "#4884cc",
    [theme.breakpoints.down("sm")]: {
      fontSize: "20px",
    },
  },
});
