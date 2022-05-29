const styles = (theme) => {
  return {
    "@global": {
      body: {
        backgroundColor: "#cece",
      },
    },
    title: {
      flexGrow: 1,
      animation: "$Fade 0.5s infinite",
    },
    navLink: {
      color: "#ffffff",
      marginLeft: 20,
      opacity: 0.75,
      textDecoration: "none",
      "&:hover": {
        opacity: 1,
      },
      [theme.breakpoints.down("md")]: {
        //   maxWidth :1280px
        fontSize: 70,
      },
      [theme.breakpoints.down("sm")]: {
        //   maxWidth :960px
        fontSize: 50,
      },
      [theme.breakpoints.down("xs")]: {
        //   maxWidth :600px
        fontSize: 20,
      },
    },
    active: {
      opacity: 1,
      textDecoration: "none",
      marginLeft: 20,
      color: "#ffffff",
    },
    "@keyframes Fade": {
      from: {
        opacity: 0,
      },
      to: {
        opacity: 1,
      },
    },
  };
};

export default styles;
