import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";
import Typography from "@material-ui/core/Typography";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";

import {
  LOGO,
  SmileB,
  SmileW,
  PenB,
  PenW,
  PhoneB,
  PhoneW,
} from "public/assets/icon";
import AboutUs from "components/AboutUs";
import VisionMission from "components/VisionMission";
import Contact from "components/Contact";

const useStyles = makeStyles((theme) => ({
  root: {
    minHeight: "100vh",
    // maxHeight: "100vh",
    // overflow: "hidden",
    background: "url(/assets/Rectangle.svg)",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "-59px 0px",
    position: "relative",
  },
  wrapAppBar: {
    background: "transparent",
    boxShadow: "none",
  },
  wrapAppBarActive: {
    background: "#fff",
  },
  toolbar: {
    color: theme.palette.primary.main,
    paddingRight: 119,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
  },

  title: {
    flexGrow: 1,
    textTransform: "none",
  },
  button: {
    textTransform: "none",
    fontSize: 20,
    fontWeight: 400,
    fontStyle: "normal",
  },
  //side menu
  containerSideMenu: {
    position: "absolute",
    padding: "40px 51px",
    height: 480,
    width: 202,
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
    right: 0,
    top: 110,
    // transform: "translate(0%, -50%)",
    borderRadius: 20,
    background: "linear-gradient(90deg, #776FC41A, #776FC400)",
  },
  buttonSide: {
    width: 100,
    height: 100,
    boxShadow: "0px 12px 15px rgba(62, 46, 131, 0.2)",
    borderRadius: 20,
    backgroundColor: "#fff",
    "&:hover": {
      background: `${theme.palette.primary.main},50%`,
    },
    "&:focus": {
      background: theme.palette.primary.main,
    },
  },
  wrapperContentButton: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "column",
  },
  titleButtonSide: {
    fontWeight: 700,
    fontSize: 10,
    fontStyle: "normal",
    textTransform: "none",
    color: theme.palette.primary.main,
  },
  iconSide: {
    fill: "transparent",
    marginBottom: 12,
    fontSize: "2rem",
  },

  textFooter: {
    fontWeight: 400,
    fontSize: 12,
    fontStyle: "normal",
    textTransform: "none",
    color: theme.palette.secondary.main,
  },
}));

export default function Home(props) {
  const [sideButton, setSideButton] = React.useState("about");
  const [topScroll, setTopScroll] = React.useState(true);
  const classes = useStyles();
  const theme = useTheme();

  const changePages = (value) => {
    switch (value) {
      case "about":
        return <AboutUs />;
      case "vision":
        return <VisionMission />;
      case "contact":
        return <Contact />;
      default:
        break;
    }
  };

  React.useEffect(() => {
    window.onscroll = function () {
      if (window.pageYOffset === 0) {
        setTopScroll(true);
      } else {
        setTopScroll(false);
      }
    };
  }, [window.onscroll]);

  return (
    <div className={classes.root}>
      <AppBar
        className={topScroll ? classes.wrapAppBar : classes.wrapAppBarActive}
      >
        <Toolbar className={classes.toolbar}>
          <LOGO style={{ fontSize: "8rem", height: 32 }} />

          <Button className={classes.button} color="inherit">
            Resourceful Indonesia
          </Button>
        </Toolbar>
      </AppBar>

      {/* content */}
      <Container
        style={{
          padding: "110px 24px 60px 0px",
          height: "100%",
          marginLeft: 0,
        }}
      >
        {changePages(sideButton)}
      </Container>

      {/* side menu */}
      <div className={classes.containerSideMenu}>
        <Button
          onClick={() => setSideButton("about")}
          className={classes.buttonSide}
          style={{
            background: sideButton === "about" && theme.palette.primary.main,
          }}
        >
          <div className={classes.wrapperContentButton}>
            {sideButton === "about" ? (
              <SmileW className={classes.iconSide} />
            ) : (
              <SmileB className={classes.iconSide} />
            )}
            <Typography
              style={{ color: sideButton === "about" && "#fff" }}
              className={classes.titleButtonSide}
            >
              About Us
            </Typography>
          </div>
        </Button>
        <Button
          onClick={() => setSideButton("vision")}
          className={classes.buttonSide}
          style={{
            background: sideButton === "vision" && theme.palette.primary.main,
          }}
        >
          <div className={classes.wrapperContentButton}>
            {sideButton === "vision" ? (
              <PenW className={classes.iconSide} />
            ) : (
              <PenB className={classes.iconSide} />
            )}
            <Typography
              style={{ color: sideButton === "vision" && "#fff" }}
              className={classes.titleButtonSide}
            >
              About Us
            </Typography>
          </div>
        </Button>
        <Button
          onClick={() => setSideButton("contact")}
          className={classes.buttonSide}
          style={{
            background: sideButton === "contact" && theme.palette.primary.main,
          }}
        >
          <div className={classes.wrapperContentButton}>
            {sideButton === "contact" ? (
              <PhoneW className={classes.iconSide} />
            ) : (
              <PhoneB className={classes.iconSide} />
            )}
            <Typography
              style={{ color: sideButton === "contact" && "#fff" }}
              className={classes.titleButtonSide}
            >
              About Us
            </Typography>
          </div>
        </Button>
      </div>

      {/* footer */}
      <footer
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: "fixed",
          width: "100%",
          bottom: 0,
          height: 40,
          background: "#fff",
        }}
      >
        <Typography className={classes.textFooter}>
          Copyright 2021 62Trade.com PT. Enam Dua Niaga
        </Typography>
      </footer>
    </div>
  );
}
