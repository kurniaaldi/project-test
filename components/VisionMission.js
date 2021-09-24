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

  titleContent1: {
    fontWeight: 700,
    fontSize: 15,
    fontStyle: "normal",
    textTransform: "none",
    color: theme.palette.primary.main,
  },
  textContent: {
    fontWeight: 400,
    fontSize: 13,
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

function VisionMission() {
  const classes = useStyles();

  return (
    <Grid container spacing={2} className={classes.gridContainer}>
      <Grid item md={5} sm={5} xs={12}>
        <div className={classes.cardImg}>
          <img
            src="/vision.png"
            alt="rempah-rempah"
            style={{ width: 360, height: 360 }}
          />
        </div>
      </Grid>
      <Grid item md={5} sm={5} xs={12}>
        <div className={classes.cardText}>
          <Typography className={classes.titleContent}>
            Vision Mission
          </Typography>
          <br />
          <Typography className={classes.titleContent1} gutterBottom>
            Our Vision
          </Typography>
          <Typography className={classes.textContent} gutterBottom>
            Becoming number one preferred digital platform of international
            trades for Indonesia and the world.
          </Typography>
          <br />
          <Typography className={classes.titleContent1} gutterBottom>
            Our Mission
          </Typography>
          <Typography className={classes.textContent} gutterBottom>
            Empowering Indonesia’s MSME nationwide to go international,
            collaboration with all supporting function such as financial, supply
            chain and logistic, and expanding international network by building
            partnership with overseas well known digital platform.
          </Typography>
          <br />
          <Typography className={classes.titleContent1} gutterBottom>
            Value
          </Typography>
          <ol
            style={{ margin: "5px 0px", paddingLeft: 15 }}
            className={classes.textContent}
          >
            <li>Coffee</li>
            <li>Tea</li>
            <li>Coca Cola</li>
          </ol>
          <img
            src="/IndoMap.png"
            alt="rempah-rempah"
            style={{ width: 368, height: 122 }}
          />
        </div>
      </Grid>
    </Grid>
  );
}

export default VisionMission;
