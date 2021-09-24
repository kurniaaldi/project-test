import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  titleContent: {
    fontWeight: 700,
    fontSize: 45,
    fontStyle: "normal",
    textTransform: "none",
    color: theme.palette.primary.main,
  },
  textContent1: {
    fontWeight: "normal",
    fontSize: 15,
    fontStyle: "normal",
    textTransform: "none",
    color: "#776FC4",
  },
  textContent2: {
    fontWeight: 700,
    fontSize: 15,
    fontStyle: "normal",
    textTransform: "none",
    color: theme.palette.primary.main,
  },
  textContent3: {
    fontWeight: "normal",
    fontSize: 15,
    fontStyle: "normal",
    textTransform: "none",
    color: theme.palette.secondary.main,
  },
  textFooter: {
    fontWeight: 400,
    fontSize: 12,
    fontStyle: "normal",
    textTransform: "none",
    color: theme.palette.secondary.main,
  },
  gridContainer: {
    flexDirection: "row",
    [theme.breakpoints.up("sm")]: {
      flexDirection: "row",
    },
    [theme.breakpoints.down("xs")]: {
      flexDirection: "column-reverse",
    },
  },
  cardImg: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    backgroundColor: "#fff",
    height: 460,
    width: 362,
    boxShadow: "1px 53px 61px -53px rgba(204, 209, 211, 1)",

    [theme.breakpoints.down("sm")]: {
      width: 330,
    },
  },
  cardText: {
    display: "flex",
    alignItems: "flex-start",
    justifyContent: "flex-start",
    flexDirection: "column",
    minHeight: 460,
    minWidth: 362,
    [theme.breakpoints.down("sm")]: {
      width: 330,
    },
  },
}));

function AboutUs() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.gridContainer}>
      <Grid item md={5} sm={5} xs={12}>
        <div className={classes.cardImg}>
          <img
            src="/aboutUs.png"
            alt="rempah-rempah"
            style={{ width: 360, height: 360 }}
          />
        </div>
      </Grid>
      <Grid item md={5} sm={5} xs={12}>
        <div className={classes.cardText}>
          <Typography className={classes.titleContent}>About Us</Typography>
          <br />

          <Typography className={classes.textContent1}>
            Spanning from East to West.
            <br /> With 54,000 km Coastline and 17,500 Islands.
          </Typography>
          <br />
          <br />
          <Typography className={classes.textContent2}>
            INDONESIA, a resourceful land. Rich of flavors, natural beauties,
            and biodiversity.
          </Typography>
          <br />
          <br />
          <Typography className={classes.textContent3} gutterBottom>
            62trade.com ready to take important role to empower international
            trades between Indonesia and the rest of the world.
            <br />
            <br />
            Ready to be a digital gateway for everyone, at any level of
            business.
            <br />
            <br />
            Let us walk together, hand in hand for a better future.
          </Typography>
        </div>
      </Grid>
    </Grid>
  );
}

export default AboutUs;
