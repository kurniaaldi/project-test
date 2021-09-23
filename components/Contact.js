import React from "react";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import ReCAPTCHA from "react-google-recaptcha";

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
  button: {
    textTransform: "none",
    background: "#776FC4",
    borderRadius: 30,
    color: "#fff",
    fontWeight: 700,
    fontSize: 14,
  },
}));

function Contact() {
  const classes = useStyles();

  return (
    <Grid container spacing={4}>
      <Grid item md={4}>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            borderRadius: 20,
            backgroundColor: "#fff",
            height: 460,
            width: 362,
            boxShadow: "1px 53px 61px -53px rgba(204, 209, 211, 1)",
          }}
        >
          <img
            src="/contact.png"
            alt="rempah-rempah"
            style={{ width: 360, height: 360 }}
          />
        </div>
      </Grid>
      <Grid item md={4}>
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "flex-start",
            flexDirection: "column",
            minHeight: 460,
            minWidth: 362,
          }}
        >
          <Typography className={classes.titleContent}>About Us</Typography>
          <br />

          <Typography className={classes.titleContent1} gutterBottom>
            Location
          </Typography>
          <Typography className={classes.textContent} gutterBottom>
            Sona Topas Tower,
            <br /> Jl. Jend. Sudirman No.Kav 26, RT.4/RW.2, Karet,
            <br /> Jakarta Selatan, 12920.
          </Typography>
          <br />
          <Typography className={classes.titleContent1} gutterBottom>
            Email
          </Typography>
          <Typography className={classes.textContent} gutterBottom>
            info@62trade.com
          </Typography>
          <TextField
            margin="dense"
            placeholder="Full name"
            variant="outlined"
            style={{ width: 300, borderRadius: 5 }}
          />
          <TextField
            margin="dense"
            placeholder="Email address"
            variant="outlined"
            style={{ width: 300, borderRadius: 5 }}
          />
          <TextField
            margin="dense"
            placeholder="Your message here"
            variant="outlined"
            multiline
            rows={4}
            style={{ width: 300, borderRadius: 5, marginBottom: 5 }}
          />
          <ReCAPTCHA
            sitekey="Your client site key"
            onChange={(e) => console.log(e)}
            style={{ margin: "10px 0px 20px" }}
          />
          <Button variant="contained" className={classes.button}>
            Send Message
          </Button>
        </div>
      </Grid>
    </Grid>
  );
}

export default Contact;
